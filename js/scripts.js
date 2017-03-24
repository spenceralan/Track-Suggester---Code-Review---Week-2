$(function() {

  var startEndButtons = function(clickedButton, hide1, show1, show2) {
    $(clickedButton).click(function() {
      $("#heading").show();
      $(hide1).hide();
      $(show1).show();
      $(show2).show();
    });
  };

  startEndButtons("#startButton", "#startQuiz", "#questions", "#question1");
  startEndButtons("#overButton", "#results", "#questions", "#question1");

  var nextBackButtons = function(clickedButton, hide, show) {
    $(clickedButton).click(function() {
      $(hide).hide();
      $(show).show();
    });
  };

  nextBackButtons("#nextButton1", "#question1", "#question2");
  nextBackButtons("#nextButton2", "#question2", "#question3");
  nextBackButtons("#backButton1", "#question2", "#question1");
  nextBackButtons("#backButton2", "#question3", "#question2");

  var submitButtons = function(clickedButton, hide1, hide2, show1) {
    $(clickedButton).click(function() {
      $(hide1).hide();
      $(hide2).hide();
      $(show1).show();
    });
  };

  submitButtons("#submitButton", "#question3", "#questions", "#results");

  var resetResults = function() {
    $("#resultNaN").hide();
    $("#result1").hide();
    $("#result2").hide();
    $("#result3").hide();
  };

  $("#submitButton").click(function() {
    var value1 = parseInt($("input[name=question1]:checked").val());
    var value2 = parseInt($("input[name=question2]:checked").val());
    var value3 = parseInt($("input[name=question3]:checked").val());

    var resultValue = value1 + value2 + value3;

    $("#heading").hide();

    if (resultValue > 6) {
      resetResults();
      $("#result1").show();
    } else if (resultValue > 3) {
      resetResults();
      $("#result2").show();
    } else if (resultValue > 0) {
      resetResults();
      $("#result3").show();
    } else {
      resetResults();
      $("#resultNaN").show();
    };
  });

});
