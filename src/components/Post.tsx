
import {Comment} from './Comment';
import { Avatar } from './Avatar';

import styles from '../styles/Post.module.css';






export function Post({author = {}, publishedAt = Date}) {
  
    
  return (
    <>
        <article className={styles.post}>
          <header>
            <div className={styles.author}>
              <Avatar src={author.avatarUrl}/>
              <div className={styles.authorInfo}>
                <strong>{author.name}</strong>
                <span>{author.role}</span>
              </div>
            </div>

            <time title="11 de Maio as 11:13h" dateTime="2022-05-11 08:13:30">
              
            </time>
          </header>



          <div className={styles.content}>
            <p>Fala Galera</p>
            <p>Esse é um Projeto Feito para conhecimento, colocado no portfólio.</p>
            <p>
              Github: <a href='#'>CesarOliivera</a> {' '}
              Linkedin: <a href='#'>Cesar Oliveira</a>
            </p>
          </div>

          <form className={styles.commentForm}>
            <strong>Deixe seu FeedBack</strong>

            <textarea
              placeholder='Deixe um comentário'
            />

            <footer>
              <button type='submit'>Publicar</button>
            </footer>
          </form>

          <div className={styles.commentList}>
            <Comment />
            <Comment />
            <Comment />
          </div>
        </article>
    </>
  )
}
