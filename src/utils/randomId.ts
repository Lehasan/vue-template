export const randomId = (size = 5) => {
	let id = ''

	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-'
	const alphabetLength = alphabet.length

	const randomValues = crypto.getRandomValues(new Uint8Array(size))

	for (let i = 0; i < size; i++) {
		id += alphabet[randomValues[i] % alphabetLength]
	}

	return id
}