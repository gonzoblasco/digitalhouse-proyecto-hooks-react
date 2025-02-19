import PropTypes from 'prop-types';
import { useForm } from '../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';

export const ListaTareasComponent = () => {
  const tareas = useSelector((state) => state);
  const dispatch = useDispatch();

  const { tarea, onInputChange, onResetForm } = useForm({
    tarea: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (tarea.trim().length === 0) return; // Evitar tareas vacías

    const nuevaTarea = {
      id: new Date().getTime(), // ID único basado en el tiempo
      name: tarea.trim(),
      finalizada: false,
    };

    dispatch({
      type: '[TAREAS] AGREGAR_TAREA',
      payload: nuevaTarea,
    });

    onResetForm(); // Limpiar el formulario después de agregar la tarea
  };

  const handleEndTask = (id) => {
    const action = {
      type: '[TAREAS] FINALIZAR_TAREA',
      payload: id,
    };

    dispatch(action);
  };

  const handleDeleteTask = (id) => {
    const action = {
      type: '[TAREAS] ELIMINAR_TAREA',
      payload: id,
    };

    dispatch(action);
  };

  const handleDeleteAllTasks = () => {
    const action = {
      type: '[TAREAS] BORRAR_TAREAS',
    };

    dispatch(action);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="tarea" className="form-label">
            Agrega una nueva tarea
          </label>
          <input
            type="text"
            className="form-control"
            id="tarea"
            name="tarea"
            value={tarea}
            onChange={onInputChange}
            aria-label="Nueva tarea"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
        <button
          type="button"
          className="btn btn-danger mx-3"
          onClick={handleDeleteAllTasks}
        >
          Borrar Todas
        </button>
      </form>

      <hr />

      {tareas.length === 0 ? (
        <p>No hay tareas disponibles.</p>
      ) : (
        <ul className="list-group">
          {tareas.map((tarea) => (
            <li
              key={tarea.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span>{tarea.name}</span>
              <input
                type="checkbox"
                checked={tarea.finalizada}
                onChange={() => handleEndTask(tarea.id)}
                aria-label={`Finalizar tarea ${tarea.name}`}
              />
              <button
                className="btn btn-danger m-2"
                onClick={() => handleDeleteTask(tarea.id)}
                aria-label={`Eliminar tarea ${tarea.name}`}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

ListaTareasComponent.propTypes = {
  initialState: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      finalizada: PropTypes.bool.isRequired,
    }),
  ),
};
