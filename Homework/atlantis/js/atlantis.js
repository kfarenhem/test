$(document).ready( function(){


$("#_hide").click(function(){
    $(".movingImage").hide();
  });

$("#_show").click(function(){
    $(".movingImage").show();
  });

$("#_html").mouseover(function() {
    $("h2").html("Paradise Island, Bahamas");
  });

$("#_css").mouseleave(function(){
  $(".gridOne ").css("color", "black");
});

$("#_css").mouseleave(function(){
  $(".gridTwo ").css("color", "black");
});




});
