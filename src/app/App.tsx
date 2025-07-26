import styles from './styles/App.module.scss'
import Home from '../pages/home'

const App: React.FC = () => {
  return (
    <main className={styles.main}>
      <Home />
    </main>
  )
}

export default App
