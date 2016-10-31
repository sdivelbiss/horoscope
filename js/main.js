// console.log("Hello World!")
// document.write("Hello world")
// alert("Hello World")

// var name = prompt("Whats your name?")
// console.log(name)

// var string = ("This is a string, it is in quotes")
// var number = (123)
// var boolean = true
// var array = [5, true, "Hello"]

// var num1 = 10
// var num2 = 50
// var num3 = 30

// var num4 = num1 + num2 + num3
// document.write(num4)

// if (num1 >= num3) {
// 	console.log("10 is greater than 30")
// }
// else {
// 	console.log("30 is greater than 10")
// }

// for (var i = 1; i <= 20; i++) {
// 	console.log(i)
// }

// function myFunction(a, b) {
//     return a * b;
// }

// myFunction()

// var username = prompt("Whats your name?")
// // var lowerCaseName = lowerCaseName.toLowerCase();


// if (username == "scott" || username == "julia") {
// 	document.write("Hello " + username + ", great to see you!")

// }

// else {
// 	document.write("Go away")
// }

// var content = "write anything here"
// document.getElementById("message").innerHTML = content

// function getInfo() {
// 	var username = document.getElementById("username").value
// 	var password = document.getElementById("password").value
// 	console.log("your username is " + username + " and your password is " + password)
// }

// getInfo()


// var cars = ["fiat", "bmw", "honda", "toyota"]
// // console.log(cars.length)

// for (i = 0; i < cars.length; i++) {
// 	if (cars[i] = "bmw") {
// 		console.log("You're driving a sweet " + cars[i])
// 	}
// 	// console.log(cars[i])

// }


// var arr = [10, 55, 22, 87, 14]
// var biggest = 0

// for (i = 0; i < arr.length; i++) {
// 	arr[i]
// 	if (biggest < arr[i]) {
// 		biggest = arr[i]
// 	}
// 	}
// 	console.log(biggest)


// var cars = [
// 	{
// 		make: "honda",
// 		model: "civic",
// 		year: 2014,
// 		color: "blue"
// 	},
// 	{
// 		make: "toyota",
// 		model: "camry",
// 		year: 2000,
// 		color: "red"
// 	},
// 	{
// 		make: "ford",
// 		model: "mustang",
// 		year: 2005,
// 		color: "black"
// 	},
// ]

// console.log(cars[0].make)

// for (i = 0; i < cars.length; i++) {
// 	if (cars[i].year < 2010) {
// 		document.write(cars[i].make + ", " + cars[i].model)
// 	}
// }
// var honda = {
// 	model: "civic",
// 	year: 2014,
// 	color: "blue"
// }

// var toyota = {
// 	model: "camry",
// 	year: 2000,
// 	color: "red"
// }

// var ford = {
// 	model: "mustang",
// 	year: 2005,
// 	color: "black"
// }
// console.log(ford.model)
//  ford.model = "F150"
// console.log(honda.model)
// console.log(toyota.model)
// console.log(ford.model)

// var objPeople = [
// 	{
// 		username: "scott",
// 		password: "password"
// 	},
// 	{
// 		username: "julia",
// 		password: "cardiobarre"
// 	},
// 	{
// 		username: "cinnamon",
// 		password: "treats"
// 	}
// ]


// function getInfo() {
// 	var username = document.getElementById("username").value
// 	var password = document.getElementById("password").value
// 	for (i = 0; i < objPeople.length; i++)
// 		if (username == objPeople[i].username && password == objPeople[i].password) {
// 			console.log(username + " is logged in")
// 			return
// 		}
	
// 	console.log("incorrect username or password")
// }


var signs = [
	{
		name: "Aries",
		image: "img/aries-1.png",
		positive: "Someone near you is about to be very, very good to you, dear Aries.",
		answer: "aries"
	},
	{
		name: "Gemini",
		image: "img/gemini-1.png",
		positive: "You will see many exciting benefits to October and will be happy from the very start.",
		answer: "gemini"

	},
	{
		name: "Leo",
		image: "img/leo-1.png",
		positive: "You will be highly productive, and you will be on your A-game, moving through your daily rounds with the speed of light.",
		answer: "leo"

	},
	{
		name: "Libra",
		image: "img/libra-1.png",
		positive: "You have been crowned the celestial favorite this year, having welcomed Jupiter, giver of gifts and luck.",
		answer: "libra"

	},
	{
		name: "Sagittarius",
		image: "img/sagittarius-1.png",
		positive: "Life is changing in a positive way, all caused by a shift of planets into new signs.",
		answer: "sagittarius"

	},
	{
		name: "Aquarius",
		image: "img/aquarius-1.png",
		positive: "First, foreign people and places will be lucky for you, for they form part of the ninth house. You may travel for pleasure or set up an international business.",
		answer: "aquarius"

	},
	{
		name: "Taurus",
		image: "img/taurus-1.png",
		positive: "It will be up to you to gather up all the opportunities that will be there for you, and they will be substantial.",
		answer: "taurus"

	},
	{
		name: "Cancer",
		image: "img/cancer-1.png",
		positive: "If you long to make improvements to your home, you will now find yourself in the finest possible time of 2016 to make those changes.",
		answer: "cancer"

	},
	{
		name: "Virgo",
		image: "img/virgo-1.png",
		positive: "This is one of those very unusual months where at one point something is clearly going well, then suddenly changes to the reverse and brings tension.",
		answer: "virgo"

	},
	{
		name: "Scorpio",
		image: "img/scorpio.png",
		positive:"This month starts slowly and almost silently. Yet although it might seem on the surface that nothing much is going on, that won’t be the case.",
		answer: "scorpio"

	},
	{
		name: "Capricorn",
		image: "img/capricorn-1.png",
		positive: "Career success is deeply important to you, and so this month will be as delicious as homemade chocolate chip cookies, fresh from the oven.",
		answer: "capricorn"

	},
	{
		name: "Picses",
		image: "img/picses-1.png",
		positive: "As a Pisces you are outstandingly artistic, imaginative, and visionary.",
		answer: "picses"

	},
	{
		name:"Incorrect",
		image: "img/error.png",
		positive: "Please re-enter your horoscope sign"
	}
]

document.getElementById("horoscope").addEventListener("keypress", enterKey);

function enterKey (e) {
	if(e.keyCode == 13) {
		getInfo();
	}
} false;


function getInfo() {
	var horoscope = document.getElementById("horoscope").value.toLowerCase();

	for (i = 0; i < signs.length; i++) 
			if (horoscope == signs[i].answer) {
			document.getElementById("name").textContent = "You are " + signs[i].name
			document.getElementById("image").src = signs[i].image
			document.getElementById("positive").textContent = signs[i].positive
			document.getElementById("display").className = "display"
			return
			}

			else {
				document.getElementById("name").textContent = signs[i].name
				document.getElementById("image").src = signs[i].image
				document.getElementById("positive").textContent = signs[i].positive
			}

}
























