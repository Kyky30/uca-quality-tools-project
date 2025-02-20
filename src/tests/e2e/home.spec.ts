import { test, expect } from "@playwright/test";

test.describe("Page d'accueil", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });

    test("devrait afficher le titre principal", async ({ page }) => {
        const title = await page.locator("h1");
        await expect(title).toBeVisible();
        await expect(title).toHaveText("Bienvenue sur Super Blog");
    });

    test("devrait afficher le sous-titre", async ({ page }) => {
        const subtitle = await page.locator("p.text-gray-600");
        await expect(subtitle).toBeVisible();
        await expect(subtitle).toHaveText("Découvrez nos articles passionnants");
    });

    test("devrait avoir un lien fonctionnel vers la liste des articles", async ({ page }) => {
        const link = await page.locator("a[href='/posts']");
        await expect(link).toBeVisible();
        await expect(link).toHaveText("Voir la liste des articles");
        
        await link.click();
        await expect(page).toHaveURL("/posts");
    });
}); 