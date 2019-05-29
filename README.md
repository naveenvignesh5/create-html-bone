## Basic HTML Boilerplate Generator

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
  -c, --css [value]   CSS Framework (bulma, bootstrap, materialize)
  -j, --jquery        Generate js with JQuery template
  -g, --gulp          Generate gulp file
  -h, --help          output usage information
```

**Generating Template from command tools**
```shell
create-html-bone -n demo -c bulma -jquery

create-html-bone --name demo -c bootstrap

create-html-bone --name demo --gulp
```

**Generating Template from Interactive Console**

![](https://github.com/naveenvignesh5/create-html-template/blob/master/demo/demo.gif?raw=true)

**Building with default gulp script**

```shell
npm run build
```

### Authors

* Naveen Vignesh.B - Initial Work

### License

This project is licensed unser ISC License - see the [License.md](./License.md) file for details.

### Acknowledgments

* Thanks to anyone who has contributed to code.