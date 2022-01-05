import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { LTRCountWords, LTRBg, LTRCount, LTRContainer } from "./LTRElements";

const LoadingToRedirect = () => {
  const [count, setCount] = useState(5);
  let history = useHistory();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);
    // redirect once count is equal to 0
    count === 0 && history.push("/");
    // cleanup
    return () => clearInterval(interval);
  }, [count, history]);

  return (
    <LTRContainer>
      <LTRBg>
        <LTRCount>
          <LTRCountWords>Redirecting you in {count}!</LTRCountWords>
        </LTRCount>
      </LTRBg>
    </LTRContainer>
  );
};

export default LoadingToRedirect;
