
  var button;
  var getargs;

  getargs=window.location.search.substr(1).split("&");
  for (ii=0; ii<getargs.length; ii++) {
    if (getargs[ii]=="rp-multi-delete=1") {

      // Change the name of the submit button so we know the script
      // executed and clicked the button
      button = document.getElementsByClassName('goog-button')[0];
      button.value="Confirming";
      button.click();
      button.value="Autoconfirmed by rp-multi-delete";

      // Once we cliced the button we will either get an error or a 302 to
      // the version page. Either way we want to close the window. Do so
      // after a sensible timeout
      setTimeout(function() { window.close(); },5000);
    }
  }

