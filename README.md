tab-bar-directive
=================

Very simple angular tab bar directive

# Usage
```HTML
<tab-bar-directive ng-init="init(items,items[0])">
  <page1-directive ng-show="selected.item == items[0]"></page1-directive>
  <page2-directive ng-show="selected.item == items[1]"></page2-directive>
</tab-bar-directive>
```
```JAVASCRIPT
$scope.items = ['Page 1', 'Page 2'];
```
