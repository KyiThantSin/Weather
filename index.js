
//date and time
let date=document.getElementById("clock")
let time=document.getElementById("time")
let d=new Date()
const monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"]
date.innerHTML = `${d.getDay()} , ${monthName[d.getMonth()]} , ${d.getFullYear()}` 

setInterval(
	function (){
	let d=new Date()
	let ampm=d.getHours()>12 ? "PM" : "AM"
	time.innerHTML=d.getHours()+" : "+d.getMinutes() +" "+ampm
},1000)

//get user input
var country = document.getElementById("country")
function start(){
	let userInput = country.value
	console.log("User: ",userInput)
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=6b66356e1fa17c8a4595ea544481873c`)
	.then(res=>res.json())
	.then(data=>{
		console.log(data)
		let weather = data.weather[0].description
		console.log("main weather: ", weather)
		let kelvin = data.main.temp
		let feelsLike_K = data.main.feels_like
		let country_name = data.name
		console.log("Country Name: ",country_name)
		//changing to celsius

		let celsius = Math.floor(kelvin - 273.15)
		console.log("Temperature: ", celsius)
		let feelsLike =Math.floor(feelsLike_K - 273.15)
		console.log("Feels like :",feelsLike)

		//show result
		document.getElementById("show_country").innerHTML=country_name
		document.querySelector(".intro").innerHTML=celsius + " °C"
		document.getElementById("info").innerHTML=weather.toUpperCase()
		document.getElementById("feellike").innerHTML=`Feels Like: ${feelsLike} °C`

		
		//document.getElementById("flimg").setAttribute("display","block")

		//image
		if(weather.includes("sun")){
			document.getElementById("showImg").setAttribute("src","img/sun.svg")
		}
		else if(weather.includes("cloud")){
			document.getElementById("showImg").setAttribute("src","img/cloud.svg")
		}
		else if(weather.includes("rain")){
			document.getElementById("showImg").setAttribute("src","img/rainy.svg")
		}
		else if(weather.includes("partlyrain")){
			document.getElementById("showImg").setAttribute("src","img/cloudy.svg")
		}
		else if(weather.includes("storm")){
			document.getElementById("showImg").setAttribute("src","img/storm.svg")
		}
		else if(weather.includes("wind")){
			document.getElementById("showImg").setAttribute("src","img/windy.svg")
		}
		else if(weather.includes("fog")){
			document.getElementById("showImg").setAttribute("src","img/fog.svg")
		}
		else{
			document.getElementById("showImg").setAttribute("src","img/worldwide.png")
		}
		
	})
}
