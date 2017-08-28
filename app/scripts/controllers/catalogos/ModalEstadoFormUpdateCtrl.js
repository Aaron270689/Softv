'use strict';

angular
    .module('softvApp')
    .controller('ModalEstadoFormUpdateCtrl', function(CatalogosFactory, $uibModalInstance, EstadoObj, ngNotify, $state){
        
        function SaveEstado(){
            var EstadoObj = {};
            EstadoObj.IdEstado = vm.IdEstado;
            EstadoObj.Estado = vm.Estado;
            CatalogosFactory.UpdateEstado2_web(EstadoObj).then(function(data){
                if(data.UpdateEstado2_webResult == 1){
                    ngNotify.set('CORRECTO, se guardó el estado.', 'success');
                    $state.reload('home.catalogos.estados');
                    cancel();
                }else{
                    ngNotify.set('ERROR, al guardar el estado.', 'warn');
                    $state.reload('home.catalogos.estados');
                    cancel();
                }
            });
        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.IdEstado = EstadoObj.IdEstado;
        vm.Estado = EstadoObj.Nombre;
        vm.Titulo = 'Editar Registro - ' + vm.IdEstado;
        vm.Icono = 'fa fa-pencil-square-o';
        vm.SaveEstado = SaveEstado;
        vm.cancel = cancel;

    });