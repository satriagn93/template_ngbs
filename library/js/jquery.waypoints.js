//======== This .js for animation anything object ================



var $dipper = $('.bgh2');
 $dipper.addClass('animated fadeOut');
$dipper.waypoint(function (){
  $dipper.addClass('animated fadeOut');
},{
    offset: '0%'
});

$dipper.waypoint(function (){
	$dipper.removeClass('animated fadeOut');
  $dipper.addClass('animated fadeIn');
},{
    offset: '50%'
});


$dipper.waypoint(function (){
  $dipper.removeClass('animated fadeIn');
    $dipper.addClass('animated fadeOut');
},{
    offset: '100%'
});

  $('.social-1').addClass('animated fadeOut');
   $('.social-2').addClass('animated fadeOut');
$('.social-1').waypoint(function (){
	$('.social-1').removeClass('animated fadeOut');
	  $('.social-2').removeClass('animated fadeOut');
  $('.social-1').addClass('animated bounceInDown');
   $('.social-2').addClass('animated bounceInUp');
},{
    offset: '50%'
});









