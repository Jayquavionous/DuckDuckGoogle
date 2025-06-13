browser.browserAction.onClicked.addListener((tab) => {
  if (!tab.url.includes("duckduckgo.com/")) return;

  const url = new URL(tab.url);
  const query = url.searchParams.get("q");

  if (query) {
    const google = "https://www.google.com/search?q=" + encodeURIComponent(query);
    browser.tabs.update(tab.id, { url: google });
  }
});
