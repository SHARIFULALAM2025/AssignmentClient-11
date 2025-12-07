import axios from "axios";
export const uploadImage = async(imageFile) => {
    const formData = new FormData();
    formData.append('image', imageFile)
    const {data} = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_uploadImage}`, formData);
    return data?.data?.url
}
//save user data reusable function
export const saveUser = async(userData) => {
    const { data } = await axios.post(`${import.meta.env.VITE_serverBaseUrl}/users`, userData);
    return data;

}