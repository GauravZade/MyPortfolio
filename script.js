
//to make top navigation bar out when scroll down
window.addEventListener('scroll',()=>{
    let header = document.querySelector(".nav-bar");
    header.classList.toggle("sticky" , window.scrollY>0);

})


let websiteTabButton=document.querySelector(".website-tab-btn");
let logosTabButton=document.querySelector(".logos-tab-btn");
let drawingsTabButton=document.querySelector(".drawings-tab-btn");
let websiteContainer=document.querySelector(".websites-container");
let logosContainer=document.querySelector(".logos-container");
let drawingContainer= document.querySelector(".drawings-container");
let slides= Array.from(drawingContainer.children);
let nextbtn=document.querySelector(".nav-arrow-right");
let prevbtn=document.querySelector(".nav-arrow-left");
let slideWidth=slides[0].getBoundingClientRect().width;

//to activate WEBSITES tab
websiteTabButton.addEventListener("click",()=>{
    websiteContainer.classList.remove("inactive");//make website tab visible
    logosContainer.classList.add("inactive");//make logos & drawings tab invisible
    drawingContainer.classList.add("inactive");
    websiteContainer.classList.add("active");//to work navigation buttons for website tab only
    drawingContainer.classList.remove("active");//to not work navigation buttons
})

//to activate LOGOS tab
logosTabButton.addEventListener("click",()=>{
    logosContainer.classList.remove("inactive");
    websiteContainer.classList.add("inactive");
    drawingContainer.classList.add("inactive");
})

//to activate DRAWINGS tab
drawingsTabButton.addEventListener("click",()=>{
    websiteContainer.classList.add("inactive");
    logosContainer.classList.add("inactive");
    drawingContainer.classList.remove("inactive");
    drawingContainer.classList.add("active");
    websiteContainer.classList.remove("active");
})
/*slides.forEach((slide,index)=>{///
    slide.style.left=index*slideWidth + 'px';///
})*/


let slider=(container,currentSlide,nextorprevSlide)=>{
    
    let amountToMove=nextorprevSlide.style.left;
    container.style.transform= 'translateX(-'+ amountToMove + ')';
    currentSlide.classList.remove("current");
    nextorprevSlide.classList.add("current");
}

nextbtn.addEventListener('click',()=>{
    if(drawingContainer.classList.contains("active")){
        let currentSlide=drawingContainer.querySelector(".current");
        let nextSlide=currentSlide.nextElementSibling;
        slider(drawingContainer,currentSlide,nextSlide);
        }
    if(websiteContainer.classList.contains("active")){
        let webCurrentSlide=websiteContainer.querySelector(".current");
        let webNextSlide=webCurrentSlide.nextElementSibling;
        slider(websiteContainer,webCurrentSlide,webNextSlide);
        }
})

prevbtn.addEventListener("click",()=>{
    if(drawingContainer.classList.contains("active")){
        let currentSlide=drawingContainer.querySelector(".current");
        let prevSlide=currentSlide.previousElementSibling;
        slider(drawingContainer,currentSlide,prevSlide);
        }
    if(websiteContainer.classList.contains("active")){
        let webCurrentSlide=websiteContainer.querySelector(".current");
        let webPreviousSlide=webCurrentSlide.previousElementSibling;
        slider(websiteContainer,webCurrentSlide,webPreviousSlide);
        }
})

/*let webSlider=(webContainer,webCurrentSlide,webNextorPrevSlide)=>{
    let ToMove=webNextorPrevSlide.style.left;
    webContainer.style.transform='translateX(-'+ ToMove + ')';
    webCurrentSlide.classList.remove("curnt");
    webNextorPrevSlide.classList.add("curnt");
}*/


let webSlides=Array.from(websiteContainer.children);
let webSlideWidth=webSlides[0].getBoundingClientRect().width;

/*webSlides.forEach((slide,index)=>{///
    slide.style.left=index*webSlideWidth  +'px';///
})

/*nextbtn.addEventListener("click",()=>{
    if(websiteContainer.classList.contains("active")){
    let webCurrentSlide=websiteContainer.querySelector(".curnt");
    let webNextSlide=webCurrentSlide.nextElementSibling;
    webSlider(websiteContainer,webCurrentSlide,webNextSlide);
    }
})

prevbtn.addEventListener("click",()=>{
    if(websiteContainer.classList.contains("active")){
    let webCurrentSlide=websiteContainer.querySelector(".curnt");
    let webPreviousSlide=webCurrentSlide.previousElementSibling;
    webSlider(websiteContainer,webCurrentSlide,webPreviousSlide);
    }
})*/

