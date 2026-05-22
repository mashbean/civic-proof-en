import { getCollection } from "astro:content";

export async function getPublishedReports() {
  const all = await getCollection("reports");
  return all
    .filter((r) => !r.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getPublishedReportsZh() {
  const all = await getCollection("reportsZh");
  return all
    .filter((r) => !r.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

