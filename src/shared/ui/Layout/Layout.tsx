import styles from './Layout.module.scss'
import type { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return <div className={styles.layout}>{children}</div>
}

export default Layout
