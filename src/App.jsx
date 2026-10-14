import { useState } from 'react'
import Encabezado from './components/Encabezado'
import FormularioTarea from './components/FormularioTarea'
import ListaTareas from './components/ListaTareas'
import Pie from './components/Pie'

const TAREAS_INICIALES = [
  { id: 1, texto: 'Ver el curso de React completo', completada: true },
  { id: 2, texto: 'Crear el proyecto con Vite', completada: true },
  { id: 3, texto: 'Terminar mi mini app de tareas', completada: false },
  { id: 4, texto: 'Publicarla en GitHub Pages', completada: false },
]

function App() {
  const [tareas, setTareas] = useState(TAREAS_INICIALES)
  const [ocultarCompletadas, setOcultarCompletadas] = useState(false)

  const agregarTarea = (texto) => {
    const nueva = { id: Date.now(), texto, completada: false }
    setTareas([...tareas, nueva])
  }

  const alternarTarea = (id) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea,
      ),
    )
  }

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id))
  }

  const limpiarCompletadas = () => {
    setTareas(tareas.filter((tarea) => !tarea.completada))
  }

  const pendientes = tareas.filter((tarea) => !tarea.completada).length
  const hayCompletadas = tareas.length - pendientes > 0
  const tareasVisibles = ocultarCompletadas
    ? tareas.filter((tarea) => !tarea.completada)
    : tareas

  return (
    <main className="escritorio">
      <section className="hoja">
        <Encabezado titulo="Mis tareas" pendientes={pendientes} total={tareas.length} />

        <FormularioTarea onAgregar={agregarTarea} />

        <ListaTareas
          tareas={tareasVisibles}
          onAlternar={alternarTarea}
          onEliminar={eliminarTarea}
        />

        <div className="acciones">
          <button
            type="button"
            className="boton-texto"
            onClick={() => setOcultarCompletadas(!ocultarCompletadas)}
          >
            {ocultarCompletadas ? 'Mostrar completadas' : 'Ocultar completadas'}
          </button>
          {hayCompletadas && (
            <button type="button" className="boton-texto" onClick={limpiarCompletadas}>
              Borrar completadas
            </button>
          )}
        </div>

        <Pie />
      </section>
    </main>
  )
}

export default App
