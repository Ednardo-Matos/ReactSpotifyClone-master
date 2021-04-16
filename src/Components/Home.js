import React, {Component} from 'react';
import fotoHome from '../Logos/picture-home.jpg';
import Foot from './Footer'

export class Home extends Component{
    render(){
    return(
        <>

            <body>
                    <div>
                        <img className="Foto" src={fotoHome} alt="foto home"/>
                        <button className="BtnDownload">BAIXE O SPOTIFY</button>
                        <p>Milhões de musicas para ouvir. E nem precisa de cartão de crédito</p>
                    </div>
            </body>
        <Foot />    
        </>
    )
    }
}

export default Home;