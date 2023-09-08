import Link from "next/link";
import styles from './Navbar.module.css'
export default function Navbar() {
  return (
    <header className={styles.siteHeader}>
        <div className="site-logo">
            <Link href="/">Site logo</Link>
        </div>
    <nav>
        <Link href="/about" className={styles.navbarLink}>About</Link>
        <Link href="/blog" className={styles.navbarLink}>Blog</Link>
        <Link href="/contact" className={styles.navbarLink}>Contact</Link>
    </nav>
    </header>
  )
}
