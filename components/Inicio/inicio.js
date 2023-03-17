import Data from './Data';
import Navbar from '../navbar/Navbar';
import { Cabecera, Cuerpo } from '../../App.elements';
import Footer from '../footer/footer';

function Inicio() {
    return<>
    <Cabecera>
      <Navbar/>
    </Cabecera>
      <Cuerpo>
        <Data/>
      </Cuerpo>
    <Footer/>
    </>

};

export default Inicio;