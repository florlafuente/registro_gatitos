import React from 'react';
import { connect } from 'react-redux';
import { MenuItemLink, getResources } from 'admin-on-rest';

const Menu = ({ resources, onMenuTap, logout }) => (
    <div>
        <MenuItemLink to="/cats" primaryText="Gatites" onClick={onMenuTap} />
        {logout}
    </div>
);

const mapStateToProps = state => ({
    resources: getResources(state),
})
export default connect(mapStateToProps)(Menu);