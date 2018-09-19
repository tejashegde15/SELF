var firstModule=angular.module("firstModule",[]);
firstModule.controller("myCtrl", [ '$scope', '$http', function($scope, $http) {
	 
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded; charset=utf-8";
     

$scope.sendPost=function(){	
         $http({
        	method:"GET",
        	url:"Angular",
        	params:
        	{'id':$scope.userid}
         }).then(function fSuccess(response){
        	 $scope.dive=response.data;
         },function fError(response){
        	 $scope.dive=response.data;
         });
		
			
};

}] );





