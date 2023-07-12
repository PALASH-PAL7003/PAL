const divcontainer=document.querySelector(".menu ul");

let menuicon = function(){
  divcontainer.style.display='block';
  // console.log("dfghjk") ;
}

const display1 =document.querySelector(".Rice");
const display2 =document.querySelector(".Seeds");
const display3 =document.querySelector(".Pesticides");
const display4 =document.querySelector(".Fertilizer");

let list1 =function(){
  display4.style.display='block';
display3.style.display='block';
display2.style.display='block';
 display1.style.display='block';

display2.style.display='none';
display3.style.display='none';
display4.style.display='none';
// display2.style.display='block';
}
let list2 =function(){
  display4.style.display='block';
  display3.style.display='block';
  display2.style.display='block';
   display1.style.display='block';

  display1.style.display='none';
  display3.style.display='none';
  display4.style.display='none';
  // display2.style.display='block';
 }
let list3 =function(){
  display4.style.display='block';
  display3.style.display='block';
  display2.style.display='block';
   display1.style.display='block';

    display2.style.display='none';
    display1.style.display='none';
    display4.style.display='none';
   

    // display2.style.display='block';
  }
let list4 =function(){
  display4.style.display='block';
  display3.style.display='block';
  display2.style.display='block';
   display1.style.display='block';

      display2.style.display='none';
      display3.style.display='none';
      display1.style.display='none';
      // display2.style.display='block';
 }
 const divcontainer1=document.querySelector(".list ul");

let menuicon1 = function(){
  divcontainer1.style.display='block';
  // console.log("dfghjk") ;
}


  // if (screen.pixelDepth <=600) {
  //   display4.style.display='none';
  //   console.log("run 600");
  // } 
  // else {
  //   list3.style.display = 'block';
  //   console.log("run 400");
  // }

  
