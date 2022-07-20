import { Post } from './components/Post';
import { Header } from './components/Header';
import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

import Posts from "./mock";  // importa o mock com os posts


export default function App() {
  const posts = Posts;

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  avatarUrl={post.avatarUrl}
                  name={post.name}
                  role={post.role}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              );
            },
            
          )}
          
        </main>
      </div>

    </div>
  )
}
