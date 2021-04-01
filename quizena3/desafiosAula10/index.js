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

