$(".search-btn").click(function () {
  $(".wrapper").addClass("active");
  $(this).css("display", "none");
  $(".search-data").fadeIn(500);
  $(".close-btn").fadeIn(500);
  $(".search-data .line").addClass("active");
  setTimeout(function () {
    $("input").focus();
    $(".search-data label").fadeIn(500);
    $(".search-data span").fadeIn(500);
  }, 800);
});

$(".close-btn").click(function () {
  $(".wrapper").removeClass("active");
  $(".search-btn").fadeIn(800);
  $(".search-data").fadeOut(500);
  $(".close-btn").fadeOut(500);
  $(".search-data .line").removeClass("active");
  $("input").val("");
  $(".search-data label").fadeOut(500);
  $(".search-data span").fadeOut(500);
});


$("#searchSelect").change(() => {
  switch ($("#searchSelect").val()) {
    case "guild":
      console.log("Guild Selected");
      break;
    case "HOF":
      console.log("Hall Of Fame Selected");
      break;
      case "char":
      console.log("Character Selected");
      break;
    case "affixes":
      console.log("MM+ Affixes Selected");
      break;
    default:
      console.log("Other Selected");
      break;
  }
});
