function myMap() {
	var miPunto = {lat: 39.513, lng: -0.426};
  	var map = new google.maps.Map(
    	document.getElementById('googleMap'), {zoom: 15, center: miPunto});
  	var marker = new google.maps.Marker({position: miPunto, map: map});
}