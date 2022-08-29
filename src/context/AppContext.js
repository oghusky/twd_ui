import React from 'react';

const AppContext = React.createContext({
    posts: [],
    setPosts: () => { }
});

export default AppContext;