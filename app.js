//data to be used in the page
const content = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante."
const sections=[
    {
      title:"section 1",
      Href:"#section1" ,
      id:"section1",
      backgroundColor:"#D5D8DC ",
      color:"grey",
      content:content
    },
    { title:"section 2",
    id:"section2",
    Href:"#section2" ,
    backgroundColor:"#ABB2B9",
    color:"white",
    content:content

    },
    { title:"section 3",
    id:"section3",
    Href:"#section3" ,
    backgroundColor:"#808B96",
    color:"white",
    content:content

    },
    {
    title:"section 4",
    id:"section4",
    Href:"#section4",
    backgroundColor:"#566573",
    color:"white",
    content:content

 }
];
//function runs when the page loads
window.onload=function (params) {
var container=document.getElementById('navbar');
var ul= document.createElement('ul');
ul.className="listContainer";
sections.map((section,index)=>{

li =document.createElement('li');
if(index===0){
    li.classList=`list-item  ${section.id} active`;

}else{
    li.classList=`list-item  ${section.id}`;

}

li.innerHTML=`<a key=${index} href=${section.Href} > ${section.title} </a>`;
ul.appendChild(li);
}
)
container.appendChild(ul);
var content=document.getElementById('content');

sections.map((section,index)=>{
    var sectionElement=document.createElement('section');
    sectionElement.id=section.id;
    sectionElement.className="section";
    sectionElement.style.backgroundColor=section.backgroundColor;
    sectionElement.style.color=section.color;
    var h1 =document.createElement('h1');
    h1.textContent=section.title;
    sectionElement.appendChild(h1);
    var p =document.createElement('p');
    p.textContent=section.content;
    sectionElement.appendChild(p);
    content.appendChild(sectionElement);

   
   
    
})
//to up button
const page = document.getElementById('container');
    const topButton=document.createElement('button');
    topButton.textContent="Up";
    topButton.id="up";
    topButton.className="topButton";
    topButton.onclick=gotUp;
    page.appendChild(topButton)

scrolling();




}
//scrolling function
function scrolling() {
const allSections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("li");
window.onscroll = () => {
  var current = "section1";
  showUpButton();
  allSections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.pageYOffset >= sectionTop - 50) {
      current = section.getAttribute("id"); 
    }
  });
  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};
};
function showUpButton() {
   const topButton=document.getElementById('up')
    
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        topButton.style.display = "block";
      } else {
        topButton.style.display = "none";
      }
    
}

function gotUp() {
   
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
    
}

