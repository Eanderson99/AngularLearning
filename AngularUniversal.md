* add universal to app

      ng generate universal --client-project <appName>

* install important packages

      npm install --save-dev @nguniversal/express-engine @nguniversal/module-map-ngfactory-loader express webpack-cli ts-loader

* server.ts file in root folder

      // These are important and needed before anything else
      import 'zone.js/dist/zone-node';
      import 'reflect-metadata';

      import { enableProdMode } from '@angular/core';
      import { ngExpressEngine } from '@nguniversal/express-engine';
      import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

      import * as express from 'express';
      import { join } from 'path';
      import { readFileSync } from 'fs';

      // Faster renders in prod mode
      enableProdMode();

      // Export our express server
      export const app = express();

      const DIST_FOLDER = join(process.cwd(), 'dist');
      const APP_NAME = 'YOUR_PROJECT_NAME'; // TODO: replace me!

      const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require(`./dist/${APP_NAME}-server/main`);

      // index.html template
      const template = readFileSync(join(DIST_FOLDER, APP_NAME, 'index.html')).toString();

      app.engine('html', ngExpressEngine({
        bootstrap: AppServerModuleNgFactory,
        providers: [
          provideModuleMap(LAZY_MODULE_MAP)
        ]
      }));

      app.set('view engine', 'html');
      app.set('views', join(DIST_FOLDER, APP_NAME));

      // Serve static files 
      app.get('*.*', express.static(join(DIST_FOLDER, APP_NAME)));

      // All regular routes use the Universal engine
      app.get('*', (req, res) => {
          res.render(join(DIST_FOLDER, APP_NAME, 'index.html'), { req });
      });

      // If we're not in the Cloud Functions environment, spin up a Node server
      if (!process.env.FUNCTION_NAME) {
        const PORT = process.env.PORT || 4000;
        app.listen(PORT, () => {
          console.log(`Node server listening on http://localhost:${PORT}`);
        });
      }

* in webpack.server.config.js in root folder

      const path = require('path');
      const webpack = require('webpack');

      const APP_NAME = 'YOUR_PROJECT_NAME'; // TODO: replace me!

      module.exports = {
        entry: {  server: './server.ts' },
        resolve: { extensions: ['.js', '.ts'] },
        mode: 'development',
        target: 'node',
        externals: [
          /* Firebase has some troubles being webpacked when in
             in the Node environment, let's skip it.
             Note: you may need to exclude other dependencies depending
             on your project. */
          /^firebase/
        ],
        output: {
          // Export a UMD of the webpacked server.ts & deps, for
          // rendering in Cloud Functions
          path: path.join(__dirname, `dist/${APP_NAME}-webpack`),
          library: 'app',
          libraryTarget: 'umd',
          filename: '[name].js'
        },
        module: {
          rules: [
            { test: /\.ts$/, loader: 'ts-loader' }
          ]
        },
        plugins: [
          new webpack.ContextReplacementPlugin(
            /(.+)?angular(\\|\/)core(.+)?/,
            path.join(__dirname, 'src'), // location of your src
            {} // a map of your routes
          ),
          new webpack.ContextReplacementPlugin(
            /(.+)?express(\\|\/)(.+)?/,
            path.join(__dirname, 'src'),
            {}
          )
        ]
      }

* in package.json => scripts

      "build": "ng build && npm run build:ssr",
      "build:ssr": "ng run YOUR_PROJECT_NAME:server && npm run webpack:ssr",
      "webpack:ssr": "webpack --config webpack.server.config.js",
      "serve:ssr": "node dist/YOUR_PROJECT_NAME-webpack/server.js"

* Run this commands

      npm run build
      npm run serve:ssr
