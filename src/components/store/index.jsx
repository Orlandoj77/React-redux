import {createStore} from 'react';

function reducer(){
    return[
        {id:1, title: 'Iniciando com React' ,lessons: [
            {id:1, title: 'Primeira aula'},
            {  id:2, title: 'segunda aula' },

        ],
    },
    {
        id:2, title:'Aprendendo Redux', lessons:[
        {id:3, title: 'Terceira Aula'},
        
        {id:4, title: 'Quarta aula'},

    ]
    }
    ];
}

const store = createStore( reducer);
export default store;