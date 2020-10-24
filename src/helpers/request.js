import axios from 'axios';
import {store} from '../store/index';

const unauthorizedHandler = e => {
    if(e.response.status === 401){
        store.dispatch('user/setIsAuthed', false);
        store.dispatch('user/setUser', {});
        store.dispatch('user/setToken', '');
        window.location.reload();
        window.location.href = '/login';
    }
    throw e;
};

export default {
    get(url){
        return axios.get(url).catch(unauthorizedHandler);
    },

    post(url,formData = null){
        return axios.post(url, formData).catch(unauthorizedHandler);
    },

    patch(url,formData = null){
        return axios.patch(url, formData).catch(unauthorizedHandler);
    },

    delete(url){
        return axios.delete(url).catch(unauthorizedHandler);
    },
}
