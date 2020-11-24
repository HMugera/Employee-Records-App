import React, { useState, useCallback, useRef, useEffect } from "react";
import "./debounceFn.css";
import { debounce } from "lodash";

function useDebounce(callback, delay) {
  const debounceCallback = useCallback(debounce(callback, delay), [delay]);
  return debounceCallback;
}

// function useDebounceAlt(callback,delay){
//   const memoizedCallback = useCallback(callback,[]);

//   const debouncedFn = useRef(debounce(memoizedCallback,delay));

//   useEffect(()=>{
//     debouncedFn.current = debounce(memoizedCallback,delay)
//   },[memoizedCallback,delay])
//   return debouncedFn.current
// }

function DebounceMethod() {
  const [value, setValue] = useState("");
  const [dbValue, saveToDb] = useState("");

  const debouncedSave = useDebounce((nextValue) => saveToDb(nextValue), 1000);

  //useCallback first method
  // const debounceSave = useCallback(
  //   debounce((nextValue) => saveToDb(nextValue), 1000),
  //   []
  // );

  //useRef would create a new table value
  // const debounceSave = useRef(
  //   debounce((nextValue) => saveToDb(nextValue), 1000)
  // ).current;

  // const debounceSave = useDebounce((nextValue) => saveToDb(nextValue), 1000);

  const handleChange = (event) => {
    const nextValue = event.target.value;
    // if ((nextValue.value.length = 0)) {
    //   console.log("running on empty");
    // }
    
    console.log(nextValue);
    setValue(nextValue);
    debouncedSave(nextValue);
  };
  return (
    <main>
      <h1>Blog</h1>
      <textarea
        value={value}
        onChange={handleChange}
        cols='30'
        rows='5'
 required
      ></textarea>
      <div className='text'>
        <div>
          <h2>Client</h2>
          {value}
        </div>
        <div>
          <h2>Server</h2>
          {dbValue}
        </div>
      </div>
    </main>
  );
}

// function DebounceMethod() {
//   const [show, setShow] = useState(false);

//   let toggle = () => {
//     setShow(!show);
//   };

//   return (
//     <div className='debounce'>
//       <h1>Hughes</h1>
//       <button onClick={toggle}>Toggle</button>
//       <br />
//       {show ? <Widget /> : null}
//     </div>
//   );
// }

// function Widget() {
//   const [text, setText] = useState("");

//   let handleChange = debounce( (text) => {
//     setText(text);
//   },2000)
//   return (
//     <>
//       <div>
//         <input type='text' onChange={(e)=> handleChange(e.target.value)} />
//       </div>
//       <br />
//       <div>
//         <textarea value={text}></textarea>
//       </div>
//     </>
//   );
// }

export default DebounceMethod;
