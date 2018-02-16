# Frontend Datenhack

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.7.

## Installation

### Prerequisites

* `nodejs` and `npm`
* `yarn`
* `docker` (for local testing)
 
### Installation steps

1. Clone repository: `git clone https://github.com/dataramblers/datenhack-frontend.git`
2. Navigate to directory: `cd datenhack-frontend`
3. Install dependencies: `yarn`

## Running

Info: Will possibly be changed in future releases!

1. Download and run docker image of the `Loris image server` on port `5004`: `docker run
   -dp5004:5004 lorisimageserver/loris`
2. Start dev server: `ng serve`
3. Navigate to `localhost:4200`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
