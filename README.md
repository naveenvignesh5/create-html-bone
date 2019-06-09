## Basic HTML Boilerplate Generator

[![Build Status](https://travis-ci.com/naveenvignesh5/create-html-bone.svg?branch=master)](https://travis-ci.com/naveenvignesh5/create-html-bone)
[![NPM Downloads](https://img.shields.io/npm/dw/create-html-bone.svg)](https://img.shields.io/npm/dw/create-html-bone.svg)
[![NPM Version](https://img.shields.io/npm/v/create-html-bone.svg)](https://img.shields.io/npm/v/create-html-bone.svg)

Simple CLI to generate boiler plate for basic html projects.

### Installation

```shell
npm i -g create-html-bone
```

### How to use ?

**Command Line Instructions**
```shell
create-html-bone -h

Options:
  -V, --version       output the version number
  -n, --name [value]  Name of the project
  -c, --css [value]   CSS Framework (Bootstrap 4, Bulma, Materialize, Pure)
  -j, --jquery        Generate js with JQuery template
  -g, --gulp          Generate gulp file
  -k, --heroku        Generate Heroku Config
  -h, --help          output usage information
```

**Generating Template from command tools**
```shell
create-html-bone -n demo -c bulma -jquery

create-html-bone --name demo -c bootstrap

create-html-bone --name demo --gulp
```

**Generating Template from Interactive Console**

![](https://github.com/naveenvignesh5/create-html-template/blob/master/demo/v1.1.0.gif?raw=true)

**Building with default gulp script**

```shell
npm run build
```

**Heroku Publish**

Follow [this](https://devcenter.heroku.com/articles/getting-started-with-php#deploy-the-app) tutorial. 

The boilerplate generates a basic PHP application that is to be deployed to heroku.

### Authors

* Naveen Vignesh.B - Initial Work

### License

This project is licensed unser ISC License - see the [License.md](https://github.com/naveenvignesh5/create-html-template/blob/master/License.md) file for details.

### Acknowledgments

* Thanks to anyone who has contributed to code.