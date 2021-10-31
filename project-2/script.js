/* scrolling connections */

$("#col-rt").scroll(function () {
  $("#col-lft").scrollTop($("#col-rt").scrollTop());
});
$("#col-lft").scroll(function () {
  $("#col-rt").scrollTop($("#col-lft").scrollTop());
});

/* hover + click connections */
$(document).ready(function () {
  // close helptext
  $("#close").click(
    function () {
      $(".helptext").toggle();
    }
  );
  // "ironic" annotation
  $("#hl-ironic").click(
    function () {
      $(".ironic-ann").toggleClass("ann-click");
      $("#hl-ironic").toggleClass("highlight-clicked");
    }
  );
  $("#hl-ironic").hover(
    function () {
      $(".ironic-ann").toggleClass("ann-hvr");
    }
  );
  // "update" annotation
  $("#hl-update").click(
    function () {
      $(".update-ann").toggleClass("ann-click");
      $("#hl-update").toggleClass("highlight-clicked");
    }
  );
  $("#hl-update").hover(
    function () {
      $(".update-ann").toggleClass("ann-hvr");
    }
  );
  // "universal" annotation
  $("#hl-universal").click(
    function () {
      $(".univ-ann").toggleClass("ann-click");
      $("#hl-universal").toggleClass("highlight-clicked")
    }
  );
  $("#hl-universal").hover(
    function () {
      $(".univ-ann").toggleClass("ann-hvr");
    }
  );
  // "swiss" annotation
  $("#hl-swiss").click(
    function () {
      $(".swiss-ann").toggleClass("ann-click");
      $("#hl-swiss").toggleClass("highlight-clicked")
    }
  );
  $("#hl-swiss").hover(
    function () {
      $(".swiss-ann").toggleClass("ann-hvr");
    }
  );
  // "utopian" annotation
  $("#hl-utopian").click(
    function () {
      $(".utopian-ann").toggleClass("ann-click_pro");
      $("#hl-utopian").toggleClass("highlight-clicked_pro")
    }
  );
  $("#hl-utopian").hover(
    function () {
      $(".utopian-ann").toggleClass("ann-hvr_pro");
    }
  );
  // "harmonious" annotation
  $("#hl-harmonious").click(
    function () {
      $(".harmonious-ann").toggleClass("ann-click");
      $("#hl-harmonious").toggleClass("highlight-clicked")
    }
  );
  $("#hl-harmonious").hover(
    function () {
      $(".harmonious-ann").toggleClass("ann-hvr");
    }
  );
  // "condescending" annotation
  $("#hl-condescending").click(
    function () {
      $(".condescending-ann").toggleClass("ann-click");
      $("#hl-condescending").toggleClass("highlight-clicked")
    }
  );
  $("#hl-condescending").hover(
    function () {
      $(".condescending-ann").toggleClass("ann-hvr");
    }
  );
  // "openSource" annotation
  $("#hl-openSource").click(
    function () {
      $(".openSource-ann").toggleClass("ann-click_pro");
      $("#hl-openSource").toggleClass("highlight-clicked_pro")
    }
  );
  $("#hl-openSource").hover(
    function () {
      $(".openSource-ann").toggleClass("ann-hvr_pro");
    }
  );
  // trojan annotation
  $("#hl-trojan").click(
    function () {
      $(".trojan-ann").toggleClass("ann-click_pro");
      $("#hl-trojan").toggleClass("highlight-clicked_pro")
    }
  );
  $("#hl-trojan").hover(
    function () {
      $(".trojan-ann").toggleClass("ann-hvr_pro");
    }
  );
  // color annotation
  $("#hl-color").click(
    function () {
      $(".color-ann").toggleClass("ann-click_pro");
      $("#hl-color").toggleClass("highlight-clicked_pro")
    }
  );
  $("#hl-color").hover(
    function () {
      $(".color-ann").toggleClass("ann-hvr_pro");
    }
  );
  // myth annotation
  $("#hl-myth").click(
    function () {
      $(".myth-ann").toggleClass("ann-click");
      $("#hl-myth").toggleClass("highlight-clicked")
    }
  );
  $("#hl-myth").hover(
    function () {
      $(".myth-ann").toggleClass("ann-hvr");
    }
  );
  // taboo annotation
  $("#hl-taboo").click(
    function () {
      $(".taboo-ann").toggleClass("ann-click_pro");
      $("#hl-taboo").toggleClass("highlight-clicked_pro")
    }
  );
  $("#hl-taboo").hover(
    function () {
      $(".taboo-ann").toggleClass("ann-hvr_pro");
    }
  );
  // cosmetic annotation
  $("#hl-cosmetic").click(
    function () {
      $(".cosmetic-ann").toggleClass("ann-click");
      $("#hl-cosmetic").toggleClass("highlight-clicked")
    }
  );
  $("#hl-cosmetic").hover(
    function () {
      $(".cosmetic-ann").toggleClass("ann-hvr");
    }
  );
  // choice annotation
  $("#hl-choice").click(
    function () {
      $(".choice-ann").toggleClass("ann-click_pro");
      $("#hl-choice").toggleClass("highlight-clicked_pro")
    }
  );
  $("#hl-choice").hover(
    function () {
      $(".choice-ann").toggleClass("ann-hvr_pro");
    }
  );
  // rep annotation
  $("#hl-rep").click(
    function () {
      $(".rep-ann").toggleClass("ann-click");
      $("#hl-rep").toggleClass("highlight-clicked")
    }
  );
  $("#hl-rep").hover(
    function () {
      $(".rep-ann").toggleClass("ann-hvr");
    }
  );
  // "brutal" annotation
  $("#hl-brutal").click(
    function () {
      $(".brutal-ann").toggleClass("ann-click");
      $("#hl-brutal").toggleClass("highlight-clicked")
    }
  );
  $("#hl-brutal").hover(
    function () {
      $(".brutal-ann").toggleClass("ann-hvr");
    }
  );
  // "rational" annotation
  $("#hl-rational").click(
    function () {
      $(".rational-ann").toggleClass("ann-click");
      $("#hl-rational").toggleClass("highlight-clicked")
    }
  );
  $("#hl-rational").hover(
    function () {
      $(".rational-ann").toggleClass("ann-hvr");
    }
  );
  // "break" annotation
  $("#hl-break").click(
    function () {
      $(".break-ann").toggleClass("ann-click_pro");
      $("#hl-break").toggleClass("highlight-clicked_pro")
    }
  );
  $("#hl-break").hover(
    function () {
      $(".break-ann").toggleClass("ann-hvr_pro");
    }
  );
  // "rules" annotation
  $("#hl-rules").click(
    function () {
      $(".rules-ann").toggleClass("ann-click");
      $("#hl-rules").toggleClass("highlight-clicked")
    }
  );
  $("#hl-rules").hover(
    function () {
      $(".rules-ann").toggleClass("ann-hvr");
    }
  );
  // "form" annotation
  $("#hl-form").click(
    function () {
      $(".form-ann").toggleClass("ann-click_pro");
      $("#hl-form").toggleClass("highlight-clicked_pro")
    }
  );
  $("#hl-form").hover(
    function () {
      $(".form-ann").toggleClass("ann-hvr_pro");
    }
  );
  // "demo" annotation
  $("#hl-demo").click(
    function () {
      $(".demo-ann").toggleClass("ann-click_pro");
      $("#hl-demo").toggleClass("highlight-clicked_pro")
    }
  );
  $("#hl-demo").hover(
    function () {
      $(".demo-ann").toggleClass("ann-hvr_pro");
    }
  );
  // "bootstrap" annotation
  $("#hl-bootstrap").click(
    function () {
      $(".bootstrap-ann").toggleClass("ann-click_pro");
      $("#hl-bootstrap").toggleClass("highlight-clicked_pro")
    }
  );
  $("#hl-bootstrap").hover(
    function () {
      $(".bootstrap-ann").toggleClass("ann-hvr_pro");
    }
  );
  // "real" annotation
  $("#hl-real").click(
    function () {
      $(".real-ann").toggleClass("ann-click");
      $("#hl-real").toggleClass("highlight-clicked")
    }
  );
  $("#hl-real").hover(
    function () {
      $(".real-ann").toggleClass("ann-hvr");
    }
  );
  // "model" annotation
  $("#hl-model").click(
    function () {
      $(".model-ann").toggleClass("ann-click");
      $("#hl-model").toggleClass("highlight-clicked")
    }
  );
  $("#hl-model").hover(
    function () {
      $(".model-ann").toggleClass("ann-hvr");
    }
  );
  // "standards" annotation
  $("#hl-standards").click(
    function () {
      $(".standards-ann").toggleClass("ann-click");
      $("#hl-standards").toggleClass("highlight-clicked")
    }
  );
  $("#hl-standards").hover(
    function () {
      $(".standards-ann").toggleClass("ann-hvr");
    }
  );
  // "flexGrid" annotation
  $("#hl-flexGrid").click(
    function () {
      $(".flexGrid-ann").toggleClass("ann-click");
      $("#hl-flexGrid").toggleClass("highlight-clicked")
    }
  );
  $("#hl-flexGrid").hover(
    function () {
      $(".flexGrid-ann").toggleClass("ann-hvr");
    }
  );
  // "jenSimons" annotation
  $("#hl-jenSimons").click(
    function () {
      $(".jenSimons-ann").toggleClass("ann-click_pro");
      $(".vid").toggleClass("video");
      $("#hl-jenSimons").toggleClass("highlight-clicked_pro")
    }
  );
  $("#hl-jenSimons").hover(
    function () {
      $(".jenSimons-ann").toggleClass("ann-hvr_pro");
      $(".vid").toggleClass("video");
    }
  );
  // "vast" annotation
  $("#hl-vast").click(
    function () {
      $(".vast-ann").toggleClass("ann-click");
      $("#hl-vast").toggleClass("highlight-clicked")
    }
  );
  $("#hl-vast").hover(
    function () {
      $(".vast-ann").toggleClass("ann-hvr");
    }
  );
  // "think" annotation
  $("#hl-think").click(
    function () {
      $(".think-ann").toggleClass("ann-click");
      $("#hl-think").toggleClass("highlight-clicked")
    }
  );
  $("#hl-think").hover(
    function () {
      $(".think-ann").toggleClass("ann-hvr");
    }
  );
  // "mistakes" annotation
  $("#hl-mistakes").click(
    function () {
      $(".mistakes-ann").toggleClass("ann-click");
      $("#hl-mistakes").toggleClass("highlight-clicked")
    }
  );
  $("#hl-mistakes").hover(
    function () {
      $(".mistakes-ann").toggleClass("ann-hvr");
    }
  );
  
});


var step = 150;
var scrolling = false;

// Wire up events for the 'scrollUp' link:
$("#scrollUp").bind("click", function (event) {
  event.preventDefault();
  // Animates the scrollTop property by the specified
  // step.
  $("#col-rt").animate({
    scrollTop: "-=" + step + "px",
  });
  $("#col-lft").animate({
    scrollTop: "-=" + step + "px",
  });
});

$("#scrollDown").bind("click", function (event) {
  event.preventDefault();
  $("#col-rt").animate({
    scrollTop: "+=" + step + "px",
  });
  $("#col-lft").animate({
    scrollTop: "+=" + step + "px",
  });
});

$(document).keydown(function (evt) {
  if (evt.keyCode == 40) { // down arrow
    $("#col-rt").animate({
      scrollTop: "+=" + step + "px",
    });
  } else if (evt.keyCode == 38) {
    $("#col-rt").animate({
      scrollTop: "-=" + step + "px",
    });
  }
});

function scrollContent(direction) {
  var amount = direction === "up" ? "-=1px" : "+=1px";
  $("#col-rt").animate(
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
