import { test } from '@playwright/test';

// Test command line 

// updated after the pull request accpeted & merged

test("Google", async({page})=>{

 await page.goto("https://www.google.com/")

 await page.locator(".gLFyf").first().type("Selenium")
 await page.waitForTimeout(3000)
 await page.locator(".gLFyf").first().fill("Playwright")
 await page.waitForTimeout(3000)

})
