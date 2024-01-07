import { useEffect, useRef, useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

export const Redirect = () => {
  const [time, setTime] = useState(3);
  const timeout = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    clearTimeout(timeout.current);

    timeout.current = setTimeout(() => {
      setTime((t) => t - 1);
    }, 1000);

    if (time < 0) {
      navigate("/about", {
        state: `This is the state: ${Math.random()}`,
      });
    }

    return () => {
      clearTimeout(timeout.current);
    };
  }, [time, navigate]);

  return <h1>Get out of here in: {time}</h1>;
};
