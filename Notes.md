## Some Commands
* Generate Routing file

      ng generate module app-routing --flat --module=app

* Remove npm cache

      npm cache clean --force

* Run app in specific environment

      ng serve --configuration=production

* Build

      ng build --prod -aot

* Build without add hash (remove adding hash in the files & don't stop cashing)

      ng build --prod -aot --output-hashing none

* Angular Elements

      npm install --save @angular/elements   

### Multi Lang app
* Generate translation files

      ng xi18n

* Run app with specific language

      ng serve --configuration=ar

* Build

      ng run multilangapp:build:production-ar

* Build multi
  1. in package.json > scripts, add: 

      "build:i18n": "ng run multilangapp:build:production-ar && ng run multilangapp:build:production-en"

  2. run this command:

     npm run build:i18n

### Update angular app to latest version

     ng update @angular/cli @angular/core

### Material
* Install angular material

     npm install --save @angular/material @angular/cdk @angular/animations

* Support Date picker

    npm install --save moment
    npm install --save @angular/material-moment-adapter
