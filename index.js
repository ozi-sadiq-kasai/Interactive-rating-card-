    // rates
let display = document.querySelector('.number')
let rates = document.querySelectorAll('li')
  rates.forEach((rate)=>{
    rate.addEventListener('click',()=> {display.innerText = rate.innerText})})
  
    // button
let sector = document.querySelector('.hidden')
let sectionOne = document.querySelector('.sectionOne')
  let submit = document.querySelector('button').addEventListener('click',()=>{sector.classList.remove('hidden')
  sectionOne.style.display = 'none'})

