import React, { useMemo } from "react";
import "./Header.css";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";

function Header() {
  const fade = useSpring({
    from: {
      opacity: 0,
      transform: "translateY(-20vh)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0vh)",
    },
    config: { duration: 1000 },
  });
  const linkStyle = useMemo(() => {
    return { color: "blue", textDecoration: "none", fontSize: 30 };
  }, []);
  return (
    <animated.header style={fade}>
      <h2 id='headerTitle'>Typing Speed Test</h2>
      <div className='header-links'>
        <Link style={linkStyle} to={"/"}>
          Home
        </Link>
        <Link style={linkStyle} to={"/profile"}>
          Profile
        </Link>
      </div>
    </animated.header>
  );
}

export default Header;
