# Breakthrough ๐ง๐ปโ๐ป
## Descripcion ๐:
_Libreria CLI para el manejo de estructuras backend API REST y web con node en lenguajes como javascript y typescript._

## Instalacion ๐ฝ:
```
* Local: npm install breakthrough
* Global: npm instal -g breakthrough
```
## Usalo ya ๐ก:
* Sintaxis:
```
    * Actions: [
        'version': Nostrara la version del cli,
        'new': Creara un nuevo proyecto nodejs con el lenguaje requerido,
        'attach': Creara el modulo nesesario (routes, model, controller, middleware...)
    ]
    * bt [ _action_ ] //Solo se envia una accion Ej: bt version
```
* Global: 
```
    * bt
```
* Local:
Aรฑadir en el package.json el script:
```
  "scripts": {
    "bt": "./node_modules/.bin/new-arrow"
  }
```
Ejecutamos el comando:
```
npm run bt [ _action_ ]
```
## Estructura de carpetas ๐:
_Una estructura de carpetas simple y entendible para un entorno backend en una API REST_
```
    |_Archivos principales
    |__Controller
        |__Archivos de controladores
    |__Database
        |__Archivo de configuracion DB
    |__Environments
        |__Archivo para el control de las variables de entorno
    |__Helper
        |__Archivos para ayudas (helper)
    |__Middleware
        |__Archivos para diferrentes validadores (middleware)
    |__Model
        |__Archivos para Schemas, Modelos y clases
    |__Routes
        |__Archivos de las diferentes rutas para el control de los endpoints
```
---
N1k0DM ๐
```
 โ โ โ โขโ     
โขโโโโโโโโโช    
โโโโโโโโโยท    
โโโโโโโ.โโ    
โโ โโชยทโ  โ
```
