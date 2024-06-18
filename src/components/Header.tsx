import styles from './Header.module.css';
import mindSocialLogo from '../assets/mind_social_logo.png';

export function Header() {
   return (
      <header className={styles.header}>
         <img src={mindSocialLogo} alt='Logo' />
      </header>
   );
}
