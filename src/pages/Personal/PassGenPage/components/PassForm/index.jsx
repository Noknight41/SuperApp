import PropTypes from "prop-types";
import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function RadioChoice(props) {
  const { text, id, explain, choice, setValue } = props;

  return (
    <div className="form-control text-black">
      <label className="label cursor-pointer gap-x-2" htmlFor={id}>
        <input
          type="radio"
          id={id}
          className="radio checked:bg-red-500"
          onChange={() => setValue(id)}
          checked={choice === id}
        />
        <span className="label-text text-black text-[18px]">{text}</span>
        <div className="tooltip tooltip-top" data-tip={explain}>
          <AiOutlineInfoCircle />
        </div>
      </label>
    </div>
  );
}

RadioChoice.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  explain: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  choice: PropTypes.string.isRequired,
};

function CheckChoice(props) {
  const { text, id, disabled, checked, setValue } = props;

  return (
    <div className="form-control">
      <label className="label cursor-pointer gap-x-2" htmlFor={id}>
        <input
          type="checkbox"
          id={id}
          className="checkbox"
          disabled={disabled}
          onChange={() => setValue()}
          checked={checked}
        />
        <span className="label-text text-black text-[18px]">{text}</span>
      </label>
    </div>
  );
}

CheckChoice.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  checked: PropTypes.bool.isRequired,
  setValue: PropTypes.func.isRequired,
};

class PassForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      length: 12,
      name: "",
      mode: "Say",
      charset: {
        u: true,
        l: false,
        n: false,
        s: false,
      },
    };
  }

  render() {
    const { passGen, passAdd, navigate } = this.props;
    const {
      length,
      name,
      mode,
      charset: { u, l, n, s },
    } = this.state;

    return (
      <form className="flex flex-wrap flex-col bg-white mt-8 py-8 px-12">
        <input
          id="name"
          type="text"
          placeholder="Type here"
          className="input-md h-10 focus:outline-none border-b border-slate-300 w-full text-black text-[18px]"
          value={name}
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        />
        <div className="flex flex-wrap flex-row justify-around py-8">
          <div className="flex flex-col justify-start items-start gap-y-4 w-[50%] pr-8">
            <h1 className="text-[22px] font-bold text-black">
              Password Length
            </h1>
            <div className="flex gap-x-4 justify-arund items-center w-full">
              <input
                type="number"
                className="px-2 border border-slate-300 w-[70px] h-11 focus:outline-none"
                value={length}
                onChange={() => {}}
              />
              <input
                type="range"
                id="length"
                min="1"
                max="50"
                className="range range-primary w-full"
                value={length}
                onChange={(e) => {
                  this.setState({ length: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="flex flex-wrap flex-row justify-around w-[50%]">
            <div className="flex flex-col justify-start items-start w-[60%] ">
              <RadioChoice
                text="Easy to Say"
                id="Say"
                choice={mode}
                setValue={(value) => {
                  this.setState({ mode: value });
                }}
                explain="Avoid number and special character"
              />
              <RadioChoice
                text="All Character"
                id="All"
                choice={mode}
                setValue={(value) => {
                  this.setState({ mode: value });
                }}
                explain="Any combination of character"
              />
            </div>
            <div className="flex flex-col justify-start items-start w-[40%]">
              <CheckChoice
                text="Uppercase"
                id="U"
                disabled={false}
                checked={u}
                setValue={() => {
                  this.setState({ charset: { l, n, s, u: !u } });
                }}
              />
              <CheckChoice
                text="Lowercase"
                id="L"
                disabled={false}
                checked={l}
                setValue={() => {
                  this.setState({ charset: { n, s, u, l: !l } });
                }}
              />
              <CheckChoice
                text="Number"
                id="N"
                disabled={mode === "Say"}
                checked={n}
                setValue={() => {
                  this.setState({ charset: { u, l, s, n: !n } });
                }}
              />
              <CheckChoice
                text="Special"
                id="S"
                disabled={mode === "Say"}
                checked={s}
                setValue={() => {
                  this.setState({ charset: { u, l, n, s: !s } });
                }}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap flex-row justify-around items-end">
          <button
            className="btn flex min-w-[15%] justify-between text-base items-center text-center no-underline cursor-pointer mx-4"
            type="button"
            onClick={() => {
              if (u || l || n || s) {
                passGen(mode, length, u, l, n, s);
              }
            }}
          >
            Generate Password
          </button>
          <button
            className="btn flex min-w-[15%] justify-between text-base items-center text-center no-underline cursor-pointer mx-4"
            type="button"
            onClick={async () => {
              await passAdd(name);
              navigate("/pass");
            }}
          >
            Add Password to List
          </button>
        </div>
      </form>
    );
  }
}

PassForm.propTypes = {
  navigate: PropTypes.func.isRequired,
  passGen: PropTypes.func.isRequired,
  passAdd: PropTypes.func.isRequired,
};

export default function component(props) {
  const navigate = useNavigate();
  return <PassForm {...props} navigate={navigate} />;
}
