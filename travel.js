let searchBtn = document.querySelector("#search-btn")
let searchForm = document.querySelector(".search-form")
let loginForm =document.querySelector(".login-form")
let menuBar = document.querySelector("#menu-bar")
let aMenu = document.querySelector(".navbar")
let videoBtn = document.querySelectorAll(".video-btn")

function showbar(){
    searchBtn.classList.toggle("fa-times")
 searchForm.classList.toggle("active")


}
function showform(){
loginForm.classList.add("active");



}
function hideForm(){
    loginForm.classList.remove("active");

}

function showMenu() {
    menuBar.classList.toggle("fa-times")
    aMenu.classList.toggle("active");
}

videoBtn.forEach(slide =>{
slide.addEventListener("click",function(){
    // move to another span
    document.querySelector(".controls .blue").classList.remove("blue")
    slide.classList.add("blue")
    // when you click to  every span you can see anew video 
    let srcVideos= slide.getAttribute("data-src")
    document.querySelector("#video-slider").src = srcVideos;
})

});

var swiper = new Swiper(".review-slider", {
   spaceBetween:20,
   loop:true,
   autoplay:{
    delay:2500
   },
   breakpoints:{
640:{
    slidesPerView:1
},
768:{
    slidesPerView : 2
},

1024:{
    slidesPerView: 3
}


   }
   


  });