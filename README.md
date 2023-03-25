# time-tracker

Sistema que permite fichar y desfichar a los empleados de manera fácil y visual. Desarrollado con Vue 3 en Vite.

## LIVE DEMO

Probar la demo de [TIME-TRACKER](https://bryans1989-time-tracker.netlify.app/)

## Features

-   Mostrar el tiempo que el empleado lleva fichado.
    -   Si el empleado se encuentra trabajando se verá en tiempo real como avanza su jornada.
    -   Si el empleado se encuentra desfichado mostrará el tiempo que ha realizado.
-   Mostrar un botón para fichar que cambiará según el estado del empleado.
    -   Si se encuentra trabajando mostraremos un botón de Salir.
    -   Si se encuentra desfichado mostraremos el botón de Entrar.
-   Mostrar un avatar que nos indique el estado del empleado (marcar con colores), el nombre y apellido.
-   Mostrar dos tipos de desplegables distintos al pasar por encima del icono de desplegar (datos estáticos).

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
