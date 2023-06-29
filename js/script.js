$('.jiboni-left-slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe:false,
    prevArrow: '<img class="prev" src="images/prev.png">',
    nextArrow: '<img class="next" src="images/next.png">',
    asNavFor: '.jiboni-right-text-slider',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  $('.jiboni-right-text-slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe:false,
    prevArrow: '<img class="prevt" src="images/prevt.png">',
    nextArrow: '<img class="nextt" src="images/nextt.png">',
    asNavFor: '.jiboni-left-slider',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


// start from here



//   let item =document.querySelectorAll(".jiboni-left-slider .photoimg");
//   let arr = Array.from(item)
//   let total= document.querySelector(".jibonitotal")
//   let jibonicount= document.querySelector(".jibonicount")
//   let i = 1;

//   let prev = document.querySelector(".prev")
//   let prevt = document.querySelector(".prevt")
//   let next = document.querySelector(".next")
//   let nextt = document.querySelector(".nextt")
//   total.innerHTML = arr.length
//   jibonicount.innerHTML=i

 
// prev.addEventListener("click",function(){
    

//    if(i!=1){
//     i--
//     jibonicount.innerHTML = i
//    }
// })
// prevt.addEventListener("click",function(){
    

//    if(i!=1){
//     i--
//     jibonicount.innerHTML = i
//    }
// })

// next.addEventListener("click",function(){
   

//    if(i!=arr.length){
//     i++
//     jibonicount.innerHTML = i
//    }
// })
// nextt.addEventListener("click",function(){
   

//    if(i!=arr.length){
//     i++
//     jibonicount.innerHTML = i
//    }
// })


// let photoimg = document.querySelectorAll(".photoimg");
// let totalPhotoCount = document.querySelector(".jibonitotal");
// let PhotoCounter = document.querySelector(".jibonicount");
// let prevArrow = document.querySelector(".prev");
// let prevtArrow = document.querySelector(".prevt");
// let nextArrow = document.querySelector(".next");
// let nexttArrow = document.querySelector(".nextt");
// let photoimgArr = Array.from(photoimg)

// let i = 1

// totalPhotoCount.innerHTML = photoimgArr.length
// PhotoCounter.innerHTML = i






// nextArrow.addEventListener("click",function(){
//         i++
//         PhotoCounter.innerHTML = i
//         if(i == photoimgArr.length){
//           PhotoCounter.innerHTML = photoimgArr.length
          
//         }
// })

// prevArrow.addEventListener("click",function(){
//   if(i!=1){
//     i--
//     PhotoCounter.innerHTML = i
//   }
// })


// nextArrow.addEventListener("click",function(){
//   if(i!=photoimgArr.length){
//    i++
//    PhotoCounter.innerHTML = i
//   }
// })
//MY practices part

let photoimg = document.querySelectorAll(".photoimg")
let totalPhotoCount = document.querySelector(".jibonitotal")
let photoCounter = document.querySelector(".jibonicount")
let nextArrow = document.querySelector(".next")
let prevArrow = document.querySelector(".prev")
let nexttArrow = document.querySelector(".nextt")
let prevtArrow = document.querySelector(".prevt")

let photoImgArr =Array.from(photoimg)
console.log(prevtArrow);
let i =1
totalPhotoCount.innerHTML =photoImgArr.length
photoCounter.innerHTML = i; 

nextArrow.addEventListener("click", ()=> {
  
  photoCounter.innerHTML = i; 
  if (i!=photoImgArr.length) {
    i++
    photoCounter.innerHTML = i; 
  }

  
})

prevArrow.addEventListener("click", ()=> {
 
  photoCounter.innerHTML = i; 
  if (i!=1) {
    i--
    photoCounter.innerHTML = i; 
  }

  
})
nexttArrow.addEventListener("click", ()=> {
  
  photoCounter.innerHTML = i; 
  if (i!=photoImgArr.length) {
    i++
    photoCounter.innerHTML = i; 
  }

  
})

prevtArrow.addEventListener("click", ()=> {
 
  photoCounter.innerHTML = i; 
  if (i!=1) {
    i--
    photoCounter.innerHTML = i; 
  }

  
})



