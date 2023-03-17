import React from "react";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home",
	description: "Welcome to Next.js",
};

export default function About() {
	return (
		<>
			<h1>About</h1>
			<Link href="/">Link to homepage</Link>
		</>
	);
}
