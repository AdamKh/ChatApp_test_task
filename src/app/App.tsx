import styles from './styles/App.module.scss'
import Home from '@pages/home'
import Layout from '@shared/ui/Layout/Layout'

const App: React.FC = () => {
  return (
    <main className={styles.main}>
      <Layout>
        <Home />
      </Layout>
    </main>
  )
}

export default App
