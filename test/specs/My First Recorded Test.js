describe("My First Recorded Test", () => {
  it("tests My First Recorded Test", async () => {
    await browser.setWindowSize(742, 629)
    await browser.url("https://the-internet.herokuapp.com/login")
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/login")
    await browser.$("#username").click()
    await browser.$("#username").setValue("tomsmith")
    await browser.$("#password").click()
    await browser.$("#password").setValue("SuperSecretPassword!")
    await browser.$("//*[@id=\"login\"]/button/i").click()
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/secure")
    // await browser.$("aria/Logout").click()
    // await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/login")

  });
});
