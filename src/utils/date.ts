export function formatDate(date: Date, locale: "en" | "zh" = "en"): string {
  if (locale === "zh") {
    return date.toLocaleDateString("zh-TW", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "Asia/Taipei",
    });
  }
  // English default — academic-friendly long form.
  return date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Taipei",
  });
}
