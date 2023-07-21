import {PencilLine} from 'phosphor-react';

import {Avatar} from './Avatar'

import styles from '../styles/Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
        <img 
            className={styles.cover}
            src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
        />
        
        <div className={styles.profile}>
            <Avatar hasBorder={true} src="https://github.com/CesarOliiveira.png"/>

            <strong>César Oliveira</strong>
            <span>Web Developer</span>
        </div>

        <footer>
            <a href="">
                <PencilLine size={20}/>
                Editar seu Perfil
            </a>
        </footer>
    </aside>
  )
}
