 //Make menu bar fixed after scroll
// var navPositionY = $('.menubar').offset().top;

// function logScroll() {

//   if ($(window).scrollTop() >= navPositionY) {
//     //console.info('DOWN square '+ squarePositionY+ ' window scroll:' +$(window).scrollTop() );
//     $('.menubar')
//       .css('position', 'fixed')
//       .css('top', '0')
//       .css('left', '0')
//       .css('width', '100%')
//       .css('z-index', '10')
//   } else {
//     //console.info('UP square '+ squarePositionY+ ' window scroll:' +$(window).scrollTop() );
//     $('.menubar')
//       .css('position', 'relative')

//   }
// }

// window.onscroll = logScroll;

$(document).ready(function() {
var stickyNavTop = $('.menubar').offset().top;
 
var stickyNav = function(){
var scrollTop = $(window).scrollTop();
      
if (scrollTop > stickyNavTop) {
    $('.menubar').addClass('sticky');
    $('.info')
      .css('margin-top', '50px');

} else {
    $('.menubar').removeClass('sticky');
    $('.info')
      .css('margin-top', '0px');
}
};
 
stickyNav();
 
$(window).scroll(function() {
  stickyNav();
});
});


//Make menu bar fixed after scroll-END

 //Expand-collapse images
 var currentImage;
 var counter = 0;

 $( ".galleryImage" ).click(function(event) {
   //console.info (e);
   if(counter%2 == 0){
      $(event.target)
      .css('position','fixed')
      .css('z-index', '2')
      .css('cursor', 'pointer')

      .animate({
         width:"70%",
         height:"70%",
         margin:0,
         top:0,
         left:0,

       }, 900)
      .clearQueue();
      counter += 1;
  } else {
      $(event.target)
      .css('position', 'relative')
      .css('z-index', '1')
      .css('cursor', 'pointer')

      .animate({
        width:"250px",
        height: "250px",
      }, 900);
      counter += 1;
  }
 });
 //Expand-collapse images-END

 //Carousel
 jQuery(document).ready(function ($) {

     var jssor_1_SlideshowTransitions = [
       {$Duration:1200,$Opacity:2}
     ];

     var jssor_1_options = {
       $AutoPlay: true,
       $SlideshowOptions: {
         $Class: $JssorSlideshowRunner$,
         $Transitions: jssor_1_SlideshowTransitions,
         $TransitionsOrder: 1
       },
       $ArrowNavigatorOptions: {
         $Class: $JssorArrowNavigator$
       },
       $BulletNavigatorOptions: {
         $Class: $JssorBulletNavigator$
       }
     };

     var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

     /*responsive code begin*/
     /*you can remove responsive code if you don't want the slider scales while window resizing*/
     function ScaleSlider() {
         var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
         if (refSize) {
             refSize = Math.min(refSize, 600);
             jssor_1_slider.$ScaleWidth(refSize);
         }
         else {
             window.setTimeout(ScaleSlider, 30);
         }
     }
     ScaleSlider();
     $(window).bind("load", ScaleSlider);
     $(window).bind("resize", ScaleSlider);
     $(window).bind("orientationchange", ScaleSlider);
     /*responsive code end*/
 });
 //Carousel-END
