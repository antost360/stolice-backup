const body = document.getElementById("body")
const main = document.getElementById("main")
var json = []

async function getData() {
  var data = await fetch("https://restcountries.com/v2/all")
  json = await data.json()
}
getData()

var kraj1
var div_game = document.getElementById("div_game")
var div_all
var input_data
var licznik_punktow = 0
var punkty
var licznik_serc = 11

function losuj() {
  var max = json.length - 1
  return Math.floor(Math.random() * max)
}

function pokaz_stolice() {
  document.getElementById("start_button").remove()

  const gues_button = document.createElement("button")
  gues_button.classList.add("guzik")
  gues_button.innerHTML = "LOSUJ"
  gues_button.setAttribute("onclick", "stolice_odjac_serce()")
  main.prepend(gues_button)
}

function stolice() {
  div_game.innerHTML = ""
  kraj1 = json[losuj()]

  div_kraj1 = document.createElement("div")
  div_kraj1.classList.add("div_test")

  const img = document.createElement("img")
  img.classList.add("flaga")
  img.src = kraj1.flags.png
  div_kraj1.appendChild(img)

  const input = document.createElement("input")
  input.classList.add("guzik")
  input.setAttribute("id", "input")
  input.setAttribute("onchange", "sprawdz_stolice(input_data)")
  input.style.margin = "15px"
  div_kraj1.appendChild(input)

  punkty = document.createElement("h1")
  punkty.classList.add("h1")
  punkty.innerHTML = "POINTS: " + licznik_punktow
  div_kraj1.appendChild(punkty)

  div_wynik = document.createElement("div")
  div_wynik.classList.add("wynik")
  div_game.appendChild(div_wynik)
  div_game.appendChild(div_kraj1)

  const serca = document.createElement("h1")
  serca.classList.add("guzik")
  serca.innerHTML = "SERCA: " + licznik_serc
  div_game.appendChild(serca)

  document.getElementById("losowanie").appendChild(div_game)
}
function stolice_odjac_serce() {
  if (licznik_serc < 1) {
    alert("przegrana")
    window.location.reload()
  }
  div_game.innerHTML = ""
  licznik_serc--

  kraj1 = json[losuj()]

  div_kraj1 = document.createElement("div")
  div_kraj1.classList.add("div_test")

  const img = document.createElement("img")
  img.classList.add("flaga")
  img.src = kraj1.flags.png
  div_kraj1.appendChild(img)

  const input = document.createElement("input")
  input.classList.add("guzik")
  input.setAttribute("id", "input")
  input.setAttribute("onchange", "sprawdz_stolice(input_data)")
  input.style.margin = "15px"
  div_kraj1.appendChild(input)

  punkty = document.createElement("h1")
  punkty.classList.add("h1")
  punkty.innerHTML = "POINTS: " + licznik_punktow
  div_kraj1.appendChild(punkty)

  div_wynik = document.createElement("div")
  div_wynik.classList.add("wynik")
  div_game.appendChild(div_wynik)
  div_game.appendChild(div_kraj1)

  const serca = document.createElement("h1")
  serca.classList.add("guzik")
  serca.innerHTML = "SERCA: " + licznik_serc
  div_game.appendChild(serca)

  document.getElementById("losowanie").appendChild(div_game)
}

function sprawdz_stolice(data) {
  input_data = document.getElementById("input").value
  data = input_data
  console.log(data)

  if (data.toUpperCase() == kraj1.capital.toUpperCase()) {
    licznik_punktow++
    punkty.innerHTML = "POINTS: " + licznik_punktow
    console.log(licznik_punktow)
    stolice()
    div_wynik.style.backgroundColor = "lightGreen"
    div_wynik.innerHTML = "❤"
  } else {
    stolice_odjac_serce()
    div_wynik.style.backgroundColor = "tomato"
    div_wynik.innerHTML = "🤢"
  }
}
