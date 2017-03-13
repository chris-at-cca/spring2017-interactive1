function myFunction (tab) {
  // When we get a result back from the getBgColors
  // method, alert the data

  chrome.tabs.executeScript(null, { file: "jquery-3.1.0.min.js" }, function() {
    chrome.tabs.executeScript(null, { file: "script.js" });
  });

}

// When the browser action is clicked, call the
// getBgColors function.
chrome.browserAction.onClicked.addListener(myFunction);