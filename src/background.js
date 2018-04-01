//Your background code here
/* eslint-env webextensions */


function openCreatorPage() {
    browser.tabs.create({ url: browser.extension.getURL("/creator.html"), active: true });
}

browser.browserAction.onClicked.addListener(openCreatorPage);