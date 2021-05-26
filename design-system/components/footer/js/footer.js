function copyright() {
  document.getElementById("date").innerHTML = new Date().getFullYear().toString()
}

$(document).ready(copyright);
