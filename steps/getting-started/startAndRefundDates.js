import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";


Given('user is on the enrollment page', async function () {
    await startApplicationPage.login();
});

Then('the program start date is displayed', async function () {
    await expect(startApplicationPage.programStartDate).toBeVisible();
});

Then('the program refund date is displayed', async function () {
    await expect(startApplicationPage.refundEndDate).toBeVisible();
});

Then('the displayed start date for the program is correct', async function () {
    const actualStartDate = await startApplicationPage.programStartDate.innerText();
    const expectedStartDate = productInfo.startDate;
    // console.log(`\nActual start date: ${actualStartDate}`);      // debugging print
    // console.log(`Expected start date: ${expectedStartDate}`);  // debugging print
    // console.log(`\nExpected Upfront Price: ${productInfo.prices[0].baseAmount}`);
    // console.log(`Expected upfront discount: ${productInfo.prices[0].upfrontDiscountAmount}`);
    // console.log(`Number of installments: ${productInfo.prices[1].numberOfInstallments}`);
    expect(actualStartDate).toBe(expectedStartDate);
});

Then('the displayed refund date for the program is correct', async function () {
    const actualRefundDate = await startApplicationPage.refundEndDate.innerText();
    const expectedRefundDate = productInfo.refundDate;
    // console.log(`\nActual refund date: ${actualRefundDate}`);    // debugging print
    // console.log(`Expected refund date: ${expectedRefundDate}`); // debugging print
    expect(actualRefundDate).toBe(expectedRefundDate);
});