export const getStorageValue = (key, defaultValue) => {
	const saved = localStorage.getItem(key);
	const initial = JSON.parse(saved);
	return initial || defaultValue;
};

export const setLocalStorage = (key, defaultValue) => {
	return localStorage.setItem(key, JSON.stringify(defaultValue));
};
