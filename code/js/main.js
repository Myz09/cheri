var currentPage="Home";
var title="cherielle";
if (currentPage=="Home"){
    pass;
}else if(currentPage=="Mission"){
    pass;
}else if(currentPage=="Articles"){
    pass;
}else if(currentPage=="Contact"){
    pass;
}
// function flipPage() {
//   document.querySelector('.notebook').classList.toggle('flipped');
// }

let currentPage = 1;
const totalPages = 3;

function showPage(pageNum) {
  for (let i = 1; i <= totalPages; i++) {
    document.getElementById(`page${i}`).classList.remove('active');
  }
  document.getElementById(`page${pageNum}`).classList.add('active');
  currentPage = pageNum;
}

function goToPage(pageNum) {
  if (pageNum >= 1 && pageNum <= totalPages) {
    showPage(pageNum);
  }
}

// Initialize first page
showPage(currentPage);