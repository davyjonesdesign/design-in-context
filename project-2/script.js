/* scrolling connections */
$("#col-lft").scroll(function () {
  $("#col-rt").scrollTop($("#col-lft").scrollTop());
  $("#lines").scrollTop($("#col-lft").scrollTop());
});
$("#col-rt").scroll(function () {
  $("#col-lft").scrollTop($("#col-rt").scrollTop());
  $("#lines").scrollTop($("#col-rt").scrollTop());
});
$("#lines").scroll(function () {
  $("#col-lft").scrollTop($("#lines").scrollTop());
  $("#col-rt").scrollTop($("#lines").scrollTop());
});

/* hover connections */
$(document).ready(function () {
  $("#hl-one").hover(
    function () {
      $(".material").css("background-color", "#547655");
      $("#material-ann").css("color", "white");
    },
    function () {
      $(".material").css("background-color", "rgba(0,0,0,0)");
      $("#material-ann").css("color", "rgba(0,0,0,0)");
    },
  );
  $("#hl-two").hover(
    function () {
      $(".drugs").css("background-color", "#547655");
    },
    function () {
      $(".drugs").css("background-color", "rgba(0,0,0,0)");
    }
  );
});

var step = 200;
var scrolling = false;

// Wire up events for the 'scrollUp' link:
$("#scrollUp").bind("click", function (event) {
  event.preventDefault();
  // Animates the scrollTop property by the specified
  // step.
  $("#col-lft").animate({
    scrollTop: "-=" + step + "px",
  });
});

$("#scrollDown").bind("click", function (event) {
  event.preventDefault();
  $("#col-lft").animate({
    scrollTop: "+=" + step + "px",
  });
});

function scrollContent(direction) {
  var amount = direction === "up" ? "-=1px" : "+=1px";
  $("#col-lft").animate(
    {
      scrollTop: amount,
    },
    1,
    function () {
      if (scrolling) {
        scrollContent(direction);
      }
    }
  );
}
