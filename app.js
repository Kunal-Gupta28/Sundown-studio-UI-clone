// locomotive integration
function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotive();

// window.addEventListener("load",loader);

// loader animtaion
function loader() {
    // Animation
    let tl = gsap.timeline();

    tl.to("#loader span:first-child", {
        display: "block",
        duration: 0.3,
        delay: 2,
    }).to("#loader span:first-child", {
        display: "none",
    }).to("#loader span:first-child + span", {
        display: "block",
        duration: 0.3,
    }).to("#loader span:first-child + span", {
        display: "none",
    }).to("#loader span:last-child", {
        display: "block",
        duration: 0.3,
    }).to("#loader span:last-child", {
        display: "none",
    }).to("#loader", {
        y: "-100%",
        ease: "power-in-out",
        delay: 0.1,
    });
}
function featured_project_animation() {
    let target = document.querySelector("#all_projects");
    let images = document.querySelectorAll("#all_projects div");
    let imageViewer = document.querySelector("#image_viwer");
   
    images.forEach((element) => {
        let value = element.getAttribute("data-image");
        element.addEventListener("mouseenter", () => {
            imageViewer.style.backgroundImage = `url(${value})`;
            imageViewer.style.display = "block";
        });
    });

    target.addEventListener("mouseleave", () => {
        imageViewer.style.display = "none";
    });

    imageViewer.addEventListener("mouseenter", () => {
        imageViewer.style.display = "block";
    });

    imageViewer.addEventListener("mouseleave", () => {
        imageViewer.style.display = "none";
    });
}

featured_project_animation();


// page5
function page5(){
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
}
page5();

// swiper animation
function swiper_animation(){
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
}
// swiper_animation();