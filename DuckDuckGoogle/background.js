browser.browserAction.onClicked.addListener((tab) => {
  if (!tab.url.includes("duckduckgo.com/")) return;

  const url = new URL(tab.url);
  const q = url.searchParams.get("q");

  if (q) {
    const google = "https://www.google.com/search?q=" + encodeURIComponent(q);
    browser.tabs.update(tab.id, { url: google });
  }
});
