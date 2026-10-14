function Encabezado({ titulo, pendientes, total }) {
  const hechas = total - pendientes
  const porcentaje = total === 0 ? 0 : Math.round((hechas / total) * 100)

  const mensaje =
    pendientes === 0
      ? 'No tienes tareas pendientes.'
      : pendientes === 1
        ? 'Te falta 1 tarea.'
        : `Te faltan ${pendientes} tareas.`

  return (
    <header className="encabezado">
      <h1>{titulo}</h1>
      <p className="resumen" aria-live="polite">
        {mensaje}
      </p>
      <div
        className="barra"
        role="progressbar"
        aria-label="Tareas completadas"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={porcentaje}
      >
        <div className="barra__relleno" style={{ width: `${porcentaje}%` }} />
      </div>
    </header>
  )
}

export default Encabezado
