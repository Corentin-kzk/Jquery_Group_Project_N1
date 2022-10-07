
function Hover(params) {
    $("tr").not(':first').hover(
        function () {
          $("td").css("background","yellow");
        }, 
        function () {
          $("td").css("background","");
        }
      );
}