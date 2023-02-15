import React, { useEffect } from 'react';
import './App.css';
import { Login } from './components/Login';
import { useAppSelector, useAppDispatch } from './app/hooks';
import { selectlogged, logout, selectuserName, refreshAsync } from './features/login/loginSlice';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import backgroundImage from './media/images/bake8.jpg';
import './features/login/log.css'
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
const NavTitle = styled.a`
  color: burlywood;
  font-size: 24px;
  text-decoration: none;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
`;

const NavLink = styled.li`
  margin-right: 10px;
`;

const NavLinkText = styled.a`
  color: burlywood;
  text-decoration: none;
`;

const styles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    color: 'white',
};

const Footer = {
    backgroundColor: 'black',
    padding: "40px",
};


function App() {
    const uNameeee = useAppSelector(selectuserName);
    const dispatch = useAppDispatch();

    useEffect(() => {

        const token = localStorage.getItem("refresh")
        let reme = localStorage.getItem("remember")
        if (reme !== null)
            if (JSON.parse(reme) === true) {
                if (token)
                    dispatch(refreshAsync(token))
            }
    }, [])


    return (
        <div className="App" style={styles}>
            <Nav>
                <NavTitle href="http://localhost:3000/">Home</NavTitle>
                <NavLinks>
                    <NavLink>
                        <NavLinkText href="#">Products</NavLinkText>
                    </NavLink>
                    <NavLink>
                        <NavLinkText href="#">Cart</NavLinkText>
                    </NavLink>
                    <NavLink>
                        <NavLinkText href="http://localhost:3000/about">About</NavLinkText>
                    </NavLink>
                </NavLinks>
            </Nav>
            <header className="App-header">
                <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
                    <Link className='btn btn-dark' to="/login"> Sign in</Link>{" "}
                </nav>

                <h1>Welcome {uNameeee}</h1>
                <Outlet></Outlet>
            </header>
            <footer style={Footer}></footer>
        </div>


    );
}

export default App;
