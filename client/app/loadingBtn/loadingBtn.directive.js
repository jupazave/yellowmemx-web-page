'use strict';

angular.module('yellowmeApp')
  .directive('loadingBtn', function () {
    return {
      template: '',
      restrict: 'A',
      scope: {
        prototype: '=loadingBtn'
      },   
      link: function (scope, element, attrs) {              
        scope.$watch('prototype', function(newValue, oldValue) {         
          if(newValue !== undefined)
          {
            if(newValue.$promise !== undefined )
            {
              if(!newValue.$resolved) element.addClass("m-progress disabled");
              else element.removeClass("m-progress disabled");
            }            
          }                    
        }, true);
      }
    };
  });
