
var time = gsap.timeline()

time.from(".page-1 svg", {
    opacity: "0",
    delay: ".4",
    y: "-10%",
})

//  time.from(".page-1 svg" ,{
//      scale:"0.5",
//      y:"-100%",
//      scrollTrigger:{
//         scroller:"body",
//         trigger:".page-1 svg",
//         start:"top 50%",
//         end:"top 0",
markers: true,
    //         scrub:2
    //      }
    // })
    time.from(".page-1 img ", {
        scale: "0.5",
        delay: ".5",
        borderRadius: "25px",
        // opacity:0
    })
time.from(".nav i , .one  , .two ", {
    opacity: "0"
})



var text = document.querySelectorAll(".text-content h1 ")

text.forEach(function (elem) {
    var textcontainer = elem.textContent
    var splittedtext = textcontainer.split("")
    var clutter = " "
    splittedtext.forEach(function (element) {
        clutter += `<span>${element}</span>`
    })
    elem.innerHTML = clutter
})


time.to(".text-content h1 span", {
    color: "#DEDEC0",
    stagger: "0.3",
    scrollTrigger: {
        trigger: ".text-content ",
        scroller: "body",
        start: "top 50%",
        end: "top -10%",
        // markers:true,
        scrub: 2
    }
})

time.from(".tide svg", {
    x: "-40%",
    scrollTrigger: {
        trigger: ".tide ",
        scroller: "body",
        start: "top 80%",
        end: "top 0",
        // markers:true,
        scrub: 1
    }
})


var pero = document.querySelectorAll(".top h1 ")

pero.forEach(function (elem) {
    var textcontainer = elem.textContent
    var splittedtext = textcontainer.split("")
    var clutter = " "
    splittedtext.forEach(function (element) {
        clutter += `<span>${element}</span>`
    })
    elem.innerHTML = clutter
})


time.to(".top h1 span", {
    color: "#434B34",
    stagger: "0.3",
    scrollTrigger: {
        trigger: ".top ",
        scroller: "body",
        start: "top 50%",
        end: "top 0%",
        // markers:true,
        scrub: 2
    }
})

gsap.from(".upper p , .lower , .img , .image-1 , .image-2", {
    y: 100,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".upper",
        scroller: "body",
        start: "top 70%",
        end: "top 0",
        // markers:true,
        scrub: 1
    }
})



time.from(".tide-2 svg", {
    x: "-40%",
    scrollTrigger: {
        trigger: ".tide-2 ",
        scroller: "body",
        start: "top 80%",
        end: "top 0",
        // markers:true,
        scrub: 1
    }
})


var textbox = document.querySelectorAll(".pg6-upper h1 ")

textbox.forEach(function (elem) {
    var textcontainer = elem.textContent
    var splittedtext = textcontainer.split("")
    var clutter = " "
    splittedtext.forEach(function (element) {
        clutter += `<span>${element}</span>`
    })
    elem.innerHTML = clutter
})


time.to(".pg6-upper h1 span", {
    color: "#E3E3C4",
    stagger: "0.3",
    scrollTrigger: {
        trigger: ".pg6-upper ",
        scroller: "body",
        start: "top 50%",
        end: "top 0%",
        // markers:true,
        scrub: 2
    }
})


gsap.from(".tide-3 svg", {
    x: "-50%",
    scrollTrigger: {
        trigger: ".tide-3",
        scroller: "body",
        start: "top 50%",
        end: "top 0",
        // markers:true,
        scrub: 1

    }
})

var textbox1 = document.querySelectorAll(".text-box-1 h1 ")
textbox1.forEach(function (element) {
    var txtcontainer = element.textContent
    var splittext = txtcontainer.split("")
    var clutter = ""
    splittext.forEach(function (ele) {
        clutter += `<span>${ele}</span>`
    })
    element.innerHTML = clutter
})

