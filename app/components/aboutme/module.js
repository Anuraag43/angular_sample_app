let myapp= angular.module("Myapp",[]);

let mycontroller = function($scope){
    $scope.message="Hello World";

}

myapp.controller("MyController", mycontroller)

let JSONController = function($scope){
    let Student = {
        FirstName : "Anurag",
        LastName : "San",
        Email: "anuraagsan729@gmail.com" 
    }

    $scope.Student = Student;

}

myapp.controller("Student", JSONController);