//
// arr pages = ["pages/about.html","pages"]
let currentPage = 1;
const totalPages = 3;

 function loadPage(filename) {
  fetch(filename)
    .then(response => {
      if (!response.ok) throw new Error("Page not found");
      return response.text();
    })
    .then(html => {
      document.getElementById("page-content").innerHTML = html;
    })
    .catch(error => {
      document.getElementById("page-content").innerHTML = "<p>Error loading page.</p>";
      console.error(error);
    });
}

// Load default page on startup
loadPage("pages/cover.html");

// function showPage(pageNum) {
//   for (let i = 1; i <= totalPages; i++) {
//     document.getElementById(`page${i}`).classList.remove('active');
//     document.querySelectorAll('.tab')[i - 1].classList.remove('active');
//   }
//   document.getElementById(`page${pageNum}`).classList.add('active');
//   document.querySelectorAll('.tab')[pageNum - 1].classList.add('active');
//   currentPage = pageNum;
// }

// function goToPage(pageNum) {
//   if (pageNum >= 1 && pageNum <= totalPages) {
//     showPage(pageNum);
//   }
// }

// // Initialize first page
// showPage(currentPage);