gsap.to(".text-box-1 h1 span", {
    color: "#434b34",
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".text-box-1",
        scroller: "body",
        start: "top 50%",
        end: "top 0",
        // markers:true,
        scrub: 2
    }
})
gsap.to(".pg8-one", {
    x: "-50%",
    scrollTrigger: {
        trigger: ".image-5",
        scroller: "body",
        start: "top 50%",
        end: "top 0",
        // markers:true,
        scrub: 2
    }
})

gsap.to(".pg8-three", {
    x: "45%",
    scrollTrigger: {
        trigger: ".image-5",
        scroller: "body",
        start: "top 50%",
        end: "top 0",
        // markers:true,
        scrub: 2
    }
})


gsap.to(".pg8-two", {
    opacity: "1",
    scrollTrigger: {
        trigger: ".image-5",
        scroller: "body",
        start: "top 50%",
        end: "top 0",
        // markers:true,
        scrub: 2
    }
})

gsap.from(".text-box p", {
    y: 100,
    opacity: 0,
    scrollTrigger: {
        scroller: "body",
        trigger: ".text-box",
        start: "top 60%",
        end: "top 40%",
        // markers:true
        scrub: 2
    }
})


gsap.from(".lower-part1,.lower-part2", {
    y: 100,
    opacity: 0,
    scrollTrigger: {
        scroller: "body",
        trigger: ".pg6-lower",
        start: "top 60%",
        end: "top 40%",
        // markers:true
        scrub: 2
    }
})


gsap.from(".tidal svg", {
    x: "10%",
    scrollTrigger: {
        trigger: ".tidal",
        scroller: "body",
        start: "top 50%",
        end: "top 0",
        // markers:true,
        scrub: 2

    }
})
// gsap.from(".duration h1 , .lower-2,",{
//     y:100,
//     opacity:0,
//     scrollTrigger:{
//         sroller:"body",
//         trigger:".duration",
//         start:"top 90%",
//         end:"top 50% ",
// markers:true,
//         scrub:2
//     }
// })


gsap.from(".tidal svg", {
    x: "40%",
    scrollTrigger: {
        start: "top 50%",
        end: "top 0",
        scroller: "body",
        trigger: ".layer",
        // markers:true,
        scrub: true
    }
})


var h1box = document.querySelectorAll(".h1-box h1")
console.log(h1box)
h1box.forEach(function (ele) {
    var h1cont = ele.textContent
    var splith1 = h1cont.split('')
    var clutter = ""
    splith1.forEach(function (el) {
        clutter += `<span>${el}</span>`
    })
    ele.innerHTML = clutter
})

gsap.from(".h1-box h1 span", {
    color: "#dedec0",
    stagger: "0.2",
    scrollTrigger: {
        scroller: "body",
        trigger: ".h1-box",
        start: "top 50%",
        end: "top 0",
        // markers:true,
        scrub: 2

    }
})
gsap.from(".h1-box p", {
    y: "150%",
    opacity: 0,
    // stagger:0.1,
    scrollTrigger: {
        scrolller: "body",
        trigger: ".h1-box",
        start: "top 60%",
        end: "top 00%",
        // markers:true,
        scrub: 2
    }
})

gsap.from(".pg10-down3 ,.pg10-down2 ,.pg10-down1 ", {
    y: "10%",
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
        scrolller: "body",
        trigger: ".pg10-down",
        start: "top 50%",
        end: "top 30%",
        // markers:true,
        scrub: 2
    }
})
gsap.from(".pg11-one , .pg11-two", {
    y: "50%",
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
        scrolller: "body",
        trigger: ".page-11",
        start: "top 50%",
        end: "top 20%",
        // markers:true,
        scrub: 2
    }
})
gsap.from(".pg12-two , .pg12-one", {
    y: "50%",
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
        scrolller: "body",
        trigger: ".page-12",
        start: "top 50%",
        end: "top 20%",
        // markers:true,
        scrub: 2
    }
})