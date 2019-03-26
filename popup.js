var color;

document.addEventListener('DOMConentLoaded',function() {
    var color;
    color = x;
});


function changeBackgroundColor(color) {

    var script = 'document.body.style.backgroundColor="' + color + '";';

    chrome.tabs.executeScript({
      code: script
    });
  }