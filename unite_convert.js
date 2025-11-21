const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("meters-feet")
const volumeEl = document.getElementById("liters-gallons")
const massEl = document.getElementById("kilograms-pounds")


convertBtn.addEventListener("click", function() {
    inputValue = inputEl.value
    lengthConvert(inputValue)
    literConvert(inputValue)
    massConvert(inputValue)
})

function lengthConvert(value) {
    
    lengthEl.textContent = `${value} meters =  ${value * 3.281} feet | ${value} feet = ${value / 3.281}`
    
}
function literConvert(value) {
    
    volumeEl.textContent = `${value} liters =  ${value * 0.264} gallons | ${value} gallons = ${value / 0.264 } liters`
    
}
function massConvert(value) {
    
    massEl.textContent = `${value} kilograms =  ${value * 2.204} pounds | ${value} pounds = ${value / 2.204} kilograms`
    
}