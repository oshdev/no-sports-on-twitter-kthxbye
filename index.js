chrome.tabs.query({
    currentWindow: true,
    // status: 'complete', // for some reason this one is not working as expected
    url: 'https://twitter.com/*'
}, function (tabs) {
    for (const {id} of tabs) {
        chrome.tabs.onUpdated.addListener(() =>
            chrome.tabs.executeScript(
                id,
                {file: "scan-for-spans-with-text.js"}
            )
        )
    }
});
