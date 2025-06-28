gsap.from("#hero1 #box",{
    scale:0,
    duration:1.5,
    delay:0.5,
    rotate:360,
    
})
gsap.from("#hero2 #box",{
    scale:0,
    duration:1.5,
    delay:0.5,
    rotate:360,
    scrollTrigger:{
        trigger:"#hero2 #box",
        scroller:"body",
        markers:true,
        start:"top 60% "
    }
})
gsap.from("#hero3 #box",{
    scale:0,
    duration:1.5,
    delay:0.5,
    rotate:360,
    scrollTrigger:"#hero3 #box"
})