// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: true,
  
    host: 'http://localhost',
    // directusUrl: '',
    directusUrl: 'https://grupoislasapi.julliet.io',
    // UTILITY url
    nestUrl: 'https://grupoislasgraph.julliet.io',
    // Version
    version: '1.0.0',
    // Whether or not to enable debug mode
    enableDebug: true,
    // check
    versionCheckURL: '',
  };

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
