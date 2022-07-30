


//function for sliding images
var index = 0;
const slides = document.querySelectorAll('.home-img');


function changeSlide(){

  if(index < 0){
    index = slides.length-1;
  }
  
  if(index > slides.length-1){
    index = 0;
  }
  
  for(let i=0;i<slides.length;i++){
    slides[i].style.display = "none";
  }
  
  slides[index].style.display= "block";
  
  index++;
  
  setTimeout(changeSlide,9000);
  
}

changeSlide();


//function for LARGE sliding images
var num = 0;
const Lslides = document.querySelectorAll('.large-img');


function spinSlide(){

  if(num < 0){
    num = Lslides.length-1;
  }
  
  if(num > Lslides.length-1){
    num = 0;
  }
  
  for(let i=0;i<Lslides.length;i++){
    Lslides[i].style.display = "none";
  }
  
  Lslides[num].style.display= "block";
  
  num++;
  
  setTimeout(spinSlide,10000);
  
}

spinSlide();


let open = document.querySelector('.open');
let menu = document.querySelector('#menu-bar');
let  close = document.querySelector('#close');


//A and B represent (open and close)
//The reason for formatting the function this way is......
 //to avoid repitition incase i have  many buttons i want to use same function for!
common = (a,b,c) => {
  a.addEventListener('click', () => { 
    //I  created a property(.hide) in css and i set the value to(hidden)
    //That is what i will be using to (hide) and at the same time (display) the open menu and close ICONs
    a.classList.toggle('hide');  
    b.classList.toggle('hide');   

    if(c == 'slide-in'){
      menu.classList.toggle('slide')
    }

    if(c == 'slide-out'){
      menu.classList.toggle('slide')
    }
  })
}

//if you dont repeat the call vice-versa it wont work
common(open,close,'slide-in'); //when i click on (open menu) = i want you to display the close button
common(close,open,'slide-out');//when i click on (close) = i want you to display the open menu button
