import LoginForm from "@/components/LoginForm";
import { SquareAsterisk } from "lucide-react";

const LoginPage = () => {
	return (
		<div className="w-full h-dvh content-center">
			<div className="max-w-lg mx-auto p-4 border border-text flex flex-col gap-3">
				<div className="flex justify-between">
					<div>
						<h2 className="text-2xl font-mono font-semibold">
							Login
						</h2>
						<p className="text-sm">
							Please enter your credentials to log in.
						</p>
					</div>
					<div>
						<SquareAsterisk size={24} />
					</div>
				</div>
				<LoginForm />
			</div>
		</div>
	);
};

export default LoginPage;
