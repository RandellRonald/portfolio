import { chromium } from '@playwright/test';
const browser=await chromium.launch({channel:'msedge',headless:true});
const page=await browser.newPage();
for(const [name,width,height] of [['desktop',1440,1000],['comment-size',910,698],['mobile',390,844]]){
 await page.setViewportSize({width,height});
 await page.goto('http://127.0.0.1:5173/',{waitUntil:'networkidle'});
 await page.locator('.portrait-image img').evaluate(i=>i.decode());
 await page.locator('#home').screenshot({path:`portrait-${name}.png`});
 console.log(name,await page.locator('.portrait-image img').evaluate(i=>({loaded:i.naturalWidth>0,clip:getComputedStyle(i).clipPath,mask:getComputedStyle(i.parentElement).maskImage,overflow:document.documentElement.scrollWidth>innerWidth})));
}
await browser.close();
