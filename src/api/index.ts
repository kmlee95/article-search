export const API_KEY = process.env.REACT_APP_API;

export const getAllArticles = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=${API_KEY}`;
