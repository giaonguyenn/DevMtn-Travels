angular.module("devmtnTravel").controller("bookedCtrl", function($scope, mainSrv, $stateParams) {

	console.log($stateParams);

    this.getId = function(id) {
    	for(var key in mainSrv.packageInfo) {
    		if (mainSrv.packageInfo[key].id == id) {
    			return mainSrv.packageInfo[key];
    		}
    	}
    };
    $scope.gotEm = this.getId($stateParams.id);
});