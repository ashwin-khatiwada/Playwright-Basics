import { usernameInput, passwordInput, loginButton } from '../locators/LoginPageLocators.js';

export class LoginPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator(usernameInput);
        this.passwordInput = page.locator(passwordInput);
        this.loginButton = page.locator(loginButton);
    }

    async goto() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}
