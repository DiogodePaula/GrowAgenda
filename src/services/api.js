import axios from 'axios';

class Api {
    constructor() {
        this.request = axios.create({
            baseURL: process.env.REACT_APP_API_URL,
        });
    }

    async doGet(url, token = null) {
        try {
            const response = await this.request.get(url, {
                headers: { Authorization: `Bearer ${token}` },
            });

            return response.data.data;
        } catch (error) {
            return false;
        }
    }

    async doGetEnterprise(data, token = null) {
        try {
            const response = await this.request.get('/enterprises', {
                headers: { Authorization: `Bearer ${token}` },
                params: data,
            });

            return response.data.data;
        } catch (error) {
            return false;
        }
    }

    async doUpdate(url, data, token) {
        try {
            const response = await this.request.put(url, data, {
                headers: { Authorization: `Bearer ${token}`, web: true },
            });

            return response.data;
        } catch (error) {
            return false;
        }
    }

    async doPost(url, data) {
        try {
            const response = await this.request.post(url, data);

            return response.data;
        } catch (error) {
            return false;
        }
    }
}

export default new Api();
