import styled from "styled-components";
import {
  ArrowDown,
  Todo,
  Calendar,
  Reminders,
  Plan,
  ArrowUp,
  CloseMenu,
} from "../images";
import { useState } from "react";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [showCard, setShowCard] = useState(false);
  return (
    <Wrapper className="flex text-gray">
      <button
        className="close-btn"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <CloseMenu />
      </button>
      <ul className="nav-links">
        <div className="dropdown">
          <a href="#" className="link" onClick={() => setShowInfo(!showInfo)}>
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
          <a href="#" className="link" onClick={() => setShowCard(!showCard)}>
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
      <div className="login-btn">
        <button className="login btn">Login</button>
        <button className="register btn">Register</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  position: absolute;
  top: 0;
  right: -5%;
  background-color: var(--Almost-White);
  height: 81.5vh;
  width: 250px;
  z-index: 3;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  .close-btn {
    outline: none;
    border: none;
    cursor: pointer;
    background: transparent;
    transition: 0.5s;
    align-self: end;
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
  .login:hover,
  .login:active {
    color: var(--Almost-Black);
    font-weight: 700;
  }
  .login {
    border: none;
  }
  .login-btn {
    display: block;
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
  .nav-links {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .nav-links > li a,
  div > li > a,
  .link {
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
  .dropdown-card {
    display: block;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .close-dropdown {
    display: none;
  }
  .dropdown-card > li > a {
    white-space: nowrap;
  }
`;

export default Sidebar;
