
import axios from "axios";

async function getImages(keyword) {
    try {
        const response = await axios.get(`https://api.unsplash.com/search/photos`, {
            params: { query: keyword },
            headers: {
                Authorization: 'Client-ID 7a1A540eASd4CPT-_ExdgGo8KMRpwU9IGoRcP6cjPqM',
            }
        })
        return response.data;
    } catch (err) {
        return err
    }
};

export default getImages;