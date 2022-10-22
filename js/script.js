const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

// Question 1
const cat = {
  complain: function () {
    console.log("Meow");
  },
};

// Question 2
const h3El = document.querySelector("h3");
h3El.innerHTML = "Updated heading";

// Question 3
h3El.style.fontSize = "2em";

// Question 4
h3El.classList.add("subheading");

// Question 5
const pElements = document.querySelectorAll("p");
pElements.forEach((p) => {
  p.style.color = "red";
});

// Question 6
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = `<p>New paragraph</p>`;
resultsContainer.style.backgroundColor = "yellow";

// Question 7
function withOneParameter(list) {
  for (let item of list) {
    console.log(item.name);
  }
}

withOneParameter(cats);

// Question 8

function createCats(cats) {
  let element = "";
  cats.forEach((cat) => {
    element += `
                    <div>
                        <h5>${cat.name}</h5>
                        <p>${cat.age ? cat.age : "Age unknown"}</p>
                    </div>
        `;
  });
  return element;
}

document.querySelector(".cat-container").innerHTML = createCats(cats);
