'use strict';
// For Navigation bar scrolling
$(document).ready(()=>{
  $(".jumper").on("click", ( event)=> {
    event.preventDefault();
    $("body, html").animate({ 
      scrollTop: $( $(event.target).attr('href') ).offset().top 
    }, 600);
  });
  
  $('#shareBtn').click(()=>{
    let facebook = 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse';
    window.open(facebook,'popUpWindow','height=400,width=600,left=10,top=10,,scrollbars=yes,menubar=no');
    return false;
  });
});
