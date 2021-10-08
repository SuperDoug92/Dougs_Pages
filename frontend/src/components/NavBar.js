import { Fragment } from "react";
import {Navbar, Nav, Container, Button} from 'react-bootstrap';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Profile from "./Profile";
import Trialfunction from './Trialfunction';
import Home from './Home';
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = ()=>{
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    return(
        <Fragment>
            <Navbar bg="dark" expand="sm" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">Doug's Pages</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/profile">Profile</Nav.Link>
                            <Nav.Link href="/trialfunction">Trialfunction</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto">
                            <Button variant="light" onClick={() => !isAuthenticated ?  loginWithRedirect() : logout({ returnTo: window.location.origin })}>{isAuthenticated ? 'Log Out' : 'Log In'}</Button>
                            {/* <Button variant="light" onClick={isAuthenticated ? loginWithRedirect(): logout({ returnTo: window.location.origin })}>{isAuthenticated ? 'Log Out' : 'Log In'}</Button> */}
                        </Nav>  
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Router>
                <Switch>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/trialfunction' component={Trialfunction}/>
                    <Route path='/'  component={Home}/>
                </Switch>
            </Router>
        </Fragment>
    )
}

export default NavBar;