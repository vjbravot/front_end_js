import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 1000
})

export const getPosts = async () => {
    try {
        const response = await api.get("/posts");
        return response.data;
    } catch (error){
        throw new Error("Error:", error);
    }
}

export const createPost = async(title,body) => {
    try {
        const response = await api.post("/posts", { title, body});
        return response.data;
    } catch (error){
        throw new Error("Error:", error);
    }
}

export default getPosts