"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}!function(){angular.module("webcat",["ui.router","webcat.firedux","webcat.components"])}(),angular.module("webcat").run(["$templateCache",function(t){t.put("webcat/wc-settings/wc-settings-youtube/wc-settings-youtube.html",'<wc-settings-option icon="link" on-click="$ctrl.getUrl()" text="Update Youtube"></wc-settings-option>')}]),angular.module("webcat").run(["$templateCache",function(t){t.put("webcat/wc-settings/wc-settings-social/wc-settings-social.html","<wc-settings-option ng-repeat=\"icon in ['facebook', 'twitter', 'instagram', 'youtube', 'soundcloud', 'tumblr']\" text=\"Edit {{icon}}\" on-click=\"$ctrl.update(icon)\"></wc-settings-option>")}]),angular.module("webcat").run(["$templateCache",function(t){t.put("webcat/wc-settings/wc-settings-option/wc-settings-option.html",'<md-menu-item><md-button ng-click="$ctrl.onClick({$event:$event})"><div layout="row" flex="flex"><p flex="flex">{{$ctrl.text}}</p><md-icon md-menu-align-target="md-menu-align-target" style="margin: auto 3px auto 0;">{{$ctrl.icon}}</md-icon></div></md-button></md-menu-item>')}]),angular.module("webcat").run(["$templateCache",function(t){t.put("webcat/wc-settings/wc-settings-file/wc-settings-file.html",'<md-menu-item><md-button><input type="file" ngf-select="$ctrl.update($file)" ngf-multiple="false" accept="image/*" ngf-resize="$ctrl.dimensions" class="hidden-input"/><span flex="flex">{{$ctrl.uploadText?$ctrl.uploadText:\'Upload Image\'}}</span><md-icon md-menu-align-target="md-menu-align-target" style="margin: auto 3px auto 0;">{{$ctrl.uploadIcon?$ctrl.uploadIcon:\'photo\'}}</md-icon></md-button></md-menu-item><md-menu-item ng-if="$ctrl.data"><md-button ng-click="$ctrl.delete()"><div layout="row" flex="flex"><p flex="flex">{{$ctrl.removeText?$ctrl.removeText:\'Remove Image\'}}</p><md-icon md-menu-align-target="md-menu-align-target" style="margin: auto 3px auto 0;">{{$ctrl.removeIcon?$ctrl.removeIcon:\'delete\'}}</md-icon></div></md-button></md-menu-item>')}]),angular.module("webcat").run(["$templateCache",function(t){t.put("webcat/wc-youtube/wc-youtube.html",'<wc-settings ng-if="$ctrl.authData &amp;&amp; !$ctrl.readonly" icon="movie" position="{{$ctrl.position}}" margin-top="{{$ctrl.marginTop}}"><wc-settings-option icon="link" on-click="$ctrl.getUrl()" text="Update link"></wc-settings-option></wc-settings><ng-transclude></ng-transclude><div ng-if="!disabled &amp;&amp; ($ctrl.data.ref || $ctrl.data.data.ref)" ob-lazytube="{{$ctrl.data.ref || $ctrl.data.data.ref}}">Video</div><div ng-if="disabled || (!$ctrl.data.ref &amp;&amp; !$ctrl.data.data.ref)" ob-lazytube="plop">Video</div>')}]),angular.module("webcat").run(["$templateCache",function(t){t.put("webcat/wc-text/wc-text.html",'<p medium-editor="medium-editor" ng-if="$ctrl.show &amp;&amp; ($ctrl.authData || $ctrl.data)" bind-options="$ctrl.settings" data-placeholder="{{$ctrl.placeholder}}" ng-model="$ctrl.data" ng-blur="$ctrl.onUpdate({$data:$ctrl.data})" ng-href="{{$ctrl.wcHref}}"></p>')}]),angular.module("webcat").run(["$templateCache",function(t){t.put("webcat/wc-social/wc-social.html",'<div class="socialLinks"><wc-auth ng-if="$ctrl.placeholder &amp;&amp; !$ctrl.data.facebook &amp;&amp; !$ctrl.data.twitter &amp;&amp; !$ctrl.data.instagram &amp;&amp; !$ctrl.data.youtube &amp;&amp; !$ctrl.data.soundcloud &amp;&amp; !$ctrl.data.tumblr">{{$ctrl.placeholder}}</wc-auth><a ng-href="{{$ctrl.data.facebook}}" ng-if="$ctrl.data.facebook" target="_blank" style="background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAA7ElEQVRIS+2W3Q0BURCFv1MBKkAHStAJOqADHdABKqEFFaCDVcGVs9mV6yfirt2ExDzOw3wzd86dGQGEENrAAhgCPfs+sCOwA2aSMhXBD4AhdVoG9A1YA6M6I0exNga4pG5DgKMBoWLwEzAHnGBpg6KXV0dVwEbS+D6xEIJFso39VQB7Sc70weoCTCRZGI0BOtZ39H9WkcQt9Zvqkp9IksrUnz3JfVnfAYizfiXpyk3+A5JGxW+q6Ga2/OQ/+LSCpIWT2ORT8spMBOQr0xPQVbTe2WwJgLMvlHwyFpBlcba83M9vALxKfbZMPdYvXf695sgXGpsAAAAASUVORK5CYII=)" class="facebook"></a><a ng-href="{{$ctrl.data.twitter}}" ng-if="$ctrl.data.twitter" target="_blank" style="background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABkElEQVRIS7VVi03DQBSzJ6AbwAaUCYAJKBNQJgAmADaACaAblAkaNoANYALaCYxc3Z2a/yVqnxQpSu7sZ99774gDBw+Mj9EEki4A3AA4AbAGsCS5iAlLmvh9SyDpHkBB8itHkaT3AF5d7v1PAEx+SXIaCfzjOHzsJJFkgMeeRDaBZBIJFDZY6i3JZRuAJK856iH4AWCLriOBP1hBDBM8kPT3FMH3VYaNVjAjWUSCNk9N5H+fJNcDCJ5J2sp0yJbjbLuk2xqvmWYoqBE4yz8ArqZ9hM/RmElBAeB8H8gBwyVqzEQwB/C2J4INyW2TJYLQbG0HPZT3g+SsRhBIfAZ+dkt2KEGyp6rAM8UqTkOTDAX2epezx0SK0rCT9ALgbgxy2HNWnWe1aZo5a5pycOc7wVI0jmtJtstScytrQdKVWIsmBS6xKwDOJpVbh22vJFsblJJcUj5Yh8eAM88B/gUwjw3VlkAcdpbnJ6ebv11tTX73WrTjfTwD7/GQ8yUUr8XSCO+ruNF3ch9wYyfnbhqy7h/cqY+gzODOagAAAABJRU5ErkJggg==)" class="twitter"></a><a ng-href="{{$ctrl.data.instagram}}" ng-if="$ctrl.data.instagram" target="_blank" style="background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABmklEQVRIS9VWC00DURCcUQAooCgAFFAcFAXgAFBAqwBwUBRQB4CDooBWAaBgyFz2XR7X+5UWEja5XK7v7cy+3dl9JQBIGgM4BzDw9xZsAWBKckJJdwAutwBaB1EQmG1/A4JPAPPMfxfAYXwvTKANwO06IekUlybJhAXJbxE8Azj51wRrp8iFnAKYRaJHAC4A7AD4iDW/bUcAvF5Ynxq8AhiSTACFoySrxYRFrpusi2DpiKrgCSxInI5GmecEjvQqjngbINck3YiNJsk+5f7oCfusyPSF5LDicErSkmsjGAJ4ig1FT0iqlemfEaxEtEaKzkjOuk5gdbwHqJVz0FHkNwD2se15bytBSDCfsFaJI/NQLE2SR/tjiMK/P5B0b1jCzTXINF6VnxstkRjczZQidyMO0kk7CYLEHWnQNHqbSuFeGZEsR3Yvguwk1rkfj4Wq3QMY13R5e4rqQpVkdaUrddHWH00nmJM8bpNk37XqhZNfmc7jt6HWFzTb58K7fralZ5Gvu5sfAPVxmTCKaRJreJPLPye0svy3ZfwF/OwYk/IcfwEAAAAASUVORK5CYII=)" class="instagram"></a><a ng-href="{{$ctrl.data.youtube}}" ng-if="$ctrl.data.youtube" target="_blank" style="background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABz0lEQVRIS+2W/TEEQRTEuzMgAjIgAycDInAiQASIABE4GRCBk8GJABGQQavf1szVYM99+dNUXc3ezM7r99H9Zq2ekWQi6cP2IMm9pF3b233vzlvzDIChpFtJm5LeJZ3Zvp5nrG+/F4AXk3xIwvujAkQEJ5Imtm+SDCSxNuYd25fLAlxIOpd0Z3uY5LUYwzB7GK/Pj7Z7nf0tAg4/Sjq0fZ8kkvaLcbxm/AnAvu3xP8APAhSWUIOaIrRBHSjuIdqQdCXpWdLOKkXGEHoY2X5NsiHpoNAUMKhMkWHXNnVaiKZJMLy1iqgkveFMe3ZK0+Ih6sXLdQbiPLaNUNUCjIpq1zFez97YPv0OAOK1bVTajabQU1CKmaSqfJYzNEr62JcIYAj5ewA9Cc1tr7BlWQBVVrUpAoDxVNo0rACQ1AFGyES4mwSKwqrakw5sT9rIFgUYk7IkzNwNdQa0ZUvtqMelpSwcwSwADLa853lQnOkysW4E3wGIqGqnA/5rAGxyd3DpMC8NMLQ9amqAGKF1vdWIgLZC0V9mAVA0wqTPdIwpTOFg/c8aSq1XZWURM6lhH4bRMrqPhJam88SzjMKnHwlfrswkeMpv1WZH66b7Tr9APgG51EwowsEFGwAAAABJRU5ErkJggg==)" class="youtube"></a><a ng-href="{{$ctrl.data.soundcloud}}" ng-if="$ctrl.data.soundcloud" target="_blank" style="background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABK0lEQVRIS+2V4W3CMBSE7yYobJBuABtkhHSDdoN0A7oBI3SEMAF0g2xQukE6waGTbGS5AQMtUn/EfyLFzvvu3b0kxJ0X71wfE6Do8P+0SFINQAC+SO7PtXF1B5IGAA9J0R2AN5K+/lhnAZIqKwyKG5KtJCsfWy8k3/ONUYCkHcla0hpAFx5ahXunAO5smVt2BEhauBDJPgG47dWFAB97JWlRx5UCWgB7kt0vAA68dx0AG+fCxOeo1Ao+Sc4NurKDPIInA3qSC0kR4KJbkt6LgArAcyGDseB7F3Fojy4QTuQAhzwDUN8A+DagI9kkHdgid1X9gUWbNAN3MGQhW32cijYIOTWmuUUfAJp0imyDx3TwyIZxjS+a92bJS1f6yFmop2n6H5ScmiwqO4QD6PXD2cI3VgkAAAAASUVORK5CYII=)" class="soundcloud"></a><a ng-href="{{$ctrl.data.tumblr}}" ng-if="$ctrl.data.tumblr" target="_blank" style="background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAA9ElEQVRIS+2WYQ3CMBSE7xzgAJwADnAAKAAc4AAkgAJwAHMACkACDo5cGElpGtZ02S94ybJkfdv3eq+9jsgISSMApyB1TPKc8SqYkyRpCWDTJcDVDjsBJKo3p71EknoAFgDWCRnbASRtAUwBGJKKC4BHNHAl6V59RLLJkmLNc9ZCRdKr7UcAMwCD+nIv4tgDuEcP7yR3WRK9kxI7+D3UbhX9AWEfvprdvweWqlSiFUn7VWOUAmx2c5K+Q9LExliy0bybb41lvhLyzS78oCRbQj8DUgzw9A+dAWqN40M/xSubQeBL7odd1odK+ANQ1c56JHmMyU/MX4MZgzJRcgAAAABJRU5ErkJggg==)" class="tumblr"></a><wc-settings ng-if="!$ctrl.readonly" icon="more_vert" class="relative"><wc-settings-option ng-repeat="icon in [\'facebook\', \'twitter\', \'instagram\', \'youtube\', \'soundcloud\', \'tumblr\']" text="Edit {{icon}}" on-click="$ctrl.update(icon)"></wc-settings-option></wc-settings></div>')}]),angular.module("webcat").run(["$templateCache",function(t){t.put("webcat/wc-stretch-button/wc-stretch-button.html",'<div ng-if="$ctrl.authData" class="wc-stretch-button"><md-icon>{{$ctrl.icon?$ctrl.icon:\'add\'}}</md-icon></div>')}]),angular.module("webcat").run(["$templateCache",function(t){t.put("webcat/wc-settings/wc-settings.html",'<div ng-style="{marginTop: $ctrl.marginTop}" ng-class="\'{{$ctrl.align}}\'" ng-if="$ctrl.authData" class="settingsWrapper"><md-menu md-theme="wc-settings" md-position-mode="target-{{$ctrl.align||\'right\'}} target" ng-class="\'position-{{$ctrl.position}}\'" class="toolbar-menu"><md-button ng-click="$mdOpenMenu(ev)" class="md-icon-button toolbar-button"><md-icon md-menu-origin="md-menu-origin" class="wcSettingsOrigin">{{$ctrl.icon||\'settings\'}}</md-icon></md-button><md-menu-content width="{{$ctrl.width || 3}}"><div ng-transclude="ng-transclude"></div></md-menu-content></md-menu></div>')}]),angular.module("webcat").run(["$templateCache",function(t){t.put("webcat/wc-media/wc-media.html",'<wc-settings ng-if="$ctrl.authData" icon="photo" position="{{$ctrl.position}}" margin-top="{{$ctrl.marginTop}}"><md-menu-item><md-button><input type="file" ngf-select="$ctrl.update($file)" ngf-multiple="false" accept="image/*" ngf-resize="$ctrl.dimensions" class="hidden-input"/><span flex="flex">Upload image</span><md-icon md-menu-align-target="md-menu-align-target" class="menu-right">photo</md-icon></md-button></md-menu-item><wc-settings-option ng-if="$ctrl.data.url" icon="delete" on-click="$ctrl.delete()" text="Delete image"></wc-settings-option></wc-settings><ng-transclude></ng-transclude><div ng-if="$ctrl.isBackground &amp;&amp; ($ctrl.authData || $ctrl.data.url)" ng-click="$ctrl.onClick()" ng-style="{backgroundImage: \'url(\'+$ctrl.getUrl($ctrl.data.ref)+\')\'}" class="img-wrapper"></div><img ng-if="!$ctrl.isBackground &amp;&amp; ($ctrl.authData || $ctrl.data.url)" ng-click="$ctrl.onClick()" ng-src="{{$ctrl.getUrl($ctrl.data.ref)}}"/>')}]),angular.module("webcat").run(["$templateCache",function(t){t.put("firedux/dialog/select-dialog.html",'<firedux ng-if="$ctrl.params.async" array-ref="{{$ctrl.params.ref}}" on-data="$ctrl.items=$data"></firedux><md-dialog aria-label="Select"><md-toolbar style="z-index:3" class="md-whiteframe-2dp"><div class="md-toolbar-tools"><h2>{{$ctrl.title}}</h2><div flex="flex"></div></div></md-toolbar><md-dialog-content><md-progress-linear ng-if="!$ctrl.items" md-mode="indeterminate"></md-progress-linear><md-list><md-list-item ng-click="$ctrl.hide(item.$id)" ng-repeat="item in $ctrl.items" ng-style="{fontWeight:item.$id===$ctrl.params.default?700:400}">{{item.title}}</md-list-item></md-list></md-dialog-content><md-dialog-actions><div flex="flex"></div><md-button ng-click="$ctrl.cancel()">cancel</md-button></md-dialog-actions></md-dialog>')}]),angular.module("webcat").run(["$templateCache",function(t){t.put("firedux/dialog/progress-dialog.html",'<md-dialog aria-label="Uploading"><md-toolbar style="z-index:3" class="md-whiteframe 2dp"><div class="md-toolbar-tools"><h2>{{$ctrl.title}}</h2><div flex="flex"></div><h2>{{$ctrl.progress.percentage | number : 0}}%</h2></div></md-toolbar><md-dialog-content><md-progress-linear md-mode="determinate" value="{{$ctrl.progress.percentage || 0}}"></md-progress-linear><input ng-show="false" ng-model="$ctrl.progress.percentage" ng-change="$ctrl.hide()"/></md-dialog-content></md-dialog>')}]),angular.module("webcat").run(["$templateCache",function(t){t.put("firedux/dialog/new-password-dialog.html",'<md-dialog aria-label="Select" class="firedux-dialog"><md-toolbar style="z-index:3" class="md-whiteframe-2dp"><div class="md-toolbar-tools"><h2>Change Password</h2><div flex="flex"></div></div></md-toolbar><md-dialog-content layout="column" layout-padding="layout-padding"><form ng-submit="$ctrl.password===$ctrl.pass2?$ctrl.hide($ctrl.password):null"><md-input-container class="no-messages md-block"><label>New Password</label><input type="password" ng-model="$ctrl.password"/></md-input-container><md-input-container class="no-messages md-block"><label>Re Enter Password</label><input type="password" ng-model="$ctrl.pass2"/></md-input-container></form></md-dialog-content><md-dialog-actions><div flex="flex"></div><md-button ng-click="$ctrl.cancel()">cancel</md-button><md-button ng-disabled="$ctrl.password!==$ctrl.pass2 || $ctrl.password.length &lt; 6" ng-click="$ctrl.password===$ctrl.pass2?$ctrl.hide($ctrl.password):null" class="md-accent">Save</md-button></md-dialog-actions></md-dialog>')}]),angular.module("webcat").run(["$templateCache",function(t){t.put("firedux/dialog/login-dialog.html",'<md-dialog aria-label="Select" class="firedux-dialog"><md-toolbar style="z-index:3" class="md-whiteframe-2dp"><div class="md-toolbar-tools"><h2>Login</h2><div flex="flex"></div></div></md-toolbar><md-dialog-content layout="column" layout-padding="layout-padding"><form ng-submit="$ctrl.hide($ctrl.credentials)"><md-input-container class="no-messages md-block"><label>Email</label><input ng-model="$ctrl.credentials.email"/></md-input-container><md-input-container class="no-messages md-block"><label>Password</label><input type="password" ng-model="$ctrl.credentials.password"/></md-input-container></form></md-dialog-content><md-dialog-actions><div flex="flex"></div><md-button ng-click="$ctrl.cancel()">cancel</md-button><md-button ng-click="$ctrl.hide($ctrl.credentials)" class="md-accent">Login</md-button></md-dialog-actions></md-dialog>')}]);var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}();!function(){var t=function(){function t(e){_classCallCheck(this,t),this.Auth=e}return t.$inject=["Auth"],_createClass(t,[{key:"authData",get:function(){return this.Auth.authData}}]),t}();angular.module("webcat.settings",[]).component("wcSettings",{templateUrl:"_components/_webcat/wc-settings/wc-settings.html",controller:t,transclude:!0,bindings:{width:"@",icon:"@",position:"@",marginTop:"@",align:"@"}})}();var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}();!function(){var t=function(){function t(e){_classCallCheck(this,t),this.$dialog=e.$dialog({prompt:{es:{SELECT_YOUTUBE:{title:"Add Youtube Video",description:"Enter the url of the video that you want to embed"}}}})}return t.$inject=["Dialog"],_createClass(t,[{key:"getUrl",value:function(){var t=this,e=this.$dialog.prompt("SELECT_YOUTUBE");e().then(function(e){var n=/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i,a=e.match(n)[1];t.onUpdate({$data:{ref:a,url:null}})})}}]),t}();angular.module("webcat.settings").component("wcSettingsYoutube",{templateUrl:"_components/_webcat/wc-settings/wc-settings-youtube/wc-settings-youtube.html",controller:t,bindings:{data:"<",onUpdate:"&"}})}();var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}();!function(){var t=function(){function t(e){_classCallCheck(this,t),this.$dialog=e.$dialog({prompt:{es:{GET_URL:{title:"Enter Url",description:"Leave blank if you want to remove the icon"}}}})}return t.$inject=["Dialog"],_createClass(t,[{key:"update",value:function(t){var e=this,n={};angular.isObject(this.data)&&(n=this.data),this.$dialog.prompt("GET_URL")().then(function(a){n[t]=a?a:"",e.onUpdate({$data:n})})}}]),t}();angular.module("webcat.settings").component("wcSettingsSocial",{templateUrl:"_components/_webcat/wc-settings/wc-settings-social/wc-settings-social.html",controller:t,bindings:{data:"<",onUpdate:"&"}})}(),function(){angular.module("webcat.settings").component("wcSettingsOption",{templateUrl:"_components/_webcat/wc-settings/wc-settings-option/wc-settings-option.html",bindings:{icon:"@",text:"@",onClick:"&"}})}();var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}();!function(){var t=function(){function t(e){_classCallCheck(this,t),this.Storage=e}return t.$inject=["Storage"],_createClass(t,[{key:"delete",value:function(){var t=this;Promise.resolve().then(function(){return t.Storage.remove(t.data.ref)}).then(function(){t.onUpdate({$data:null})})}},{key:"update",value:function(t){var e=this,n=void 0;t&&Promise.resolve().then(function(){return e.Storage.upload(t)}).then(function(t){var a=Promise.resolve();return n=t,angular.isObject(e.data)&&(a=e.Storage.remove(e.data.ref)),a}).then(function(){e.onUpdate({$data:n})})}}]),t}();angular.module("webcat.settings").component("wcSettingsFile",{templateUrl:"_components/_webcat/wc-settings/wc-settings-file/wc-settings-file.html",controller:t,bindings:{data:"<",uploadIcon:"@",removeIcon:"@",uploadText:"@",removeText:"@",dimensions:"<",onUpdate:"&"}})}();var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}();!function(){var t=function(){function t(e,n,a){_classCallCheck(this,t),this.Auth=e,this.$timeout=a,this.$dialog=n.$dialog({prompt:{es:{SELECT_YOUTUBE:{title:"Add Youtube video",description:"Enter the url of the video that you want to embed"}}}})}return t.$inject=["Auth","Dialog","$timeout"],_createClass(t,[{key:"getUrl",value:function(){var t=this,e=this.$dialog.prompt("SELECT_YOUTUBE");e().then(function(e){var n=/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i,a=e.match(n)[1];t.onUpdate({$data:{ref:a,url:null}}),t.disabled=!0,t.$timeout(function(){t.disabled=!1})})}},{key:"authData",get:function(){return this.Auth.authData}}]),t}();angular.module("webcat.youtube",["oblador.lazytube"]).component("wcYoutube",{templateUrl:"_components/_webcat/wc-youtube/wc-youtube.html",controller:t,transclude:!0,bindings:{data:"<",onUpdate:"&",position:"@",readonly:"<"}})}();var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}();!function(){var t=function(){function t(e,n,a){_classCallCheck(this,t),this.$element=n,this.$timeout=e,this.Auth=a}return t.$inject=["$timeout","$element","Auth"],_createClass(t,[{key:"$onChanges",value:function(){var t=this;this.show=!1,this.disableEditing=!this.authData||this.disableEditing,this.richSettings={targetBlank:!0,disableExtraSpaces:!0,disableReturn:!1,toolbar:!this.disableEditing&&{buttons:["bold","italic","anchor","h2","h3"]},disableEditing:this.disableEditing},this.inlineSettings={disableReturn:!0,disableExtraSpaces:!0,toolbar:!1,disableEditing:this.disableEditing},this.settings=this.isRich?this.richSettings:this.inlineSettings,this.$timeout(function(){t.show=!0})}},{key:"authData",get:function(){return this.Auth.authData}}]),t}();angular.module("webcat.text",["angular-medium-editor"]).component("wcText",{templateUrl:"_components/_webcat/wc-text/wc-text.html",controller:t,bindings:{data:"<",isRich:"<",placeholder:"@",onUpdate:"&",disableEditing:"<",wcHref:"@"}})}();var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}();!function(){var t=function(){function t(e){_classCallCheck(this,t),this.Auth=e}return t.$inject=["Auth"],_createClass(t,[{key:"authData",get:function(){return this.Auth.authData}}]),t}();angular.module("webcat.stretch-button",[]).component("wcStretchButton",{templateUrl:"_components/_webcat/wc-stretch-button/wc-stretch-button.html",controller:t,bindings:{icon:"@"}})}();var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}();!function(){var t=function(){function t(e){_classCallCheck(this,t),this.$dialog=e.$dialog({prompt:{es:{GET_URL:{title:"Enter Url",description:"Leave blank if you want to remove the icon"}}}})}return t.$inject=["Dialog"],_createClass(t,[{key:"update",value:function(t){var e=this,n={};angular.isObject(this.data)&&(n=this.data),this.$dialog.prompt("GET_URL")().then(function(a){n[t]=a?a:"",e.onUpdate({$data:n})})}}]),t}();angular.module("webcat.social",[]).component("wcSocial",{templateUrl:"_components/_webcat/wc-social/wc-social.html",controller:t,bindings:{data:"<",placeholder:"@",readonly:"<",onUpdate:"&"}})}(),function(){function t(t){t.theme("wc-settings").primaryPalette("grey",{"default":"900"}).dark()}t.$inject=["$mdThemingProvider"],angular.module("webcat.settings").config(t)}();var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}();!function(){var t=function(){function t(e,n,a,i){_classCallCheck(this,t),this.Storage=e,this.Auth=n,this.$mdMedia=a,this.$firedux=i}return t.$inject=["Storage","Auth","$mdMedia","$firedux"],_createClass(t,[{key:"$onChanges",value:function(t){var e=this;angular.forEach(t,function(t,n){angular.isObject(n.currentValue)&&(e[t]=Object.assign({},n.currentValue))}),t.removeOnDestroy&&this.removeOnDestroy&&this.Storage.remove(this.data.ref)}},{key:"delete",value:function(){var t=this;Promise.resolve().then(function(){return t.Storage.remove(t.data.ref)}).then(function(){t.onUpdate({$data:null})})}},{key:"update",value:function(t){var e=this,n=void 0;t&&Promise.resolve().then(function(){return e.Storage.upload(t)}).then(function(t){var a=Promise.resolve();return n=t,angular.isObject(e.data)&&(a=e.Storage.remove(e.data.ref)),a}).then(function(){e.onUpdate({$data:n})})}},{key:"getUrl",value:function(t){var e=1920,n=void 0;return e=this.$mdMedia("gt-lg")?1920:this.$mdMedia("gt-md")?1280:this.$mdMedia("gt-sm")?960:600,n=t?"http://"+this.projectUrl+"/?image="+t+"&size="+e:"http://www.cheerfulheartsfoundation.org/wp-content/uploads/2013/04/placeholder.png"}},{key:"authData",get:function(){return this.Auth.authData}},{key:"projectUrl",get:function(){return this.$firedux.projectUrl}}]),t}();angular.module("webcat.media",["ngFileUpload","oblador.lazytube"]).component("wcMedia",{templateUrl:"_components/_webcat/wc-media/wc-media.html",controller:t,transclude:!0,bindings:{data:"<",dimensions:"<",onClick:"&",onUpdate:"&",removeOnDestroy:"<",isBackground:"<",position:"@",marginTop:"@"}})}();var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}();!function(){var t=function(){function t(e){_classCallCheck(this,t),this.Auth=e}return t.$inject=["Auth"],_createClass(t,[{key:"authData",get:function(){return this.Auth.authData}}]),t}();angular.module("webcat.auth",[]).component("wcAuth",{template:'<ng-transclude ng-if="$ctrl.authData"></ng-transclude>',controller:t,transclude:!0})}(),function(){angular.module("firedux.storage",[])}();var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}();!function(){var t=function(){function t(e,n,a,i){_classCallCheck(this,t),this.Storage=e,this.Dialog=a,this.$dialog=a.$dialog(i),this.$rootScope=n}return t.$inject=["StorageApi","$rootScope","Dialog","StorageLabels"],_createClass(t,[{key:"upload",value:function(t){var e=this,n=this.$dialog.progress("UPLOAD");return new Promise(function(a,i){var r={};n(r),e.Storage.upload(t,function(t){r.percentage=t,e.$rootScope.$apply(),r.percentage>99&&e.Dialog.hide()}).then(a)["catch"](i)})}},{key:"remove",value:function(t){var e=this;return new Promise(function(n,a){t?e.Storage.remove(t).then(n)["catch"](a):n()})}}]),t}();angular.module("firedux.storage").service("Storage",t).constant("StorageLabels",{progress:{es:{UPLOAD:"Subiendo archivo"}}})}();var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}();!function(){var t=function(){function t(e){_classCallCheck(this,t),this.storage=e.firebase.storage,this.database=e.firebase.database()}return t.$inject=["$window"],_createClass(t,[{key:"uniqueId",value:function(){return this.database.ref("uniqueIds").push().key}},{key:"upload",value:function(t,e){var n=this,a=this.uniqueId();return new Promise(function(i,r){var o=n.storage().ref(a),l=o.put(t);l.on("state_changed",function(t){var n=t.bytesTransferred/t.totalBytes*100;e(n)},function(t){console.log(t),r(t)},function(){var t=l.snapshot.downloadURL,e=a;i({ref:e,url:t})})})}},{key:"execute",value:function(t,e){var n=this,a=this.uniqueId();return new Promise(function(i,r){var o=n.storage().ref(t+"/"+a),l=o.put(e);l.on("state_changed",function(){},function(t){r(t)},function(){var t=l.snapshot.downloadURL,e=a;i({ref:e,url:t})})})}},{key:"remove",value:function(t){var e=this;return new Promise(function(n,a){e.storage().ref(t)["delete"]().then(n)["catch"](a)})}}]),t}();angular.module("firedux.storage").service("StorageApi",t)}(),function(){function t(t){return function(e){return t.trustAsHtml(e)}}t.$inject=["$sce"],angular.module("firedux.sanitize",[]).filter("sanitize",t)}();var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}();!function(){var t=function(){function t(e){_classCallCheck(this,t);var n=this;n.$stateParams=e}return t.$inject=["$stateParams"],_createClass(t,[{key:"lang",get:function(){var t=this;return t.$stateParams.lang}}]),t}();angular.module("firedux.lang",[]).controller("Lang.Ctrl",t)}();var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}();!function(){var t=function(){function t(e){_classCallCheck(this,t),this.$stateParams=e}return t.$inject=["$stateParams"],_createClass(t,[{key:"lang",get:function(){return this.$stateParams.lang}}]),t}();angular.module("firedux.lang").service("Lang",t)}(),function(){function t(t){return function(e){var n=void 0;return n="en"===t.lang?e[0]:e[1]}}t.$inject=["Lang"],angular.module("firedux.lang").filter("lang",t)}();var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}();!function(){var t=function(){function t(e,n){_classCallCheck(this,t),this.Lang={$current:"es"},this.Labels=e,this.$mdDialog=n}return t.$inject=["DialogLabels","$mdDialog"],_createClass(t,[{key:"$dialog",value:function(t){var e=this;return{error:function(n){return function(a){return function(){var i=e.$mdDialog.alert().title(t.error[e.Lang.$current][n].title).textContent(t.error[e.Lang.$current][n].description).ariaLabel(t.error[e.Lang.$current][n].description).ok(e.Labels[e.Lang.$current].OK);e.$mdDialog.show(i).then(a)}}},alert:function(n){return function(){var a=e.$mdDialog.alert().title(t.alert[e.Lang.$current][n].title).textContent(t.alert[e.Lang.$current][n].description).ariaLabel(t.alert[e.Lang.$current][n].description).ok(e.Labels[e.Lang.$current].OK);e.$mdDialog.show(a)}},prompt:function(n){return function(){return new Promise(function(a,i){var r=e.$mdDialog.prompt().title(t.prompt[e.Lang.$current][n].title).textContent(t.prompt[e.Lang.$current][n].description).ariaLabel(t.prompt[e.Lang.$current][n].description).ok(e.Labels[e.Lang.$current].OK).cancel(e.Labels[e.Lang.$current].CANCEL);e.$mdDialog.show(r).then(a)["catch"](i)})}},confirm:function(n){return function(){return new Promise(function(a,i){var r=t.confirm[e.Lang.$current][n],o=e.$mdDialog.confirm().title(r.title).textContent(r.description).ariaLabel(r.description).ok(e.Labels[e.Lang.$current].OK).cancel(e.Labels[e.Lang.$current].CANCEL);e.$mdDialog.show(o).then(a)["catch"](i)})}},progress:function(n){return function(a){var i=e;e.$mdDialog.show({templateUrl:"_components/_firedux/dialog/progress-dialog.html",controller:function(){this.progress=a,this.title=t.progress[i.Lang.$current][n]},controllerAs:"$ctrl"})}},select:function(n,a){return function(){return new Promise(function(i){var r=e;e.$mdDialog.show({templateUrl:"_components/_firedux/dialog/select-dialog.html",controller:function(){this.title=t.select[r.Lang.$current][n],this.params=a,this.hide=function(t){r.$mdDialog.hide(),i(t)},this.cancel=r.$mdDialog.cancel},controllerAs:"$ctrl"})})}},login:function(){return function(){return new Promise(function(t,n){var a=e;e.$mdDialog.show({templateUrl:"_components/_firedux/dialog/login-dialog.html",controller:function(){this.hide=function(e){a.$mdDialog.hide(),t(e)},this.cancel=a.$mdDialog.cancel;
},controllerAs:"$ctrl"}).then(t,n)})}},newPassword:function(){return function(){return new Promise(function(t,n){var a=e;e.$mdDialog.show({templateUrl:"_components/_firedux/dialog/new-password-dialog.html",controller:function(){this.hide=function(e){a.$mdDialog.hide(),t(e)},this.cancel=a.$mdDialog.cancel},controllerAs:"$ctrl"}).then(t,n)})}}}}},{key:"hide",value:function(){this.$mdDialog.hide()}}]),t}();angular.module("firedux.dialog",[]).service("Dialog",t),angular.module("firedux.dialog").constant("DialogLabels",{es:{OK:"Ok",CANCEL:"Cancelar"},en:{OK:"Ok",CANCEL:"Cancel"}})}();var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}();!function(){var t=function(){function t(e,n,a){var i=this;_classCallCheck(this,t),this.$firebaseAuth=e(),this.$dialog=n.$dialog(),this.$state=a,this.$firebaseAuth.$onAuthStateChanged(function(t){i.getAuthData=t}),this.getAuthData=this.$firebaseAuth.$getAuth()}return t.$inject=["$firebaseAuth","Dialog","$state"],_createClass(t,[{key:"auth",value:function(){var t=this;this.$dialog.login()().then(function(e){t.login(e),t.$state.go("root")})["catch"](function(){t.$state.go("root")})}},{key:"updatePassword",value:function(){var t=this;this.$dialog.login()().then(function(e){t.login(e).then(function(){t.$dialog.newPassword()().then(function(n){return t.$firebaseAuth.$updatePassword(n).then(function(){e.password=n,t.login(e),console.log("Success")})["catch"](function(t){console.log(t)})})})})["catch"](function(){t.$state.go("root")})}},{key:"login",value:function(t){var e=this;return this.$firebaseAuth.$signInWithEmailAndPassword(t.email,t.password).then(function(t){e.getAuthData=t,console.log("User Logged In")})}},{key:"onAuth",value:function(t){this.$firebaseAuth.$onAuthStateChanged(t)}},{key:"logout",value:function(){this.$firebaseAuth.$signOut()}},{key:"authData",get:function(){return this.getAuthData}}]),t}();angular.module("firedux.auth",[]).service("Auth",t)}(),function(){angular.module("webcat.components",["ngMaterial","webcat.media","webcat.text","webcat.settings","webcat.youtube","webcat.stretch-button","webcat.social","webcat.auth"])}(),function(){angular.module("webcat.firedux",["firebase","firedux.auth","firedux.dialog","firedux.lang","firedux.sanitize","firedux.storage"])}();var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}();!function(){var t=function(){function t(e,n,a,i,r,o){_classCallCheck(this,t),this.firebase=e.firebase,this.auth=function(){return a},this.dialog=function(){return i},this.lang=function(){return r},this.storage=function(){return o}}return t.$inject=["$window","$firebaseArray","Auth","Dialog","Lang","Storage"],_createClass(t,[{key:"init",value:function(t){this.firebase.initializeApp(t),this.hasInitialized=!0,this.database=this.firebase.database(),this.projectUrl=t.storageBucket}}]),t}();angular.module("webcat.firedux").service("$firedux",t)}();var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}();!function(){var t=function(){function t(e,n,a,i,r){_classCallCheck(this,t),this.$firebaseObject=e,this.$fireduxArray=n,this.firebase=a.firebase.database(),this.$timeout=i,this.Auth=r}return t.$inject=["$firebaseObject","$fireduxArray","$window","$timeout","Auth"],_createClass(t,[{key:"$onChanges",value:function(t){var e=this;angular.forEach(t,function(t,n){switch(n){case"objectRef":case"limitToLast":case"equalTo":case"orderBy":case"arrayRef":e.createFb()}})}},{key:"createFb",value:function(){var t=void 0;angular.isString(this.arrayRef)?(t=this.firebase.ref(this.arrayRef),angular.isString(this.orderBy)&&this.orderBy.length>0&&(t=t.orderByChild(this.orderBy),angular.isString(this.equalTo)&&(t=t.equalTo(this.equalTo))),angular.isNumber(this.limitToLast)&&(t=t.limitToLast(this.limitToLast)),this.destroyFb(),this.ngfire=this.$fireduxArray(t),this.watch()):angular.isString(this.objectRef)&&(t=this.firebase.ref(this.objectRef),this.destroyFb(),this.ngfire=this.$firebaseObject(t),this.watch())}},{key:"watch",value:function(){var t=this;this.ngfire.$loaded(function(){t.onReady({$data:t.ngfire}),t.$timeout(function(){t.ngfire&&0===t.ngfire.length&&t.arrayRef&&t.Auth.authData&&!t.equalTo&&t.ngfire.$add({exists:!0,$priority:0}).then(function(e){t.ngfire.$remove(t.ngfire.$indexFor(e.key))})})}),this.ngfire.$watch(function(){t.onData({$data:t.ngfire})})}},{key:"destroyFb",value:function(){this.ngfire&&this.ngfire.$destroy&&(this.ngfire=void 0)}},{key:"$onDestroy",value:function(){var t=this;this.removeOnDestroy&&this.Auth.authData?this.ngfire.$remove().then(function(){t.destroyFb()}):this.destroyFb()}}]),t}();angular.module("webcat.firedux").component("firedux",{template:"<ng-transclude></ng-transclude>",transclude:!0,controller:t,bindings:{objectRef:"@",arrayRef:"@",onData:"&",onReady:"&",removeOnDestroy:"<",limitToLast:"<",equalTo:"<",orderBy:"@"}})}(),function(){function t(t,e,n){var a=n.$dialog({confirm:{es:{REMOVE:{title:"Do you want to remove this item?",description:"This action can not be undone."}}}});return t.$extend({$setPriorities:function(){var t=this;angular.forEach(this.$list,function(e,n){e.$priority=n+1,t.$list.$save(e)})},$addLast:function(){var t=this,n=arguments.length<=0||void 0===arguments[0]?{exists:!0}:arguments[0];return new Promise(function(a){t.$list.$add(n).then(function(n){e(function(){var e=t.$list.$indexFor(n.key),i=t.$list.length,r=t.$list[i-1].$priority+1;t.$list[e]=Object.assign(t.$list[e],{$priority:r}),t.$list.$save(e),a(n)})})})},$addFirst:function(){var t=arguments.length<=0||void 0===arguments[0]?{exists:!0}:arguments[0],e=this.$list.length>0,n=e?this.$list[0].$priority/2:1;return this.$list.$add(Object.assign(t,{$priority:n}))},$addAfter:function(t){var e=arguments.length<=1||void 0===arguments[1]?{exists:!0}:arguments[1],n=this.$list[t],a=this.$list[t+1],i=n.$priority,r=a?a.$priority:i+2,o=(i+r)/2;return this.$list.$add(Object.assign(e,{$priority:o}))},$removeWithDialog:function(t){var e=this;a.confirm("REMOVE")().then(function(){e.$list.$remove(t)})["catch"](function(){})},$moveUp:function(t){var e=this.$list[t],n=this.$list[t-1],a=e.$priority,i=n.$priority;n.$priority=a,e.$priority=i,this.$list.$save(n),this.$list.$save(e)},$moveDown:function(t){var e=this.$list[t],n=this.$list[t+1],a=e.$priority,i=n.$priority;n.$priority=a,e.$priority=i,this.$list.$save(n),this.$list.$save(e)}})}t.$inject=["$firebaseArray","$timeout","Dialog"],angular.module("webcat.firedux").factory("$fireduxArray",t)}(),function(){function t(t){t.state("auth",{url:"/login",template:"",controller:e,controllerAs:"vm"})}t.$inject=["$stateProvider"],angular.module("webcat").config(t);var e=function n(t){_classCallCheck(this,n),t.logout(),t.auth()};e.$inject=["Auth"]}();
//# sourceMappingURL=app.js.map
