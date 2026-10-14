import styles from './Page404.module.css'
import Header from '../../components/Header'
import Container from '../../components/Container'
import Footer from '../../components/Footer'

function Page404() {
  return (
    <>
      <Header />
      <Container>
        <div className={styles.erro}>
          <h1>404</h1>
          <p>Página não encontrada.</p>
        </div>
      </Container>
      <Footer />
    </>
  )
}

export default Page404