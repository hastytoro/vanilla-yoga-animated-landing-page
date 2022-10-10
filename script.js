const burger = document.querySelector("nav svg");

burger.addEventListener("click", () => {
  if (burger.classList.contains("active")) {
    // below are active defaults:
    gsap.to(".links", { x: "100%" });
    gsap.to(".line", { stroke: "white" });
    gsap.set("body", { overflow: "auto" });
    gsap.set("body", { overflowX: "hidden" });
  } else {
    gsap.to(".links", { x: "0%" });
    gsap.to(".line", { stroke: "black" });
    gsap.fromTo(
      ".links a",
      { opacity: 0, y: 0 },
      { opacity: 1, y: 20, delay: 0.25, stagger: 0.25 }
    );
    gsap.set("body", { overflow: "hidden" });
  }
  burger.classList.toggle("active");
});

// We use a utility function `toArray` that below gets all `video` css classes -
// for us into an array, loops over them and adds a `trigger` to them.
const videos = gsap.utils.toArray(".video");
gsap.set(videos, { opacity: 0 }); // default starting point.
videos.forEach((video) => {
  // Here we use scroll trigger to define a trigger.
  // We start/enter and end/leave in the center for each iteration.
  ScrollTrigger.create({
    trigger: video,
    start: "top center",
    end: "bottom center",
    // markers: true,
    onEnter: () => {
      gsap.to(video, { opacity: 1 });
      video.play();
    },
    onEnterBack: () => video.play(),
    onLeave: () => video.pause(),
    onLeaveBack: () => video.play(),
  });
});
