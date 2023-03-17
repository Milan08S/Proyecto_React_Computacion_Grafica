import React from 'react'
import './Buttom.css'
import { connect } from 'react-redux';
import setFormacion from '../../store/actions/formacion';
import { ContainerB } from './Estrategia.elements';


function Botones({ formaciones, setFormacion }) {

  return(
      <ContainerB>
        {
        formaciones.map( formacion => (
          <div key={formacion.id}>
            <button className='btnr' onClick={() => {
              console.log("222222")
              setFormacion(formacion)
            }}>{formacion.name}</button>
          </div>
        ))
        }
      </ContainerB>
      
  );
}



const mapStateToProps = ( state ) => {
  return {
    formaciones: state.formacion.formaciones
  }
}

const mapActionsToProps = {
  setFormacion
};

export default connect(mapStateToProps, mapActionsToProps)(Botones);
