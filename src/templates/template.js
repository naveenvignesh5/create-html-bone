module.exports = {
    bootstrap: {
    html: `<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <!-- Custom Styles -->
    <link rel="stylesheet" href="css/styles.css">
    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

    <!-- Custom Script -->
    <script src="js/scripts.js"></script>
  </body>
</html>`,
        js: ``,
    },
    bulma: {
        html: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hello Bulma!</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css">
    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>

    <!-- Custom Styles -->
    <link rel="stylesheet" href="css/styles.css">
  </head>
  <body>
  <section class="section">
    <div class="container">
      <h1 class="title">
        Hello World
      </h1>
      <p class="subtitle">
        My first website with <strong>Bulma</strong>!
      </p>
    </div>
  </section>
  <!-- Custom Script -->
  <script src="js/scripts.js"></script>
  </body>
</html>`,
        js: ``,
    },
  materialize: {
    html: `<!DOCTYPE html>
<html>
  <head>
    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

    <!-- Custom Styles -->
    <link rel="stylesheet" href="css/styles.css">

    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  </head>

  <body>

    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <!-- Custom Script -->
    <script src="js/scripts.js"></script>
  </body>
</html>`
  },
  pure: {
    html: `<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Pure CSS -->
    <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css" integrity="sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w" crossorigin="anonymous">

    <!--[if lte IE 8]>
        <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/grids-responsive-old-ie-min.css">
    <![endif]-->

    <!--[if gt IE 8]><!-->
        <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/grids-responsive-min.css">
    <!--<![endif]-->

    <title>Hello, world!</title>

    <!-- Custom Styles -->
    <link rel="stylesheet" href="css/styles.css">
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <!-- Custom Script -->
    <script src="js/scripts.js"></script>
  </body>
</html>`
  },
  basic: {
    html: (jquery = false) => `<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Custom Styles -->
    <link rel="stylesheet" href="css/styles.css">
    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- Optional JavaScript -->
    ${jquery ? `<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>`: ``}
    
    <!-- Custom Script -->
    <script src="js/scripts.js"></script>
  </body>
</html>`
  },
  jquery: `$(document).ready(function () {
  console.log("Hello World !!!");
});`,
  js: 
`(function() {
  console.log("Hello World  !!!");
})();`,
  gulp: (options) => `const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const minify = require('gulp-minify-css');
const babel = require('gulp-babel');

gulp.task('js', function(done){
  gulp.src('js/*.js')
    .pipe(concat('scripts.js'))
    .pipe(babel({
        presets: ['@babel/preset-env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('build/js/'));
    done();
  });
  
gulp.task('css', function(done) {
  gulp.src('css/*.css')
    .pipe(concat('styles.css'))
    .pipe(minify())
    .pipe(gulp.dest('build/css/'));
  done();
});

gulp.task('assets', function(done) {
  gulp.src('assets/**/*')
    .pipe(gulp.dest('build/assets/'));
  done();
});

gulp.task('html', function(done) {
  gulp.src('${(options.heroku || options.otherOptions.includes('Heroku')) ? 'home.html' : 'index.html'}')
    .pipe(gulp.dest('build/'));
  done();
});


gulp.task('default', gulp.series('css', 'js', 'assets', 'html', function (done) {
  done();
  console.log('Build Done !!!');
}));`,
pkgJson: (options) => `{
  "name": "${options.name}",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo 'Error: no test specified' && exit 1",
    "build": "./node_modules/.bin/gulp"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@babel/core": "^7.4.5",
    "@babel/preset-env": "^7.4.5",
    "babel-preset-es2015": "^6.24.1",
    "gulp": "^4.0.2",
    "gulp-babel": "^8.0.0",
    "gulp-concat": "^2.6.1",
    "gulp-minify-css": "^1.2.4",
    "gulp-uglify": "^3.0.2"
  }
}`,
gitIgnore: `
# OSX
.DS_Store

# npm
node_modules/

# build
build/
`
};
