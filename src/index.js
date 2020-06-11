import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './components/Primeiro'
// import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'

ReactDOM.render(
    <div>
        <ComFilhos>
            <ul>
                <li>mattel</li>
                <li>phelp</li>
                <li>genezi</li>
                <li>durce</li>
            </ul>
        </ComFilhos>
        {/* <Primeiro/>
        <ComParametro titulo= "Esse é o título"
            subtitulo="Esse é o subtitulo"/>  
        <ComParametro titulo= "Opa!" subtitulo="Epa"/> */}     
    </div>,
    document.getElementById('root')
)