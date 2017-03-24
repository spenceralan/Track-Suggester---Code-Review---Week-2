$(function() {


  $("#startButton").click(function() {
    $("#startQuiz").hide();
    $("#questions").show();
    $("#question1").show();
  });

  $("#overButton").click(function() {
    $("#results").hide();
    $("#questions").show();
    $("#question1").show();
  });

  $("#nextButton1").click(function() {
    $("#question1").hide();
    $("#question2").show();
  });

  $("#nextButton2").click(function() {
    $("#question2").hide();
    $("#question3").show();
  });

  $("#backButton1").click(function() {
    $("#question2").hide();
    $("#question1").show();
  });

  $("#backButton2").click(function() {
    $("#question3").hide();
    $("#question2").show();
  });

  $("#submitButton").click(function() {
    $("#question3").hide();
    $("#questions").hide();
    $("#results").show();
  });


});
