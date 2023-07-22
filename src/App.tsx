import "./styles/global.css"

import { Header } from './components/Header'
import { Post, PostType } from "./components/Post"
import { Sidebar } from "./components/Sidebar"


import styles from './styles/App.module.css'

// author: {avatar_url: "", name: "", role: ""}
// publishedAt: Date
//Content: string

const post: PostType[] = [
 {
  id: 1,
  author: {
    avatarUrl: 'https://github.com/CesarOliiveira.png',
    name: 'César Oliveira',
    role: 'CTO @ Empresa'
  },
  content: [
    { type: 'paragraph', content: 'Fala galeraa !!'},
    { type: 'paragraph', content: 'Acabei de criar esse projeto para o portfolio'},
    { type: 'link', content: 'github.com/CesarOliiveira'},
  ],
  publishedAt: new Date('2023-07-10 20:00:00')
 },
 {
  id: 2,
  author: {
    avatarUrl: 'https://github.com/diego3g.png',
    name: 'Diego Fernandes',
    role: 'Educator @ Empresa'
  },
  content: [
    { type: 'paragraph', content: 'Fala galeraa !!'},
    { type: 'paragraph', content: 'Acabei de criar esse projeto para o portfolio'},
    { type: 'link', content: ''},
  ],
  publishedAt: new Date('2023-06-05 14:00:00')
 },
];


function App() {

  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
          <Sidebar/>
          <main>
            {post.map(post => {
              return (
                <Post 
                  key={post.id} 
                  post={post}
                />
              )
            })}
          </main>
      </div>
    </>
  )
}

export default App
