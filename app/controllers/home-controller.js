app.controller("homeController", ['$scope', function($scope) {
    var vm = this;

    /* Contenido de la caja */
    vm.box = {
        title: 'Título Caja',
        list: {
            title: 'Lorem Ipsum',
            items: [
                'Dolor sit Amet, consectetur adipiscing elit',
                'Dolor sit Amet, consectetur adipiscing elit',
                'Dolor sit Amet, consectetur adipiscing elit',
                'Dolor sit Amet, consectetur adipiscing elit',
            ]
        },
        pricesList: [
            {
                description: 'Dolor sit Amet, consectetur adipiscing elit. Duis non tincidunt nulla. Morbi at sapien viverra, porttitor eros a',
                price: '2000000000000000000'
            },
            {
                description: 'Dolor sit Amet, consectetur adipiscing elit.',
                price: '2000000000000000000'
            }
        ]
    };

    /* Formulario oculto */
    vm.isCollapsed = true;
    
    /* Datepickers */
    vm.dateFrom = null;
    vm.dateTo = null;
    vm.datepickerOptions = {
        minDate: new Date('2010-05-01'),
        initDate: new Date()
    };

    /* Tabla y paginación */
    vm.tableItems = [
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '200000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '100000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '50000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '200000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '100000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '50000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '200000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '100000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '50000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '100000' },

        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '300000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '4100000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '70000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '100000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '200000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '10000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '300000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '700000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '20000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '300000' },

        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '200000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '100000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '50000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '200000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '100000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '50000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '200000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '100000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '50000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '100000' },

        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '300000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '4100000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '70000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '100000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '200000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '10000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '300000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '700000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '20000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '300000' },

        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '200000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '100000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '50000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '200000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '100000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '50000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '200000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '100000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '50000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '100000' },

        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '300000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '4100000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '70000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '100000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '200000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '10000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '300000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '700000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '20000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '300000' },

        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '200000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '100000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '50000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '200000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '100000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '50000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '200000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '100000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '50000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '100000' },

        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '300000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '4100000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '70000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '100000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '200000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '10000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '300000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '700000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '20000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '300000' },

        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '200000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '100000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '50000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '200000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '100000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '50000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '200000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '100000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '50000' },
        { lorem: 'XXXXXXXXXX', ipsum: 'XXXXXXXXXX', dolor: 'XXXXXXXXXX', sit: 'XXXXXXXXXX', amet: '100000' },
    ];

    vm.totalItems = vm.tableItems.length;
    vm.currentPage = 1;
    vm.itemsPerPage = 10;

    $scope.$watch('vm.currentPage', function() {
        setPagingData(vm.currentPage);
    });

    function setPagingData(page) {
        vm.currentPage = page;
        vm.pagedData = vm.tableItems.slice((page - 1) * vm.itemsPerPage, page * vm.itemsPerPage);
    }
}]);