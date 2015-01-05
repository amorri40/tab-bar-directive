// Tab Bar Directive
// =========

// This directive creates a very simple tab bar.

// Main purpose of this file:
//   - Really simple tab bar to remove duplicate code
define(['angular'], function(angular) {
    var directive_dash_name = "tab-bar-directive";
    var directive_camel_case = "tabBarDirective";
    angular.module(directive_dash_name, []).directive(directive_camel_case, ['$compile',

            function($compile) {
                return {
                    restrict: 'E',
                    templateUrl: './js/directives/' + directive_dash_name + '/' + directive_dash_name + '.html',
                    controller: directive_camel_case + 'Controller',
                    transclude: true,
                    link: function(scope, elem, attrs) {}
                }
            }
        ]) // end directive
        .controller(directive_camel_case + 'Controller', ['$scope',
            function($scope) {
                $scope.init = function(items, _default) {
                    //This function is sort of private constructor for controller, call using ng-init directive
                    $scope.items = items;
                    $scope.selected = {
                        item: _default
                    };

                };
            }
        ]); //end controller

}); // end RequireJS
