$(document).ready(function(){
    $('.banner-slider').slick({
      dots:true,
      arrows:false,
      autoplay:false,
    });

    new VenoBox({
        selector: ".my-link"
    });
    new VenoBox({
      selector: '.my-image-links',
      spinner: 'swing',
      numeration: true,
      infinigall: true,
      share: true,
  });

  $('.testimonial-slider').slick({
    dots:true,
    arrows:false,
    autoplay:false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    ],
  });

  $('.counter').counterUp({
    delay: 1,
});

  new WOW().init();

  });

  // scroll-button
  $(window).scroll(function(){
    var scrolling =$(this).scrollTop();

    if(scrolling>300){
    $('.scroll').fadeIn();}


    else{
      $('.scroll').fadeOut();}

  });

  $('.scroll').click(function(){
    $('html,body').animate({
      scrollTop:'0px',
    },1500);
  });

  $('.logo-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    arrows:true,
    prevArrow: '.prev',
    nextArrow: '.next',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        }
      },
    ]
  });


