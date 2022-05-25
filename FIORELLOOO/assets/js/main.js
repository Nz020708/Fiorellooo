let index=0;
function carousel() {
    let slide=document.getElementsByClassName("slide");
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display="none";
    }
    index++;
    if (index>slide.length) {
        index=1;
    }
     slide[index-1].style.display="block";
     setTimeout(carousel,8000)

}
carousel();

$(".card").isotope({
    
})