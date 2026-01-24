import * as fastXmlParser from 'fast-xml-parser';
const { XMLParser } = fastXmlParser;

// Simple in-memory cache
let cachedData = null;
let lastFetchTime = 0;
const CACHE_DURATION = 12 * 60 * 60 * 1000; // 12 hours in milliseconds

const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

export async function getCentralData() {
    const now = Date.now();

    if (cachedData && (now - lastFetchTime < CACHE_DURATION)) {
        return cachedData;
    }

    const fallbacks = {
        bnr: { eur: 5.0943, gold: 687.75 },
        fuel: { gasoline: 7.15, diesel: 7.25 }
    };

    let result = {
        bnr: { ...fallbacks.bnr },
        fuel: { ...fallbacks.fuel },
        updated: new Date().toLocaleString('ro-RO'),
        isLive: false
    };

    // --- BNR DATA (XML) ---
    const bnrController = new AbortController();
    const bnrTimeout = setTimeout(() => bnrController.abort(), 2000);
    try {
        const bnrResponse = await fetch('https://www.bnr.ro/nbrfxrates.xml', {
            signal: bnrController.signal,
            headers: { 'User-Agent': USER_AGENT }
        });
        if (bnrResponse.ok) {
            const bnrXml = await bnrResponse.text();
            const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: "" });
            const jsonObj = parser.parse(bnrXml);
            const rates = jsonObj?.DataSet?.Body?.Cube?.Rate;

            if (Array.isArray(rates)) {
                const eurEntry = rates.find(r => r.currency === 'EUR');
                const goldEntry = rates.find(r => r.currency === 'XAU');
                if (eurEntry) result.bnr.eur = parseFloat(eurEntry['#text']) || fallbacks.bnr.eur;
                if (goldEntry) result.bnr.gold = parseFloat(goldEntry['#text']) || fallbacks.bnr.gold;
                result.isLive = true;
            } else if (rates && rates.currency) {
                if (rates.currency === 'EUR') result.bnr.eur = parseFloat(rates['#text']) || fallbacks.bnr.eur;
                if (rates.currency === 'XAU') result.bnr.gold = parseFloat(rates['#text']) || fallbacks.bnr.gold;
                result.isLive = true;
            }
        }
    } catch (e) {
        console.error("BNR Fetch failed, using fallback:", e.message);
    } finally {
        clearTimeout(bnrTimeout);
    }

    // --- FUEL DATA (SCRAPING) ---
    const fuelController = new AbortController();
    const fuelTimeout = setTimeout(() => fuelController.abort(), 2000);
    try {
        const fuelResponse = await fetch('https://www.peco-online.ro/istoric.php', {
            signal: fuelController.signal,
            headers: { 'User-Agent': USER_AGENT }
        });
        if (fuelResponse.ok) {
            const fuelHtml = await fuelResponse.text();
            // Match the first row of the table for 2026 or 2025
            const fuelRegex = /202[4-6]\s+([\d.]+)\s+([\d.]+)/;
            const fuelMatch = fuelHtml.match(fuelRegex);
            if (fuelMatch) {
                result.fuel.gasoline = parseFloat(fuelMatch[1]) || fallbacks.fuel.gasoline;
                result.fuel.diesel = parseFloat(fuelMatch[2]) || fallbacks.fuel.diesel;
                result.isLive = true;
            }
        }
    } catch (e) {
        console.error("Fuel Scraping failed, using fallback:", e.message);
    } finally {
        clearTimeout(fuelTimeout);
    }

    // Update cache only if we got at least some live data
    if (result.isLive) {
        cachedData = result;
        lastFetchTime = now;
    }

    return result;
}
