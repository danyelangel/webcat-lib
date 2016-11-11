(function () {
  'use strict';
  class Controller {
    constructor($firedux) {
      this.$firedux = $firedux;
    }
    $onChanges(changes) {
      let method;
      this.$ready = this.$error = true;
      if (
        changes.fdLoginProvider &&
        changes.fdLoginCredentials
      ) {
        if (this.fdLoginRedirect) {
          method = 'redirect';
        }
        if (this.fdLoginPopup) {
          method = 'popup';
        }
        this.login(
          this.fdLoginProvider,
          this.fdLoginCredentials,
          method
        );
      }
    }
    login(provider, credentials, method) {
      this.$before = true;
      this
        .$firedux
        .login({
          provider,
          credentials,
          method
        })
        .then(authData => {
          this.$ready = true;
          this.$before = undefined;
          this.then(authData);
        })
        .catch((error) => {
          this.$error = error;
          this.$before = undefined;
          this.catch(error);
        });
    }
  }
  angular
    .module('firedux.fdLogin', [])
    .component('fdLogin', {
      controller: Controller,
      templateUrl: 'firedux/components/login/login.html',
      transclude: {
        before: '?before',
        then: '?then',
        catch: '?catch'
      },
      bindings: {
        fdLoginProvider: '@',
        fdLoginCredentials: '<',
        fdLoginRedirect: '@',
        fdLoginPopup: '@',
        then: '&',
        catch: '&'
      }
    });
}());