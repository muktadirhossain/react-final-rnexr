import axios from "axios";

export const getAllMenuItems = async () => {
    // console.log("Main Loader")
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return res;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch menu items');
    }
}