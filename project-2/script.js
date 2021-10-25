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

/* hover + click connections */
$(document).ready(function () {
  // "updatee" annotation
  $("#hl-update").click(
    function () {
      $("#update-ann").toggleClass("click-white");
      $("#hl-update").toggleClass("highlight-clicked")
    }
  );
  $("#hl-update").hover(
    function () {
      $("#update-ann").toggleClass("hvr-white");
    }
  );
  // "universal" annotation
  $("#hl-universal").click(
    function () {
      $("#univ-ann").toggleClass("click-white");
      $("#hl-universal").toggleClass("highlight-clicked")
    }
  );
  $("#hl-universal").hover(
    function () {
      $("#univ-ann").toggleClass("hvr-white");
    }
  );
  // "swiss" annotation
  $("#hl-swiss").click(
    function () {
      $("#swiss-ann").toggleClass("click-white");
      $("#hl-swiss").toggleClass("highlight-clicked")
    }
  );
  $("#hl-swiss").hover(
    function () {
      $("#swiss-ann").toggleClass("hvr-white");
    }
  );
  // "brutal" annotation
  $("#hl-brutal").click(
    function () {
      $("#brutal-ann").toggleClass("click-white");
      $("#hl-brutal").toggleClass("highlight-clicked")
    }
  );
  $("#hl-brutal").hover(
    function () {
      $("#brutal-ann").toggleClass("hvr-white");
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

$(document).keydown(function (evt) {
  if (evt.keyCode == 40) { // down arrow
    $("#col-lft").animate({
      scrollTop: "+=" + step + "px",
    });
  } else if (evt.keyCode == 38) {
    $("#col-lft").animate({
      scrollTop: "-=" + step + "px",
    });
  }
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
