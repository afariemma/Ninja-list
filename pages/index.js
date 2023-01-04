import Head from "next/head";
// import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
export default function Home() {
	return (
		<>
			<Head>
				<title>Ninja List | Home</title>
				<meta name="keywords" content="ninjas" />
			</Head>
			<div>
				<h1 className={styles.title}>Home Page</h1>
				<p className={styles.text}>
					Do sunt proident minim pariatur laboris velit Lorem reprehenderit deserunt qui ullamco. Elit enim sit tempor sunt ut. Aliquip esse
					tempor reprehenderit excepteur qui nostrud sit anim cillum. Culpa aute amet ut ad velit consequat sunt magna laboris fugiat sunt
					exercitation nostrud.Esse deserunt Lorem ut do amet consequat incididunt qui magna nulla in. Duis non fugiat deserunt ad quis. Do
					occaecat duis tempor velit nostrud ea labore non. Anim sint quis nisi commodo duis aute minim excepteur incididunt exercitation
					qui elit ex. Aute incididunt nulla minim reprehenderit aliquip sit laboris officia eiusmod incididunt cupidatat ex. Voluptate
					occaecat sit proident consequat labore.
				</p>

				<Link href="/ninjas" className={styles.btn}>
					See Ninja Listing
				</Link>
			</div>
		</>
	);
}
