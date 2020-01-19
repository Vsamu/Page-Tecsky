import React from 'react';

import Simple from './SimpleNavbar';

function Layout(props) {
    return (
        <React.Fragment>
            <Simple />
            {props.children}
        </React.Fragment>       
    );
}
export default Layout