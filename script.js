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
          if (pages >= 1) {
            pages++;
          }
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
          pages = "1";
        }
      }

      function handleLine5Intersect(entries) {
        if (entries[0].isIntersecting) {
          video1.style.opacity = "0";
          video2.setAttribute('src', 'Scene1A.mp4');
        }
      }

      function handleLine6Intersect(entries) {
        if (entries[0].isIntersecting) {
          video1.style.opacity = "1";
          video1.setAttribute('src', 'Scene2A.mp4');
        }
      }

      function handleLine7Intersect(entries) {
        if (entries[0].isIntersecting) {
          video1.style.opacity = "0";
          video2.setAttribute('src', 'Scene3A.mp4');
        }
      }

      function handleLine8Intersect(entries) {
        if (entries[0].isIntersecting) {
          video1.style.opacity = "1";
          video1.setAttribute('src', 'Scene4A.mp4');
        }
      }

      function handleLine9Intersect(entries) {
        if (entries[0].isIntersecting) {
          video1.style.opacity = "0";
          video2.setAttribute('src', 'Scene1B.mp4');
        }
      }

      function handleLine10Intersect(entries) {
        if (entries[0].isIntersecting) {
          video1.style.opacity = "1";
          video1.setAttribute('src', 'Scene2B.mp4');
        }
      }

      function handleLine11Intersect(entries) {
        if (entries[0].isIntersecting) {
          video1.style.opacity = "0";
          video2.setAttribute('src', 'Scene3B.mp4');
        }
      }

      function handleLine12Intersect(entries) {
        if (entries[0].isIntersecting) {
          video1.style.opacity = "1";
          video1.setAttribute('src', 'Scene4B.mp4');
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
              if (i === 156) {
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

              if (i === 12) {
                const observer = new IntersectionObserver(handleLine2Intersect, {
                  root: null,
                  rootMargins: "0px",
                  threshold: 0.5
                });
                observer.observe(poetryText);
              }

              if (i === 22) {
                const observer = new IntersectionObserver(handleLine3Intersect, {
                  root: null,
                  rootMargins: "0px",
                  threshold: 0.5
                });
                observer.observe(poetryText);
              }

              if (i === 32) {
                const observer = new IntersectionObserver(handleLine4Intersect, {
                  root: null,
                  rootMargins: "0px",
                  threshold: 0.5
                });
                observer.observe(poetryText);
              }

              if (i === 45) {
                const observer = new IntersectionObserver(handleLine5Intersect, {
                  root: null,
                  rootMargins: "0px",
                  threshold: 0.5
                });
                observer.observe(poetryText);
              }

              if (i === 51) {
                const observer = new IntersectionObserver(handleLine6Intersect, {
                  root: null,
                  rootMargins: "0px",
                  threshold: 0.5
                });
                observer.observe(poetryText);
              }

              if (i === 60) {
                const observer = new IntersectionObserver(handleLine7Intersect, {
                  root: null,
                  rootMargins: "0px",
                  threshold: 0.5
                });
                observer.observe(poetryText);
              }

              if (i === 68) {
                const observer = new IntersectionObserver(handleLine8Intersect, {
                  root: null,
                  rootMargins: "0px",
                  threshold: 0.5
                });
                observer.observe(poetryText);
              }

              if (i === 78) {
                const observer = new IntersectionObserver(handleLine9Intersect, {
                  root: null,
                  rootMargins: "0px",
                  threshold: 0.5
                });
                observer.observe(poetryText);
              }

              if (i === 92) {
                const observer = new IntersectionObserver(handleLine10Intersect, {
                  root: null,
                  rootMargins: "0px",
                  threshold: 0.5
                });
                observer.observe(poetryText);
              }

              if (i === 102) {
                const observer = new IntersectionObserver(handleLine11Intersect, {
                  root: null,
                  rootMargins: "0px",
                  threshold: 0.5
                });
                observer.observe(poetryText);
              }

              if (i === 112) {
                const observer = new IntersectionObserver(handleLine12Intersect, {
                  root: null,
                  rootMargins: "0px",
                  threshold: 0.5
                });
                observer.observe(poetryText);
              }

              if (i === 122) {
                const observer = new IntersectionObserver(handleLine5Intersect, {
                  root: null,
                  rootMargins: "0px",
                  threshold: 0.5
                });
                observer.observe(poetryText);
              }

              if (i === 132) {
                const observer = new IntersectionObserver(handleLine6Intersect, {
                  root: null,
                  rootMargins: "0px",
                  threshold: 0.5
                });
                observer.observe(poetryText);
              }

              if (i === 142) {
                const observer = new IntersectionObserver(handleLine7Intersect, {
                  root: null,
                  rootMargins: "0px",
                  threshold: 0.5
                });
                observer.observe(poetryText);
              }

              if (i === 152) {
                const observer = new IntersectionObserver(handleLine8Intersect, {
                  root: null,
                  rootMargins: "0px",
                  threshold: 0.5
                });
                observer.observe(poetryText);
              }
              
            });
          });
      }
