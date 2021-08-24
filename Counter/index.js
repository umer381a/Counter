var clicks = 0;
var c= document.getElementById("clicks");
onClick = () => {clicks += 1;c.innerHTML = clicks;};
resetCounter = () => {clicks = 0;c.innerHTML = clicks;}
