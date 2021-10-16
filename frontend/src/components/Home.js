import { Fragment } from "react";
import {Nav} from 'react-bootstrap';
// import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
// import Profile from "./Profile";
// import Trialfunction from './Trialfunction';
// import { useAuth0 } from "@auth0/auth0-react";

const Home = ()=>{
    // const { isAuthenticated } = useAuth0();

    return(
        <Fragment>
            <Nav justify variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Tracker</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Schedule</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Routine</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3">Food</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-4">Christmas</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3">Network</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3">Gym</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3">Finances</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3">Project</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                    Disabled
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </Fragment>
 )
}

export default Home;