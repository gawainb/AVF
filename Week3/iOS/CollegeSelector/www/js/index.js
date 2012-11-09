/* Gawain Bracy II
 */

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