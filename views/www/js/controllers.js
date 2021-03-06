/** *************Angular controller JS*********************/
"use strict"; 
app.controller('ContactController', function ($scope, $http) {
    $scope.result = 'hidden'
    $scope.resultMessage;
    $scope.formData; //formData is an object holding the name, email, subject, and message
    $scope.submitButtonDisabled = false;
    $scope.submitted = false; //used so that form errors are shown only after the form has been submitted
    $scope.submit = function(contactform, e) {
		e.preventDefault();
        $scope.submitted = true;
        $scope.submitButtonDisabled = true;
        if (contactform.$valid) {
            
            /*
            $http({
                method  : 'POST',
                url     : 'https://peinamebackend-cposada23.c9users.io/api/contactos/create',
                data    : $.param($scope.formData),  //param method from jQuery
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
            }).success(function(data){
                console.log(data);
                if (data.success) { //success comes from the return json object
                    $scope.submitButtonDisabled = false;
		$scope.formData = null;
                    $scope.resultMessage = data.message;
                    $scope.result='bg-success';
                } else {
                    $scope.submitButtonDisabled = false;
					$scope.resultMessage = data.message;
                    $scope.result='bg-danger';
                }
            });
            */
            
            $http.post('http://www.peiname.me/api/contactos/create', $scope.formData).success(function (data) {
                console.log(JSON.stringify(data));
                
                $scope.submitButtonDisabled = false;
		        $scope.formData = null;
                $scope.resultMessage = data.message;
                $scope.result='bg-success';
                
            }).error(function (error) {
                console.error(error);
            });
            
        } else {
            $scope.submitButtonDisabled = false;
            $scope.resultMessage = 'Failed :( Please fill out all the fields.';
            $scope.result='bg-danger';
        }
    }
})
.controller('asesoresController', function($scope, $http){
    $scope.asesores = [{
        imagen : 'views/www/img/team1.jpg',
        nombre : 'edith',
        cargo : 'marketing',
        fb : 'https://www.facebook.com/edith.h.tovar.9',
        twitter : 'https://twitter.com/MentorEDITH',
        linkedin : '',
        instagram : ''
    },{
        imagen : 'views/www/img/team2.jpg',
        nombre : 'david',
        cargo : 'cco',
        fb : 'https://www.facebook.com/edith.h.tovar.9',
        twitter : 'https://twitter.com/MentorEDITH',
        linkedin : 'https://twitter.com/MentorEDITH',
        instagram : ''
    },{
        imagen : 'views/www/img/team3.jpg',
        nombre : 'jhon',
        cargo : 'ceo',
        fb : 'https://www.facebook.com/edith.h.tovar.9',
        twitter : '',
        linkedin : 'https://twitter.com/MentorEDITH',
        instagram : ''
    },{
        imagen : 'views/www/img/team4.jpg',
        nombre : 'elina',
        cargo : 'ceo',
        fb : 'https://www.facebook.com/edith.h.tovar.9',
        twitter : '',
        linkedin : '',
        instagram : 'https://twitter.com/MentorEDITH'
    }];
    
})
.controller('cRegresivaController', function($scope){
    $scope.cantidad = parseInt(((new Date("03/31/2016"))-(new Date()))/86400000);
});