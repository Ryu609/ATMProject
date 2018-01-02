var LandingPageController = function ($scope, WithdrawAmountFactory) {
    $scope.navbarProperties = {
        isCollapsed: true
    };

    $scope.Withdraw = function (item) {
        var result = WithdrawAmountFactory(item);
    }
}

LandingPageController.$inject = ['$scope', 'WithdrawAmountFactory'];