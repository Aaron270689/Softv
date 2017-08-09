'use strict';

angular
    .module('softvApp')
    .config(function ($stateProvider) {
        var states = [
            {
                name: 'home.catalogos',
                abstract: true,
                template: '<div ui-view></div>'
            },
            {
                name: 'home.catalogos.estados',
                data: {
                    pageTitle: 'SOFTV | CATÁLOGO ESTADOS',
                    permissions: {
                        options: {
                            reload: false
                        }
                    }
                },
                url: '/catalogo/estados',
                templateUrl: 'views/catalogos/Estados.html',
                controller: 'EstadosCtrl',
                controllerAs: '$ctrl'
            },
            {
                name: 'home.catalogos.ciudades',
                data: {
                    pageTitle: 'SOFTV | CATÁLOGO CIUDADES',
                    permissions: {
                        options: {
                            reload: false
                        }
                    }
                },
                url: '/catalogo/ciudades',
                templateUrl: 'views/catalogos/Ciudades.html',
                controller: 'CiudadesCtrl',
                controllerAs: '$ctrl'
            },
            {
                name: 'home.catalogos.plazas',
                data: {
                    pageTitle: 'SOFTV | CATÁLOGO PLAZAS',
                    permissions: {
                        options: {
                            reload: false
                        }
                    }
                },
                url: '/catalogo/plazas',
                templateUrl: 'views/catalogos/Plazas.html',
                controller: 'PlazasCtrl',
                controllerAs: '$ctrl'
            },
            {
                name: 'home.catalogos.localidades',
                data: {
                    pageTitle: 'SOFTV | CATÁLOGO LOCALIDADES',
                    permissions: {
                        options: {
                            reload: false
                        }
                    }
                },
                url: '/catalogo/localidades',
                templateUrl: 'views/catalogos/Localidades.html',
                controller: 'LocalidadesCtrl',
                controllerAs: '$ctrl'
            },
            {
                name: 'home.catalogos.distribuidores',
                data: {
                    pageTitle: 'SOFTV | CATÁLOGO DISTRIBUIDORES',
                    permissions: {
                        options: {
                            reload: false
                        }
                    }
                },
                url: '/catalogo/distribuidores',
                templateUrl: 'views/catalogos/Distribuidores.html',
                controller: 'DistribuidoresCtrl',
                controllerAs: '$ctrl'
            },
            {
                name: 'home.catalogos.colonias',
                data: {
                    pageTitle: 'SOFTV | CATÁLOGO COLONIAS',
                    permissions: {
                        options: {
                            reload: false
                        }
                    }
                },
                url: '/catalogo/colonias',
                templateUrl: 'views/catalogos/Colonias.html',
                controller: 'ColoniasCtrl',
                controllerAs: '$ctrl'
            },
            {
                name: 'home.catalogos.tipos_colonias',
                data: {
                    pageTitle: 'SOFTV | CATÁLOGO TIPOS DE COLONIAS',
                    permissions: {
                        options: {
                            reload: false
                        }
                    }
                },
                url: '/catalogo/tipos_colonias',
                templateUrl: 'views/catalogos/Tipos_colonias.html',
                controller: 'Tipos_coloniasCtrl',
                controllerAs: '$ctrl'
            },
            {
                name: 'home.catalogos.calles',
                data: {
                    pageTitle: 'SOFTV | CATÁLOGO CALLES',
                    permissions: {
                        options: {
                            reload: false
                        }
                    }
                },
                url: '/catalogo/calles',
                templateUrl: 'views/catalogos/Calles.html',
                controller: 'CallesCtrl',
                controllerAs: '$ctrl'
            },
            {
                name: 'home.catalogos.clientes',
                data: {
                    pageTitle: 'SOFTV | CATÁLOGO CLIENTES',
                    permissions: {
                        options: {
                            reload: false
                        }
                    }
                },
                url: '/catalogo/clientes',
                templateUrl: 'views/catalogos/Clientes.html',
                controller: 'ClientesCtrl',
                controllerAs: '$ctrl'
            }
        ];
        states.forEach(function (state) {
            $stateProvider.state(state);
        });
    });