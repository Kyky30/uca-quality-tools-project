import { test, expect } from "@playwright/test";

test.describe("Cycle de vie d'un article", () => {
    const newArticle = {
        title: "Mon premier article",
        content: "Ceci est le contenu de mon premier article",
        author: "John Doe"
    };

    const updatedArticle = {
        title: "Mon article modifié",
        content: "Ceci est le contenu modifié de mon article",
        author: "John Doe Updated"
    };

    test("devrait créer, vérifier et modifier un article", async ({ page }) => {
        // Aller à la page de création d'article
        await page.goto("/posts/new");
        
        // Remplir le formulaire de création
        await page.fill("#title", newArticle.title);
        await page.fill("#content", newArticle.content);
        await page.fill("#author", newArticle.author);
        
        // Soumettre le formulaire
        await page.click("button[type='submit']");
        
        // Vérifier qu'on est redirigé vers la liste des articles
        await expect(page).toHaveURL("/posts");
        
        // Vérifier que l'article apparaît dans la liste
        const articleTitle = page.locator(`h2:has-text("${newArticle.title}")`);
        const articleContent = page.locator(`p:has-text("${newArticle.content}")`);
        const articleAuthor = page.locator(`span.text-blue-600:has-text("${newArticle.author}")`);
        
        await expect(articleTitle).toBeVisible();
        await expect(articleContent).toBeVisible();
        await expect(articleAuthor).toBeVisible();
        
        // Cliquer sur le lien de modification
        await articleTitle.click();
        await page.click("text=Modifier l'article");
        
        // Modifier l'article
        await page.fill("#title", updatedArticle.title);
        await page.fill("#content", updatedArticle.content);
        await page.fill("#author", updatedArticle.author);
        
        // Soumettre les modifications
        await page.click("button[type='submit']");
        
        // Vérifier qu'on est redirigé vers la page de l'article
        await expect(page.locator("h1")).toHaveText(updatedArticle.title);
        await expect(page.locator("p.text-gray-600")).toHaveText(updatedArticle.content);
        await expect(page.locator("span.text-blue-600")).toHaveText(updatedArticle.author);

        // Retour à la liste des articles
        await page.click("text=← Retour aux articles");
        
        // Vérifier que l'article modifié apparaît dans la liste
        const updatedArticleTitle = page.locator(`h2:has-text("${updatedArticle.title}")`);
        const updatedArticleContent = page.locator(`p:has-text("${updatedArticle.content}")`);
        const updatedArticleAuthor = page.locator(`span.text-blue-600:has-text("${updatedArticle.author}")`);
        
        await expect(updatedArticleTitle).toBeVisible();
        await expect(updatedArticleContent).toBeVisible();
        await expect(updatedArticleAuthor).toBeVisible();
    });
}); 