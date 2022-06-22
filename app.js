$(function(){ /*позволяет дождаться загрузки всей страницы, а потом уже выполнять действия с ее элементами*/
  
  /*-------Fixed Header------*/
  let header = $("#header"); /* переменная в которой сохраняем селектор нашей шапки */
  let intro = $("#intro");
  let introH = intro.innerHeight(); /*определяем высоту элемента intro (обращаемся через введенную выше переменную) innerHeight так как нужно чтоб считал без padding */
  let scrollPos = $(window).scrollTop(); /* объявляем переменную, которая считает какое расстояние от верха окна проскроллили*/
  let nav = $("#nav");
  let navToggle = $("#navToggle");
  checkScroll(scrollPos, introH);
  $(window).on("scroll resize", function(){ /* работаем с окном, при скролле страницы вызываем функцию*/
    introH = intro.innerHeight(); /* перезаписываем при изменении размера */
    scrollPos = $(this).scrollTop(); /* сравниваем текущую позицию при скролле окна с верхом */
    checkScroll(scrollPos, introH);
   /* console.log(scrollPos); /*выводим значение при скролле*/
   /*console.log(introH); /*смотрим что хранится в переменной */
   /*console.log(scrollPos);*/
  });

  function checkScroll(scrollPos, introH){
    if( scrollPos > introH ) {
      header.addClass("fixed");  /*придаем класс элементу header*/
    } else {
      header.removeClass("fixed");  /*убираем класс элементу header*/
      }
  }

   /*-------Smooth Scroll------*/

  $("[data-scroll]").on("click", function(event){
    event.preventDefault();

    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;

    nav.removeClass("show");
    
    $("html, body").animate({

      scrollTop: elementOffset - 70

    },700);
    /*console.log(elementId);*/
    /*console.log(elementOffset);*/
  });

  /*-------NavToggle------*/
  
  navToggle.on("click", function(event){
    event.preventDefault();

    nav.toggleClass("show");

  });
  
/*-------TestimonialsSlider: https://kenwheeler.github.io/slick/------*/

  let slider = $("#testimonialsSlider");
  slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true
  });


  

});