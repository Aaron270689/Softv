'use strict';
angular
    .module('softvApp')
    .controller('ModalRolUpdateCtrl', function($uibModalInstance, ngNotify, $state){
        
        function SaveRol(){

        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.Titulo = 'Editar Rol';
        vm.Icono = 'fa fa-pencil-square-o';
        vm.Estado = 'T';
        vm.SaveRol = SaveRol;
        vm.cancel = cancel;
    });