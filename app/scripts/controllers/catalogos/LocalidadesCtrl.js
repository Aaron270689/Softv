'use strict';

angular
    .module('softvApp')
    .controller('LocalidadesCtrl', function(CatalogosFactory, $uibModal){

        function initData(){
            CatalogosFactory.GetLocalidadList().then(function(data){
                vm.LocalidadList = data.GetLocalidadListResult;
                if (vm.LocalidadList.length == 0) {
					vm.SinRegistros = true;
					vm.ConRegistros = false;
				} else {
					vm.SinRegistros = false;
					vm.ConRegistros = true;
				}
            });
        }
        
        function OpenAddLocalidad(){
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'views/catalogos/ModalLocalidadForm.html',
                controller: 'ModalLocalidadFormAddCtrl',
                controllerAs: 'ctrl',
                backdrop: 'static',
                keyboard: false,
                class: 'modal-backdrop fade',
                size: 'lg'
            });
        }

        function OpenUpdateLocalidad(){
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'views/catalogos/ModalLocalidadForm.html',
                controller: 'ModalLocalidadFormUpdateCtrl',
                controllerAs: 'ctrl',
                backdrop: 'static',
                keyboard: false,
                class: 'modal-backdrop fade',
                size: 'lg',
                /*resolve: {
                    ObjRefCliente: function () {
                        return ObjRefCliente;
                    }
                }*/
            });
        }

        function OpenDeleteLocalidad(){
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'views/catalogos/ModalLocalidadEliminar.html',
                controller: 'ModalLocalidadEliminarCtrl',
                controllerAs: 'ctrl',
                backdrop: 'static',
                keyboard: false,
                class: 'modal-backdrop fade',
                size: 'sm',
                /*resolve: {
                    ObjRefCliente: function () {
                        return ObjRefCliente;
                    }
                }*/
            });
        }

        var vm = this;
        vm.OpenAddLocalidad = OpenAddLocalidad;
        vm.OpenUpdateLocalidad = OpenUpdateLocalidad;
        vm.OpenDeleteLocalidad = OpenDeleteLocalidad;
        initData();
        
    });