$(function() {

  var startEndButtons = function(clickedButton, hide1, show1, show2) {
    $(clickedButton).click(function() {
      $(hide1).hide();
      $(show1).show();
      $(show2).show();
    });
  };

  startEndButtons("#startButton", "#startQuiz", "#questions", "#question1");
  startEndButtons("#overButton", "#results", "#questions", "#question1");

  var nextButtons = function(clickedButton, hide, show) {
    $(clickedButton).click(function() {
      $(hide).hide();
      $(show).show();
    });
  };

  nextButtons("#nextButton1", "#question1", "#question2");
  nextButtons("#nextButton2", "#question2", "#question3");
  nextButtons("#backButton1", "#question2", "#question1");
  nextButtons("#backButton2", "#question3", "#question2");

  var submitButtons = function(clickedButton, hide1, hide2, show1) {
    $(clickedButton).click(function() {
      $(hide1).hide();
      $(hide2).hide();
      $(show1).show();
    });
  };

  submitButtons("#submitButton", "#question3", "#questions", "#results");

});
