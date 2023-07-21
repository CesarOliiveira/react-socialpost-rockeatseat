import {Comment} from './Comment'
import styles from '../styles/Post.module.css'
import { Avatar } from './Avatar'


export function Post() {
  return (
    <>
        <article className={styles.post}>
          <header>
            <div className={styles.author}>
              <Avatar src="https://github.com/CesarOliiveira.png"/>
              <div className={styles.authorInfo}>
                <strong>César Oliveira</strong>
                <span>Web Developer</span>
              </div>
            </div>

            <time title="11 de Maio as 11:13h" dateTime="2022-05-11 08:13:30">Publicado há 1h</time>
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
