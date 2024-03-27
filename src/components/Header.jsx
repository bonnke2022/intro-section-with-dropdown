import styled from "styled-components";
import {
  ArrowDown,
  Logo,
  Menu,
  Todo,
  Calendar,
  Reminders,
  Plan,
  ArrowUp,
} from "../images";
import { useState } from "react";
import Sidebar from "./Sidebar";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showCard, setShowCard] = useState(false);
  return (
    <Wrapper className="flex">
      <div className="logo">
        <Logo />
        <nav className="nav">
          <ul className="nav-links">
            <div className="dropdown">
              <a
                href="#"
                className="link"
                onClick={() => setShowInfo(!showInfo)}
              >
                Features {showInfo ? <ArrowUp /> : <ArrowDown />}
              </a>
              <div className={showInfo ? "dropdown-card" : "close-dropdown"}>
                <li>
                  <a href="#">
                    <Todo /> Todo List
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Calendar /> Calendar
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Reminders /> Reminders
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Plan /> Planning
                  </a>
                </li>
              </div>
            </div>
            <li className="dropdown">
              <a
                href="#"
                className="link"
                onClick={() => setShowCard(!showCard)}
              >
                Company {showCard ? <ArrowUp /> : <ArrowDown />}
              </a>
              <div
                className={
                  showCard ? "dropdown-card second-card" : "close-dropdown"
                }
              >
                <li>
                  <a href="#">History</a>
                </li>
                <li>
                  <a href="#">Our Team</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </div>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="login-btn">
        <button className="login btn">Login</button>
        <button className="register btn">Register</button>
      </div>
      <button
        className="menu-btn"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <Menu />
      </button>
      {isSidebarOpen && (
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 375px;
  align-items: center;
  justify-content: space-between;
  .menu-btn {
    outline: none;
    border: none;
    cursor: pointer;
    transition: 0.5s;
  }
  nav {
    display: none;
  }
  .login-btn {
    display: none;
  }

  .dropdown-card {
    display: none;
  }

  @media (min-width: 1440px) {
    width: 100%;
    gap: 5rem;
    justify-content: center;
    nav {
      display: block;
    }
    .btn {
      width: 100%;
      color: var(--Medium-Gray);
      padding: 0.8rem 2rem;
      border-radius: 0.6rem;
      outline: none;
      cursor: pointer;
      background: transparent;
      font-size: 18px;
    }
    .login-btn {
      display: flex;
      gap: 2rem;
    }
    .login:hover,
    .login:active {
      color: var(--Almost-Black);
      font-weight: 700;
    }

    .login {
      border: none;
    }
    .register {
      border: 2px solid var(--Medium-Gray);
    }
    .register:hover,
    .register:active {
      border: 2px solid var(--Almost-Black);
      color: var(--Almost-Black);
      font-weight: 700;
    }
    .logo {
      display: flex;
      gap: 2rem;
      width: 100%;
      align-items: center;
      padding: 0 0 0 2rem;
    }
    .nav-links {
      list-style: none;
      display: flex;
      gap: 2rem;
    }
    .nav-links > li a,
    div > li a {
      text-decoration: none;
      font-size: 18px;
      color: var(--Medium-Gray);
    }
    .nav-links > li > a:hover,
    .nav-links > li > a:active,
    .dropdown > a:hover,
    .dropdown > a:active {
      color: var(--Almost-Black);
      font-weight: 700;
    }
    .dropdown > a {
      text-decoration: none;
      color: var(--Medium-Gray);
      font-size: 18px;
    }
    .dropdown {
      position: relative;
    }
    .dropdown-card {
      display: block;
      position: absolute;
      top: 150%;
      padding: 1rem;
      right: -60%;
      border-radius: 0.5rem;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
        0 1px 2px 0 rgba(0, 0, 0, 0.06);
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: center;
      background: #fff;
    }
    .close-dropdown {
      display: none;
    }
    .second-card {
      right: -80%;
    }
    .dropdown-card > li > a {
      white-space: nowrap;
    }
  }
`;

export default Header;
