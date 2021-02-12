// you'll be setting up event listeners and implementing AJAX requests using the Fetch API.


// front end

window.addEventListener('DOMContentLoaded', async () => {
  let res = await fetch("/kitten/image");
  let resJson = await res.json();
  //  console.log(`Link to pic: ${resJson.src}`)

    // .then(res => res.json())
    // .then(jsonResult => console.log(jsonResult))
    // .then()

  // console.log(fetch("/kitten/image"))

  const img = document.querySelector('.cat-pic');
  // console.log(`TheImageElement: ${img}`);
  img.setAttribute('src', resJson.src);

  const newButton = document.getElementById("new-pic");
  let loadEl = document.querySelector(".loader")

  newButton.addEventListener('click', async (event) => {
    // event.preventDefault();
    loadEl.innerText =  "Loading...";
    // console.log(loadEL);
    res = await fetch("/kitten/image");

    resJson = await res.json();
    loadEl.innerText = "";
    // console.log(loadEl.innerText);
    // console.log(`Hopefully New Pic: ${resJson.src}`);
    img.setAttribute('src', resJson.src);




  })

});
