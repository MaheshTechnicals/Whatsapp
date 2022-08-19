var mybtn = document.getElementById("btn");
mybtn.addEventListener("click", function() {
  var select = document.getElementById("countryCode");

  var a = select.options[select.selectedIndex].value;
  var data = document.getElementById("num").value;
  var link = "https://Wa.me/";
  var wr = document.getElementById("num");

  if (data == "") {

    wr.style.border = "thick solid red";

  } else {
    var output = link + a + data;
    wr.style.border = "thick solid #25D366";
    mybtn.href = output;

  }
  document.getElementById("num").value = null;
});
