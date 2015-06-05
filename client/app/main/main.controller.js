'use strict';

angular.module('yellowmeApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.tools = [
      {img:'html5.svg'},
      {img:'js.svg'},
      {img:'css3.svg'},
      {img:'ruby.png'},
      {img:'ror.svg'},
      {img:'git.png'},      
      {img:'mysql.svg'},
      {img:'nodejs.png'},
      {img:'windows.png'},
      {img:'heroku.png'},
      {img:'postgresql.svg'},
      {img:'mongodb.png'},
      {img:'angularjs.png'},
      {img:'android.png'},
      {img:'apple.png'},      
      {img:'python.png'},
      {img:'sass.svg'},
      {img:'aws.png'},
      {img:'java.svg'},
      {img:'php.png'}
    ];

    $scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();      
    }

  });



$(window).on('scroll', function(){  
  if( $(window).width() > 1024 ) {
    if( $(document).scrollTop() > 150 ) {
      setNavbarLight();
    }else {
      //setNavbarTransparent();
    }
  }
});

/* navbar setting functions */
function setNavbarLight() {   
  $('.navbar-fixed-top').addClass('navbar-fixed-top-dark');   
  $('.navbar-brand img').show();
  
}

function setNavbarTransparent() {
  $('.navbar-fixed-top').removeClass('navbar-fixed-top-dark');
  $('.navbar-brand img').hide();    
}

/* Scroll slow en links */
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
      || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});