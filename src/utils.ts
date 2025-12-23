export async function mockApiFetch(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
