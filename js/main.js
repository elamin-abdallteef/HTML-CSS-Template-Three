let el = document.querySelector(".scroller"); 
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    el.style.width =`${(scrollTop / height) * 100}%`;
});
// start  scroll top 
let i = document.querySelector(".scroll-up");
window.onscroll = function() {
    if (this.scrollY >= 500) {
        i.classList.add("show");
    }
    else{
        i.classList.remove("show");
    }
    // this.scrollY >= 1000 ? i.classList.add("show") : i.classList.remove("show");
};

i.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
// end scroll top 

