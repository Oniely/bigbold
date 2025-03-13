export async function login(data: { email: string; password: string }) {
	try {
		console.log(data);
	} catch (error) {
		throw error;
	}
}

export async function register(data: {
	email: string;
	password: string;
	confirmPassword: string;
}) {
	try {
		// validate data on server
		console.log(data);
	} catch (error) {
		throw error;
	}
}
