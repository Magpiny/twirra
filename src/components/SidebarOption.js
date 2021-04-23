import React from 'react';

function SidebarOption({ active, Icon, text}) {

    return (
        <div className={ `sidebarOption ${ active && 'sidebarOption--active' } `}>
            <Icon color="blue" />
            <h2> { text } </h2>
        </div>
    );
}

export default SidebarOption;
