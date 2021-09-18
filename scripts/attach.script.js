'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.exec_attach = undefined;

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*************/
//? -_ Creamos las rutas
/*************/
//*! $ Imports
//* |-> Shell
var new_file = function new_file(name_file, type_leng, type_folder) {
    //* |-> Path en donde se guardara el archivo
    var pathFile = process.cwd() + '/src/' + type_folder + '/' + name_file + '.' + type_folder + '.' + type_leng;
    //* |-> Creamos el archivo
    _shelljs2.default.touch(pathFile);
};
//? -_ Realizara preguntas

//* |-> Inquirer
var questions = function questions() {
    var ques = [{
        name: 'name_file',
        type: 'input',
        message: '¿Cual es el nombre del archivo?'
    }, {
        name: 'type_leng',
        type: 'list',
        message: 'Tipo de lenguaje que utiliza:',
        choices: ['js', 'ts']
    }, {
        name: 'type_folder',
        type: 'list',
        message: '¿Que intenta crear?',
        choices: ['controller', 'database', 'helper', 'middleware', 'model', 'environments', 'routes', 'service']
    }];
    return _inquirer2.default.prompt(ques);
};
//? -_ Ejecutara el script
var exec_attach = exports.exec_attach = async function exec_attach() {
    //* |-> Preguntar sobre el nombre del archivo para la ruta
    var resp = await questions();
    var name_file = resp.name_file,
        type_leng = resp.type_leng,
        type_folder = resp.type_folder;
    //* |-> Creamos una nueva ruta

    var create_attach = new_file(name_file, type_leng, type_folder);
};
/*************/
//# sourceMappingURL=attach.script.js.map