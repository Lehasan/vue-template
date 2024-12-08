import { ref } from "vue"

export const useLocalStorage = <T>(storageKey: string = 'storage', defaultValue: T) => {
	const getStorage = (): T => {
		try {
			const storedValue = localStorage.getItem(storageKey)
			return storedValue ? JSON.parse(storedValue) : defaultValue
		} catch (error) {
			console.error(`Error parsing localStorage key "${storageKey}":`, error)
			return defaultValue
		}
	}

	const storageValue = ref<T>(getStorage())

	const setStorage = (value: T) => {
		try {
			localStorage.setItem(storageKey, JSON.stringify(value))
			storageValue.value = value
		} catch (error) {
			console.error(`Error setting localStorage key "${storageKey}":`, error)
		}
	}

	return { storageValue, setStorage }
}