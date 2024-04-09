window.addEventListener("load", function() {
	console.log("Good job opening the window");
	img.load();
});

var h1Elements = document.getElementsByTagName("h1");

for(var i = 0; i < h1Elements.length; i++) {
   h1Elements[i].style.color = "#800080";
}

document.querySelector("#time").addEventListener("click", function () {
	console.log("Alert");
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds(); 
    return [ h, m, s ].join(':')
});
