import localStorageService from '../services/localStorageService';
//contient 3 fonctions
export const isAuthentificated = () => {
    return localStorageService.getItem('isAuthenticated') || false;
};

export const whoIsAuthentificated = () => {//return les users de notre base
    return localStorageService.getItem('userName') || 'Mon Compte';
};

export const userId = () => {//return lid de user connecter
    localStorageService.getItem('userId');
}//les cokies sont utilise pour  stocker des var