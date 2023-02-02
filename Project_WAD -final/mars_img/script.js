const leftPerspectives = [
  { x: -10, z: -4 },
  { x: -20, z: -8 },
  { x: -30, z: -12 },
  { x: -40, z: -16 },
  { x: -50, z: -20 },
  { x: 10, z: -4 }
];

const rightPerspectives = [
  { x: 10, z: -4 },
  { x: 20, z: -8 },
  { x: 30, z: -12 },
  { x: 40, z: -16 },
  { x: 50, z: -20 },
  { x: -10, z: -4 }
];

const leftCards = document.querySelectorAll(".left .item");
const rightCards = document.querySelectorAll(".right .item");

const translateImage = (target, p) => {
  target.style.transform = `translate3d(${p.x}rem, 0, ${p.z}rem)`;
};

const animateCards = (c, perspectives) => {
  const count = parseInt(c.dataset.counter);
  translateImage(c, perspectives[count - 1]);
  c.dataset.counter = (count === 6 ? 1 : count + 1).toString();
};

const loop = () => {
  setInterval(() => {
    leftCards.forEach((c) => {
      animateCards(c, leftPerspectives);
    });

    rightCards.forEach((c) => {
      animateCards(c, rightPerspectives);
    });
  }, 1000);
};

loop();
