'use strict';

angular.module('yellowmeApp')
  .controller('ContactCtrl', function ($scope, $injector, Mailgun) {
    
    var $validationProvider = $injector.get('$validation');

    $scope.formTravel = {            
        checkValid: $validationProvider.checkValid,
        submit: function (form) {
            //Se valida que el formulario este completo
            $validationProvider.validate(form)
                .success(function(message){                  
                  $scope.respCreate = Mailgun.sendmail(createObject($scope.contact), function(data){                    
                    $validationProvider.reset(form);
                    $scope.sucess = "Se envio tu solicitud correctamente";
                    $scope.error = '';
                  });
                })
                .error(function(message){
                  $scope.sucess = '';
                  $scope.error = "Se te estan olvidando algunos datos";                    
                });
        },
        reset: function (form) {
          $scope.sucess = '';
          $validationProvider.reset(form);
        }
    };

    function createObject(contact){
      return {
              'key': 'AXj5CsBchLyqt2w1xBnelA',
              'message': {
                'from_email': contact.email,
                'to': [
                    {
                      'email': 'hola@yellowme.mx',
                      'name': 'Yellowme',
                      'type': 'to'
                    }
                  ],
                'autotext': 'true',
                'subject': 'Enviado desde Yellowme Page',
                'html': 'Nombre: '+ contact.name + ', asunto: ' + contact.body
              }
            }
    }    
  });
