import "./styles/global.css"

import { Header } from './components/Header'
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from './styles/App.module.css'

function App() {

  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
          <Sidebar/>
          <main>
            <Post 
              author="Diogo" 
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, voluptatum eaque delectus mollitia voluptatem veniam. Nulla natus odit facere dolor, asperiores voluptates magnam deserunt aliquid autem debitis, dolore eligendi fuga!"
            />
          </main>
      </div>
    </>
  )
}

export default App
