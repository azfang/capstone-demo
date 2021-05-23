let pages = 0;
let i = 0;
var video1 = document.getElementById("VideoTop");
var video2 = document.getElementById("VideoBottom");
video1.setAttribute('src', 'Scene1.mp4');
video2.setAttribute('src', 'Scene2.mp4');

const URL =
        "data.json";
      document.addEventListener("DOMContentLoaded", () => {
        //set up the IntersectionObserver to load more text
        //URL - https://gist.githubusercontent.com/prof3ssorSt3v3/1944e7ba7ffb62fe771c51764f7977a4/raw/c58a342ab149fbbb9bb19c94e278d64702833270/infinite.json
        let options = {
          root: null,
          rootMargins: "0px",
          threshold: 0.5
        };
        const observer = new IntersectionObserver(handleIntersect, options);
        observer.observe(document.querySelector("footer"));
        //an initial load of some data
        getData();
      });

      function handleIntersect(entries) {
        if (entries[0].isIntersecting) {
          console.warn("something is intersecting with the viewport");
          getData();
          pages++;
          video1.setAttribute('src', 'Scene1.mp4');
          video1.style.opacity = "1";
      }
    }

    function handleLineIntersect(entries) {
      if (entries[0].isIntersecting) {
        video1.style.opacity = "1";
        video1.setAttribute('src', 'Scene1.mp4');
      }
    }

      function handleLine2Intersect(entries) {
        if (entries[0].isIntersecting) {
          video1.style.opacity = "0";
        }
      }

      function handleLine3Intersect(entries) {
        if (entries[0].isIntersecting) {
          video1.style.opacity = "1";
          video1.setAttribute('src', 'Scene3.mp4');
        }
      }

      function handleLine4Intersect(entries) {
        if (entries[0].isIntersecting) {
          video1.style.opacity = "1";
          video1.setAttribute('src', 'Scene4.mp4');
        }
      }

      function getData() {
        let main = document.querySelector("main");
        console.log("fetch some JSON data");
        fetch(URL)
          .then(response => response.json())
          .then(data => {
              data.items.forEach(item => {
              let poetryText = document.createElement("div");
              poetryText.classList.add("justify");
              poetryText.id = `line-${pages}-${i}`;
              poetryText.textContent = item.name;
              main.appendChild(poetryText);
              i++;
              if (i === 37) {
                i = "0";
              }

              if (i === 2) {
                const observer = new IntersectionObserver(handleLineIntersect, {
                  root: null,
                  rootMargins: "0px",
                  threshold: 0.5
                });
                observer.observe(poetryText);
              }

              if (i === 10) {
                const observer = new IntersectionObserver(handleLine2Intersect, {
                  root: null,
                  rootMargins: "0px",
                  threshold: 0.5
                });
                observer.observe(poetryText);
              }

              if (i === 20) {
                const observer = new IntersectionObserver(handleLine3Intersect, {
                  root: null,
                  rootMargins: "0px",
                  threshold: 0.5
                });
                observer.observe(poetryText);
              }

              if (i === 30) {
                const observer = new IntersectionObserver(handleLine4Intersect, {
                  root: null,
                  rootMargins: "0px",
                  threshold: 0.5
                });
                observer.observe(poetryText);
              }

              if (i === 40) {
                const observer = new IntersectionObserver(handleLine5Intersect, {
                  root: null,
                  rootMargins: "0px",
                  threshold: 0.5
                });
                observer.observe(poetryText);
              }
            });
          });
      }
