export const getCurrentLanguage = () => {
    return localStorage.getItem('lang') || 'en'
}