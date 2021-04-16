//Calcule a temperatura


let fahrenheit = parseFloat(prompt("Graus Fahrenheit = "))
let kelvin = (fahrenheit - 32) * 5/9 + 273.15
let kelvinReal = kelvin.toFixed(2)

document.write("O valor de " + fahrenheit + " °F" +  " em Graus Kelvin é = " + kelvinReal + " °K" + "</br>")
console.log("O valor de " + fahrenheit + " °F" +  " em Graus Kelvin é = " + kelvinReal + " °K")

let celsius = parseFloat(prompt("Graus Celsius = "))
let resultFahrenheit = (celsius) * 9/5 + 32
let resultFahrenheitReal = resultFahrenheit.toFixed(2)
let resultKelvin = (celsius) + 273.15
let resultKelvinReal = resultKelvin.toFixed(2)

document.write("O valor de " + celsius + " °C" +  " em Graus Fahrenheit é = " + resultFahrenheitReal + " °F" + "</br>")
document.write("O valor de " + celsius + " °C" +  " em Graus Kelvin é = " + resultKelvinReal + " °K")

console.log("O valor de " + celsius + " °C" +  " em GrausFahrenheit é = " + resultFahrenheitReal + " °F")
console.log("O valor de " + celsius + " °C" +  " em Graus Kelvin é = " + resultKelvinReal + " °K")

// O valor de 77 °F em Graus Kelvin é = 298.15 °K
// O valor de 80 °C em Graus Fahrenheit é = 176.00 °F
// O valor de 30 °F em Graus Kelvin é = 272.04 °K

//Calcule o quilowatt-hora

let quilowatt = parseFloat(prompt("Quantidade de quilowatts consumida por uma residência"))
let priceHour = quilowatt * 0.05
let priceHourDescont = priceHour - (priceHour * 0.15)

console.log("O valor a ser pago é " + priceHour + " R$")
console.log("O valor a ser pago com 15% de desconto é " + priceHourDescont + " R$")


//O valor a ser pago é 14 R$ por 280 quilowatt-hora
//O valor a ser pago com 15% de desconto é 11.9 R$

//3.a Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg.
let lb = parseFloat(prompt("Digite uma quantidade em libras"))
let kg = lb/2.205
let kgReal= kg.toFixed(2)

console.log(lb + " lb, equivalem a " + kgReal + " kg")

//20 lb, equivalem a 9.07 kg

// 3.b. Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg

let oz = parseFloat(prompt("Digite uma quantidade em onças"))
let convertKg = oz/35.274
let convertKgReal= convertKg.toFixed(2)

console.log(oz + " oz, equivalem a aproximadamente " + convertKgReal + " kg")

//10.5 oz, equivalem a 0.30 kg

// 3.c. Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m

let mi = parseFloat(prompt("Digite uma quantidade em milhas"))
let metro = mi*1609
let metroReal= metro.toFixed(2)

console.log(mi + " mi, equivalem a aproximadamente " + metroReal + " m")

//100 mi, equivalem a 160900.00 m

//3.d. Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m.

let ft = parseFloat(prompt("Digite uma quantidade em pés"))
let mt = ft/3.281
let mtReal= mt.toFixed(2)

console.log(ft + " ft , equivalem a aproximadamente " + mtReal + " m")

//50 ft , equivalem a 15.24 m

//3.e. Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro.

let gal = parseFloat(prompt("Digite uma quantidade em galão"))
let litro = gal*4.4049
let litroReal= litro.toFixed(2)

console.log(gal + " gal , equivalem a aproximadamente " + litroReal + " lt")

//103.56 gal , equivalem a aproximadamente 456.17 lt

//3.f. Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro.

let xic = parseFloat(prompt("Digite uma quantidade em xícara"))
let lt = xic*0.236588
let ltReal= lt.toFixed(2)

console.log(xic + " xic , equivalem a aproximadamente " + ltReal + " lt")

//450 xic , equivalem a aproximadamente 106.45 lt