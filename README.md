# Mis tareas (t3_act4_react)

Mini aplicación de lista de tareas hecha con **React** y **Vite** para la Actividad 4. Tiene un estilo de videojuego de rol inspirado en Deltarune: cuadro de diálogo negro con borde blanco, fondo azul oscuro con rejilla, barra de progreso y un corazón pixelado que aparece junto a la tarea seleccionada. Es solo inspiración visual: no usa personajes, imágenes ni recursos del juego.

**Autor:**Ruiz Durán Emiliano

## ¿Qué hace la aplicación?

- Muestra una lista de tareas, cuántas faltan por hacer y una barra con el avance.
- Permite **agregar** una tarea nueva (si el campo está vacío, muestra un aviso).
- Permite **marcar** una tarea como hecha o deshacerla.
- Permite **eliminar** una tarea o **borrar todas las completadas**.
- Permite **ocultar o mostrar** las tareas completadas.

No usa ninguna API: todo vive en la memoria de la página, así que al recargar vuelve a las tareas iniciales.

## Tecnologías

- React 18
- Vite 5
- CSS propio (sin librerías de estilos)
- Fuente VT323 de Google Fonts (si no carga, se usa una fuente monoespaciada del sistema)
- gh-pages (para publicar en GitHub Pages)

## Estructura del proyecto

```
t3_act4_react
├── index.html
├── vite.config.js          (base: '/t3_act4_react/')
├── package.json            (scripts predeploy y deploy)
└── src
    ├── main.jsx            (punto de entrada)
    ├── App.jsx             (estado principal y funciones)
    ├── index.css
    └── components
        ├── Encabezado.jsx       (componente con props)
        ├── FormularioTarea.jsx  (componente con estado)
        ├── ListaTareas.jsx      (lista con .map() y key)
        ├── TareaItem.jsx        (componente con props)
        └── Pie.jsx              (componente funcional simple)
```

## Requisitos de la actividad y dónde están

| Requisito | Dónde se cumple |
|---|---|
| Componente funcional simple | `Pie.jsx` |
| Componente que recibe y muestra props | `Encabezado.jsx` (`titulo`, `pendientes`, `total`) y `TareaItem.jsx` (`tarea`, `onAlternar`, `onEliminar`) |
| Componente que usa estado (`useState`) | `App.jsx` (`tareas`, `ocultarCompletadas`) y `FormularioTarea.jsx` (`texto`, `error`) |
| Lista renderizada con `.map()` | `ListaTareas.jsx` |

## Cómo ejecutarlo en tu computadora

```bash
npm install
npm run dev
```

Después abre la dirección que aparece en la terminal (normalmente `http://localhost:5173/t3_act4_react/`).

## Cómo se publicó en GitHub Pages

1. Se instaló `gh-pages` como dependencia de desarrollo: `npm install gh-pages --save-dev`.
2. En `vite.config.js` se agregó `base: '/t3_act4_react/'`, con el nombre exacto del repositorio.
3. En `package.json` se agregaron los scripts `"predeploy": "npm run build"` y `"deploy": "gh-pages -d dist"`.
4. Se ejecutó `npm run deploy`, que compila el proyecto y sube la carpeta `dist` a la rama `gh-pages`.
5. En *Settings > Pages* se eligió la rama `gh-pages` como fuente.

## Preguntas

### a) ¿Qué diferencia hay entre props y state en React?

Las **props** son los datos que un componente padre le manda a un componente hijo. El hijo solo las lee y no debe modificarlas. El **state** son los datos propios de un componente que pueden cambiar con el tiempo, y cuando cambian React vuelve a dibujar el componente. En mi aplicación, `App` guarda la lista en el state `tareas`, y le pasa cada tarea como prop a `TareaItem`, que solo la muestra.

### b) ¿Por qué es importante usar una key al renderizar una lista de elementos?

La `key` le permite a React identificar cada elemento de la lista. Así, cuando se agrega, cambia o elimina una tarea, React sabe cuál fue y actualiza solo esa parte, en vez de volver a dibujar todo o confundir elementos. Sin una key única y estable, pueden pasar errores raros, como que al borrar una tarea el checkbox marcado quede en otra. Por eso usé el `id` de cada tarea como key y no la posición en el arreglo.

### c) ¿Qué hace `useState` y dónde la usé?

`useState` es un hook que permite que un componente guarde un dato y lo recuerde entre renderizados. Se le da un valor inicial y devuelve dos cosas: el valor actual y una función para cambiarlo. Cuando llamo a esa función, React actualiza el valor y vuelve a dibujar el componente con lo nuevo. En mi aplicación la usé en `App.jsx`: `const [tareas, setTareas] = useState(TAREAS_INICIALES)`, que guarda la lista y se actualiza al agregar, marcar o eliminar tareas. También la usé en `FormularioTarea.jsx`: `const [texto, setTexto] = useState('')`, que guarda lo que voy escribiendo en el campo.

### d) Enlace del repositorio de GitHub



### e) Enlace del proyecto desplegado en GitHub Pages

