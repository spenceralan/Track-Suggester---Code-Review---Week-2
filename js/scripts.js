$(function() {
  $("#questions").hide();
  $("#results").hide();
  $("#startQuiz").show();

  $("#startButton").click(function() {
    $("#startQuiz").hide();
    $("#questions").show();
  });

  
});
