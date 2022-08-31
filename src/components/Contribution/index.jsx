import React from "react";

class Contribution extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer>
        <div className="mt-8 mb-4 w-full text-[14px] text-center text-Very-dark-blue">
          Challenge by{" "}
          <a
            className="text-[18px] font-[700] hover:underline"
            href="https://www.frontendmentor.io?ref=challenge"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            className="text-[18px] font-[700] hover:underline"
            href="https://github.com/Noknight41"
          >
            Noknight41
          </a>
          .
        </div>
      </footer>
    );
  }
}

export default Contribution;
