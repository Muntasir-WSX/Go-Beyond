import React, { use } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const UserAuth = () => {
    const authInfo = use(AuthContext);
    return authInfo;
};

export default UserAuth;