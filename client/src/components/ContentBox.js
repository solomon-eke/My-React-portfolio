import React from "react";
import { Route, withRouter } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

function ContentBox() {
    return (
        // <Router>
            <div className="col-sm-11" id="contentBox">
                <Route exact path="/" component={About} />

                <Route exact path="/portfolio" component={withRouter(Portfolio)} />
                
                <Route exact path="/contact" component={Contact} />
            </div>
        // </Router>
    );

};

export default ContentBox;