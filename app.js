var is_win;
$(document).ready(function () {
  $(".boundary").hover(
    function () {
      $(".boundary").each(function (index) {
        $(this).addClass("red_bg");
      });
      $("h2").text("You lose");
      if (is_win != true) is_win = false;
    }
  );
  $("#start").click(function () {
    $(".boundary").each(function (index) {
      $(this).removeClass("red_bg");
    });
    is_win = null;
    $("h2").text("You playing");
  });
  $("#end").hover(function () {
    if (is_win != false) $("h2").text("You win");
  });
  $("#maze")
    .parent()
    .each(function (index) {
      $(".boundary").each(function (index) {
        $(this).addClass("red_bg");
      });
      $("h2").text("You lose");
      if (is_win != true) is_win = false;
    });
});
