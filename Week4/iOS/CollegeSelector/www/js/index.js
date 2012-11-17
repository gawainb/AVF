/* Gawain Bracy II
 */

// PhoneGap Index.js
var app = {
initialize: function() {
    this.bind();
},
bind: function() {
    document.addEventListener('deviceready', this.deviceready, false);
},
deviceready: function() {
    // note that this is an event handler so the scope is that of the event
    // so we need to call app.report(), and not this.report()
    app.report('deviceready');
},
report: function(id) {
    console.log("report:" + id);
    // hide the .pending <p> and show the .complete <p>
    document.querySelector('#' + id + ' .pending').className += ' hide';
    var completeElem = document.querySelector('#' + id + ' .complete');
    completeElem.className = completeElem.className.split('hide').join('');
}};

$(document).ready(function()
                  {
                  //HOME PAGE
                  $('#home').live('pageshow', function(){console.log("Home Page Loaded");}); //end contact pageinit
                  
                  //ADD HEADER
                  $('#header').empty();
                  $(function()
                    {$('#header').append('<center><h1><a href="index.html" data-ajax="false">AVF Launch Page</a></h1></center>');});
                  console.log("Header Loaded");
                  
                  //ADD FOOTER
                  $('#footer').empty();
                  $(function()
                    {$('#footer').append('<small>Gawain Bracy II : AVF1210</small>');});
                  console.log("Footer Loaded");
                  });