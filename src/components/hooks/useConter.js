import { useState } from "react";

const useCounter = ( ) => {
  const [counter, setCounter] = useState( 0 );

  const handleCounter = () => {
    setCounter((prevCounter) => prevCounter+1);
  };

  return [counter, handleCounter]
};
export default useCounter;
