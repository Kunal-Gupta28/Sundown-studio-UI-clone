const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});


let container4 = document.querySelector("#container4");
let data_image = document.querySelectorAll(".images")
let container5 = document.querySelector("#container5");

data_image.forEach((e)=>{
    e.addEventListener("mouseenter", ()=>{
        container5.style.display="block";
        var image = e.getAttribute("data-image");
        container5.style.backgroundImage=`url(${image})`;
        console.log(image);
    })
    
    e.addEventListener("mouseleave", ()=>{
        container5.style.display="none";
    })
    
})

const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const btn3 = document.querySelector("#btn3")

btn1.addEventListener("click",()=>{
    btn1.style.borderLeft= "4px solid red";
    btn1.style.color="#EFEAE3";
    btn2.style.borderLeft= "2px solid #504B45";
    btn2.style.color="#504B45";
    btn3.style.borderLeft= "2px solid #504B45";
    btn3.style.color="#504B45";
    console.log("btn1 is clicked");
    document.querySelector("#right-div").style.backgroundImage='url("image/10011.webp")';
    document.querySelector("#left-div span").innerHTML="Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.";
})
btn2.addEventListener("click",()=>{
    btn1.style.borderLeft= "2px solid #504B45";
    btn1.style.color="#504B45";
    btn2.style.borderLeft= "4px solid red";
    btn2.style.color="#EFEAE3";
    btn3.style.borderLeft= "2px solid #504B45";
    btn3.style.color="#504B45";
    console.log("btn2 is clicked");
    document.querySelector("#right-div").style.backgroundImage='url("image/10012.webp")';
    document.querySelector("#left-div span").innerHTML="Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.";
})
btn3.addEventListener("click",()=>{
    btn1.style.borderLeft= "2px solid #504B45";
    btn1.style.color="#504B45";
    btn2.style.borderLeft= "2px solid #504B45";
    btn2.style.color="#504B45";
    console.log("btn3 is clicked");
    btn3.style.borderLeft= "4px solid red";
    btn3.style.color="#EFEAE3";
    document.querySelector("#right-div").style.backgroundImage='url("image/10013.webp")';
    document.querySelector("#left-div").lastElementChild.innerHTML="We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.";
})

const section2 = document.querySelector("#section2");
const tracking_ball = document.querySelector("#tracking-ball");

section2.addEventListener("mouseover", (dets)=>{
    tracking_ball.style.display="block";
    tracking_ball.style.transform=`translate(${clientX} , ${clientY})`;
    console.log(`The mouse movement in x direction is :${dets.clientX} The mouse movement in y direction is :${dets.clientY}`)
    console.log(dets);
})
section2.addEventListener("mouseleave", ()=>{
    tracking_ball.style.display="none";
})












var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 60,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });