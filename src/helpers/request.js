import axios from 'axios';
import {store} from '../store/index';

const unauthorizedHandler = e => {
    if (e.response.status === 401) {
        store.dispatch('user/setIsAuthed', false);
        store.dispatch('user/setUser', {});
        store.dispatch('user/setToken', '');
        window.location.reload();
        window.location.href = '/login';
    }
    throw e;
};

const setLoader = () => {
    store.dispatch('notification/setLoader', {
        isVisible: true
    });
}

const clearLoader = () => {
    store.dispatch('notification/clearLoader')
}

export default {
    get(url) {
        setLoader()
        return axios.get(url)
            .catch(unauthorizedHandler)
            .finally(() => clearLoader())
    },

    post(url, formData = null, sendFile = false) {

        let headers = {}

        if (sendFile) {
            headers['Content-Type'] = 'multipart/form-data'
        }

        setLoader()
        return axios.post(url, formData, {
            headers
        })
            .catch(unauthorizedHandler)
            .finally(() => clearLoader())
    },

    patch(url, formData = null) {
        setLoader()
        return axios.patch(url, formData)
            .catch(unauthorizedHandler)
            .finally(() => clearLoader())
    },

    delete(url) {
        setLoader()
        return axios.delete(url)
            .catch(unauthorizedHandler)
            .finally(() => clearLoader())
    },
}
