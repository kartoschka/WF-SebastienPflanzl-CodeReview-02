function calculate_insurance(country, horsepower, age) {
  let func
  switch(country) {
    case "austria":
      func = ()=> horsepower * 100 / age + 50
      break
    case "hungary":
      func = ()=> horsepower * 120 / age + 100
      break
    case "greece":
      func = ()=> horsepower * 150 / (age+3) + 50
      break
    default:
      throw `unimplemented case ${country} `
  }

  return func()
}

function updateInsuranceCalc() {
  let output_field = document.getElementById('calculator-result')
  let name       = document.getElementById('input-name').value
  let age        = document.getElementById('input-age').value
  let country    = document.getElementById('input-country').value
  let horsepower = document.getElementById('input-horsepower').value

  let text
  let rdomobj = document.createElement('span')
  if(age && country && horsepower) {
    let result = Math.round(calculate_insurance(country,horsepower,age)*100)/100
    text = `Oure besth Personalysed offerte for ${name ? name : 'thee'}: ${result} Gold Ducates p.a.`
    rdomobj.style.color = 'blue'
    rdomobj.style.backgroundColor = 'unset'
  } else {
    text = 'Enter thine age and number of horses drawynge thine carriage, if thou pleasest'
    rdomobj.style.color = 'red'
    rdomobj.style.backgroundColor = 'lightpink'
  }
  rdomobj.innerHTML = text
  output_field.replaceChild(rdomobj, output_field.firstChild)
}
