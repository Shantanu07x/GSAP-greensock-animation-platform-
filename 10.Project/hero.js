var menu = document.querySelector("#main i");
var cross = document.querySelector("#full i");
var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");


var tl = gsap.timeline()

tl.to("#full",{
    right:"0%",
    duration:0.6,
    
})
tl.from("#full h4",{
    x:150,
    stagger:0.3,
    duration:0.5,
    opacity:0
})
tl.from("#full i",{
    x:10,
    opacity:0
})

tl.pause();

menu.addEventListener("click",function(){
    tl.play();
})

cross.addEventListener("click",function(){
    tl.reverse();
})

document.addEventListener("mousemove", function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:1.3,
        ease:"elastic.out",
    })
})

cross.addEventListener("mouseenter", function() {
    gsap.to(cursor,{
        scale:3,
        backgroundColor:"#61ade3" ,
    })
})
cross.addEventListener("mouseleave", function() {
    gsap.to(cursor,{
        scale:1,
        backgroundColor:"#0f466d"
    })
})