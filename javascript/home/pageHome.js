const slideService = document.getElementById("slideServiceHome");
const slideProvide = document.getElementById("slideProvideHome")

const widthSlideService = document.getElementById("slideServiceHome__main");
const widthSlideProvide = document.getElementById("slideProvideHome__main")

const serviceArrowLeft = document.getElementById("service__arrowLeft");
const serviceArrowRight = document.getElementById("service__arrowRight");
const provideArrowLeft = document.getElementById("provide__arrowLeft")
const provideArrowRight = document.getElementById("provide__arrowRight")

let resetService = 0;
let indexService = 0;

let resetProvide = 0;
let indexProvide = 0;


let widthSlide = slideService.offsetWidth * 2;
widthSlideService.style.width = `${widthSlide}px`;

let widthProvide = slideProvide.offsetWidth *2;
widthSlideProvide.style.width = `${widthProvide}px`;

serviceArrowLeft.addEventListener("click", () => {
  resetService--;
  indexService = indexService + 25
  widthSlideService.style.transform = `translateX(${indexService}%)`
  widthSlideService.style.transition = `all 0.25s linear`

  if(resetService <= 0){
    serviceArrowLeft.style.display = `none`
  }
  serviceArrowRight.style.display =`flex`
});

serviceArrowRight.addEventListener("click", () => {
  resetService++;
  indexService = indexService - 25
  widthSlideService.style.transform = `translateX(${indexService}%)`
  widthSlideService.style.transition = `all 0.25s linear`

  if(resetService >= 2){
      serviceArrowRight.style.display = `none`
  }
  serviceArrowLeft.style.display =`flex`
});

provideArrowLeft.addEventListener("click", () => {
  resetProvide--;
  indexProvide = indexProvide + 25
  widthSlideProvide.style.transform = `translateX(${indexProvide}%)`
  widthSlideProvide.style.transition = `all 0.25s linear`

  if(resetProvide <= 0){
    provideArrowLeft.style.display = `none`
  }
   provideArrowRight.style.display =`flex`
});

provideArrowRight.addEventListener("click", () => {
  resetProvide++;
  indexProvide = indexProvide - 25
  widthSlideProvide.style.transform = `translateX(${indexProvide}%)`
  widthSlideProvide.style.transition = `all 0.25s linear`

  if(resetProvide >= 2){
    provideArrowRight.style.display = `none`
  }
  provideArrowLeft.style.display =`flex`
});

// 
const slideItemService = document.querySelectorAll('.serviceHome__item')
const slideItemProvide = document.querySelectorAll('.provideHome__item')

const productService = document.querySelectorAll('.productHome__service')
const productProvide = document.querySelectorAll('.productHome__provide')

const viewAllService = document.querySelectorAll('.viewAllService')
const viewAllProvide = document.querySelectorAll('.viewAllProvide')

slideItemService.forEach((item,index)=>{
  function handleSlideService(index){
    for(let i =0; i < productService.length;i++){
      productService[i].classList.add('hiddenProductSlideHome')
      viewAllService[i].classList.add('hiddenProductSlideHome')
    }

    productService[index].classList.remove('hiddenProductSlideHome')
    productService[index].classList.add('showProductSlideHome')

    viewAllService[index].classList.remove('hiddenProductSlideHome')
    viewAllService[index].classList.add('showProductSlideHome')
  }
  item.addEventListener('click', ()=>{handleSlideService(index)})
  handleSlideService(0)
})

slideItemProvide.forEach((item,index)=>{
  function handleSlideProvide(index){
    for(let i =0; i < productProvide.length;i++){
      productProvide[i].classList.add('hiddenProductSlideHome')
      viewAllProvide[i].classList.add('hiddenProductSlideHome')      
    }

    productProvide[index].classList.remove('hiddenProductSlideHome')
    productProvide[index].classList.add('showProductSlideHome')

    viewAllProvide[index].classList.remove('hiddenProductSlideHome')
    viewAllProvide[index].classList.add('showProductSlideHome')

  }
  item.addEventListener('click', ()=>{handleSlideProvide(index)})
  handleSlideProvide(0)
})

