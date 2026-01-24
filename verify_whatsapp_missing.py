import asyncio
from playwright.async_api import async_playwright
import os

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        urls = [
            'http://localhost:4321/imobiliare',
            'http://localhost:4321/facultati',
            'http://localhost:4321/facultati/it-poli-buc',
            'http://localhost:4321/carbon',
            'http://localhost:4321/carbon/padure-foioase',
            'http://localhost:4321/finantari',
            'http://localhost:4321/ajutoare-sociale'
        ]

        os.makedirs('/home/jules/verification/whatsapp', exist_ok=True)

        for url in urls:
            filename = url.split('/')[-1] or url.split('/')[-2]
            if filename == 'facultati' and 'it-poli-buc' in url: filename = 'facultati-it'
            if filename == 'carbon' and 'padure-foioase' in url: filename = 'carbon-padure'

            print(f"Checking {url}...")
            await page.goto(url)
            await asyncio.sleep(2) # Wait for JS to run

            # Check if whatsappBtn exists
            btn = page.locator('#whatsappBtn')
            if await btn.count() > 0:
                href = await btn.get_attribute('href')
                print(f"  SUCCESS: #whatsappBtn found on {url} with href: {href[:50]}...")
            else:
                print(f"  FAILED: #whatsappBtn NOT found on {url}")

            # Check if whatsappBtnFloating exists (mobile)
            # We need to set viewport to mobile
            await page.set_viewport_size({"width": 375, "height": 667})
            btn_floating = page.locator('#whatsappBtnFloating')
            if await btn_floating.count() > 0:
                 print(f"  SUCCESS: #whatsappBtnFloating found on {url}")
            else:
                 print(f"  FAILED: #whatsappBtnFloating NOT found on {url}")

            await page.screenshot(path=f"/home/jules/verification/whatsapp/{filename}.png")
            await page.set_viewport_size({"width": 1280, "height": 800}) # Reset

        await browser.close()

if __name__ == "__main__":
    import subprocess
    import time

    server = subprocess.Popen(["npm", "run", "dev"], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    time.sleep(15)

    try:
        asyncio.run(run())
    finally:
        server.terminate()
