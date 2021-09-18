'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.exec_new = undefined;

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

var _child_process = require('child_process');

var _child_process2 = _interopRequireDefault(_child_process);

var _process = require('process');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*************/
//? -_ Crear proyecto

//* |-> Commander

//* |-> chalk
var new_apollo = function new_apollo(name_proj, type_leng, type_serve) {
    //* |-> Path de donde se guardara el proyecto
    var pathApolloDir = process.cwd() + '/' + name_proj;
    //* |-> Path de la carpeta donde ira el codigo
    var pathApolloSrc = [process.cwd() + '/' + name_proj + '/src', process.cwd() + '/' + name_proj + '/src/routes', process.cwd() + '/' + name_proj + '/src/controller', process.cwd() + '/' + name_proj + '/src/middleware', process.cwd() + '/' + name_proj + '/src/environments', process.cwd() + '/' + name_proj + '/src/helper', process.cwd() + '/' + name_proj + '/src/service', process.cwd() + '/' + name_proj + '/src/model', process.cwd() + '/' + name_proj + '/src/database'];
    //* |-> Path donde ira la puera de entrada index
    var pathApolloSrcEntry = process.cwd() + '/' + name_proj + '/src/index.' + type_leng;
    //* |-> Creamos las carpetas
    _shelljs2.default.mkdir(pathApolloDir);
    pathApolloSrc.forEach(function (e) {
        _shelljs2.default.mkdir(e);
    });
    //* |-> Creamos el archivo de entrada
    _shelljs2.default.touch(pathApolloSrcEntry);
    //* |-> Generamos las dependencias
    switch (type_serve) {
        case 'API REST':
            _child_process2.default.exec('cd ' + pathApolloDir + '; npm init -y; npm i express cors dotenv jsonwebtoken express-validator; ' + (type_leng == 'ts' ? 'tsc --init;' : ''), function (err, stdout) {
                if (err) {
                    throw err;
                }
                console.log(stdout);
            });
            break;
        case 'SERVER WEB':
            _child_process2.default.exec('cd ' + pathApolloDir + '; npm init -y; npm i express cors dotenv; ' + (type_leng == 'ts' ? 'tsc --init;' : ''), function (err, stdout) {
                if (err) {
                    throw err;
                }
                console.log(stdout);
            });
            break;
        default:
            break;
    }
    return pathApolloDir;
};
//? -_ Realizar preguntas

//* |-> Inquirer
/*************/
//*! $ Imports
//* |-> Shell
var questions = function questions() {
    var ques = [{
        name: 'type_leng',
        type: 'list',
        message: '¿Que lenguaje utilizara?',
        choices: ['js', 'ts']
    }, {
        name: 'type_serve',
        type: 'list',
        message: '¿Que quiere realizar con node?',
        choices: ['API REST', 'SERVER WEB']
    }, {
        name: 'name_proj',
        type: 'input',
        message: '¿Cual es el nombre del proyecto?'
    }];
    return _inquirer2.default.prompt(ques);
};
//? -_ Ejecutara el script
var exec_new = exports.exec_new = async function exec_new() {
    //* |-> Preguntas nesesarias para crear el proyecto
    /**
     * @s (lenguaje, nombre, tipo de servicio)
     */
    var resp = await questions();
    //* |-> Desestructuramos la respuesta
    var type_serve = resp.type_serve,
        type_leng = resp.type_leng,
        name_proj = resp.name_proj;
    //* |-> Creamos el proyecto
    /**
     * @s (Dependencias nesesarias node segun el tipo)
     */

    var create_apollo = new_apollo(name_proj, type_leng, type_serve);
    //* |-> Mensaje de exito de la creacion
};
//# sourceMappingURL=new.script.js.map