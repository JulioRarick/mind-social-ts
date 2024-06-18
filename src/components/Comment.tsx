import { useState } from 'react';

import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Comment.module.css';

interface CommentProps {
   content: string;
   onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
   const [likeCount, setLikeCount] = useState(0);

   function handleDeleteComment() {
      onDeleteComment(content);
   }
   function handleLikeComment() {
      setLikeCount((state) => {
         return state + 1;
      });
   }

   return (
      <div className={styles.comment}>
         <Avatar
            hasBorder={false}
            src='https://github.com/JulioRarick.png'
            alt=''
         />
         <div className={styles.commentBox}>
            <div className={styles.commentContent}>
               <header>
                  <div className={styles.authorAndTime}>
                     <strong>Júlio Rarick</strong>
                     <time
                        title='June 9th at 9:50pm'
                        dateTime='2024-06-09 09:50:00pm'
                     >
                        About 1h ago
                     </time>
                  </div>
                  <button onClick={handleDeleteComment} title='Delete comment'>
                     <Trash size={24} />
                  </button>
               </header>
               <p>{content}</p>
            </div>
            <footer>
               <button onClick={handleLikeComment}>
                  <ThumbsUp />
                  Applaud <span>{likeCount}</span>
               </button>
            </footer>
         </div>
      </div>
   );
}
