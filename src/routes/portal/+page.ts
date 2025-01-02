import type { LoadEvent } from "@sveltejs/kit";

export const prerender = false;

/* This line has been added to turn off
server-side rendering for the search page */
export const ssr = false;

export async function load({ url }: LoadEvent) {
  const searchQuery = url.searchParams.get("q")?.trim();
  if (!searchQuery || searchQuery.length < 1) return { results: [] };

  // @ts-ignore
  const pagefind = await import("/_pagefind/pagefind.js");
  const search = await pagefind.search(searchQuery);
  const results = await Promise.all(search.results.map(r => r.data()));
  return { results: results };
}