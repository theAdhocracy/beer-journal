// Fetch data from the API
export const fetchCraftAPI = async (endpoint: string) => {
	const data = await fetch(`${import.meta.env.CRAFT_API_URL as string}${endpoint}`, {
		method: 'GET',
		headers: {
			'content-type': 'application/json',
			Authorization: `Bearer ${import.meta.env.CRAFT_API_KEY as string}`
		}
	})
		.then(async (response) => {
			if (!response.ok) {
				throw new Error(`HTTP error: ${response.status}`)
			}
			const data = await response.json()
			if (data.data) return data.data
			return data
		})
		.catch((error) => {
			console.error(`${error}`)
		})

	return data
}
