
  var button;
  var getargs;

  getargs=window.location.search.substr(1).split("&");
  for (ii=0; ii<getargs.length; ii++) {
    if (getargs[ii]=="rp-multi-delete=1") {
      button = document.getElementsByClassName('goog-button')[0];
      button.value="Confirming";
      button.click();
      button.value="Autoconfirmed by rp-multi-delete";
      // if we do this immediately then the action isn't completed ... so skip this and get user to clean up
      // window.close();
    }
  }

