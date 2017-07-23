//JAVASCRIPT 

$(document).ready(function() {
	$("container-fluid ").fadeIn(2000);
  $(".no").hide();
  $(".btn").click(function() {
  	$(".no").slideToggle(400);
  	$(".btn").text("VIEWED");
  });
});
