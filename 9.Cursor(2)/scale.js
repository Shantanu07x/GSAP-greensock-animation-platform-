var main = document.querySelector("#amin");
var cursor = document.querySelector("#cursor");
var imagediv = document.querySelector("#image")

document.addEventListener("mousemove", function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:1.3,
        ease:"elastic.out",
    })
})

imagediv.addEventListener("mouseenter", function() {
    gsap.to(cursor,{
        scale:3,
        backgroundColor:"#95f081" ,
    })
})

imagediv.addEventListener("mouseleave", function() {
    gsap.to(cursor,{
        scale:1,
        backgroundColor:"#43ce24"
    })
})