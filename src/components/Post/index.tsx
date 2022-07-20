import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import {Avatar} from '../Avatar';
import Comment from '../Comment';
import styles from './styles.module.css';

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}
interface Content {
type: 'paragraph' | 'link';
content: string;
}
interface PostProps {
    author: Author;
    publishedAt: Date;
    content: Content[];
}


export function Post({ author, publishedAt, content }: PostProps) {
    const [comments, setComments] = useState([" teste"]);
    const [newCommentText, setNewCommentText] = useState('');


    const formattedDate = format(publishedAt, "d 'de' LLLL yyyy 'às' HH:mm 'hrs'", {
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    });

    function handleCreateNewComments(event: FormEvent) {
        event.preventDefault();

        setComments([...comments, newCommentText]);
        setNewCommentText('');

    }

    function handleNewCommentChange(event:ChangeEvent<HTMLTextAreaElement> ) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
            event.target.setCustomValidity('Por favor, digite um comentário válido');
        
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeleted = comments.filter(comment => {
            return comment !== commentToDelete;
        })

        setComments(commentsWithoutDeleted);
    }

    const isNewCommentEmpty = newCommentText.length === 0 || newCommentText === ' ';


    return (
        <article className={ styles.post }>
            <header>
                <div className={ styles.author }>
                    <Avatar src={ author.avatarUrl } />
                    <div className={ styles.authorInfo }>
                        <strong>{ author.name }</strong>
                        <span>{ author.role }</span>
                    </div>
                </div>

                <time title={ formattedDate }>Publicado { publishedDateRelativeToNow }</time>

            </header>
            <div className={ styles.content }>
                { content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={ line.content }>{ line.content }</p>;
                    } else if (line.type === 'link') {
                        return <p key={ line.content }><a href="#">{ line.content }</a></p>;
                    }
                }) }
            </div>

            <form onSubmit={ handleCreateNewComments } className={ styles.commentForm }>
                <strong>Deixe o seu feedbback</strong>

                <textarea
                    name='comment'
                    placeholder='Deixe um comentário'
                    value={ newCommentText }
                    onChange={ handleNewCommentChange }
                    onInvalid={ handleNewCommentInvalid }
                    required
                />
                <footer>
                    <button type='submit' disabled={ isNewCommentEmpty }>Pulicar</button>
                </footer>
            </form>

            <div className={ styles.commentList }>
                { comments.map(comment => {
                    return <Comment
                        key={ comment }
                        content={ comment }
                        deleteComment={ deleteComment } />
                }) }
            </div>
        </article>
    )

}