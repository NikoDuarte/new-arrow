#!/usr/bin/env node
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

//* |$ Realizamos el script para que corra de manera global y directa
/*************/
//*! $ Imports
//* |-> Shell
var shell = require('shelljs');
//* |-> chalk
var chalk = require('chalk');
//* |-> Figlet
var figlet = require('figlet');
//* |-> Inquirer
var inquirer = require('inquirer');
/*************/
//? -_ Iniciar Banner
var main = function main() {
    //* |-> Texto personalizado
    console.log(chalk.blue(figlet.textSync("New Arrow", {
        font: 'Small',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    })));
    console.log('| nodejs | es6 |');
    console.log('| New Arrow |');
    console.log('| 1.0.4 |');
    console.log('| N1k0DM |');
};
//? -_ Ejecutara el script
var exec_vers = exports.exec_vers = async function exec_vers() {
    //* |-> Mostramos la informacion nesesaria del proyecto
    /**
     * @s (lenguaje basado, nombre, versionado, autor)
     */
    main();
};
//# sourceMappingURL=version.script.js.map