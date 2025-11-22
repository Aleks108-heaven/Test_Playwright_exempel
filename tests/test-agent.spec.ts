import { test, expect } from '@playwright/test'

test ('test local app', async ({ page }) => {
    await page.goto('http://localhost:4173/tmdb-mock1.html');
    await expect(page.getByRole('heading', { name: 'The Movie Database' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Search Movies' })).toBeVisible();
    await expect(page.getByText('Inception')).toBeVisible();
});

// test ('test external site', async ({ page}) => {
//     await page.goto('https://www.themoviedb.org/')
// });
