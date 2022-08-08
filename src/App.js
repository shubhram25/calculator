import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [result, setResult] = useState("");

  const clickEvent = (event) => {
    setResult(result.concat(event.target.value));
  };

  const clear = () => {
    setResult("");
  };

  const calculate = () => {
    setResult(eval(result).toString());
  };

  const cut = () => {
    setResult(result.substring(0, result.length - 1));
  };

  const percn = (e) => {
    setResult(result.concat(e.target.value));
  };

  return (
    <>
      <div className="container">
        <div className="display">
          <input type="text" placeholder="0" value={result} />
        </div>
        <div className="btn-area">
          <table>
            <tr>
              <th>
                <button className="btn gray" value="" onClick={clear}>
                  AC
                </button>
              </th>
              <th>
                <button className="btn gray" value="" onClick={cut}>
                  C
                </button>
              </th>
              <th>
                <button className="btn gray" value="%" onClick={percn}>
                  %
                </button>
              </th>
              <th>
                <button className="btn orng" value="/" onClick={clickEvent}>
                  ÷
                </button>
              </th>
            </tr>
            <tr>
              <th>
                <button className="btn" value="7" onClick={clickEvent}>
                  7
                </button>
              </th>
              <th>
                <button className="btn" value="8" onClick={clickEvent}>
                  8
                </button>
              </th>
              <th>
                <button className="btn" value="9" onClick={clickEvent}>
                  9
                </button>
              </th>
              <th>
                <button className="btn orng" value="*" onClick={clickEvent}>
                  x
                </button>
              </th>
            </tr>
            <tr>
              <th>
                <button className="btn" value="4" onClick={clickEvent}>
                  4
                </button>
              </th>
              <th>
                <button className="btn" value="5" onClick={clickEvent}>
                  5
                </button>
              </th>
              <th>
                <button className="btn" value="6" onClick={clickEvent}>
                  6
                </button>
              </th>
              <th>
                <button className="btn orng" value="-" onClick={clickEvent}>
                  -
                </button>
              </th>
            </tr>
            <tr>
              <th>
                <button className="btn" value="1" onClick={clickEvent}>
                  1
                </button>
              </th>
              <th>
                <button className="btn" value="2" onClick={clickEvent}>
                  2
                </button>
              </th>
              <th>
                <button className="btn" value="3" onClick={clickEvent}>
                  3
                </button>
              </th>
              <th>
                <button className="btn orng" value="+" onClick={clickEvent}>
                  +
                </button>
              </th>
            </tr>
            <tr>
              <th>
                <button className="btn zero" value="0" onClick={clickEvent}>
                  0
                </button>
              </th>
              <th>
                <button className="btn" value="." onClick={clickEvent}>
                  .
                </button>
              </th>
              <th>
                <button className="btn orng" value="=" onClick={calculate}>
                  =
                </button>
              </th>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default App;
