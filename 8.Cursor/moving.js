var main = document.querySelector("#amin");
var cursor = document.querySelector("#cursor");

document.addEventListener("mousemove", function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:1.3,
        ease:"elastic.out",
    })
})