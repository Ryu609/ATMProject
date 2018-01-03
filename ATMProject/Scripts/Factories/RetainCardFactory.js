var RetainCardFactory = function ($http, $q) {   
    return function (cardNumber) {
        var deferredObject = $q.defer();        
        $http({
            method: 'POST', url: '/CardReader/Retain', data: { CardNumber: cardNumber }
        })
            .then(function successCallback(response) {
                if (response.data === "True") {                   
                    deferredObject.resolve({ success: true });                   
                }
            });

        return deferredObject.promise;
    }
}

RetainCardFactory.$inject = ['$http', '$q'];