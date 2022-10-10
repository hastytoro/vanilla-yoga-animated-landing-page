## Animated webpage

> Simple landing-page making use of `gsap` and `ScrollTrigger`.

![alt text](./capture.png)

Featuring:

- A single vanilla landing page with touch of animation.
- Animation assisted by adding a cdn [gsap.min.js](https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.1/gsap.min.js) into the index.html directly.
- Example of applying a burger animation:

```js
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
```

Regards, <br />
Luigi Lupini <br />
<br />
I ❤️ all things (🇮🇹 / 🛵 / ☕️ / 👨‍👩‍👧)<br />
