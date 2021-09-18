#!/usr/bin/env node
'use strict';

var _new = require('./scripts/new.script');

var _version = require('./scripts/version.script');

var _attach = require('./scripts/attach.script');

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

//* |$ Realizamos el script para que corra de manera global y directa
//* |-> Capturar los argumentos del comando
var _process$argv = _toArray(process.argv),
    args = _process$argv.slice(2);
/*************/
//*! $ Imports
//* |-> Crear proyecto

//* |-> Versionado

//* |-> Archivo


/*************/
switch (args[0]) {
    case 'version':
        (0, _version.exec_vers)();
        break;
    case 'new':
        (0, _new.exec_new)();
        break;
    case 'attach':
        (0, _attach.exec_attach)();
        break;
    default:
        break;
}
/*************/
/**
 ▐ ▄ ▄ •▄     
•█▌▐██▌▄▌▪    
▐█▐▐▌▐▀▀▄·    
██▐█▌▐█.█▌    
▀▀ █▪·▀  ▀
 */
//# sourceMappingURL=index.js.map