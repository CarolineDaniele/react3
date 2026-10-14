import styles from './Home.module.css'
import Header from '../../components/Header'
import Container from '../../components/Container'
import Footer from '../../components/Footer'

function Home() {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.home}>
          <div className={styles.apresentacao}>
            <h1>Olá, eu sou a Caroline</h1>
            <p>Este é o meu projeto em React.</p>
          </div>
          <button className={`${styles.btn} ${styles.btn_red}`}>
            Saiba mais
          </button>
        </section>
      </Container>
      <Footer />
    </>
  )
}

export default Home