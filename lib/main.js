function createNavigationList() {
  let navlist   = document.createElement('ul')
  navlist.className = 'navlist'
  navlist.innerHTML = `
    <li><a href=index.html>Home</a></li>
    <li><a href=team.html>Team</a></li>
  `
  console.log(navlist)
  return navlist
}

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

  let result  = calculate_insurance(country,horsepower,age)
  let rdomobj = document.createElement('span'); rdomobj.innerHTML = `R: ${result}`
  output_field.replaceChild(rdomobj, output_field.firstChild)
}
