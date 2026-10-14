function TareaItem({ tarea, onAlternar, onEliminar }) {
  return (
    <li className={tarea.completada ? 'tarea tarea--hecha' : 'tarea'}>
      <label className="tarea__etiqueta">
        <input
          type="checkbox"
          checked={tarea.completada}
          onChange={() => onAlternar(tarea.id)}
        />
        <span className="tarea__texto">{tarea.texto}</span>
      </label>
      <button
        type="button"
        className="boton-texto boton-texto--peligro"
        onClick={() => onEliminar(tarea.id)}
        aria-label={`Eliminar la tarea ${tarea.texto}`}
      >
        Eliminar
      </button>
    </li>
  )
}

export default TareaItem
