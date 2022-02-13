var mybtn = document.getElementById("btn");
mybtn.addEventListener("click", function() {
  var select = document.getElementById("countryCode");

  var a = select.options[select.selectedIndex].value;
  var data = document.getElementById("num").value;
  var link = "https://Wa.me/";
  var output = link + a + data;
  mybtn.href = output;
});