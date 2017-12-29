var LoginFactory = function ($http, $q) {
    return function (cardNumber, pin) {       
        var deferredObject = $q.defer();
        
        $http({ method: 'POST', url: '/Account/Login', data: { CardNumber: cardNumber, Pin: pin } })
            .then(function successCallback(response) {            
                if (response.data === "True") {
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