import React from 'react'
import "./Header.css"
import {useSpring, animated} from "react-spring"

function Header() {
    const fade = useSpring({
        from:{
            opacity:0,
            transform: "translateY(-20vh)"
        },
        to:{
            opacity:1,
            transform: "translateY(0vh)"
        },config:{duration:1000}
    })
    return (
        <animated.header style={fade}>
            <h2 id="headerTitle">Typing Speed Test</h2>
        </animated.header>
    )
}

export default Header
