import React, { useState, useEffect } from "react";
import Select from "react-select";

import { AppLayout } from "components";
import data from "data";
import utils from "helpers/utils";

import {
  AnalogClock,
  BinaryClock,
  TrueBinaryClock,
  DigitalClock,
} from "./components";

const clockOptions = [
  { value: "B", label: "Binary Clock" },
  { value: "TB", label: "True Binary Clock" },
  { value: "A", label: "Analog Clock" },
];

const timeZonesOptions = data.worldTimezones.map((tz) => ({
  value: tz,
  label: tz,
}));

const clockTypeStyles = {
  container: (provided) => ({
    ...provided,
    width: 200,
  }),
};

const timeZoneTypeStyles = {
  container: (provided) => ({
    ...provided,
    width: 300,
  }),
};

function ClockPage() {
  const [type, setType] = useState({ value: "B", label: "Binary Clock" });
  const [timezone, setTimeZone] = useState({
    value: Intl.DateTimeFormat().resolvedOptions().timeZone.toString(),
    label: Intl.DateTimeFormat().resolvedOptions().timeZone.toString(),
  });

  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const clock = () => {
    const date = utils.convertTZ(new Date(), timezone.value);

    const hh = date.getHours();
    const mm = date.getMinutes();
    const ss = date.getSeconds();
    const dd = date.getDate();
    const MM = date.getMonth();
    const yy = date.getFullYear();

    setHours(hh);
    setMinutes(mm);
    setSeconds(ss);
    setDay(dd);
    setMonth(data.months[MM]);
    setYear(yy);
  };

  useEffect(() => {
    const interval = setInterval(clock, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <AppLayout pageName="SuperClock">
      <div className="flex fixed justify-center w-full h-[90%]">
        <div className="w-full h-full max-w-3xl px-[30px] pt-[20px] pb-[30px] rounded-[20px]">
          <div className="flex w-full h-[15%] gap-x-[70px] justify-center items-end place-content-center">
            <Select
              styles={clockTypeStyles}
              options={clockOptions}
              defaultValue={type}
              onChange={setType}
            />
            <Select
              styles={timeZoneTypeStyles}
              options={timeZonesOptions}
              defaultValue={timezone}
              onChange={setTimeZone}
            />
          </div>
          <div className="flex w-full h-[70%] justify-center items-center place-content-center">
            {type.value === "B" && (
              <BinaryClock hh={hours} mm={minutes} ss={seconds} />
            )}
            {type.value === "A" && (
              <AnalogClock hh={hours} mm={minutes} ss={seconds} />
            )}
            {type.value === "TB" && (
              <TrueBinaryClock hh={hours} mm={minutes} ss={seconds} />
            )}
          </div>
          <div className="flex w-full h-[15%] justify-center">
            <DigitalClock
              hh={hours}
              mm={minutes}
              dd={day}
              M={month}
              yy={year}
            />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default ClockPage;
