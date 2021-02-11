// you'll be setting up event listeners and implementing AJAX requests using the Fetch API.


// front end

window.addEventListener('DOMContentLoaded', async () => {
   const res = await fetch("/kitten/image");
   const resJson = await res.json();
   console.log(resJson.src)

    // .then(res => res.json())
    // .then(jsonResult => console.log(jsonResult))
    // .then()

  // console.log(fetch("/kitten/image"))

  const img = document.querySelector('.cat-pic');
  console.log(img);
  img.setAttribute('src', resJson.src);


});
