import F442 from '../../images/Formacion442.png'
import F343 from '../../images/Formacion343.png'
import F4411 from '../../images/Formacion4411.png'
import F352 from '../../images/Formacion352.png'
import F4321 from '../../images/Formacion4321.png'
import F541 from '../../images/Formacion541.png'
import F3421 from '../../images/Formacion3421.png'
import F451 from '../../images/Formacion451.png'

let initialState = {
    formacionesSelected: {
        id: 1,
        name: '4-4-2',
        imagen: F442,
        descripcion: '4-4-2'
    },

    formaciones: [{
        id: 1,
        name: '4-4-2',
        imagen: F442,
        descripcion: '4-4-2'
    }, {
        id: 2,
        name: '3-4-3',
        imagen: F343,
        descripcion: '3-4-3'
    }, {
        id: 3,
        name: '4-4-1-1',
        imagen: F4411,
        descripcion: '4-4-1-1'
    }, {
        id: 4,
        name: '3-5-2',
        imagen: F352,
        descripcion: '3-5-2'
    }, {
        id: 5,
        name: '4-3-2-1',
        imagen: F4321,
        descripcion: '4-3-2-1'
    }, {
        id: 6,
        name: '5-4-1',
        imagen: F541,
        descripcion: '5-4-1'
    }, {
        id: 7,
        name: '3-4-2-1',
        imagen: F3421,
        descripcion: '3-4-2-1'
    }, {
        id: 8,
        name: '4-5-1',
        imagen: F451,
        descripcion: '4-5-1'
    }
]
};

const formacionReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_FORMACION':
            console.log("333333: ", action.payload)
            return{
                ...state,
                formacionesSelected: action.payload.formacion
            };
        default:
            return state;
    }
};

export default formacionReducer