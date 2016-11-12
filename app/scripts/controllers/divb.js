angular.module('homeworkApp').controller('divb',function($scope,$http){
	$http({
		url:'http://www.somenote.cn:1602/list2',
		mothod:'get'
	}).success(function(e){
		$scope.f=e
	})
})
