(function () {
  'use strict';
  class Service {
    init(firebase) {
      this.$auth = firebase.auth;
      this.$auth()
          .onAuthStateChanged(authData => {
            this.auth = authData;
          });
    }
    waitForAuth(success, error) {
      return this.$auth()
          .onAuthStateChanged(success, error);
    }
    getProvider(provider, credentials) {
      let returnable;
      switch (provider) {
        case 'facebook':
          returnable = new this.$auth.FacebookAuthProvider();
          break;
        case 'twitter':
          returnable = new this.$auth.TwitterAuthProvider();
          break;
        case 'google':
          returnable = new this.$auth.GoogleAuthProvider();
          break;
        case 'email':
          returnable = new this.$auth.EmailAuthProvider(credentials);
          break;
        default:
          break;
      }
      return returnable;
    }
    link(provider) {
      return this.auth.link(provider);
    }
    linkWithRedirect(provider) {
      return this.auth.linkWithRedirect(provider);
    }
    signInAnonymously() {
      return this.$auth()
        .signInAnonymously();
    }
    signInWithEmailAndPassword(credentials = {}) {
      return this.$auth()
        .signInWithEmailAndPassword(
          credentials.email,
          credentials.password
        );
    }
    signInWithPopup(provider) {
      return this.$auth()
        .signInWithPopup(
          provider
        );
    }
    signInWithRedirect(provider) {
      return this.$auth()
        .signInWithRedirect(
          provider
        );
    }
    register(credentials) {
      return this.$auth()
        .createUserWithEmailAndPassword(credentials.email, credentials.password);
    }
    updatePassword(oldPassword, newPassword) {
      let email = this.auth.email;
      return this.auth
        .reauthenticate(this.$auth.EmailAuthProvider.credential(
          email,
          oldPassword
        )).then(() => {
          return this.auth.updatePassword(newPassword);
        });
    }
    updateProfile(profile) {
      let newProfile = {};
      if (angular.isString(profile.displayName)) {
        newProfile.displayName = profile.displayName;
      }
      if (angular.isString(profile.photoURL)) {
        newProfile.photoURL = profile.photoURL;
      }
      return this.auth
        .updateProfile(newProfile);
    }
    logout() {
      return this.$auth()
        .signOut();
    }
  }
  angular
    .module('firedux.auth', [])
    .service('$fireduxAuth', Service);
}());
