import { ThumbsUp, Trash } from 'phosphor-react';
import React, { useState } from 'react';
import {Avatar} from '../Avatar';
import './styles.css';

interface CommentProps {
    content: string;
    deleteComment: (comment: string) => void;
}


export default function Comment({ content, deleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        deleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1);

    }

    return (

        <div className='comment'>
            <Avatar src='https://github.com/Gilbertoaleite.png' />
            <div className='commentBox'>
                <div className='commentContent'>
                    <header>
                        <div className='authorAndTime'>
                            <strong>Gilberto A Leite</strong>
                            <time title='25 de fevereiro as 8:15' dateTime='2022-02-25 08:15:00'>Publicado Cerca de 1h atrás</time>
                        </div>
                        <button
                            onClick={ handleDeleteComment }
                            title='Deletar comentário'>
                            <Trash size={ 24 } />
                        </button>
                    </header>
                    <p>{ content }</p>
                </div>
                <footer>
                    <button onClick={ handleLikeComment }>
                        <ThumbsUp />
                        Aplaudir <span>{ likeCount }</span>
                    </button>
                </footer>
            </div>

        </div>

    );
}