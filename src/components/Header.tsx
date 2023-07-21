import styles from '../styles/Header.module.css'
import logo from '../assets/ignite-logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
    <img src={logo} alt="logo" />
        Ignite Feed
    </header>
  )
}
