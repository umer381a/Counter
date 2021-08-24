var clicks = 0;

function onClick() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
};

function resetCounter() {
    document.getElementById("clicks").innerHTML = "0";
  };