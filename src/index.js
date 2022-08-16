let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

const myRequest = new Request ( {
  method: 'GET',
  headers: myHeaders, 
});


function addToy(_toy_) {
  fetch(`http://localhost:3000/toys`),{
    method:`POST`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      "name": "Jessie",
      "image": "https://vignette.wikia.nocookie.net/p__/images/8/88/Jessie_Toy_Story_3.png/revision/latest?cb=20161023024601&path-prefix=protagonist",
      "likes": 0
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
  }
  function addBTN(_button_) {
    fetch(`http://localhost:3000/toys/:id`), {
    method:`PATCH`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      "likes": newNumberOfLikes })
      .then((response) => response.json())
      .then((likes) => console.log(likes)),
     querySelector ("#new-toy-btn").addEventListener ('click',() => console.log) 
  }
  }

}
