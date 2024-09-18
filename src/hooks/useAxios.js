import { useEffect } from "react";
import { api as apiClient } from "../api";
import useAuth from "./useAuth";
import axios from "axios";

const useAxios = () => {
    const { auth, setAuth } = useAuth()
    useEffect(() => {
        //! Add a request interceptor 
        const requestInterceptor = apiClient.interceptors.request.use(config => {
            // Add your request logic here
            const authToken = auth?.authToken;
            if (authToken) {
                config.headers.Authorization = `Bearer ${authToken}`
            }
            return config
        }, error => {
            // Add your request error logic here
            return Promise.reject(error)
        })
        //! Add a response interceptor 
        const responseInterceptor = apiClient.interceptors.response.use(
            (response) => response,
            async (error) => {
                const originalRequest = error.config;
                // * If the error status is 401 and there is no originalRequest._retry flag,
                // * it means the token has expired and we need to refresh it
                if (error.response.status === 401 && !originalRequest._retry) {
                    originalRequest._retry = true;
                    try {

                        const refreshToken = auth?.refreshToken;
                        const res = await axios.post(`${import.meta.env.VITE_SERVER_BASE_URL}/aut/refresh-token`, { refreshToken })
                        const { token } = res?.data;
                        console.log("new Token::", token);
                        setAuth({ ...auth, authToken: token })
                        // Retry the original request with the new token
                        originalRequest.headers.Authorization = `Bearer ${token}`
                        return axios(originalRequest)
                    } catch (error) {
                        throw error
                    }

                }
                return Promise.reject(error)
            },

        )

        // Clear effect ::
        return () => {
            apiClient.interceptors.request.eject(requestInterceptor)
            apiClient.interceptors.response.eject(responseInterceptor)
        }
    }, [auth.authToken])

    return { api: apiClient }

}

export default useAxios;
