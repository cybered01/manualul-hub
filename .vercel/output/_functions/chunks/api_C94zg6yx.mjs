import { XMLParser } from 'fast-xml-parser';

// Simple in-memory cache
let cachedData = null;
let lastFetchTime = 0;
const CACHE_DURATION = 12 * 60 * 60 * 1000; // 12 hours in milliseconds

async function getCentralData() {
    const now = Date.now();

    if (cachedData && (now - lastFetchTime < CACHE_DURATION)) {
        return cachedData;
    }

    const fallbacks = {
        bnr: { eur: 5.0943, gold: 687.75 },
        fuel: { gasoline: 7.65, diesel: 7.84 }
    };

    let result = {
        bnr: { ...fallbacks.bnr },
        fuel: { ...fallbacks.fuel },
        updated: new Date().toLocaleString('ro-RO'),
        isLive: false
    };

    try {
        // Fetch BNR Rates
        try {
            const bnrResponse = await fetch('https://www.bnr.ro/nbrfxrates.xml');
            if (bnrResponse.ok) {
                const bnrXml = await bnrResponse.text();
                const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: "" });
                const jsonObj = parser.parse(bnrXml);

                const rates = jsonObj.DataSet.Body.Cube.Rate;
                const eurEntry = rates.find(r => r.currency === 'EUR');
                const goldEntry = rates.find(r => r.currency === 'XAU');

                if (eurEntry) result.bnr.eur = parseFloat(eurEntry['#text']) || fallbacks.bnr.eur;
                if (goldEntry) result.bnr.gold = parseFloat(goldEntry['#text']) || fallbacks.bnr.gold;
                result.isLive = true;
            }
        } catch (e) {
            console.error("Error fetching BNR data:", e);
        }

        // Fetch Fuel Prices (Scraping)
        try {
            const fuelResponse = await fetch('https://www.peco-online.ro/istoric.php');
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
            console.error("Error fetching fuel data:", e);
        }

        // Update cache if we got at least some live data
        if (result.isLive) {
            cachedData = result;
            lastFetchTime = now;
        }

        return result;
    } catch (globalError) {
        console.error("Global error in getCentralData:", globalError);
        return {
            ...fallbacks,
            updated: new Date().toLocaleString('ro-RO'),
            isLive: false,
            error: true
        };
    }
}

export { getCentralData as g };
