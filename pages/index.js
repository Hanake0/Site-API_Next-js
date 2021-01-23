import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
	<div className={styles.container}>
		<Head>
			<meta charSet="utf-8"></meta>
			<title>Musen™</title>
			<link rel="icon" href="/logo.gif" />
		</Head>

		<main className={styles.main}>
			<h1 className={styles.title}>
				Bem vindo ao futuro site do servidor Musen™
			</h1>

			<p className={styles.description}>
				No futuro, vai ser aqui que os usuários poderão usar para acessar as suas contas
			</p>

			<div className={styles.grid}>
				<a href="https://discord.com/channels/795053938666766366/796485346262384691" className={styles.card}>
					<h3>Informações &rarr;</h3>
					<p>Veja as informações do nosso servidor</p>
				</a>

				<a href="https://disboard.org/server/795053938666766366" className={styles.card}>
					<h3>Disboard &rarr;</h3>
					<p>Acesse a nossa ´página no Disboard</p>
				</a>
			</div>
		</main>

		  <footer className={styles.footer}>
			  Contato: Hanake#7356, Servidor: <a href="discord.gg/UYc9TYYrT4">Musen™</a>
		</footer>
	</div>
	)
}
