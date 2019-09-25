var windowObjectReference;
var strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";

function openRequestedPopup() {
  windowObjectReference = window.open("http://www.foxnews.com/", "FOX_WindowName", strWindowFeatures);
}