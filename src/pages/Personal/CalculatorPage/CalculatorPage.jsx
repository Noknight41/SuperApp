import React, { useState } from "react";

import { AppLayout } from "layouts";

function CalculatorPage() {
  const buttonKey =
    "bg-calculator-key rounded-lg shadow-[0_5px] shadow-calculator-sd-key active:translate-y-1";
  const delKey =
    "text-white bg-calculator-del rounded-lg shadow-[0_5px] shadow-calculator-sd-del active:translate-y-1";
  const eqKey =
    "text-white bg-calculator-eq col-span-2 rounded-lg shadow-[0_5px] shadow-calculator-sd-eq active:translate-y-1";
  const [prev, setPrev] = useState("");
  const [cur, setCur] = useState("");
  const [op, setOp] = useState("");
  let staticCur = "";

  const enterNumber = (numKey) => {
    if (numKey === "." && cur.includes(".")) return;
    if (numKey === "0" && cur === "") return;
    setCur(cur.toString() + numKey.toString());
    staticCur = cur.toString() + numKey.toString();
  };

  const delNumber = () => {
    if (cur.length < 1) return;
    setCur(cur.toString().substring(0, cur.length - 1));
    staticCur = cur.toString().substring(0, cur.length - 1);
  };

  const calculate = () => {
    let result;
    const prevOp = parseFloat(prev);
    const curOp = parseFloat(cur);
    if (Number.isNaN(prevOp) || Number.isNaN(curOp)) return;
    switch (op) {
      case "+":
        result = prevOp + curOp;
        break;

      case "-":
        result = prevOp - curOp;
        break;

      case "x":
        result = prevOp * curOp;
        break;

      case "/":
        result = prevOp / curOp;
        break;

      default:
        return;
    }
    setOp("");
    setPrev("");
    setCur(result.toString());
    staticCur = result.toString();
  };

  const opNumber = (ope) => {
    if (cur === "") return;
    if (prev !== "") {
      calculate();
    }
    setPrev(staticCur || cur);
    setOp(ope);
    setCur("");
  };

  const reset = () => {
    setCur("");
    setOp("");
    setPrev("");
    staticCur = "";
  };

  return (
    <AppLayout pageName="Calculator">
      <div className="flex flex-col max-w-[350px] m-auto h-[90vh] justify-center font-spartan">
        <header className="text-[36px] font-[1000] text-left h-[60px]">
          calc
        </header>
        <input
          type="text"
          className="h-8 bg-[#3a4764] rounded-t-[10px] focus:outline-none text-right pt-1 px-2 text-[12px]"
          value={prev + op}
          readOnly
        />
        <input
          type="text"
          className="h-12 bg-[#3a4764] rounded-b-[10px] roun focus:outline-none mb-8 text-right px-2 text-[30px]"
          value={cur}
          readOnly
        />
        <div
          type="text"
          className="text-black text-[24px] grid grid-cols-calbutton grid-rows-calbutton gap-x-3 gap-y-4 bg-[#3a4764] rounded-[10px] px-2 py-4 justify-center "
        >
          <button
            type="button"
            className={`${buttonKey}`}
            onClick={() => enterNumber("7")}
          >
            7
          </button>
          <button
            type="button"
            className={`${buttonKey}`}
            onClick={() => enterNumber("8")}
          >
            8
          </button>
          <button
            type="button"
            className={`${buttonKey}`}
            onClick={() => enterNumber("9")}
          >
            9
          </button>
          <button
            type="button"
            className={`${delKey}`}
            onClick={() => delNumber()}
          >
            DEL
          </button>
          <button
            type="button"
            className={`${buttonKey}`}
            onClick={() => enterNumber("4")}
          >
            4
          </button>
          <button
            type="button"
            className={`${buttonKey}`}
            onClick={() => enterNumber("5")}
          >
            5
          </button>
          <button
            type="button"
            className={`${buttonKey}`}
            onClick={() => enterNumber("6")}
          >
            6
          </button>
          <button
            type="button"
            className={`${buttonKey}`}
            onClick={() => opNumber("+")}
          >
            +
          </button>
          <button
            type="button"
            className={`${buttonKey}`}
            onClick={() => enterNumber("1")}
          >
            1
          </button>
          <button
            type="button"
            className={`${buttonKey}`}
            onClick={() => enterNumber("2")}
          >
            2
          </button>
          <button
            type="button"
            className={`${buttonKey}`}
            onClick={() => enterNumber("3")}
          >
            3
          </button>
          <button
            type="button"
            className={`${buttonKey}`}
            onClick={() => opNumber("-")}
          >
            -
          </button>
          <button
            type="button"
            className={`${buttonKey}`}
            onClick={() => enterNumber(".")}
          >
            .
          </button>
          <button
            type="button"
            className={`${buttonKey}`}
            onClick={() => enterNumber("0")}
          >
            0
          </button>
          <button
            type="button"
            className={`${buttonKey}`}
            onClick={() => opNumber("/")}
          >
            /
          </button>
          <button
            type="button"
            className={`${buttonKey}`}
            onClick={() => opNumber("x")}
          >
            x
          </button>
          <button
            type="button"
            className={`${delKey} col-span-2`}
            onClick={reset}
          >
            RESET
          </button>
          <button
            type="button"
            className={`${eqKey} col-span-2`}
            onClick={calculate}
          >
            =
          </button>
        </div>
      </div>
    </AppLayout>
  );
}

export default CalculatorPage;
