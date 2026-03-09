import test from '@playwright/test'

test('Dropdown Handle', async ({ page }) => {

    await page.goto("https://www.telerik.com/contact")

    await page.selectOption("[name='DropdownListFieldController_0']", {label: 'Renewal'})
    await page.waitForTimeout(3000)

    await page.selectOption("[name='DropdownListFieldController_0']", {index: 2})
    await page.waitForTimeout(3000)

    await page.selectOption("[name='DropdownListFieldController_0']", {value: 'Account activation'})
    await page.waitForTimeout(3000)

    await page.selectOption("[name='DynamicListFieldController']", {index: 1})
    await page.waitForTimeout(3000)

    await page.selectOption("[name='DynamicListFieldController']", {value: 'India'})
    await page.waitForTimeout(3000)

    await page.selectOption("[name='DynamicListFieldController']", {label: 'Monaco'})
    await page.waitForTimeout(3000)
})