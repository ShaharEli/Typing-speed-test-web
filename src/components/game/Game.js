import React, { useState, useEffect } from "react";
import "./Game.css";
import { useSpring, animated } from "react-spring";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import Swal from "sweetalert2";
import randomWords from "random-words";

function Game({ end }) {
  const [time, setTime] = useState(0);
  const [word, setWord] = useState("");
  const [loading, setLoading] = useState(true);
  const [len, setLen] = useState(0);
  const [types, setTypes] = useState("");
  const check = () => {
    const current = time;
    const grade = types.split("").filter((item, i) => item === word[i]);
    if (grade.length / word.length === 1) {
      Swal.fire(
        "you got: " +
          grade.length +
          " / " +
          word.length +
          " (" +
          Math.round((grade.length / word.length) * 100) +
          "%)",
        `your time is: ${current} seconds`,
        "success"
      );
    } else if (grade.length === 0) {
      Swal.fire(
        "you got: " +
          grade.length +
          " / " +
          word.length +
          " (" +
          Math.round((grade.length / word.length) * 100) +
          "%)",
        `your time is: ${current} seconds`,
        "error"
      );
    } else {
      Swal.fire(
        "you got: " +
          grade.length +
          " / " +
          word.length +
          " (" +
          Math.round((grade.length / word.length) * 100) +
          "%)",
        `your time is: ${current} seconds`
      );
    }

    end({ grade: grade.length, word: word, time: time });
  };
  useEffect(() => {
    setWord(randomWords());
    setLoading(false);
    const timerInterval = setInterval(() => setTime((prev) => prev + 1), 1000);
    return clearInterval(timerInterval);
  }, []);
  const fade = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: { duration: 1000 },
  });
  const type = (e) => {
    setTypes(e.target.value);
  };
  useEffect(() => {
    setLen(types.length);
  }, [types]);
  return (
    <animated.div style={fade} className='testModal'>
      {loading ? (
        <div className='load'>
          <div className='windows8'>
            <div className='wBall' id='wBall_1'>
              <div className='wInnerBall'></div>
            </div>
            <div className='wBall' id='wBall_2'>
              <div className='wInnerBall'></div>
            </div>
            <div className='wBall' id='wBall_3'>
              <div className='wInnerBall'></div>
            </div>
            <div className='wBall' id='wBall_4'>
              <div className='wInnerBall'></div>
            </div>
            <div className='wBall' id='wBall_5'>
              <div className='wInnerBall'></div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className='seconds'>timer: {time}</div>
          <div className='word'>
            you need to type:{" "}
            {word.split("").map((item, i) => (
              <span
                style={
                  len === i
                    ? { color: "green", fontSize: 40 }
                    : { color: "blue" }
                }
                key={i}
              >
                {item}
              </span>
            ))}
          </div>
          <div>
            <TextField
              onChange={(e) => type(e)}
              placeholder={"Type..."}
              style={{ marginTop: 20 }}
              onKeyUp={(e) => {
                if (e.keyCode === 13) {
                  check();
                }
              }}
            />
          </div>
          <div>
            <Button
              onClick={check}
              style={{ marginTop: 50 }}
              variant='contained'
              color='secondary'
            >
              Submit
            </Button>
          </div>
        </>
      )}
    </animated.div>
  );
}

export default Game;
