import Link from "next/link";
import { Router, useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
	const router = useRouter();
	useEffect(() => {
		setTimeout(() => {
			router.push("/");
		}, 3000);
	}, [router]);

	return (
		<div className="not-found">
			<h1>Oops...</h1>
			<h2>This page cannot be found</h2>
			<Link href="/">Back to home page</Link>
		</div>
	);
};

export default NotFound;
