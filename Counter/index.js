var clicks = 0;
var c = document.getElementById("clicks");
function onClick() {
  clicks += 1;
  c.innerHTML = clicks;
};

var resetCounter= function() {
    clicks = 0;
    c.innerHTML = "clicks";
  };
