$(function() {

  var endButton = function(clickedButton, hide1, hide2, show1, show2) {
    $(clickedButton).click(function() {
      $("#heading").show();
      $(hide1).hide();
      $(hide2).hide();
      $(show1).show();
      $(show2).show();
    });
  };

  endButton("#overButton", "#results", "#question5", "#questions", "#question1");

  var nextBackButtons = function(clickedButton, hide, show) {
    $(clickedButton).click(function() {
      $(hide).hide();
      $(show).show();
    });
  };

  nextBackButtons("#nextButton1", "#question1", "#question2");
  nextBackButtons("#nextButton2", "#question2", "#question3");
  nextBackButtons("#nextButton3", "#question3", "#question4");
  nextBackButtons("#nextButton4", "#question4", "#question5");
  nextBackButtons("#backButton1", "#question2", "#question1");
  nextBackButtons("#backButton2", "#question3", "#question2");
  nextBackButtons("#backButton3", "#question4", "#question3");
  nextBackButtons("#backButton4", "#question5", "#question4");

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

  $("#startButton").click(function() {
    var userName = $("#userName").val();
    var userEmail = $("#userEmail").val();

    // email regex from http://emailregex.com/

    if (userName === "" || userEmail === "") {
      $(".warnMessage").text("Please make sure all fields are filled out.");
      $("#warning").show();
    } else if (userEmail.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      $("#warning").hide();
      $("#heading").show();
      $("#startQuiz").hide();
      $("#questions").show();
      $("#question1").show();
    } else {
      $(".warnMessage").text("Please make sure to use a valid email.");
      $("#warning").show();
    };
  });

  $("#submitButton").click(function() {
    var userName = $("#userName").val();
    var value1 = parseInt($("input[name=question1]:checked").val());
    var value2 = parseInt($("input[name=question2]:checked").val());
    var value3 = parseInt($("input[name=question3]:checked").val());

    var resultValue = value1 + value2 + value3;

    $("#heading").hide();

    if (resultValue > 9) {
      resetResults();
      $(".resultString").text(`Hey ${userName}! You should take the Ruby/Rails track!`);
      $("#result1").show();
    } else if (resultValue > 5) {
      resetResults();
      $(".resultString").text(`Hey ${userName}! You should take the Java/Android track!`)
      $("#result2").show();
    } else if (resultValue > 0) {
      resetResults();
      $(".resultString").text(`Hey ${userName}! You should take the PHP/Drupal track!`);
      $("#result3").show();
    } else {
      resetResults();
      $(".resultString").text(`Hey ${userName}! You probably shouldn't code!`);
      $("#resultNaN").show();
    };
  });

});
