import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import './global.css';
import styles from './App.module.css';

const posts = [
   {
      id: 1,
      author: {
         avatarUrl: 'https://github.com/JulioRarick.png',
         name: 'Júlio Rarick',
         role: 'Front-end Developer',
      },
      content: [
         { type: 'paragraph', content: 'Hey guys!' },
         {
            type: 'paragraph',
            content:
               'I just uploaded a project to my portfolio. It is a project I made using React.js.',
         },
         { type: 'link', content: 'juliorarick.com/mind-social' },
      ],
      publishedAt: new Date('2024-06-13 22:52:00'),
   },
   {
      id: 2,
      author: {
         avatarUrl: 'https://github.com/JulioRarick.png',
         name: 'Júlio Rarick',
         role: 'Front-end Developer',
      },
      content: [
         { type: 'paragraph', content: 'Hey guys!' },
         {
            type: 'paragraph',
            content:
               'I just uploaded a project to my portfolio. It is a project I made using React.js.',
         },
         { type: 'link', content: 'juliorarick.com/mind-social' },
      ],
      publishedAt: new Date('2024-06-13 22:52:00'),
   },
];
export function App() {
   return (
      <div>
         <Header />
         <div className={styles.wrapper}>
            <Sidebar />
            <main>
               {posts.map((post) => {
                  return (
                     <Post
                        key={post.id}
                        author={post.author}
                        content={post.content}
                        publishedAt={post.publishedAt}
                     />
                  );
               })}
            </main>
         </div>
      </div>
   );
}
