appengine-multi-delete
======================

Chrome plugin to allow deleting more than one appengine version at a time.

This is a HACK. It will likely stop working on the slightest UI change 
google makes to the appengine API! It works for me but I suggest you check
all code first before using this against your production environment!

Installation
------------

This is a chrome extension, so download this into a local directory, enable
developer mode in chrome, load this as an "unpacked extension", browse to
the versions page of your appengine application ...

Usage
-----

On the versions page you should now see new checkboxes and a new button to
delete selected versions (the ones with clicked checkboxes). If you click
the button it will pop up a confirmation dialog and then proceed to open
each delete page and click its confirmation button.

