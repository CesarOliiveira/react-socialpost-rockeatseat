import styles from '../styles/Post.module.css'


export function Post() {
  return (
    <>
        <article className={styles.post}>
          <header>
            <div className={styles.author}>
              <img 
                className={styles.avatar}
                src="https://github.com/CesarOliiveira.png" 
              />
              <div className={styles.authorInfo}>
                <strong>César Oliveira</strong>
                <span>Web Developer</span>
              </div>
            </div>

            <time dateTime="2022-05-11 08:13:30">Publicado há 1h</time>

          </header>
        </article>
    </>
  )
}
