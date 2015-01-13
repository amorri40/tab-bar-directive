// Tab Bar Directive
// =========

// This directive creates a very simple tab bar.

// Main purpose of this file:
//   - Really simple tab bar to remove duplicate code
var bu2 = document.querySelector("script[src$='tab-bar-directive.js']");
var currentScriptPath = bu2.src;
var baseUrl = currentScriptPath.substring(0, currentScriptPath.lastIndexOf('/') + 1);

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
                        // transclude(scope.$parent, function(clone, scope) {
                        //     elem.append(clone);
                        //   });
                    },
                    scope:{items:'=', selected:'=', dynamic:'=',oncreate:'=', onshow:'=', notabs:'@'}
                }
            }
        ]) // end directive
        .controller(directive_camel_case + 'Controller', ['$scope', '$timeout',
            function($scope, $timeout) {
                console.log($scope.items, $scope.selected)

                if (typeof $scope.notabs === 'undefined') {
                    $scope.notabs=false;
                }

                if (typeof $scope.selected !== 'undefined')
                {
                    $scope.selected_item=$scope.selected
                }
                else {
                    $scope.selected_item=$scope.items[0];
                }
                if (typeof $scope.onshow === 'undefined') {
                    $scope.onshow= function(item) {
                        console.log('default onshow')
                    }
                }

                $scope.setSelected = function(name) {
                    $scope.selected_item=name;
                    $scope.timeoutForLoad = $timeout(function() {
                        $scope.onshow(name);
                    },100);
                    // $scope.onshow(name);
                }


                $scope.isSelected = function(name) {
                    if ($scope.items.indexOf(name) === -1) {
                        $scope.items.push(name);
                        $scope.setSelected(name);
                        console.log(name,' not in items');
                    }
                    return $scope.selected_item === name;
                }
                $scope.tabbarDirective = {available:true};
                $scope.tabbarDirective.isSelected = $scope.isSelected;

            }
        ]); //end controller

}); // end RequireJS
