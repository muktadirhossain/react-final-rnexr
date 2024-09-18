import React, { useState } from 'react'
import { AuthContext } from '../context'
import { AUTH_KEY } from '../constants/constants'
import { getFromLocalStorage } from '../utils/helpers'

const localAuth = getFromLocalStorage(AUTH_KEY)

const AuthProvider = ({ children }) => {
    
    const [auth, setAuth] = useState({
        ...localAuth
    });

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider