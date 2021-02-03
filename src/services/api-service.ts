import { PhoneResponse } from "../models/phone-response";

class ApiService {
    public async fetchBrands(): Promise<any> {
        return fetch('https://raw.githubusercontent.com/TeliaSweden/frontend-interview-api/master/brands.json')
            .then(response => response.json())
    }

    public async fetchPhones(): Promise<PhoneResponse[]> {
        return fetch('https://raw.githubusercontent.com/TeliaSweden/frontend-interview-api/master/phones.json')
            .then(response => response.json())
    }
}

const apiService = new ApiService();

export { apiService };
