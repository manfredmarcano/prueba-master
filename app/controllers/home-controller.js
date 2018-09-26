app.controller("homeController", [function(){
    var vm = this;

    vm.isCollapsed = true;

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

    vm.dateFrom = null;
    vm.dateTo = null;
    vm.datepickerOptions = {
        minDate: new Date('2010-05-01'),
        initDate: new Date()
    };

    vm.totalItems = 64;
    vm.currentPage = 4;

}]);