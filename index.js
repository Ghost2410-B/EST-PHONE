const nav=document.getElementById("scroll-to");
const scroll_button=document.getElementById("scroll-button")



const title1=document.getElementById("title1");
const title2=document.getElementById("title2");
const title3=document.getElementById("title3");

const content1=document.getElementById("content1");
const content2=document.getElementById("content2");
const content3=document.getElementById("content3");


content1.classList.remove("container-non-active");
content2.classList.add("container-non-active");
content3.classList.add("container-non-active");

title1.onclick=()=>{
    content1.classList.remove("container-non-active");
    content2.classList.add("container-non-active");
    content3.classList.add("container-non-active");
}

title2.onclick=()=>{
    content2.classList.remove("container-non-active");
    content1.classList.add("container-non-active");
    content3.classList.add("container-non-active");
}
title3.onclick=()=>{
    content3.classList.remove("container-non-active");
    content1.classList.add("container-non-active");
    content2.classList.add("container-non-active");
}



scroll_button.onclick=()=>{
    nav.scrollIntoView({
        behavior: "smooth",
        block: "start" // You can also use "center", "end" depending on your preference
      });
}




//search-bar animation


const search_area=document.getElementById("search-area");
const search_button=document.getElementById("search-submit");


search_button.onclick=()=>{
    search_area.style="border: 1px  solid lightblue;width: 8em;background-color: lightblue;";
}




//social media show
const social_container=document.getElementById("social-media");
social_container.onclick=()=>{
    social_container.style.transform="translateX(3.3em)";
}


