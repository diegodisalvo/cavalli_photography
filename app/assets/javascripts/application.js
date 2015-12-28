// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require jquery.turbolinks
//= require bootstrap
//= require_tree .

$(document).ready(function(){
  $('.collection .title').hide();
  $('.collection').hover(function(){
    $(this).children('.title').fadeIn(200);
  }, function(){
    $(this).children('.title').fadeOut(200);
  });


  //gallery
  //TODO: Should be implemented to work with window resizing
  $('.photo').hide();
  $('.photo-info').hide();
  $('#0').show();
  $('#0.photo-info').show();
  var id = 0;
  var image_height = $('img#0.responsive-image.photo').width();
  image_height = ((image_height*2)/3)+10;
  $('.gallery').css('height', image_height);


  $('.thumbs').click(function(){
    var newId = $(this).attr('id');
    if (newId == id){
      console.log('it is the same, id = ' + id + ' and newId is ' + newId);
    } else {
      console.log('it is different');
      //change the photo
      $('.photo').hide();
      $('#' + newId).fadeIn(300);

      //change the active thumbnail
      $('img#' + id + '.responsive-image.thumbs').removeClass('.active-img');
      $('img#' + newId + '.responsive-image.thumbs').addClass('.active-img');

      //change the description and title
      $('.photo-info').hide();
      $('#' + newId + '.photo-info').fadeIn(300);

      //set the new photo as active
      id = newId;
    };
  });
})
