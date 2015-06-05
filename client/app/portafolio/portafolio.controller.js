'use strict';

angular.module('yellowmeApp')
  .controller('PortafolioCtrl', function ($scope, $filter, $document) {
    $scope.category = 'featured';
    $scope.toTheTop = function() {
      $document.scrollTopAnimated(0, 5000).then(function() {
        console && console.log('You just scrolled to the top!');
      });
    }

    $scope.works = [
      {
        img:'yogacloud.png',
        title: 'Yoga Cloud', tools: 'Ruby on Rails, HTML5, AngularJS, CSS3, Responsive', 
        category: 'startup,webapp,featured', 
        link: 'https://www.yogacloud.net/', company: 'Yoga Cloud',
        description:'Lorem adsa adskm asdlkm lakmdslkm'
      },
      {
        img:'nominal.png',
        title: 'NMNL', tools: 'Ruby on Rails, HTML5, jQuery, CSS3, Responsive', 
        category: 'startup,webapp,featured', 
        link: 'https://www.nominal.mx/', company: 'NMNL',
        description:'Lorem adsa adskm asdlkm lakmdslkm'
      },
      {
        img:'aquila.png', 
        title: 'Aquila', tools: 'Sinatra, HTML5, jQuery, CSS3, Responsive', 
        category: 'website,featured', 
        link: 'http://www.aquila.io/', company: 'Makerlab',
        description:'Lorem adsa adskm asdlkm lakmdslkm'
      },
      {
        img:'ayra.png', 
        title: 'Ayra Makeup', tools: 'Sinatra, HTML5, jQuery, CSS3, Responsive', 
        category: 'website,featured', 
        link: 'http://www.ayrahevia.com/', company: 'Ayra Makeup',
        description:'Lorem adsa adskm asdlkm lakmdslkm'
      },
      {
        img:'doctorplus.png',
        title: 'Doctor Plus', tools: 'Ruby on Rails, HTML5, AngularJS, CSS3, Responsive',
        category: 'startup,webapp,featured', 
        link: 'https://beta.doctorplus.me/', company: '',
        description:'Lorem adsa adskm asdlkm lakmdslkm'
      },
      {
        img:'pauroman.png',
        title: 'Pau Roman', tools: 'Sinatra, HTML5, jQuery, CSS3, Responsive', 
        category: 'website,featured', 
        link: 'http://www.pauroman.mx/', company: '',
        description:'Lorem adsa adskm asdlkm lakmdslkm'
      },
      {
        img:'pentakris.png',
        title: 'Pentha Taller de Arquitectura', tools: 'Sinatra, HTML5, jQuery, CSS3, Responsive', 
        category: 'website', 
        link: 'http://pentakris.herokuapp.com/', company: '',
        description:'Lorem adsa adskm asdlkm lakmdslkm'
      },
      {
        img:'suhissa.png',
        title: 'Suhissa', tools: 'Ruby on Rails, HTML5, jQuery, CSS3, Responsive', 
        category: 'webapp', 
        link: 'http://www.aguasnacionales.mx/', company: 'Suhissa',
        description:'Lorem adsa adskm asdlkm lakmdslkm'
      },
      {
        img:'enheid.png', 
        title: '', tools: 'Sinatra, HTML5, jQuery, CSS3, Responsive', 
        category: 'website', 
        link: 'http://www.enheid.com/', company: '',
        description:'Lorem adsa adskm asdlkm lakmdslkm'
      },
      {
        img:'gruasjj.png', 
        title: 'GruasJJ', tools: 'Sinatra, HTML5, jQuery, CSS3, Responsive', 
        category: 'website', 
        link: 'http://www.gruasjj.com/', company: '',
        description:'Lorem adsa adskm asdlkm lakmdslkm'
      },
      {
        img:'humanity.png',
        title: 'Humanity', tools: 'Sinatra, Android, Postgresql', 
        category: 'website', 
        link: 'http://humanityweb.herokuapp.com/', company: '',
        description:'Lorem adsa adskm asdlkm lakmdslkm'
      },
      {
        img:'itsolpro.png',
        title: 'Itsolpro', tools: 'Sinatra, HTML5, jQuery, CSS3, Responsive', 
        category: 'website', 
        link: 'http://www.itsolpro.com/', company: '',
        description:'Lorem adsa adskm asdlkm lakmdslkm'
      },
      {
        img:'kineo.png',
        title: 'Kineo', tools: 'Sinatra, HTML5, jQuery, CSS3, Responsive', 
        category: 'website', 
        link: 'https://kineo.herokuapp.com', company: '',
        description:'Lorem adsa adskm asdlkm lakmdslkm'
      },
      {
        img:'komvi.png',
        title: 'Komvi', tools: 'Node, Express, Angular, Mongodb, CSS3, Responsive', 
        category: 'website', 
        link: 'http://www.komvi.mx/', company: '',
        description:'Lorem adsa adskm asdlkm lakmdslkm'
      },
      {
        img:'moisescoarib.png',
        title: 'Moises Corabi', tools: 'Sinatra, HTML5, jQuery, CSS3, Responsive', 
        category: 'website', 
        link: 'http://www.moisescorabi.mx/', company: '',
        description:'Lorem adsa adskm asdlkm lakmdslkm'
      },
      {
        img:'finbeapp.png', 
        title: 'Financiera Bepensa', tools: 'iOS, Android', 
        category: 'apps', 
        link: 'https://play.google.com/store/apps/details?id=com.finbe', company: 'Financiera Bepensa',
        description:''
      },
      {
        img:'conekta.png', 
        title: 'Conekta', tools: 'Sinatra, HTML5, jQuery, CSS3, Responsive', 
        category: 'apps', 
        link: 'https://github.com/javikin/conekta-android', company: '',
        description:'Lorem adsa adskm asdlkm lakmdslkm'
      },
      {
        img:'soscanino.png',
        title: 'S.O.S Canino', tools: 'Sinatra, HTML5, jQuery, CSS3, Responsive', 
        category: 'website', 
        link: 'https://soscanino.herokuapp.com', company: '',
        description:'Lorem adsa adskm asdlkm lakmdslkm'
      }
    ];
    

    var working = angular.element(document.getElementById('section-3'));
    $scope.selectWork = function(work){
      $scope.working = work;      
      $document.scrollToElementAnimated(working);
    }
  })  
  .value('duScrollDuration', 1000);
