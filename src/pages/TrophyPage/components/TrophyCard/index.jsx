import PropTypes from "prop-types";
import React from "react";

import Clock from "assets/images/icon-clock.svg";
import Ethereum from "assets/images/icon-ethereum.svg";

function TrophyCard(props) {
  const { image, avatar, creator, rarity } = props;

  return (
    <div className="w-[18%] min-w-[300px]">
      <div className={`card ${rarity}`}>
        <section>
          <img
            src={image}
            alt="equilibrium"
            className="rounded-[12px] w-full, z-[51] relative"
          />
        </section>
        <section>
          <h1 className="text-white font-[600] text-[27px] my-[25px] hover:text-cyan">
            Equilibrium #3429
          </h1>
          <p>Our Equilibrium collection promotes balance and calm.</p>
          <div className="flex flex-row justify-between items-center mt-[25px]">
            <div className="flex flex-row items-center text-cyan">
              <img src={Ethereum} alt="ethereum" className="mr-2" />
              <p>0.041 ETH</p>
            </div>
            <div className="flex flex-row items-center">
              <img src={Clock} alt="clock" className="mr-2" />
              <p>3 days left</p>
            </div>
          </div>
          <div className="border border-Very-dark-blue-line my-[25px]" />
          <footer className="flex flex-row items-center mb-3">
            <img
              src={avatar}
              alt="avatar"
              className="w-[44px] h-[44px] mr-[25px] rounded-[50%] hover:border-cyan hover:border-2 hover:w-[48px] hover:h-[48px]"
            />
            <p>
              Creation of{" "}
              <span className="text-white hover:text-cyan">{creator}</span>
            </p>
          </footer>
        </section>
      </div>
    </div>
  );
}

TrophyCard.propTypes = {
  image: PropTypes.string.isRequired,
  creator: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  rarity: PropTypes.string.isRequired,
};

export default TrophyCard;
