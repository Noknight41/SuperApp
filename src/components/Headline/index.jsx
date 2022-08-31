import PropTypes from "prop-types";
import React from "react";

class Headline extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { allClass, firstClass, first, second } = this.props;
    return (
      <h1
        className={`flex flex-col gap-4 text-sm font-extrabold sm:text-xl ${allClass}`}
      >
        <strong
          className={`font-[1000] text-4xl text-red-700 sm:block ${firstClass}`}
        >
          {first}
        </strong>
        {second}
      </h1>
    );
  }
}

Headline.propTypes = {
  first: PropTypes.string.isRequired,
  second: PropTypes.string.isRequired,
  allClass: PropTypes.string,
  firstClass: PropTypes.string,
};

Headline.defaultProps = {
  allClass: "",
  firstClass: "",
};

export default Headline;
