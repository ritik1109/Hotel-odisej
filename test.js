var text = document.querySelector("h1")
var texbox = text.textContent
var splittext= texbox.split("")
var clutter = ""
splittext.forEach(function(ele){
  clutter +=` <span>${ele}</span>`
})  
document.querySelector("h1").innerHTML=clutter



var time = gsap.timeline()
time.from("h1 span",{
  y:"100%",
  stagger:0.1,
  opacity: 0
})