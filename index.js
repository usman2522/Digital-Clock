setInterval(() => {
  const addZero = (num) => (num < 10 ? '0' + num : num);

  const getTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const ampm = hours >= 12 ? 'PM' : 'AM';

      return {
          h: hours > 12 ? hours - 12 : hours,
          m: addZero(minutes),
          s: addZero(seconds),
          ap: ampm,
      };
  };

  const setElementText = (element, text) => {
      document.getElementById(element).innerHTML = text;
  };

  const setCircularIndicator = (element, value, max) => {
      document.getElementById(element).style.strokeDashoffset = 440 - (440 * value) / max;
  };

  const setDotIndicator = (element, value, degrees) => {
      document.querySelector(element).style.transform = `rotate(${value * degrees}deg)`;
  };

  const { h, m, s, ap } = getTime();

  setElementText('hours', `${h} H`);
  setElementText('minutes', `${m} Min`);
  setElementText('seconds', `${s} Sec`);
  setElementText('ampm', ap);

  setCircularIndicator('hour', h, 12);
  setCircularIndicator('min', m, 60);
  setCircularIndicator('sec', s, 60);

  setDotIndicator('.hour_dot', h, 30);
  setDotIndicator('.min_dot', m, 6);
  setDotIndicator('.sec_dot', s, 6);
}, 1000);
