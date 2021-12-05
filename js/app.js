
//function runs when the page loads
window.onload=function () {
  const page = document.getElementById('container');

handleNavigation();


//to up button

    const topButton=document.createElement('button');
    topButton.textContent="Up";
    topButton.id="up";
    topButton.className="topButton";
    topButton.onclick=gotUp;
    page.appendChild(topButton)

active();
scrolling();
//smoothly scroll 

document.querySelectorAll('a').forEach((aItem)=>{
  aItem.addEventListener('click',(e)=>{
    e.preventDefault();
      const toWhere=aItem.getAttribute('to');
      smoothscroll(document.getElementById(toWhere))
    
 
  })
})


}
//smooth scroll function
function smoothscroll(e) {
  e.scrollIntoView({behavior: "smooth", block: "end"});
  
}
//navigation function
function handleNavigation() {
  const sections=document.querySelectorAll('section');
  const container=document.getElementById('navbar');
const ul= document.createElement('ul');
ul.className="listContainer";
sections.forEach((section,index)=>{

  li =document.createElement('li');
  if(index===0){
      li.classList=`list-item  ${section.id}`;
  }else{
      li.classList=`list-item  ${section.id}`;
  }
  
  li.innerHTML=`<a key=${index} to=${section.id} href=#${section.id} > ${section.title} </a>`;
  
  ul.appendChild(li);
  container.appendChild(ul);
  
  }
  )
}
function active() {
const allSections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("li");
let current ;
showUpButton();
allSections.forEach((section) => {
  const navheight=document.getElementById("navbar").offsetHeight ;
  const sectionTop = section.offsetTop;
  const secHeight=section.offsetHeight ;
  section.classList.remove("current");

  if (window.pageYOffset >= (sectionTop-navheight)&&window.pageYOffset<(sectionTop-navheight)+secHeight) {
    current = section.getAttribute("id"); 
 
  }
  if(section.classList.contains(current)){
    section.classList.add('current');

   
  }

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");

    }
  });
});
}

//scrolling function
function scrolling() {

window.onscroll = () => {
  active();
 
};
};

//Up button
function showUpButton() {
   const topButton=document.getElementById('up')
    
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        topButton.style.display = "block";
      } else {
        topButton.style.display = "none";
      }
    
}

function gotUp() {
  window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth"
  })
   
 
}

