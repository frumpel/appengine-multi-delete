function checkMultiDelete() {
  var checkboxes=document.getElementsByName("rp-multi-delete");
  var dialog_string="";
  var urls=new Array;
  var ii;
  var jj;
  var tt;
  var app_parms;
  var app_id;
  var app_version;

  for (ii=0; ii<checkboxes.length; ii++) {
    if (checkboxes[ii].checked) {
      // urls.push("https://appengine.google.com/deployment/deleteversion?app_id=s~smart-workspaces-dev&delete_version=" + checkboxes[ii].value);
      // urls.push(checkboxes[ii].url + "&rp-multi-delete=1");

      // paranoia ... 
      // app_parms=document.getElementsByName("rp-multi-delete")[0].value.split("?")[1].split("&");
      app_parms=checkboxes[ii].value.split("?")[1].split("&");
      app_id="";
      app_version="";
      for (jj=0; jj<app_parms.length; jj++) {
        tt=app_parms[jj].split("=");
        if (tt[0] == "app_id")         { app_id     =tt[1]; }
        if (tt[0] == "delete_version") { app_version=tt[1]; }
      }
      if ((app_version != "") && (app_id != "")) {
        dialog_string += app_version + "\n";
        urls.push("https://appengine.google.com/deployment/deleteversion?app_id=" + app_id + "&delete_version=" + app_version + "&rp-multi-delete=1");
        console.log(ii + " - " + urls);
      }
    }
  }
  if (confirm("Really delete these versions?\n" + dialog_string)) {
    for (ii=0; ii<urls.length; ii++) {
      console.log("Should open window for " + urls[ii]);
      // setTimeout(function(){window.open(urls[ii],"_blank" + ii);});
      win=window.open(urls[ii], "_blank_" + ii);
      // win.focus();
      this.focus();
    }
    // chrome.tabs.create({ url: urls });
    //chrome.tabs.create({ url: "http://google.com" });
  }
    
}
