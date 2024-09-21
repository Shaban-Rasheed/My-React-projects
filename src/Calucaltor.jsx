import { useState } from "react";

function Caluclator() {
  const [value, setValue] = useState("");
  function handleclick(e) {
    setValue(value + e.target.value);
  }
  function equal() {
    setValue(eval(value));
  }
  function clear() {
    setValue("");
  }
  function Dell() {
    setValue(value.toString().slice(0, -1));
  }
  function handleOperatorClick(e) {
    const operator = e.target.value;
    setValue(value + operator);
    const lastChar = value.slice(-1);

    if (["+", "-", "*", "/", "."].includes(lastChar)) {
      setValue(value.slice(0, -1) + operator);
    } else {
      setValue(value + operator);
    }
  }

  return (
    <>
      <div className="caluclator">
        <form action="#" name="form">
          <div className="result">
            <input
              type="text"
              name="disp"
              id="disp"
              value={value}
              placeholder="0"
            />
          </div>
          <div className="buttons">
            <div className="rows">
              <input
                type="button"
                name="ac"
                value="AC"
                className="AClear"
                onClick={clear}
              />
              <input type="button" name="de" value="DE" onClick={Dell} />
              <input
                type="button"
                name="vdiv"
                value="/"
                onClick={handleOperatorClick}
              />
            </div>
            <div className="rows">
              <input type="button" name="v7" value="7" onClick={handleclick} />
              <input type="button" name="v8" value="8" onClick={handleclick} />
              <input type="button" name="v9" value="9" onClick={handleclick} />
              <input
                type="button"
                name="mul"
                value="*"
                onClick={handleOperatorClick}
              />
            </div>
            <div className="rows">
              <input type="button" name="v4" value="4" onClick={handleclick} />
              <input type="button" name="v5" value="5" onClick={handleclick} />
              <input type="button" name="v6" value="6" onClick={handleclick} />
              <input
                type="button"
                name="sub"
                value="-"
                onClick={handleOperatorClick}
              />
            </div>
            <div className="rows">
              <input type="button" name="v1" value="1" onClick={handleclick} />
              <input type="button" name="v2" value="2" onClick={handleclick} />
              <input type="button" name="v3" value="3" onClick={handleclick} />
              <input
                type="button"
                name="add"
                value="+"
                onClick={handleOperatorClick}
              />
            </div>
            <div className="rows">
              <input type="button" name="v0" value="0" onClick={handleclick} />
              <input
                type="button"
                name="vzero"
                value="00"
                onClick={handleclick}
              />
              <input
                type="button"
                name="vdot"
                value="."
                onClick={handleOperatorClick}
              />
              <input type="button" name="veq" value="=" onClick={equal} />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Caluclator;
