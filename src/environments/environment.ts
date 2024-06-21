
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_api: 'http://esiea-spotymike.eu-4.evennode.com/v1',
  firebaseConfig: {
    apiKey: "AIzaSyD2wmPaAlLVy7iGY6L0gZt_i3MlC2vXb_A",
    authDomain: "spotytest-e89c6.firebaseapp.com",
    projectId: "spotytest-e89c6",
    storageBucket: "spotytest-e89c6.appspot.com",
    messagingSenderId: "823395277840",
    appId: "1:823395277840:web:4988a37c1d18697de2fe95",
    measurementId: "G-47B0D4P2EH"
  },

  collection: {
    users: 'Users',
    albums: 'Albums'
  },
  version: '0.0.1'

};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
