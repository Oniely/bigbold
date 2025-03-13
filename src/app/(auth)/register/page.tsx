import RegisterForm from "@/components/RegisterForm";
import { SquareAsterisk } from "lucide-react";

const RegisterPage = () => {
	return (
		<div className="w-full h-dvh content-center">
			<div className="max-w-lg mx-auto p-4 border border-text flex flex-col gap-3">
				<div className="flex justify-between">
					<div>
						<h2 className="text-2xl font-mono font-semibold">
							Sign up
						</h2>
						<p className="text-sm">
							Please enter your details to sign up.
						</p>
					</div>
					<div>
						<SquareAsterisk size={24} />
					</div>
				</div>
				<RegisterForm />
			</div>
		</div>
	);
};

export default RegisterPage;
