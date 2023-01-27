export const cards = [
  {
    title: "gsap.to",
    selector: "to",
    code: `
gsap.to("[data='to']", {
duration: 3,
x: 300,
ease: "linear",
paused: true,
});
    `,
  },
  {
    title: "gsap.from",
    selector: "from",
    code: `
gsap.from("[data='from']", {
duration: 3,
x: 300,
ease: "linear",
paused: true,
});
    `,
  },
  {
    title: "gsap.fromTo",
    selector: "fromTo",
    code: `
gsap.fromTo('[data="fromTo"]', {
  x: 300,
  duration: 3,
  ease: "linear",
  paused: true,
  opacity: 0,
},
{
  x: 0,
  duration: 3,
  ease: "linear",
  paused: true,
  opacity: 1,
}
)
    `,
  },
  {
    title: "repeat & yoyo",
    selector: "repeatYoYo",
    code: `
gsap.to('[data="repeatYoYo"]', {
duration: 3,
x: 300,
ease: "linear",
yoyo: true,
repeat: -1,
paused: true,
});
    `,
  },
  {
    title: "ease elastic",
    selector: "elastic",
    code: `
gsap.to('[data="elastic"]', {
duration: 3,
x: 300,
ease: "elastic",
paused: true,
});
    `,
  },
  {
    title: "stagger",
    selector: "stagger",
    code: `
gsap.to('[data="stagger"]', {
y: -100,
stagger: {
  amount: 1
},
repeat: -1,
yoyo: true,
paused: true,
});
    `,
  },
];
