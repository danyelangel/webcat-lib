"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}!function(){angular.module("webcat",["webcat.components"])}(),angular.module("webcat").run(["$templateCache",function(e){e.put("webcat/components/dialog/progress/progress-dialog.html",'<md-dialog aria-label="Loading: {{$ctrl.$title}}"><md-dialog-content><div class="md-title">{{$ctrl.$title}}</div><wc-progress wc-progress-type="linear" wc-progress-percentage="{{$ctrl.$progress}}"></wc-progress><div class="md-body-1">{{$ctrl.$body}}</div></md-dialog-content><md-dialog-actions><div flex="flex"></div><md-button ng-click="$ctrl.$catch()">{{$cancelLabel?$$cancelLabel:\'Cancel\'}}</md-button></md-dialog-actions></md-dialog>')}]),angular.module("webcat").run(["$templateCache",function(e){e.put("webcat/components/dialog/login/login-dialog.html",'<md-dialog aria-label="Login"><fd-login ng-if="$ctrl.$provider!==\'email\'" fd-login-provider="{{$ctrl.$provider}}" fd-login-popup="$mdMedia(\'gt-md\')" fd-login-redirect="!$mdMedia(\'gt-md\')" then="$ctrl.$then($data)" catch="$ctrl.$catch($error)"><before><wc-progress wc-progress-type="linear"></wc-progress></before></fd-login><fd-login ng-if="$ctrl.$provider===\'email\'" fd-login-provider="email" fd-login-credentials="$ctrl.$credentials" then="$ctrl.$then($data)" catch="$ctrl.$catch($error)"><before><wc-progress wc-progress-type="linear"></wc-progress></before></fd-login><md-dialog-content><div class="md-title">{{$ctrl.$title}}</div><div class="md-body-1">{{$ctrl.$body}}</div><div ng-repeat="provider in $ctrl.$providers"><md-button ng-if="!$ctrl.$provider!==\'email\'" ng-class="provider" ng-click="$ctrl.$then(provider)" class="md-raised">{{provider|capitalize}}</md-button><form ng-init="credentials={}" ng-if="$ctrl.$provider===\'email\'" class="email-form"><md-input-container><label>{{$ctrl.$emailLabel?$ctrl.$emailLabel:\'Email\'}}</label><input name="email" ng-model="credentials.$email" type="email"/></md-input-container><md-input-container><label>{{$ctrl.$passwordLabel?$ctrl.$passwordLabel:\'Password\'}}</label><input name="password" ng-model="credentials.$password" type="password"/></md-input-container><md-button ng-class="provider" ng-click="$ctrl.$then(provider, credentials)" class="md-raised">{{provider|capitalize}}</md-button></form></div></md-dialog-content><md-dialog-actions><div flex="flex"></div><md-button ng-click="$ctrl.$catch()">{{$ctrl.$cancelLabel?$ctrl.$cancelLabel:\'cancel\'}}</md-button></md-dialog-actions></md-dialog>')}]),angular.module("webcat").run(["$templateCache",function(e){e.put("webcat/components/progress/progress.html",'<md-progress-circular ng-if="$ctrl.$percentage &amp;&amp; $ctrl.$type === \'circular\'" md-mode="determinate" value="{{$ctrl.$percentage}}"></md-progress-circular><md-progress-circular ng-if="!$ctrl.$percentage &amp;&amp; $ctrl.$type === \'circular\'" md-mode="indeterminate"></md-progress-circular><md-progress-linear ng-if="$ctrl.$percentage &amp;&amp; $ctrl.$type === \'linear\'" md-mode="determinate" value="{{$ctrl.$percentage}}"></md-progress-linear><md-progress-linear ng-if="!$ctrl.$percentage &amp;&amp; $ctrl.$type === \'linear\'" md-mode="indeterminate"></md-progress-linear>')}]),angular.module("webcat").run(["$templateCache",function(e){e.put("webcat/components/dialog/dialog.html",'<then ng-if="!$ctrl.$ready" ng-transclude="then"></then><catch ng-if="$ctrl.$error" ng-transclude="catch"></catch>')}]),angular.module("webcat").run(["$templateCache",function(e){e.put("util/components/switch/switch.html",'<before ng-if="$ctrl.$before" ng-transclude="before"></before><then ng-if="$ctrl.$ready" ng-transclude="then"></then><catch ng-if="$ctrl.$error" ng-transclude="catch"></catch>')}]),angular.module("webcat").run(["$templateCache",function(e){e.put("firedux/components/state/state.html",'<fd-ref ng-if="$ctrl.$path" fd-ref-path="state/{{$ctrl.$path}}" fd-ref-query="$ctrl.$query" fd-ref-array="$ctrl.$isArray" then="$then($data)" catch="$catch($error)"><before ng-transclude="before"></before><then ng-transclude="then"></then><catch ng-transclude="catch"></catch></fd-ref>')}]),angular.module("webcat").run(["$templateCache",function(e){e.put("firedux/components/upload/upload.html",'<before ng-if="$ctrl.$before" ng-transclude="before"></before><then ng-if="$ctrl.$then" ng-transclude="then"></then><catch ng-if="$ctrl.$catch" ng-transclude="catch"></catch>')}]),angular.module("webcat").run(["$templateCache",function(e){e.put("firedux/components/set/set.html",'<before ng-if="!$ctrl.$ready &amp;&amp; !$ctrl.$error" ng-transclude="before"></before><then ng-if="!$ctrl.$ready" ng-transclude="then"></then><catch ng-if="$ctrl.$error" ng-transclude="catch"></catch>')}]),angular.module("webcat").run(["$templateCache",function(e){e.put("firedux/components/ref/ref.html",'<before ng-if="$ctrl.$before" ng-transclude="before"></before><then ng-if="$ctrl.$ready" ng-transclude="then"></then><catch ng-if="$ctrl.$error" ng-transclude="catch"></catch>')}]),angular.module("webcat").run(["$templateCache",function(e){e.put("firedux/components/login/_login.html",'<before ng-if="$ctrl.$before" ng-transclude="before"></before><then ng-if="$ctrl.$ready" ng-transclude="then"></then><catch ng-if="$ctrl.$error" ng-transclude="catch"></catch>')}]),angular.module("webcat").run(["$templateCache",function(e){e.put("firedux/components/env/env.html",'<fd-ref fd-ref-path="$ctrl.$path" fd-ref-array="$ctrl.$array" then="$ctrl.$then($data)" catch="$ctrl.$catch($error)"><before ng-transclude="before"></before><then ng-transclude="then"></then><catch ng-transclude="catch"></catch></fd-ref>')}]),angular.module("webcat").run(["$templateCache",function(e){e.put("firedux/components/auth/auth.html",'<before ng-if="$ctrl.$before" ng-transclude="before"></before><then ng-if="$ctrl.$ready" ng-transclude="then"></then><catch ng-if="$ctrl.$error" ng-transclude="catch"></catch>')}]),angular.module("webcat").run(["$templateCache",function(e){e.put("firedux/components/api/api.html",'<fd-ref ng-if="$ctrl.$endpoint" fd-ref-path="{{$ctrl.$path}}" fd-ref-query="$ctrl.$query" fd-ref-array="true" on-ref-data="$ctrl.$then($data)" on-ref-error="$ctrl.$catch($error)"></fd-ref><fd-bind ng-if="$ctrl.$endpoint" fd-bind-path="{{$ctrl.$path}}" fd-bind-presence="fd-bind-presence" on-bind-data="$ctrl.$request" on-bind-error="$ctrl.$catch($error)"></fd-bind><before ng-if="$ctrl.$before" ng-transclude="before"></before><then ng-if="$ctrl.$ready" ng-transclude="then"></then><catch ng-if="$ctrl.$error" ng-transclude="catch"></catch>')}]);var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();!function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"$ngInit",value:function(){angular.isString(this.bindings.wcDialogLogin)&&(this.$progress=this.bindings.progress,this.$title=this.bindings.title,this.$body=this.bindings.body,this.$cancelLabel=this.bindings.cancelLabel,this.$emailLabel=this.bindings.emailLabel,this.$passwordLabel=this.bindings.passwordLabel)}},{key:"$catch",value:function(){this.bindings["catch"]()}}]),e}();angular.module("webcat.wcDialog.progress",[]).component("wcDialogProgress",{controller:e,templateUrl:"wecat/components/dialog/progress/progress-dialog.html",bindings:{bindings:"<"}})}();var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();!function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"$ngInit",value:function(){angular.isString(this.bindings.wcDialogLogin)&&(this.$providers=this.bindings.wcDialogLogin.split(" "),this.$title=this.bindings.title,this.$body=this.bindings.body,this.$cancel=this.bindings.cancel)}},{key:"$then",value:function(e,t){this.bindings.then(e,t)}},{key:"$catch",value:function(){this.bindings["catch"]()}}]),e}();angular.module("webcat.wcDialog.login",[]).component("wcDialogLogin",{controller:e,templateUrl:"webcat/components/dialog/login/login.html",bindings:{bindings:"<"}})}(),function(){var e=function t(){_classCallCheck(this,t),this.parentCtrl.current&&this.item===this.parentCtrl.current?this.display=!0:this.display=!1};angular.module("webcat.utilSwitch.item",[]).directive("fdUtilSwitchItem",{controller:e,controllerAs:"$ctrl",templateUrl:"util/component/switch/switch.html",transclude:!0,require:"^?fdSwitch",scope:{item:"@"},link:function(e,t,n,r){e.parentCtrl=r[0]}})}();var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();!function(){var e=function(){function e(t){_classCallCheck(this,e),this.$state=t}return e.$inject=["$state"],_createClass(e,[{key:"$onChanges",value:function(e){e.wcUiRedirectSref&&e.wcUiRedirectSrefParams&&this.redirect(this.wcUiRedirectSref,this.wcUiRedirectSrefParams)}},{key:"redirect",value:function(e,t){angular.isString(e)&&this.$state.go(e,t)}}]),e}();angular.module("webcat.wcUiRedirect",[]).component("wcUiRedirect",{controller:e,templateUrl:"firedux/components/ui-redirect/ui-redirect.html",bindings:{wcUiRedirectSref:"@",wcUiRedirectSrefParams:"<"}})}();var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();!function(){var e=function(){function e(t){_classCallCheck(this,e),this.$mdToast=t}return e.$inject=["$mdToast"],_createClass(e,[{key:"$onChanges",value:function(e){e.wcToastMessage&&this.showToast(this.wcToastMessage)}},{key:"showToast",value:function(e){angular.isString(e)&&this.$mdToast.showSimple(e)}}]),e}();angular.module("webcat.wcToast",[]).component("wcToast",{controller:e,bindings:{wcToastMessage:"@"}})}();var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();!function(){var e=function(){function e(t){_classCallCheck(this,e),this.$firedux=t}return e.$inject=["$firedux"],_createClass(e,[{key:"$onChanges",value:function(e){if(this.$percentage=this.$type=void 0,e.wcLoaderType&&(this.$percentage=this.wcLoaderPercentage),e.wcLoaderType)switch(this.wcLoaderType){case"circular":this.$type="circular";break;case"linear":this.$type="linear"}}}]),e}();angular.module("webcat.wcProgress",[]).component("wcProgress",{controller:e,templateUrl:"webcat/components/progress/progress.html",bindings:{wcLoaderType:"@",wcLoaderPercentage:"@"}})}();var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();!function(){var e=function(){function e(t){_classCallCheck(this,e),this.$mdDialog=t}return e.$inject=["$mdDialog"],_createClass(e,[{key:"$onChanges",value:function(e){(e.wcDialogTitle||e.wcDialogBody||e.wcDialogOk||e.wcDialogCancel||e.wcDialogProgress)&&(this.setDialogBindings(),this.checkParams(e))}},{key:"setDialogBindings",value:function(){this.dialogBindings=Object.assign(this.wcDialogLabels,{progress:angular.isNumber(this.wcDialogProgress)?this.wcDialogProgress:void 0,component:angular.isNumber(this.wcDialogComponent)?this.wcDialogComponent:void 0,login:angular.isNumber(this.wcDialogLogin)?this.wcDialogLogin:void 0})}},{key:"checkParams",value:function(e){e.wcDialogAlert?this.openDialog({type:"alert",bindings:this.dialogBindings}):e.wcDialogConfirm?this.openDialog({type:"confirm",bindings:this.dialogBindings}):e.wcDialogProgress?this.openDialog({type:"progress",bindings:this.dialogBindings}):e.wcDialogLogin?this.openDialog({type:"login",bindings:this.dialogBindings}):e.wcDialogComponent&&this.openDialog({type:"component",bindings:this.dialogBindings})}},{key:"openDialog",value:function(){var e=this,t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=t.type,r=t.bindings,a=void 0;switch(n){case"alert":a=this.$mdDialog.alert({title:r.title,textContent:r.body,ok:r.ok});break;case"confirm":a=this.$mdDialog.confirm({title:r.title,textContent:r.body,ok:r.ok,cancel:r.cancel});break;default:a=this.getTemplate(n,r.component),a={template:a,bindToController:{$bindings:r},controllerAs:!0}}this.bindings.then=this.$mdDialog.hide,this.bindings["catch"]=this.$mdDialog.cancel,this.$mdDialog.cancel(),this.$mdDialog.show(a)["finally"](function(t){e.$ready=!0,e.then({$data:t})},function(t){e.$error=t,e["catch"]({$error:t})})}},{key:"getTemplate",value:function(e,t){switch(e){case"progress":return'<wc-dialog-progress bindings="$ctrl.$bindings"></wc-dialog-progress>';case"login":return'<wc-dialog-login bindings="$ctrl.$bindings"></wc-dialog-login>';case"component":if(angular.isString(t))return"<"+t+' bindings="$ctrl.$bindings"></'+t+">"}}},{key:"$ngOnDestroy",value:function(){this.$mdDialog.cancel()}}]),e}();angular.module("webcat.wcDialog",["webcat.wcDialog.login","webcat.wcDialog.progress"]).component("wcDialog",{controller:e,templateUrl:"firedux/components/dialog/dialog.html",transclude:{then:"?then","catch":"?catch"},bindings:{wcDialogAlert:"@",wcDialogConfirm:"@",wcDialogProgress:"@",wcDialogLogin:"@",wcDialogComponent:"@",wcDialogLabels:"<",then:"&","catch":"&"}})}();var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();!function(){var e=function(){function e(t){_classCallCheck(this,e),this.$firedux=t}return e.$inject=["$firedux"],_createClass(e,[{key:"$onChanges",value:function(e){this.$then=this.$catch=this.$before=void 0,e.promise?this.unwrap(this.promise):e["if"]&&this.validate(this["if"])}},{key:"validate",value:function(e){e?this.$then=!0:this.$catch=!0}},{key:"unwrap",value:function(e){var t=this;this.$before=!0,e.then(function(e){t.$then=!0,t.then({$data:e})})["catch"](function(e){t.$catch=!0,t["catch"]({$error:e})})}}]),e}();angular.module("webcat.utilSwitch",["webcat.utilSwitch.item"]).component("fdUtilSwitch",{controller:e,templateUrl:"util/components/switch/switch.html",transclude:{before:"?before",then:"?then","catch":"?catch",array:"?array"},bindings:{promise:"<","if":"<",current:"@",before:"&",then:"&","catch":"&"}})}();var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();!function(){var e=function(){function e(t){_classCallCheck(this,e),this.$firedux=t}return e.$inject=["$firedux"],_createClass(e,[{key:"$onChanges",value:function(e){(e.fdUploadFile||e.fdUploadFilename)&&this.upload(e.fdUploadFile,e.fdUploadFilename)}},{key:"upload",value:function(e,t){var n=this,r=this.$firedux.storageRef(),a=r.child(t).put(e);this.$before=this.$then=this.$catch=void 0,a.on("state_changed",function(e){var t=e.bytesTransferred/e.totalBytes*100;n.$before=!0,n.before({$progress:t})},function(e){n.$catch=!0,n["catch"]({$error:e})}),a.then(function(e){n.$then=!0,e.getDownloadURL().then(function(t){n.then({$data:{ref:e.fullPath,url:t}})})})}}]),e}();angular.module("firedux.fdUpload",[]).component("fdUpload",{controller:e,templateUrl:"firedux/components/upload/upload.html",transclude:{before:"?before",then:"?then","catch":"?catch"},bindings:{fdUploadFile:"<",fdUploadFilename:"@",then:"&","catch":"&",before:"&"}})}();var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();!function(){var e=function(){function e(t){_classCallCheck(this,e),this.$firedux=t}return e.$inject=["$firedux"],_createClass(e,[{key:"$onChanges",value:function(e){(e.fdSetPath||e.fdSetData||e.fdSetPresence)&&this.setData(this.fdSetData,this.getRef(this.fdBindPath),this.fdSetPresence)}},{key:"setData",value:function(e,t,n){var r=this;this.$ready=this.$error=void 0,t.set(e).then(function(e){r.then({$data:e.val()}),r.$ready=!0})["catch"](function(e){r["catch"]({$error:e}),r.$error=e}),n&&t.onDisconnect().remove()}},{key:"getRef",value:function(e){return angular.isString(e)?this.$firedux.ref(e):void this.onSetError({$error:{type:"Path is not a string"}})}}]),e}();angular.module("firedux.fdSet",[]).component("fdSet",{controller:e,templateUrl:"firedux/components/set/set.html",transclude:{before:"?before",then:"?then","catch":"?catch"},bindings:{fdSetPath:"@",fdSetData:"<",fdSetPresence:"@",then:"&","catch":"&"}})}();var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();!function(){var e=function(){function e(t){_classCallCheck(this,e),this.$firedux=t}return e.$inject=["$firedux"],_createClass(e,[{key:"$onChanges",value:function(e){(e.fdRefPath||e.fdRefQuery)&&(this.$ready=this.$error=this.$before=void 0,this.updateRef(this.fdRefPath,this.fdRefQuery))}},{key:"updateRef",value:function(e,t){var n=this;this.$before=!0,angular.isObject(this.ref)&&angular.isFunction(this.ref.off)&&this.ref.off(),this.ref=this.getRef(e,t),this.ref.on("value",function(e){n.updateChanges(e)},function(e){n.$before=void 0,n.$error=e,n["catch"]({$error:e})})}},{key:"getRef",value:function(e,t){var n=this.$firedux.ref(e);return angular.isObject(t)&&(n=this.getSortedRef(t,n),n=this.getFilteredRef(t,n)),n}},{key:"getSortedRef",value:function(e,t){var n=t;return e.orderByChild?n=t.orderByChild(e.orderByChild):e.orderByKey?n=t.orderByKey(e.orderByKey):e.orderByValue&&(n=t.orderByValue(e.orderByValue)),n}},{key:"getFilteredRef",value:function(e,t){var n=t;return e.limitToFirst?n=t.limitToFirst(e.limitToFirst):e.limitToLast?n=t.limitToLast(e.limitToLast):e.startAt?n=t.startAt(e.startAt):e.endAt?n=t.endAt(e.endAt):e.equalTo&&(n=t.equalTo(e.equalTo)),n}},{key:"updateChanges",value:function(e){var t=[],n=0;this.fdRefQuery?(e.forEach(function(e){t[n]=e.val(),n++}),this.$before=void 0,this.$ready=!0,this.then({$data:t})):(this.$before=void 0,this.$ready=!0,this.then({$data:e.val()}))}}]),e}();angular.module("firedux.fdRef",[]).component("fdRef",{controller:e,templateUrl:"firedux/components/ref/ref.html",transclude:{before:"?before",then:"?then","catch":"?catch"},bindings:{fdRefPath:"@",fdRefQuery:"<",then:"&","catch":"&"}})}();var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();!function(){var e=function(){function e(t){_classCallCheck(this,e),this.$firedux=t}return e.$inject=["$firedux"],_createClass(e,[{key:"$onChanges",value:function(e){(e.fdStatePath||e.fdStateQuery)&&this.getState(this.fdStatePath,this.fdStateQuery,this.fdStateArray)}},{key:"getState",value:function(e,t,n){this.$path=this.$query=this.$isArray=void 0,angular.isString(e)&&(this.$path=e),angular.isObject(t)&&(this.$query=t),n&&(this.$isArray=n)}},{key:"$then",value:function(e){this.then({$data:e})}},{key:"$catch",value:function(e){this["catch"]({$error:e})}}]),e}();angular.module("firedux.fdState",[]).component("fdState",{controller:e,templateUrl:"firedux/components/state/state.html",transclude:{before:"?before",then:"?then","catch":"?catch"},bindings:{fdStatePath:"@",fdStateQuery:"<",fdStateArray:"@",then:"&","catch":"&"}})}();var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();!function(){var e=function(){function e(t){_classCallCheck(this,e),this.$firedux=t}return e.$inject=["$firedux"],_createClass(e,[{key:"$onChanges",value:function(e){var t=void 0;this.$ready=this.$error=!0,e.fdLoginProvider&&e.fdLoginCredentials&&(this.fdLoginRedirect&&(t="redirect"),this.fdLoginPopup&&(t="popup"),this.login(this.fdLoginProvider,this.fdLoginCredentials,t))}},{key:"login",value:function(e,t,n){var r=this;this.$before=!0,this.$firedux.login({provider:e,credentials:t,method:n}).then(function(e){r.$ready=!0,r.$before=void 0,r.then(e)})["catch"](function(e){r.$error=e,r.$before=void 0,r["catch"](e)})}}]),e}();angular.module("firedux.fdLogin",[]).component("fdLogin",{controller:e,templateUrl:"firedux/components/login/login.html",transclude:{before:"?before",then:"?then","catch":"?catch"},bindings:{fdLoginProvider:"@",fdLoginCredentials:"<",fdLoginRedirect:"@",fdLoginPopup:"@",then:"&","catch":"&"}})}();var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();!function(){var e=function(){function e(t){_classCallCheck(this,e),this.$firedux=t}return e.$inject=["$firedux"],_createClass(e,[{key:"$onChanges",value:function(e){e.fdEnvConstant&&this.getConstant(this.fdEnvConstant,this.fdEnvArray)}},{key:"getConstant",value:function(e,t){angular.isString(e)&&(this.$ref="app/constants/"+e),angular.isDefined(t)&&(this.$array=!0)}},{key:"$then",value:function(e){this.then({$data:e})}},{key:"$catch",value:function(e){this.then({$errors:e})}}]),e}();angular.module("firedux.fdEnv",[]).component("fdEnv",{controller:e,templateUrl:"firedux/components/env/env.html",transclude:{before:"?before",then:"?then","catch":"?catch"},bindings:{fdEnvConstant:"<",fdEnvArray:"@",before:"&",then:"&","catch":"&"}})}();var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();!function(){var e=function(){function e(t){_classCallCheck(this,e),this.$firedux=t}return e.$inject=["$firedux"],_createClass(e,[{key:"$onChanges",value:function(e){e.fdDispatcherAction&&this.dispatch(this.fdDispatcherAction)}},{key:"dispatch",value:function(e){angular.isObject(e)&&angular.isString(e.type)&&this.$firedux.dispatch(e)}}]),e}();angular.module("firedux.fdDispatcher",[]).component("fdDispatcher",{controller:e,bindings:{fdDispatcherAction:"<"}})}();var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();!function(){var e=function(){function e(t){_classCallCheck(this,e),this.$firedux=t}return e.$inject=["$firedux"],_createClass(e,[{key:"$onInit",value:function(){var e=this;this.$before=!0,this.$firedux.waitForAuth().then(function(t){e.$ready=!0,e.$before=void 0,e.then({$data:t})})["catch"](function(){e.$error=!0,e.$before=void 0,e["catch"]()})}}]),e}();angular.module("firedux.fdAuth",[]).component("fdAuth",{controller:e,templateUrl:"firedux/components/auth/auth.html",transclude:{before:"?before",then:"?then","catch":"?catch"},bindings:{then:"&","catch":"&"}})}();var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();!function(){var e=function(){function e(t){_classCallCheck(this,e),this.$firedux=t}return e.$inject=["$firedux"],_createClass(e,[{key:"$onChanges",value:function(e){(e.fdApiEndpoint||e.fdApiRequest||e.fdApiQuery||e.fdApiArray)&&this.makeRequest()}},{key:"makeRequest",value:function(){var e=this.fdApiEndpoint,t=this.fdApiRequest,n=this.$uid;angular.isString(e)&&angular.isDefined(t)&&(angular.isObject(this.fdApiQuery)&&(this.$query=this.fdApiQuery),this.fdApiArray&&(this.$isArray=!0),this.$path="api/"+n+"/"+e,this.$request=t,this.$before=!0,this.$ready=this.$error=void 0)}},{key:"$then",value:function(e){this.$ready=!0,this.then({$data:e})}},{key:"$catch",value:function(e){this.$error=!0,this["catch"]({$error:e})}},{key:"$uid",get:function(){return this.$firedux.UID}}]),e}();angular.module("firedux.fdApi",[]).component("fdApi",{controller:e,templateUrl:"firedux/components/api/api.html",transclude:{before:"?before",then:"?then","catch":"?catch"},bindings:{fdApiEndpoint:"@",fdApiRequest:"<",fdApiArray:"@",then:"&","catch":"&"}})}(),function(){angular.module("webcat.components",["webcat.wcDialog","webcat.wcProgress","webcat.wcToast","webcat.wcUiRedirect"])}(),function(){angular.module("util.components",["util.fdUtilSwitch"])}();var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();!function(){var e=function(){function e(t,n){_classCallCheck(this,e),this.firebase=t.firebase,this.$fireduxAuth=n}return e.$inject=["$window","$fireduxAuth"],_createClass(e,[{key:"init",value:function(e){this.firebase.initializeApp(e),this.hasInitialized=!0,this.database=this.firebase.database,this.projectUrl=e.storageBucket}},{key:"reducer",value:function(e){if(angular.isString(e.trigger)&&angular.isFunction(e.reducer)){if(this.reducers[e.trigger])throw new Error("Couldn't register reducer. Make sure all params are set up correctly.");return this.registerReducer(e)}throw new Error("Couldn't register reducer. Make sure all params are set up correctly.")}},{key:"registerReducer",value:function(e){this.reducers[e.trigger]=e.reducer}},{key:"dispatch",value:function(e){return this.reducers[e.type](e,this)}},{key:"waitForAuth",value:function(){return this.$fireduxAuth.waitForAuth()}},{key:"login",value:function(e,t,n){var r=Promise.reject(),a=void 0;switch(e){case"email":r=this.$fireduxAuth.signInWithEmailAndPassword(t);break;case"anonymous":r=this.$fireduxAuth.signInAnonymously();break;case"facebook":a=this.$fireduxAuth.getProvider("facebook");break;case"twitter":a=this.$fireduxAuth.getProvider("twitter")}switch(n){case"popup":r=this.$fireduxAuth.signInWithPopup(a);break;case"redirect":r=this.$fireduxAuth.signInWithRedirect(a)}return r}},{key:"auth",get:function(){return this.$fireduxAuth.auth}},{key:"TIMESTAMP",get:function(){return this.database.ServerValue.TIMESTAMP}},{key:"UID",get:function(){return this.firebase.database().ref("api").push().key}},{key:"ref",get:function(){return this.database().ref}}]),e}();angular.module("firedux.service",["firedux.$fireduxAuth"]).service("$firedux",e)}();var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();!function(){var e=function(){function e(t){var n=this;_classCallCheck(this,e),this.$auth=t.firebase.auth,this.waitForAuth().then(function(e){n.auth=e})}return e.$inject=["$window"],_createClass(e,[{key:"waitForAuth",value:function(){var e=this;return new Promise(function(t,n){e.$auth().onAuthStateChanged(function(e){e?t(e):n()})})}},{key:"getProvider",value:function(e){var t=void 0;switch(e){case"facebook":t=new this.$auth.FacebookAuthProvider;break;case"twitter":t=new this.$auth.TwitterAuthProvider;break;case"google":t=new this.$auth.GoogleAuthProvider}return t}},{key:"signInAnonymously",value:function(){return this.$auth().signInAnonymously()}},{key:"signInWithEmailAndPassword",value:function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];return this.$auth().signInWithEmailAndPassword(e.email,e.password)}},{key:"signInWithPopup",value:function(e){return this.$auth().signInWithPopup(e)}}]),e}();angular.module("firedux.$fireduxAuth",[]).service("$fireduxAuth",e)}(),angular.module("firedux.components",["firedux.fdApi","firedux.fdAuth","firedux.fdDispatcher","firedux.fdEnv","firedux.fdLogin","firedux.fdRef","firedux.fdSet","firedux.fdState","firedux.fdUpload"]),function(){angular.module("util",["util.components"])}(),function(){angular.module("firedux",["firedux.components","firedux.service"])}(),function(){angular.module("ng-webcat",["firedux","util","webcat"])}();
//# sourceMappingURL=app.js.map
