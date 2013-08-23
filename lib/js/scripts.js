var zb = null;
var img = null;
var winkelalt = 0;
window.onload = function() {
	img = new Image();
	img.src = 'images/kompass.png';
	zb = document.getElementById("rose").getContext('2d');
	zb.translate(125, 125);
	document.addEventListener("deviceready", function() {
		navigator.compass.watchHeading(success, error, {
			frequency : 1000
		});
	}, false);
}
function success(heading) {
	var winkel = Math.floor(heading.magneticHeading);
	document.getElementById('kompass').innerHTML = winkel;
	zb.translate(-125, -125);
	zb.clearRect(0, 0, 500, 500);
	zb.translate(125, 125);
	zb.rotate((winkelalt - winkel) * Math.PI / 180);
	winkelalt = winkel;
	zb.drawImage(img, -125, -125);
}

function error(compassError) {
	document.getElementById('kompass').innerHTML = ('Fehler: ' + compassError.code);

}
