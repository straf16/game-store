var cart = [
    {
        title: "Assassin's Creed Odyssey",
        qty: 0,
        price: 350000
    },
    {
        title: "Grand Theft Auto V",
        qty: 0,
        price: 290000
    },
    {
        title: "PLAYERUNKNOWN'S BATTLEGROUNDS",
        qty: 0,
        price: 220000
    },
    {
        title: "Counter Strike: Global Offensive",
        qty: 0,
        price: 120000
    },
    {
        title: "DOTA 2",
        qty: 0,
        price: 100000
    }
];

var total = 0;

var body = document.body;

var listGame = document.getElementById("gameList");
var game = document.getElementsByClassName("game");

var button = document.getElementsByTagName('button');
button[0].addEventListener('click', function() {
    cart[0].qty++;
    total += cart[0].price;
});
button[1].addEventListener('click', function() {
    cart[1].qty++;
    total += cart[1].price;
});
button[2].addEventListener('click', function() {
    cart[2].qty++;
    total += cart[2].price;
});
button[3].addEventListener('click', function() {
    cart[3].qty++;
    total += cart[3].price;
});
button[4].addEventListener('click', function() {
    cart[4].qty++;
    total += cart[4].price;
});

var sidebar = document.getElementsByClassName("sidebar");

var a = document.createElement('a');
var aText = document.createTextNode(String(total));
a.appendChild(aText);
sidebar[0].appendChild(a);



/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
} 