"use client";

import { login } from "@/lib/action/auth";
import { loginSchema } from "@/lib/schema/auth";
import Link from "next/link";
import { useActionState, useState } from "react";

const LoginForm = () => {
	const [formValues, setFormValues] = useState({
		email: "",
		password: "",
	});
	const [errors, setErrors] = useState<any>({});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value });
	};

	async function handleSubmit(prevState: any, formData: FormData) {
		const formValuesData = {
			email: formData.get("email") as string,
			password: formData.get("password") as string,
		};

		const result = loginSchema.safeParse(formValuesData);

		if (!result.success) {
			const newErrors: any = {};
			result.error.errors.forEach((error) => {
				newErrors[error.path[0]] = error.message;
			});
			setErrors(newErrors);
			return;
		}

		await login(result.data);
	}

	const [state, formAction, isPending] = useActionState(handleSubmit, null);

	return (
		<form action={formAction} className="grid grid-cols-1 gap-3">
			<div className="w-full">
				<div className="flex justify-between items-center">
					<p>Email</p>
					{errors.email && (
						<p className="text-red-500 text-xs text-right">
							{errors.email}
						</p>
					)}
				</div>
				<input
					type="text"
					name="email"
					value={formValues.email}
					onChange={handleChange}
					className="w-full px-2 py-3 border"
				/>
			</div>
			<div className="w-full">
				<div className="flex justify-between items-center">
					<p>Password</p>
					{errors.password && (
						<p className="text-red-500 text-xs text-right">
							{errors.password}
						</p>
					)}
				</div>
				<input
					type="text"
					name="password"
					value={formValues.password}
					onChange={handleChange}
					className="w-full px-2 py-3 border"
				/>
			</div>
			<button
				className="w-full py-4 font-semibold cursor-pointer bg-text text-bg hover:bg-text/90 disabled:bg-[#333]/90"
				disabled={isPending}
			>
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
