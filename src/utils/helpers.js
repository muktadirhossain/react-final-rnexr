export const getFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key))
}


export const setToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
    return true
}

export const clearLocalStorage = (key) => {
    localStorage.removeItem(key)
    return true
}