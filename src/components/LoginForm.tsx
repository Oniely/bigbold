"use client";

import Link from "next/link";
import { FormEvent } from "react";

const LoginForm = () => {
	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		console.log("Form submitted");
	}

	return (
		<form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3">
			<div className="w-full">
				<p>Email</p>
				<input type="text" className="w-full px-2 py-3 border" />
			</div>
			<div className="w-full">
				<p>Password</p>
				<input type="text" className="w-full px-2 py-3 border" />
			</div>
			<button className="w-full py-4 font-semibold cursor-pointer bg-text text-bg hover:bg-text/90">
				Login
			</button>
			<p className="text-sm text-center">
				Don't have an account?{" "}
				<Link href="/register" className="underline">
					Sign Up
				</Link>
			</p>
		</form>
	);
};

export default LoginForm;
