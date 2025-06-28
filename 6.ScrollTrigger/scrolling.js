    gsap.from("#hero1 #box",{
        scale:0,
        duration:1.5,
        delay:0.5,
        rotate:360,
        
    })
   gsap.from("#hero2 h1",{
    opacity:0,
    x:300,
    duration:2,
    delay:0.1,
    scrollTrigger:{
        trigger:"#hero2 h1",
        scroller:"body",
        markers:true,
        top:"50%"
    }
   })
      gsap.from("#hero2 h2",{
    opacity:0,
    x:-300,
    duration:2,
    delay:0.1,
    scrollTrigger:{
        trigger:"#hero2 h2",
        scroller:"body",
        markers:true,
        top:"50%"
    }
   })

     gsap.from("#hero3 #box",{
        scale:0,
        duration:1.5,
        delay:0.5,
        rotate:360,
        scrollTrigger:{
            trigger:"#hero3 #box",
            scroller:"body",
            markers:true,
            start:"top 80%"
        }
    })