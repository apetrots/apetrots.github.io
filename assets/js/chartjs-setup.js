$(document).ready(function () {
  var $canvas = null,
    $this = null,
    _ctx = null,
    _text = "";
  $(".language-chartjs").each(function () {
    $this = $(this);
    $canvas = $("<canvas width=\"100%\" style=\"width:100%\"></canvas>");
    _text = $this.text();
    $this.text("").append($canvas);
    _ctx = $canvas.get(0).getContext("2d");
    _ctx && _text && new Chart(_ctx, JSON.parse(_text)) && $this.attr("data-processed", true);
  });
});
