# React Skeleton

[![Build Status](https://img.shields.io/travis/vaiski/react-project-skeleton/master.svg?style=flat-square)](https://travis-ci.org/vaiski/react-project-skeleton)
[![Dependency Status](https://david-dm.org/vaiski/react-project-skeleton.svg?style=flat-square)](https://david-dm.org/vaiski/react-project-skeleton)

A project template for [React](http://facebook.github.io/react/) with [Flux](https://facebook.github.io/flux/) architecture using ES6, [Gulp](http://gulpjs.com/) and [Mocha](http://mochajs.org/).

## Quick Start

```shell
$ git clone -o react-project-skeleton -b master --single-branch \
      https://github.com/vaiski/react-project-skeleton.git MyApp
$ cd MyApp
$ npm install -g gulp
$ npm install
$ gulp
```

## Gulp Commands

* `gulp build` - test and build for production
* `gulp test` - run the tests
* `gulp lint` - check for the code style and quality
* `gulp docs` - generate documentation from the code
* `gulp serve` - watch for changes in the code; build and open result in the browser

## Tech Stack

* [React](http://facebook.github.io/react/) - library for single-page application representation layer
* [Flux](https://facebook.github.io/flux/) - architectural pattern for tackling complex applications
* [Alt](http://alt.js.org/) - library to auto-wire Flux components together
* [Gulp](http://gulpjs.com/) - build system with minimal, easy-to-learn configuration
* [Babel](https://babeljs.io/) - transpiler for allowing use of the new ECMAScript 6 (ES6) features
* [Browserify](http://browserify.org/) - used for bundling the project for production
* [Mocha](http://mochajs.org/) - test framework
* [Chai](http://chaijs.com/) - assertion library
* [Istanbul](https://github.com/gotwarlost/istanbul) - test coverage tool
* [Eslint](http://eslint.org/) - JavaScript linter
* [YUIDoc](http://yui.github.io/yuidoc/) - documentation generation tool

## License

[ISC License](LICENSE)
