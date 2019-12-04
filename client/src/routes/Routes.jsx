/* eslint-disable react/prefer-stateless-function */
import React, { Fragment } from "react";
import User from "../utils/Stores/User";
import Beat from "../utils/Stores/Beat";
import { Switch, Route } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import {
    LoggedInRoute,
    LoggedOutRoute
} from "../components";
import {
    NotFound,
    Login,
    Signup,
    Home,
    BeatList,
} from "../pages";

function Routes() {
    const [{ pageLoading }] = User.useContext();
    User.refreshOnLoad();
    return (
        <Fragment>
            {pageLoading ? (
                <div className="d-flex justify-content-center mt-5">
                    <Spinner className="mt-5" animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            ) : (
                <Beat.Provider>
                    <Switch>
                        <LoggedInRoute exact path="/" component={Home} />
                        <LoggedInRoute exact path="/BeatList" component={BeatList} />
                        <LoggedOutRoute exact path="/login" component={Login} />
                        <LoggedOutRoute exact path="/signup" component={Signup} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </Beat.Provider>
            )}
        </Fragment>
    );
}

export default Routes;
