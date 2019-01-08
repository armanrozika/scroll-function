(function slider(){
    let slider = document.querySelector('.slider');
    function showSlide(){
       
        if(window.pageYOffset >= document.body.offsetHeight / 3){
            slider.style.bottom = 0;
        }
        
    }
    window.addEventListener('scroll', showSlide)


    //close slider
    let close = document.querySelector('.close');
    let tenMinutes = (1000*60)*10;
    close.addEventListener('click', function(){
        window.removeEventListener('scroll', showSlide)
        slider.style.bottom = '-100%';
        setTimeout(()=>{
            window.addEventListener('scroll', showSlide)
        }, tenMinutes)
    })
})()
