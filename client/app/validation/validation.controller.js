'use strict';

/**
 * @ngdoc function
 * @name yellowmeApp.controller:ValidationCtrl
 * @description
 * # ValidationCtrl
 * Controller of the yellowmeApp
 */
angular.module('yellowmeApp')
  .config(function ($validationProvider) {    

    /*************************
     * CONFIGURATION
     *************************/
    
    $validationProvider.showSuccessMessage = false; 

    $validationProvider.setErrorHTML(function (msg) {
           return  "<div class=\"error-message-input\" ><p>" + msg + "</p></div> ";
    });


    /*************************
     * END CONFIGURATION
     *************************/




    
    
    /**
     * RFC Validation
     */
    $validationProvider.setDefaultMsg({ rfc: { error: 'RFC Incorrecto', success: 'RFC Correcto'}})
                           .setExpression({ rfc: /^([A-ZÑa-zñ]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[A-Za-z|\d]{3})$/ });        

    /**
     * EMAIL con vacio Validation
     */
    $validationProvider.setDefaultMsg({ emailempty: { error: 'Email Incorrecto', success: 'Email Correcto'}})
                           .setExpression({ emailempty:  /(^$|^.*@.*\..*$)/ });

    /**
     * CP con vacio Validation
     */
    $validationProvider.setDefaultMsg({ cpempty: { error: 'Ingrese un CP correcto', success: 'CP Correcto'}})
                           .setExpression({ cpempty:  /^$|\d{5}/  });

                           

    
    /**
     * CP Mandatory Validation
     */
    $validationProvider.setExpression({
        cp: function (value, scope, element, attrs) {            
            if (value.length == 5 ) {
                return value;
            }
        }
    }).setDefaultMsg({ cp: { error: 'Ingrese un CP correcto',success: 'good' } });    

    /**
     * CP Mandatory Validation
     */
    $validationProvider.setExpression({
        password: function (value, scope, element, attrs) {       
            
            if(scope.$parent.user.password == value) return value;
            return false;
        }
    }).setDefaultMsg({ cp: { error: 'Las contraseñas no coinciden',success: 'good' } });    

    /**
     * Client Mandatory Validation
     */
    $validationProvider.setExpression({
        requiredclient: function (value, scope, element, attrs) {
            if(scope.$parent.$parent.invoice.client_attributes != undefined){
                return value;
            }            
        }
    }).setDefaultMsg({ cp: { error: 'Necesita seleccionar un cliente',success: 'good' } });
    

    /**
     * Range Validation
     */
    $validationProvider.setExpression({
        range: function (value, scope, element, attrs) {
            if (value >= parseInt(attrs.min) && value <= parseInt(attrs.max)) {
                return value;
            }
        }
    }).setDefaultMsg({
        range: {
            error: 'Number should between 5 ~ 10',
            success: 'good'
        }
    });



    /**
     * Default
     */


    var expression = {
        required: function(value) {
            return !!value;
        },
        url: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
        email: /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
        number: /^\d+$/
    };

    var defaultMsg = {
        required: {
            error: 'Es obligatorio',
            success: 'It\'s Required'
        },
        url: {
            error: 'This should be Url',
            success: 'It\'s Url'
        },
        email: {
            error: 'This should be Email',
            success: 'It\'s Email'
        },
        number: {
            error: 'This should be Number',
            success: 'It\'s Number'
        }
    };

    $validationProvider.setExpression(expression).setDefaultMsg(defaultMsg);

  });
