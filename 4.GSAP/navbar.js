var container = gsap.timeline()

container.from(".nav h2",{
    y:-20,
    opacity:0,
   duration:1,
   delay:0.3
})

container.from(".list h4",{
    y:-20,
    opacity:0,
   duration:0.5,
   delay:0.1,
   stagger:0.3
})

container.from("h1", {
    scale:0.1,
    opacity:0,
    duration:1,
})