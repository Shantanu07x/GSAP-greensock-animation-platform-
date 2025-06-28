gsap.to("#hero2 h1",{
    transform: "translateX(-195%)",
    scrollTrigger:{
        trigger:"#hero2",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -195%",
        scrub:2,
        pin:true
    }
})