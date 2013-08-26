  // We need to inject a script into the page
  var s = document.createElement('script');
  s.src = chrome.extension.getURL("inject_js_1.js");
  s.onload = function() {
    this.parentNode.removeChild(this);
  };
  (document.head||document.documentElement).appendChild(s);

  // We can walk the table ... but that's not very resilient ... ah well

  var version_table=document.getElementsByClassName("ae-table ae-table-striped")[0];

  var ii;
  var jj;
  var newCell;
  var link;
  var text;
  var url;
  var version;


  for (ii=0; ii<version_table.rows.length; ii++) {

    console.log(ii);

    // no matter where we are, create a new row
    newCell=version_table.rows[ii].insertCell(-1);

    // if we have less than 6 columns, then we are likely in the last row ...
    if (version_table.rows[ii].cells.length < 6) {

      // this would trigger a version change so don't do that
      // newCell.innerHTML="<input type=\"submit\" value=\"Delete Selected\" class=\"goog-button\">";

      // NOTE: the checkMultiDelete JS is injected via another file!
      newCell.innerHTML='<a href="" class="goog-button" onClick="checkMultiDelete(); return false;">Delete Selected</a>';

    } else {
      link    = version_table.rows[ii].cells[4].getElementsByClassName('goog-button')[0];

      if (typeof link !== "undefined") {
        text    = link.innerText;
        url     = link.href;
        version = url.split("=")[2];

        console.log(ii + " - " + version_table.rows[ii].cells.length + " - " + version)

        newCell.innerHTML="<input type=checkbox name=\"rp-multi-delete\" value=\"" + url +  "\">";
      }
    }
  }


