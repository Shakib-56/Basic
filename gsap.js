// gsap.from("#box1", {
//   x: 1000,
//   duration: 2,
//   delay: 1,
//   borderRadius: "50%",
// });
// gsap.from("#box2", {
//   x: 400,
//   y: 400,
//   duration: 3,
//   delay: 1,
//   rotate: 360,
//   backgroundColor: "blue",
//   borderRadius: "50%",
// });
// gsap
//   .timeline()
//   .from("#box1", { duration: 2, x: 1150 })
//   .from("#box2", { duration: 2, x: 1150 }, "+=1")
//   .from("#box3", { duration: 1, x: 1150 }, "<");

const animation = gsap
  .timeline()
  .from("#box1", { duration: 1, y: 1000, opacity: 0, scale: 0, ease: "back" })
  .from("#box2", { duration: 1, y: 1000, opacity: 0, scale: 0, ease: "back" })
  .from("#title", { duration: 1, opacity: 0, scale: 0, ease: "back" })
  .from("#box3", { duration: 1, y: 1000, opacity: 0, scale: 0, ease: "back" })
  .add("test")
  .from(
    "#box4",
    { duration: 1, Y: 1000, opacity: 0, scale: 0, ease: "back" },
    "+=0.5"
  );

document.getElementById("play").onclick = () => animation.play();
document.getElementById("pause").onclick = () => animation.pause();
document.getElementById("reverse").onclick = () => animation.reverse();
document.getElementById("restart").onclick = () => animation.restart();
document.getElementById("test").onclick = () => animation.play("test");
