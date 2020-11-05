$(document).ready(function () {
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        autoplay: true,
        autoplaySpeed: 2000,
    
    });
});
document.querySelector('.mobile-menu').addEventListener('click', ()=>{
    document.querySelector('.nav').classList.toggle('show')
})