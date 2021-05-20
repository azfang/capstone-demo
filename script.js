let pages = 0;
let i = 0;
var video = document.getElementById("VideoMain");
video.setAttribute('src', 'IHateThis.mp4');
// window.onscroll = scrollFunction;
// window.addEventListener("scroll", scrollFunction);

const URL =
        "data.json";
      document.addEventListener("DOMContentLoaded", () => {
        //set up the IntersectionObserver to load more images if the footer is visible.
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
      }
    }

      function handleLineIntersect(entries) {
        if (entries[0].isIntersecting) {
            video.setAttribute('src', 'IHateThis2.mp4');
        }
        else {
          video.setAttribute('src', 'IHateThis.mp4');
        }
      }

      function handleLine2Intersect(entries) {
        if (entries[0].isIntersecting) {
            video.setAttribute('src', 'IHateThis3.mp4');
        }
        else {
          video.setAttribute('src', 'IHateThis.mp4');
        }
      }

      function handleLine3Intersect(entries) {
        if (entries[0].isIntersecting) {
            video.setAttribute('src', 'painting_test.mp4');
        }
        else {
          video.setAttribute('src', 'IHateThis.mp4');
        }
      }
    
    // function scrollFunction() {
    //   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    //     video.setAttribute('src', '/Scene1.mp4');
    //   } 
      // else {
      //   video.setAttribute('src', '/Scene1.mp4');
      // }
  // }

  //   window.addEvent('scroll',function(replaceVideo) {
  //     video.setAttribute('src', '/Painting_Waves1.mp4');
  // });

      function getData() {
        let main = document.querySelector("main");
        console.log("fetch some JSON data");
        fetch(URL)
          .then(response => response.json())
          .then(data => {
            // i++;
            // data.items.forEach(item => {
            //   let poetryText = document.createElement("div");
            //   poetryText.classList.add("justify");
            //   poetryText.id = `line-${pages}-${i}`;
            //   poetryText.textContent = item.name;
            //   main.appendChild(poetryText);
            //   i++;
            // });
            data.items.forEach(item => {
              let poetryText = document.createElement("div");
              poetryText.classList.add("justify");
              poetryText.id = `line-${pages}-${i}`;
              poetryText.textContent = item.name;
              main.appendChild(poetryText);
              i++;

              if (i === 7) {
                const observer = new IntersectionObserver(handleLineIntersect, {
                  root: null,
                  rootMargins: "0px",
                  threshold: 0.5
                });
                observer.observe(poetryText);
              }

              if (i === 14) {
                const observer = new IntersectionObserver(handleLine2Intersect, {
                  root: null,
                  rootMargins: "0px",
                  threshold: 0.5
                });
                observer.observe(poetryText);
              }

              if (i === 21) {
                const observer = new IntersectionObserver(handleLine3Intersect, {
                  root: null,
                  rootMargins: "0px",
                  threshold: 0.5
                });
                observer.observe(poetryText);
              }
            });
          });
      }
