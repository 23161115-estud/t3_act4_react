import { useState } from 'react'

function FormularioTarea({ onAgregar }) {
  const [texto, setTexto] = useState('')
  const [error, setError] = useState('')

  const manejarEnvio = (evento) => {
    evento.preventDefault()
    const limpio = texto.trim()

    if (limpio === '') {
      setError('Escribe una tarea antes de agregarla.')
      return
    }

    onAgregar(limpio)
    setTexto('')
    setError('')
  }

  return (
    <form className="formulario" onSubmit={manejarEnvio}>
      <label htmlFor="nueva-tarea" className="solo-lectores">
        Nueva tarea
      </label>
      <div className="formulario__fila">
        <input
          id="nueva-tarea"
          type="text"
          value={texto}
          onChange={(evento) => setTexto(evento.target.value)}
          placeholder="Escribe una tarea"
          autoComplete="off"
        />
        <button type="submit" className="boton-principal">
          Agregar tarea
        </button>
      </div>
      {error && (
        <p className="error" role="alert">
          {error}
        </p>
      )}
    </form>
  )
}

export default FormularioTarea
