angular.module('homeworkApp').controller('diva',function($scope,$http){
	$http({
		url:'http://www.somenote.cn:1602/list1',
		method:'get'
	}).success(function(e){
		$scope.z=e
	})
})

