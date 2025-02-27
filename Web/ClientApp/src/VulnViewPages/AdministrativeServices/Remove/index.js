import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import _Remove from './Remove';

// Layout
import AppHeader from '../../../Layout/AppHeader/';
import AppSidebar from '../../../Layout/AppSidebar/';
import AppFooter from '../../../Layout/AppFooter/';

const Remove = ({ match }) => (
    <Fragment>
        <AppHeader />
        <div className="app-main">
            <AppSidebar />
            <div className="app-main__outer">
                <div className="app-main__inner">
                    <_Remove />
                </div>
                <AppFooter />
            </div>
        </div>
    </Fragment>
);

export default Remove;