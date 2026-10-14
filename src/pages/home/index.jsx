import styles from './Home.module.css'
import Container from '../../components/Container'

function Home() {
  return (
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
  )
}

export default Home