import { legacy_createStore as createStore } from 'redux';

const initialState = [
  {
    id: 1,
    name: 'Explicar Reducers',
    finalizada: false,
  },
  {
    id: 2,
    name: 'Seguridad en React',
    finalizada: false,
  },
];

const tareaReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case '[TAREAS] AGREGAR_TAREA':
      return [...state, action.payload];

    case '[TAREAS] FINALIZAR_TAREA':
      return state.map((tarea) => {
        if (tarea.id === action.payload) {
          return {
            ...tarea,
            finalizada: !tarea.finalizada,
          };
        }

        return tarea;
      });

    case '[TAREAS] ELIMINAR_TAREA':
      return state.filter((tarea) => tarea.id !== action.payload);

    case '[TAREAS] BORRAR_TAREAS':
      return [];

    default:
      return state;
  }
};

export const store = createStore(tareaReducer);
