# Angular Item Editor

[Live demo](https://angular2-item-editor.firebaseapp.com)

A two-page SPA for displaying items (or rather statistics) as a table list and editing one at a time. Also:
* has an ability to persist the data in Session Storage to imitate a real database modification
* HTML template built with Angular Material
* uses Observables, Reactive Forms and Angular Animations

Current limitations:
* no tests included
* date editing does not affect the time and defaults to 00:00

## How to run


```bash
# Optionally install Angular CLI
npm install -g @angular/cli

# Install dependencies
npm install

# Serve on localhost:4200
ng serve
```

An easter egg included