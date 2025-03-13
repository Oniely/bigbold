"use client";

import { register } from "@/lib/action/auth";
import { registerSchema } from "@/lib/schema/auth";
import Link from "next/link";
import { useActionState, useState } from "react";

const RegisterForm = () => {
	const [formValues, setFormValues] = useState({
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [errors, setErrors] = useState<any>({});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value });
	};

	async function handleSubmit(prevState: any, formData: FormData) {
		const formValuesData = {
			email: formData.get("email") as string,
			password: formData.get("password") as string,
			confirmPassword: formData.get("confirmPassword") as string,
		};

		const result = registerSchema.safeParse(formValuesData);

		if (!result.success) {
			const newErrors: any = {};
			result.error.errors.forEach((error) => {
				newErrors[error.path[0]] = error.message;
			});
			setErrors(newErrors);
			return;
		}

		await register(result.data);
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
			<div className="w-full">
				<div className="flex justify-between items-center">
					<p>Confirm Password</p>
					{errors.confirmPassword && (
						<p className="text-red-500 text-xs text-right">
							{errors.confirmPassword}
						</p>
					)}
				</div>
				<input
					type="text"
					name="confirmPassword"
					value={formValues.confirmPassword}
					onChange={handleChange}
					className="w-full px-2 py-3 border"
				/>
			</div>
			<button
				className="w-full py-4 font-semibold cursor-pointer bg-text text-bg hover:bg-text/90 disabled:bg-[#333]/90"
				disabled={isPending}
			>
				Sign Up
			</button>
			<p className="text-sm text-center">
				Already have an account?{" "}
				<Link href="/login" className="underline">
					Log in
				</Link>
			</p>
		</form>
	);
};

export default RegisterForm;
