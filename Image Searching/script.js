const accesskey="40chDClIolxpW-HcILHUmCpYxZLI3TKRctzUdmYo8XU";

const searchForm=document.querySelector("#search-form");
const searchBox=document.querySelector("#search-box");
const searchResult=document.querySelector("#search-result");
const showMoreBtn=document.querySelector("#show-more-btn");

let keyword="";
let page=1;

async function  searchimages() {
    keyword=searchBox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

    const response=await fetch(url);
    const data=await response.json();

    if(page==1){
        searchResult.innerHTML="";
    }

   // console.log(data);
   const results=data.results;
   
  results.map((result)=>{
    const image=document.createElement("img");
    image.src=result.urls.small;
    const imageLink=document.createElement("a");
    imageLink.href=result.links.html;
    imageLink.target="_blank";


    imageLink.appendChild(image);
   searchResult.appendChild(imageLink);    
   })

   showMoreBtn.style.display="block";
    
}
searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    page=1;
    searchimages();
});

showMoreBtn.addEventListener("click", ()=>{
    page++;
    searchimages();
})
