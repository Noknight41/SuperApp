import PropTypes from "prop-types";
import React from "react";

import { Emoji } from "components";

class AppCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { onClick, name, description, icon } = this.props;
    return (
      <button
        type="button"
        className="block h-[240px] w-[300px] min-w-[200px] min-h-[200px] group"
        onClick={onClick}
      >
        <div className="relative flex items-center justify-center h-full transition bg-light-mode-body dark:bg-dark-mode-body border-4 border-blue-600 group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-3xl group-hover:shadow-[8px_8px_0_0_rgb(37,99,235)] p-8">
          <div className="lg:group-hover:opacity-0 lg:group-hover:absolute">
            <Emoji symbol={icon} label="sheep" />
            <p className="mt-4 text-xl font-bold sm:text-2xl">{name}</p>
          </div>
          <div className="absolute opacity-0 lg:group-hover:opacity-100 lg:group-hover:relative">
            <p className="text-2xl font-bold">{name}</p>
            <p className="mt-4 text-lg font-medium leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </button>
    );
  }
}

AppCard.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
};

AppCard.defaultProps = {
  onClick: () => {},
  icon: "🍆",
  name: "",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

export default AppCard;
