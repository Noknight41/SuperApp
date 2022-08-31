const formatDigital = (h, m) => {
  let ampm = "";
  let hh = h;
  let mm = m;
  if (hh >= 12) {
    ampm = "PM";
    hh -= 12;
  } else {
    ampm = "AM";
  }

  if (hh === 0) hh = 12;
  if (hh < 10) hh = `0${hh}`;
  if (mm < 10) mm = `0${mm}`;

  return { hh, mm, ampm };
};

const DigittoBinary = (digit) => {
  switch (digit) {
    case 1:
      return [0, 0, 0, 1];
    case 2:
      return [0, 0, 1, 0];
    case 3:
      return [0, 0, 1, 1];
    case 4:
      return [0, 1, 0, 0];
    case 5:
      return [0, 1, 0, 1];
    case 6:
      return [0, 1, 1, 0];
    case 7:
      return [0, 1, 1, 1];
    case 8:
      return [1, 0, 0, 0];
    case 9:
      return [1, 0, 0, 1];
    default:
      return [0, 0, 0, 0];
  }
};

const formatBinary = (hh, mm, ss) => {
  const result = Array(24).fill(0);
  // Hour 1
  const hour1 = DigittoBinary(Math.floor(hh / 10));
  for (let i = 0; i < 4; i += 1) {
    result[i * 6] = hour1[i];
  }
  // Hour 2
  const hour2 = DigittoBinary(hh % 10);
  for (let i = 0; i < 4; i += 1) {
    result[i * 6 + 1] = hour2[i];
  }

  // Minute 1
  const min1 = DigittoBinary(Math.floor(mm / 10));
  for (let i = 0; i < 4; i += 1) {
    result[i * 6 + 2] = min1[i];
  }
  // Minute 2
  const min2 = DigittoBinary(mm % 10);
  for (let i = 0; i < 4; i += 1) {
    result[i * 6 + 3] = min2[i];
  }

  // Second 1
  const sec1 = DigittoBinary(Math.floor(ss / 10));
  for (let i = 0; i < 4; i += 1) {
    result[i * 6 + 4] = sec1[i];
  }
  // Second 2
  const sec2 = DigittoBinary(ss % 10);
  for (let i = 0; i < 4; i += 1) {
    result[i * 6 + 5] = sec2[i];
  }

  return result;
};

const formatTrueBinary = (ts) => {
  const result = Array(24).fill(0);
  let timestamp = ts;
  for (let i = 0; i < 24; i += 1) {
    result[i] = Math.floor(timestamp / 2 ** (23 - i));
    timestamp %= 2 ** (23 - i);
  }

  return result;
};

const covertEmbedded = (url) => {
  const res = url.split("=");
  const embeddedUrl = `https://www.youtube.com/embed/${res[1].substr(0, 11)}`;
  return embeddedUrl;
};

const validateYouTubeUrl = (url) => {
  if (url !== undefined || url !== "") {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|\?v=)([^#&?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      return true;
    }
  }
  return false;
};

const convertTZ = (date, tzString) =>
  new Date(
    (typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {
      timeZone: tzString,
    })
  );

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default {
  formatDigital,
  formatBinary,
  formatTrueBinary,
  convertTZ,
  covertEmbedded,
  validateYouTubeUrl,
  getRndInteger,
};
