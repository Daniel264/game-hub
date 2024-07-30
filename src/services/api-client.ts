import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '6ee50024270848fa92fd43289ee63ddf'
    }
})