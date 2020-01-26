import React from 'react';

const authContext = React.createContext({
    //pass the default values
    authenticated: false,
    login: () => { }
});

export default authContext;