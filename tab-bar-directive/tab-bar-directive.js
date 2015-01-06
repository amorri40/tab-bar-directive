// Tab Bar Directive
// =========

// This directive creates a very simple tab bar.

// Main purpose of this file:
//   - Really simple tab bar to remove duplicate code
var bu2 = document.querySelector("script[src$='tab-bar-directive.js']");
var currentScriptPath = bu2.src;
var baseUrl = currentScriptPath.substring(0, currentScriptPath.lastIndexOf('/') + 1);
console.log(currentScriptPath);

define(['angular'], function(angular) {
    var directive_dash_name = "tab-bar-directive";
    var directive_camel_case = "tabBarDirective";
    angular.module(directive_dash_name, []).directive(directive_camel_case, ['$compile',

            function($compile) {
                return {
                    restrict: 'E',
                    templateUrl: currentScriptPath.replace('directive.js', 'directive.html'),//'./js/directives/' + directive_dash_name + '/' + directive_dash_name + '.html',
                    controller: directive_camel_case + 'Controller',
                    transclude: true,
                    link: function(scope, elem, attrs, ctrl, transclude) {
                        transclude(scope.$parent, function(clone, scope) {
                            element.append(clone);
                          });
                    },
                    scope:{items:'=', selected:'='}
                }
            }
        ]) // end directive
        .controller(directive_camel_case + 'Controller', ['$scope',
            function($scope) {
                console.log($scope.items, $scope.selected)
                $scope.selected_item=$scope.selected

                $scope.isSelected = function(name) {
                    return $scope.selected_item === name;
                }

            }
        ]); //end controller

}); // end RequireJS
