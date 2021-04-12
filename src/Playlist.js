import React from 'react';
import forro from './imagens/forro.jpg';
import sertanejo from './imagens/sertanejo.jpg';
import samba from './imagens/samba.jpg';
import reggae from './imagens/reggae.jpeg';
import funk from './imagens/funk.jpg';
import pop from './imagens/pop.jpg';
import mpb from './imagens/mpb.jpg';

/*rock */
import nandoresis from './musicas/nandoresis.mp3';
import wandinho from './musicas/exagerado.mp3'

/*forro*/
import avioes from './musicas/avioes.mp3';
import tarcisio from './musicas/tarcisio.mp3';

/*reggae*/
import sorri from './musicas/sorri.mp3';
import revolution from './musicas/revolution.mp3';










export default function Playlist(){

        const playlists = [
            {id: 1, nome: 'Rock', capa: 'rock.jpeg', musicas:[{id: 1, nome: "Nando Reis - Livre", aquivo: "nandoresis.mp3"}, {id: 2, nome: "Wandinho - exagerado", aquivo: "exagerado.mp3"}]},

            {id: 2, nome: 'Forro', capa: 'forro.jpg', musicas:[{id: 1, nome: "Ela aparte minha mente", aquivo: "avioes.mp3"},{id: 2, nome: "meia noite você tem meu.mp3", aquivo: "tarcisio.mp3"}]},
            
            {id: 3, nome: 'Sertanejo', capa: 'sertanejo.jpg', musicas:[{id: 1, nome: "musica teste", aquivo: "musica.mp3"},{}]},
            {id: 4, nome: 'Samba', capa: 'samba.jpg', musicas:[{id: 1, nome: "musica teste", aquivo: "musica.mp3"},{}]},

            {id: 5, nome: 'Reggae', capa: 'reggae.jpeg', musicas:[{id: 1, nome: "Sorri", aquivo: "sorri.mp3"},{id: 2, nome: "Revolution", aquivo: "revolution.mp3"}]},

            {id: 6, nome: 'Funk', capa: 'funk.jpg', musicas:[{id: 1, nome: "musica teste", aquivo: "musica.mp3"},{}]},
            {id: 7, nome: 'Pop', capa: 'pop.jpg', musicas:[{id: 1, nome: "musica teste", aquivo: "musica.mp3"},{}]},
            {id: 8, nome: 'Mpb', capa: 'pop.jpg', musicas:[{id: 1, nome: "musica teste", aquivo: "musica.mp3"},{}]}
            ];

            const lista = playlists.map((playlist) =>
                <div>
                    <li>{playlist.id} - {playlist.nome} - {playlist.capa} - {playlist.musicas}</li>

                </div>

            );


        return(
            <>
            <playlists />
            </>


    );

}