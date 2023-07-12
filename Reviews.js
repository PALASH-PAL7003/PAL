const divcontainer=document.querySelector(".menu ul");

let menuicon = function(){
  divcontainer.style.display='block';
  // console.log("dfghjk") ;
}
function addReview() {
  var author = document.getElementById("author").value;
  var reviewText = document.getElementById("review-text").value;
  
  var reviewContainer = document.createElement("div");
  reviewContainer.className = "review";
  
  var authorElement = document.createElement("p");
  authorElement.innerHTML = "Customer / Visiter : " + author;
  
  var reviewElement = document.createElement("p");
  reviewElement.innerHTML = reviewText;
  
  reviewContainer.appendChild(authorElement);
  reviewContainer.appendChild(reviewElement);
  
  var reviewsContainer = document.getElementById("reviews-container");
  reviewsContainer.insertBefore(reviewContainer, reviewsContainer.firstChild);
  
  document.getElementById("author").value = "";
  document.getElementById("review-text").value = "";
}
// console.log("dfghjk") 