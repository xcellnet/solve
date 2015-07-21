var app = angular.module('myApp', []);

function escapeRegExp(string){
    return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}
function MyController($scope) {
    $scope.names = [
    'Lolita Dipietro',
    'Annice Guernsey',
    'Gerri Rall',
    'Ginette Pinales',
    'Lon Rondon',
    'Jennine Marcos',
    'Roxann Hooser',
    'Brendon Loth',
    'Ilda Bogdan',
    'Jani Fan',
    'Grace Soller',
    'Everette Costantino',
    'Andy Hume',
    'Omar Davie',
    'Jerrica Hillery',
    'Charline Cogar',
    'Melda Diorio',
    'Rita Abbott',
    'Setsuko Minger',
    'Aretha Paige'];
    
    $scope.filterBySearch = function(name) {
        if (!$scope.search) return false;
        var regex = new RegExp('\\b' + escapeRegExp($scope.search), 'i');
        return regex.test(name);
    };
}