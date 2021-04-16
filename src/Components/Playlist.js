import React, {Component} from 'react';
import forro from '../imagens/forro.jpg';
import rock from '../imagens/rock.jpeg'
import sertanejo from '../imagens/sertanejo.jpg';
import samba from '../imagens/samba.jpg';
import reggae from '../imagens/reggae.jpeg';
import funk from '../imagens/funk.jpg';
import pop from '../imagens/pop.jpg';
import mpb from '../imagens/mpb.jpg';
import '../Styles/Playlist.css';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';



export class Playlist extends Component {
    constructor(props){
        super(props);

        let playlists = [
            {
                id: 1,
                nome: 'Rock',
                capa: rock
            },
            {
                id: 2,
                nome: 'Forro',
                capa: forro
            },
            {
                id: 3,
                nome: 'Sertanejo',
                capa: sertanejo
            },
            {
                id: 4,
                nome: 'Samba',
                capa: samba
            },
            {
                id: 5,
                nome: 'Reggae',
                capa: reggae
            },
            {
                id: 6,
                nome: 'Funk',
                capa: funk
            },
            {
                id: 7,
                nome: 'Pop',
                capa: pop
            },
            {
                id: 8,
                nome: 'Mpb',
                capa: mpb
            },
        ]

        this.state = {playlists};
    }
    render(){

    return(
        <CardColumns>
            {this.state.playlists.map((playlist) => (
                
                    <Card >
                        <Card.Img variant="top" src={playlist.capa} />
                        <Card.Body>
                            <Card.Title>{playlist.id} - {playlist.nome}</Card.Title>
                        </Card.Body>
                    </Card>
               
            ))}
        </CardColumns>
    )
    

    }
}



export default Playlist;