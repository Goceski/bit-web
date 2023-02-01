// $(document).ready(

function gettingGeolocation() {
  var inputValue = document.getElementById("inputText");
  console.log(inputValue.value);
  // IP address: 178.237.221.171
  // Capiital: Belgrade

  var request = new XMLHttpRequest();
  request.open(
    "GET",
    `http://www.geoplugin.net/xml.gp?ip=${inputValue.value}`,
    // `http://www.geoplugin.net/xml.gp?ip=178.237.221.171`,
    true
  );
  request.onload = function (event) {
    console.log(request.status);
    var response = request.responseXML;
    console.log(response);
    var city = response.querySelector("geoplugin_city");
    console.log(city);
    console.log(city.textContent);
    var texth1 = document.querySelector("h1");
    console.log(texth1.textContent);
    texth1.textContent = city.textContent;
  };

  request.send();
}
// });
