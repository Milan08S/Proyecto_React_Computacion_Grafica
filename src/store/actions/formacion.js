const setFormacion = (formacion) => (dispatch) => {
    dispatch({
      type: 'SET_FORMACION', 
      payload: { formacion }
    });
}

export default setFormacion;