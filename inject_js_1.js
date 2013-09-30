var wins=new Array;

function checkMultiDelete() {
  var checkboxes=document.getElementsByName("rp-multi-delete");
  var dialog_string="";
  var dialog_count=0;
  var urls=new Array;
  var ii;
  var jj;
  var tt;
  var app_parms;
  var app_id;
  var app_version;
  var win;

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
        dialog_count++;
        dialog_string += app_version + "\n";
        urls.push("https://appengine.google.com/deployment/deleteversion?app_id=" + app_id + "&delete_version=" + app_version + "&rp-multi-delete=1");
        console.log(ii + " - " + urls);
      }
    }
  }
  if (confirm("Really delete these " + dialog_count + " versions?\n" + dialog_string)) {


    function openAndDelete(index,url) {
      var odwin;
      console.log("Should open window (" + index + ") for " + url);
      odwin=window.open(url, "_blank_" + index);
      console.log('... window: ' + odwin);
      setTimeout(function() {
          console.log("trying to close window (" + index + ") for " + url);
          console.log(odwin);
          odwin.close(); 
        },10000);
    }

    function deleteLoop() {
      console.log(ii + " < " + urls.lenght);
      if (ii < urls.length) {
        openAndDelete(ii,urls[ii]);  
        setTimeout(function() { deleteLoop(); },5000);
        ii++;
      } else {
        console.log("Done");
      }
      win.focus();
    }

    ii=0;
    win=this;
    deleteLoop();
    // chrome.tabs.create({ url: urls });
    //chrome.tabs.create({ url: "http://google.com" });
  }
    
}
