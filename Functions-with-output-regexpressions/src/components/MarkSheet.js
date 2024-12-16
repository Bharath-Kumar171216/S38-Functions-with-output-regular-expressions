import React, { useCallback, useReducer, useRef } from "react";

function MarkSheet() {
    let firstInputRef = useRef();
    let lastInputRef = useRef();
    let gmailInputRef = useRef();
    let passwordInputRef = useRef();

    let firstSpanRef = useRef();
    let lastSpanRef = useRef();
    let gmailSpanRef = useRef();
    let passwordSpanRef = useRef();

    let emailValidation = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    let inputEmailValidation =(inputRef,spanRef)=>{
        let result = emailValidation.test(inputRef.current.value);
        if(result == true){
                    spanRef.current.innerHTML = "Valid"
                    spanRef.current.style.backgroundColor = "green"
        }else{
                    spanRef.current.innerHTML = "InValid"
                    spanRef.current.style.backgroundColor = "red"
        }

    }

    let firstRegExp = /^[A-Za-z]+(\s[A-Za-z]+)*$/;      

    let inputOnChange = (inputRef,spanRef)=>{
        let result = firstRegExp.test(inputRef.current.value);
        if(result == true){
                    spanRef.current.innerHTML = "Valid"
                    spanRef.current.style.backgroundColor = "green"
        }else{
                    spanRef.current.innerHTML = "InValid"
                    spanRef.current.style.backgroundColor = "red"
        }
    }
    let passwordRegExp =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ ;
     
    let passwordOnChange=(inputRef,spanRef)=>{
      let result = passwordRegExp.test(inputRef.current.value);
      if(result==true){
          spanRef.current.innerHTML = "Valid"
          spanRef.current.style.backgroundColor = "green"

      }else{
        spanRef.current.innerHTML = "invalid"
        spanRef.current.style.backgroundColor = "red"
      }

    }
  return (
    <div>
    <form>
      <h1><ins>Account Log On</ins></h1>
        <div> 
      <label>First Name</label>
      <input ref={firstInputRef}
      onChange={()=>{
            inputOnChange(firstInputRef,firstSpanRef);
      }}
      ></input>
      <span ref={firstSpanRef}></span>
      </div>
      <div>
      <label>Last Name</label>
      <input ref={lastInputRef}
      onChange={()=>{
        inputOnChange(lastInputRef,lastSpanRef);
  }}
      ></input>
      <span ref={lastSpanRef}></span>
      </div>
      <div>
      <label>G-mail</label>
      <input ref={gmailInputRef}
      onChange={()=>{
        inputEmailValidation(gmailInputRef,gmailSpanRef); 
      }}
      ></input>
      <span ref={gmailSpanRef}></span>
      </div>
      <div>
      <label>Password</label>
      <input ref={passwordInputRef}
      onChange={()=>{
        passwordOnChange(passwordInputRef,passwordSpanRef);
      }}
      ></input>
      <span ref={passwordSpanRef}></span>
      </div>
      <button type="button">Submit</button>
      </form>
    </div>
  );
}

export default MarkSheet;
