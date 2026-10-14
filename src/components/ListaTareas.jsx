import TareaItem from './TareaItem'

function ListaTareas({ tareas, onAlternar, onEliminar }) {
  if (tareas.length === 0) {
    return <p className="vacio">No hay tareas aquí. Escribe una arriba para empezar.</p>
  }

  return (
    <ul className="lista">
      {tareas.map((tarea) => (
        <TareaItem
          key={tarea.id}
          tarea={tarea}
          onAlternar={onAlternar}
          onEliminar={onEliminar}
        />
      ))}
    </ul>
  )
}

export default ListaTareas
