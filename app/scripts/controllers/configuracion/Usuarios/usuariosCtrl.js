'use strict';
angular
  .module('softvApp')
  .controller('usuariosCtrl', function ($state, usuarioFactory, globalService, $uibModal, ordenesFactory) {

    function init() {
      ordenesFactory.getPlazas().then(function (data) {
        vm.plazas = data.GetMuestra_Compania_RelUsuarioListResult;
        vm.plaza = vm.plazas[0];
        console.log(data.GetMuestra_Compania_RelUsuarioListResult);
        vm.op = 0;
        GetList();
      });
    }

    function GetList() {
      var Parametros = {
        'ClvUsuario': (vm.claveusuario === null || vm.claveusuario === '') ? '' : vm.claveusuario,
        'Nombre': (vm.nombreusuario === null || vm.nombreusuario === '') ? '' : vm.nombreusuario,
        'Op': vm.op,
        'idcompania': (vm.plaza === null) ? 0 : vm.plaza.id_compania
      };
      usuarioFactory.GetUsuarioSoftvList(Parametros).then(function (result) {
        console.log(result);
      });
    }

    var vm = this;
    init();

  });
