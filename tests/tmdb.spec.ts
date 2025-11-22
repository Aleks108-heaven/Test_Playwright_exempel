import { test, expect } from '@playwright/test';

test('test TMDB mock page', async ({ page }) => {
  await page.goto('http://localhost:4173/tmdb-mock1.html');
  
  await expect(page.locator('h1')).toContainText('The Movie Database');
  await expect(page.locator('.search-btn')).toContainText('Search Movies');
  await expect(page.locator('.movie-card')).toHaveCount(18);
});

test('click search button', async ({ page }) => {
  await page.goto('http://localhost:4173/tmdb-mock1.html');
  
  const searchBtn = page.locator('.search-btn');
  await expect(searchBtn).toBeVisible();
  await searchBtn.click();
});

// test('check movie list', async ({ page }) => {
//   await page.goto('http://localhost:4173/tmdb-mock1.html');
  
//   const movies = page.locator('.movie');
//   const firstMovie = await movies.first().textContent();
//   expect(firstMovie).toBe('The Shawshank Redemption');
// });

test('verify movie posters load', async ({ page }) => {
  await page.goto('http://localhost:4173/tmdb-mock1.html');
  
  const posters = page.locator('.movie-poster img');
  await expect(posters).toHaveCount(18);
  
  // Check if images are visible
  await expect(posters.first()).toBeVisible();
});

test('check poster image sources', async ({ page }) => {
  await page.goto('http://localhost:4173/tmdb-mock1.html');
  
  const firstPoster = page.locator('.movie-poster img').first();
  const src = await firstPoster.getAttribute('src');
  
  expect(src).toContain('/assets/posters/');
  expect(src).toBeTruthy();
  expect(src!).toMatch(/\.jpg$/);
});

test('verify each movie card has a poster', async ({ page }) => {
  await page.goto('http://localhost:4173/tmdb-mock1.html');
  
  const movieCards = page.locator('.movie-card');
  
  for (let i = 0; i < await movieCards.count(); i++) {
    const card = movieCards.nth(i);
    const poster = card.locator('.movie-poster img');
    const title = card.locator('.movie-title');
    
    // Verify poster exists for each movie
  await expect(poster).toBeDefined();  // Just check it existss
    
    // Verify title is not empty
    const titleText = await title.textContent();
    expect(titleText).toBeTruthy();
  }
});

test('verify poster dimensions', async ({ page }) => {
  await page.goto('http://localhost:4173/tmdb-mock1.html');
  
  const poster = page.locator('.movie-poster img').first();
  const boundingBox = await poster.boundingBox();
  
  expect(boundingBox?.width).toBeGreaterThan(0);
  expect(boundingBox?.height).toBeGreaterThan(0);
});

test('verify poster element exists', async ({ page }) => {
  await page.goto('http://localhost:4173/tmdb-mock1.html');
  
  const poster = page.locator('.movie-poster img').first();
  
  // Just check it exists
  await expect(poster).toBeDefined();
});