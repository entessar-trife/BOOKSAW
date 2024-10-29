// nav links
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(navLink => {
  navLink.addEventListener("click", () => {
    document.querySelector(".active") ?.classList.remove("active");
    navLink.classList.add("active");
  })
});
// nav links


// featured-book
fetch('https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/')
  .then(data_1 => data_1.json())
  .then(data_1 => featuredSection(data_1))

  const featuredBook = document.querySelector("#featured-book");
  function featuredSection(data_1) {
    for (let i = 42; i <= 46; i++) {
      featuredBook.innerHTML +=
      `<div class="card border-0">
        <div class="position-relative">
          <img src=${data_1[i].simple_thumb} class="card-img-top rounded-1 p-4" alt="book cover">
          <div class="cart text-uppercase position-absolute bottom-0 text-light text-center p-2 bg-black"> add to cart </div>
        </div>
        <div class="card-body text-center my-2">
          <h5 class="card-title fs-2"> ${data_1[i].title} </h5>
          <p class="card-text text-body-tertiary"> ${data_1[i].author} </p>
        </div>
      </div>`
    }
  }
// featured-book

// best-selling-books
fetch("https://wolnelektury.pl/api/books/studnia-i-wahadlo/")
  .then(data_2 => data_2.json())
  .then(data_2 => bestSellingSection(data_2))

function bestSellingSection(data_2) {
  let bestSellingCover = document.querySelector(".best-selling-cover");
  bestSellingCover.innerHTML = `
  <div class="card">
    <div class="position-relative">
      <img src=${data_2.cover} class="best-selling-cover w-100 bg-white p-2 img-fluid rounded-1 position-relative" alt="cover" />
      <div class="cart text-uppercase position-absolute bottom-0 text-light text-center p-2 bg-black"> add to cart </div>
    </div>
  </div>`
  let bestSellingContent = document.querySelector(".best-selling-content");
  bestSellingContent.innerHTML = `
  <div class="best-books py-5 position-relative">
    <h6 class="text-body-tertiary mb-4"> By ${data_2.authors[0].name} </h6>
    <h4 class="fs-2 my-4"> ${data_2.title} </h4>
    <div class="text-body-tertiary">
    ${data_2.fragment_data.html}
    </div>
  </div> `
    }
// best-selling-books


// popular-books
const liItems = document.querySelectorAll(".popular-books ul li");
liItems.forEach(liItem => {
  liItem.addEventListener("click", () => {
    document.querySelector(".active-li") ?.classList.remove("active-li");
    liItem.classList.add("active-li")
  })
});

fetch('https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/')
  .then(data_1 => data_1.json())
  .then(data_1 => popularSection(data_1))

const popularBook = document.querySelector("#popular-book");
function popularSection(data_1) {
  for (let i = 15; i < 23; i++) {
    popularBook.innerHTML +=`
    <div class="card border-0">
      <div class="position-relative">
        <img src=${data_1[i].simple_thumb} class="card-img-top p-4" alt="book cover">
        <div class="cart text-uppercase position-absolute bottom-0 text-light text-center p-2 bg-black"> add to cart </div>
      </div>
      <div class="card-body text-center">
        <h5 class="card-title fs-2"> ${data_1[i].title} </h5>
        <p class="card-text text-body-tertiary"> ${data_1[i].author} </p>
      </div>
    </div>`
  }
}

// popular-books