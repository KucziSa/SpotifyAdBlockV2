chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
      // Code to be executed on first install
      // eg. open a tab with a url
      chrome.tabs.create({
        url: "https://instagram.com/hipolitplatek"
      });
      chrome.tabs.create({
        url: "https://chrome.google.com/webstore/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg?hl=en"
      });
      alert("Special!");
    } else if (details.reason === chrome.runtime.OnInstalledReason.UPDATE) {
      // When extension is updated
    } else if (details.reason === chrome.runtime.OnInstalledReason.CHROME_UPDATE) {
      // When browser is updated
    } else if (details.reason === chrome.runtime.OnInstalledReason.SHARED_MODULE_UPDATE) {
      // When a shared module is updated

    }
  });