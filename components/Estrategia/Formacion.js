import { connect } from 'react-redux';
import { ContainerP, ContainerT, ContainerIMG } from './Estrategia.elements';

function Formaciones({ formacionesSelected }) {
    return(
      <div>
        {
          formacionesSelected ?
          <div>
            <ContainerT>Descripción</ContainerT>
            <ContainerP>{formacionesSelected.descripcion}</ContainerP>
  
            <ContainerIMG src={formacionesSelected.imagen} alt='Formacion'/>
          </div>
          : null
        }
      </div>
    );
  }

  const mapStateToProps = ( state ) => {
    return {
      formacionesSelected: state.formacion.formacionesSelected
    }
  }

  export default connect(mapStateToProps)(Formaciones)

