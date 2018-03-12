/**
 * @description
 */

formApp.directive('appIcon', function() {
    const ASSETBROWSER_SHOW_EVENT = 'org.ekstep.assetbrowser:show';
    var appIconController = ['$scope', '$controller', function($scope, $controller) {
        const DEFAUTL_APPICON = ecEditor.resolvePluginResource($scope.manifest.id, $scope.manifest.ver, "editor/directives/appIcon/assets/appIcon.png");
        $scope.contentMeta.appIcon = $scope.contentMeta.appIcon || DEFAUTL_APPICON;
        $scope.appIconConfig = {}
        $scope.invokeAssetBrowser = function() {
            ecEditor.dispatchEvent(ASSETBROWSER_SHOW_EVENT, {
                type: 'image',
                search_filter: {},
                callback: function(data) {
                    $scope.contentMeta.appIcon = data.assetMedia.src;
                }
            });
        }

        $scope.configureAppIcon = function() {
            _.forEach($scope.configurations, function(key, value) {
                if (key.inputType == 'file') {
                    $scope.appIconConfig = key;
                }
            })
        };
        $scope.configureAppIcon();
    }]
    return {
        restrict: "EA",
        templateUrl: ecEditor.resolvePluginResource("org.ekstep.metadata", "1.0", "editor/directives/appIcon/template.html"),
        controller: appIconController

    };
});

//# sourceURL=appIconDirective.js