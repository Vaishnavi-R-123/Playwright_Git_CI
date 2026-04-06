import test from '@playwright/test'


test("google search", async({page})=>{

await page.goto("https://google.com")

const searchbox= page.getByRole('combobox',{name:'search'})
await searchbox.fill("playwright")
await searchbox.press('Enter')


})