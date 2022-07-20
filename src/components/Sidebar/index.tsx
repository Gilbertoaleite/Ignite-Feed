import React from 'react';
import { PencilLine } from "phosphor-react";
import './styles.css';
import {Avatar} from '../Avatar';
export function Sidebar() {
    return (
        <aside className='sidebar'>
            <img className='cover'
                src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=30" />

            <div className='profile'>
                <Avatar src='https://github.com/Gilbertoaleite.png' />
                <strong>Gilberto A Leite</strong>
                <span >Web Developer</span>
            </div>
            <footer >

                <a href="#">
                    <PencilLine size={ 20 } />
                    Editar seu perfil
                </a>
            </footer>
        </aside>

    );
}