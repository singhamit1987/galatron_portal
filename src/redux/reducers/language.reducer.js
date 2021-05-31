const currentLanguage = 'en'

export const changeLanguageReducer = (state = currentLanguage, action) => {
    switch(action.type) {
        case 'EN':
        return 'en'
        break;

        case 'ES':
        return 'es'
        break;

        case 'IT':
        return 'it'
        break;  

        case 'CH':
        return 'ch'
        break;

        default:
        return state

    }
}