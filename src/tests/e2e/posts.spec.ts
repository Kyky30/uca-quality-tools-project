import { test, expect } from "@playwright/test";

test.describe("Page liste des articles", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/posts");
    });

    test("devrait afficher le titre principal", async ({ page }) => {
        const title = await page.locator("h1");
        await expect(title).toBeVisible();
        await expect(title).toHaveText("Liste des articles");
    });

    test("devrait afficher le bouton 'Nouvel article'", async ({ page }) => {
        const newPostButton = await page.locator("a[href='/posts/new']");
        await expect(newPostButton).toBeVisible();
        await expect(newPostButton).toHaveText("Nouvel article");
    });

    test("devrait rediriger vers la page de création d'article", async ({ page }) => {
        const newPostButton = await page.locator("a[href='/posts/new']");
        await newPostButton.click();
        
        // Vérification de la redirection
        await expect(page).toHaveURL("/posts/new");
        
        // Vérification que nous sommes bien sur la page de création
        const createPostTitle = await page.locator("h1");
        await expect(createPostTitle).toHaveText("Créer un nouvel article");
    });

    test("devrait avoir un lien de retour vers l'accueil", async ({ page }) => {
        const homeLink = await page.locator("a[href='/']");
        await expect(homeLink).toBeVisible();
        await expect(homeLink).toHaveText("← Retour à l'accueil");
    });
});