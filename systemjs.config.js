/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    transpiler: 'ts',     
    typescriptOptions: {
      // Complete copy of compiler options in standard tsconfig.json
      "target": "es5",
      "module": "commonjs",
      "moduleResolution": "node",
      "sourceMap": true,
      "emitDecoratorMetadata": true,
      "experimentalDecorators": true,
      "removeComments": false,
      "noImplicitAny": true,
      "suppressImplicitAnyIndexErrors": true,
      "typeRoots": [
        "../../node_modules/@types/"
      ]
    },
    meta: {
      'typescript': {
        "exports": "ts"
      }
    },    
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

      // other libraries
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
      'ts': 'npm:plugin-typescript@4.0.10/lib/plugin.js',
      'typescript': 'npm:typescript@2.0.3/lib/typescript.js',
      

      'angular2-datatable': 'npm:angular2-datatable',
      'lodash': 'npm:lodash/lodash.js',
      'ng2-modal' :'node_modules/ng2-modal',
      "socket.io-client": "node_modules/socket.io-client/dist/socket.io.js",
      'angular2-image-upload' :'node_modules/angular2-image-upload'
      
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular2-datatable': {
        main: 'index.js',
        defaultExtension: 'js'
      },
      'ng2-modal':  {
         "main": "index.js",
         "defaultExtension": "js" 
      },
      'angular2-image-upload':  {
         "main": "index.js",
         "defaultExtension": "js" 
      },
      
       "socket.io-client": {"defaultExtension": "js"}
    }
  });

  if (!global.noBootstrap) {
    bootstrap();
  }

  // Bootstrap the `AppModule`(skip the `app/main.ts` that normally does this)
  function bootstrap() {

    // Stub out `app/main.ts` so System.import('app') doesn't fail if called in the index.html
    System.set(System.normalizeSync('app/main.ts'), System.newModule({}));

    // bootstrap and launch the app (equivalent to standard main.ts)
    Promise.all([
        System.import('@angular/platform-browser-dynamic'),
        System.import('app/app.module')
      ])
      .then(function(imports) {
        var platform = imports[0];
        var app = imports[1];
        platform.platformBrowserDynamic().bootstrapModule(app.AppModule);
      })
      .catch(function(err) {
        console.error(err);
      });
  }
  
})(this);
