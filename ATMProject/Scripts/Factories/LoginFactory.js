var LoginFactory = function ($http, $q) {
    return function (cardNumber, pin) {
        console.log(cardNumber, pin)
        var deferredObject = $q.defer();

        //$http.post(
        //    '/Account/Login', {
        //        CardNumber: cardNumber,
        //        Pin: pin,
        //    })
        //    .success(function (data) {
        //        if (data === "True") {
        //            deferredObject.resolve({ success: true });
        //        } else {
        //            deferredObject.resolve({ success: false });
        //        }
        //    })
        //    .error(function () {
        //        deferredObject.resolve({ success: false });
        //    });
        $http({ method: 'POST', url: '/Account/Login', data: { CardNumber: cardNumber, Pin: pin } }).then(function successCallback(response) {
            console.log(response);
            if (response === "True") {
                deferredObject.resolve({ success: true });
            } else {
                deferredObject.resolve({ success: false });
            }
        }, function errorCallback(response) {
            deferredObject.resolve({ success: false });
        });

        return deferredObject.promise;
    }
}

LoginFactory.$inject = ['$http', '$q'];