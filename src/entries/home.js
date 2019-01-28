import React from 'react';
import { render } from 'react-dom';
// import Playlist from './src/playlist/components/playlist';
import data from '../api.json';
import Home from '../pages/containers/home';

// console.log('Hola mundo!');
const HomeContainer = document.getElementById('home-container');
// const holaMundo = <h1>Hola mundo</h1>;

// ReactDom.render(que voy a renderizar,donde lo haré);
render(<Home data={data} />,HomeContainer);
