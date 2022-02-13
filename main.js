var mybtn = document.getElementById("btn");
mybtn.addEventListener("click", function() {
  var data = document.getElementById("num").value;
  var link = "https://Wa.me/";
  var output = link + 91 + data;
  mybtn.href = output;
}) ;