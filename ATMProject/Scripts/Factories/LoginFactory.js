var LoginFactory = function ($http, $q) {
    return function (cardNumber, pin) {

        var deferredObject = $q.defer();

        $http.post(
            '/Account/Login', {
                CardNumber: cardNumber,
                Pin: pin,
            }
        ).
            success(function (data) {
                if (data === "True") {
                    deferredObject.resolve({ success: true });
                } else {
                    deferredObject.resolve({ success: false });
                }
            }).
            error(function () {
                deferredObject.resolve({ success: false });
            });

        return deferredObject.promise;
    }
}

LoginFactory.$inject = ['$http', '$q'];