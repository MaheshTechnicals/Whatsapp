var mybtn = document.getElementById("btn");
mybtn.addEventListener("click", function() {
  var data = document.getElementById("num").value;
  var link = "https://Wa.me/";
  var output = link + data;
  mybtn.href = output;
});