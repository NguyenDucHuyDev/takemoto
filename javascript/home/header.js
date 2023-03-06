/// Xử lý sự kiện mouseContact ở Header
const closeModal = document.querySelectorAll(".closeModal");
const openModal = document.querySelectorAll(".modalContact");
const mouseContact = document.querySelectorAll(".mouseContact");
const handleOpenModal = (index) => {
  openModal[index].classList.remove("mouseout");
  openModal[index].classList.add("mouseover");
};

const handleCloseModal = (index) => {
  openModal[index].classList.remove("mouseover");
  openModal[index].classList.add("mouseout");
};

mouseContact.forEach((mouse, index) => {
  mouse.addEventListener("mouseover", () => handleOpenModal(index));
  mouse.addEventListener("mouseout", () => handleCloseModal(index));
});

closeModal.forEach((close, index) => {
  close.addEventListener("click", () => handleCloseModal(index));
});
///

// Xử lý sự kiện mouseNavTop ở Header
const solutionMenu = document.querySelectorAll(".solution");
const productMenu = document.querySelectorAll(".product");

const solutionTextMenu = document.querySelectorAll(".solutionTextMenu");
const productTextMenu = document.querySelectorAll(".productTextMenu");
const solutionVehicle = document.querySelectorAll(".solutionVehicle");
const productVehicle = document.querySelectorAll(".productVehicle");

function handleProduct(index) {
  for (let i = 0; i < productTextMenu.length; i++) {
    productTextMenu[i].style.display = `none `;
    productMenu[i].style.color = `#afafb0`;
  }

  for (let i = 0; i < productVehicle.length; i++) {
    productVehicle[i].style.display = `none `;
  }

  productTextMenu[index].style.display = `flex`;
  productVehicle[index].style.display = `block`;
  productMenu[index].style.color = `#ec7211`;
}

function handleSolution(index) {
  for (let i = 0; i < solutionTextMenu.length; i++) {
    solutionTextMenu[i].style.display = `none `;
    solutionMenu[i].style.color = `#afafb0`;
  }

  for (let i = 0; i < solutionVehicle.length; i++) {
    solutionVehicle[i].style.display = `none `;
  }

  solutionTextMenu[index].style.display = `flex`;
  solutionVehicle[index].style.display = `block`;
  solutionMenu[index].style.color = `#ec7211`;
}

solutionMenu.forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    handleSolution(index);
  });
});

productMenu.forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    handleProduct(index);
  });
});

const resetModalMenu = document.querySelectorAll(".modalNavTop__main");

resetModalMenu.forEach((reset) => {
  reset.addEventListener("mouseleave", () => {
    for (let i = 0; i < solutionTextMenu.length; i++) {
      solutionTextMenu[i].style.display = `none `;
      solutionMenu[i].style.color = `#afafb0`;
    }

    for (let i = 0; i < solutionVehicle.length; i++) {
      solutionVehicle[i].style.display = `none `;
    }

    for (let i = 0; i < productTextMenu.length; i++) {
      productTextMenu[i].style.display = `none `;
      productMenu[i].style.color = `#afafb0`;
    }

    for (let i = 0; i < productVehicle.length; i++) {
      productVehicle[i].style.display = `none `;
    }

    productTextMenu[0].style.display = `flex`;
    productVehicle[0].style.display = `block`;
    productMenu[0].style.color = `#ec7211`;

    solutionTextMenu[0].style.display = `flex`;
    solutionVehicle[0].style.display = `block`;
    solutionMenu[0].style.color = `#ec7211`;
  });
});

// Đóng modalMenu
const closeModalNavTop = document.querySelectorAll('.closeModalNavTop') 
const modalNavTop = document.querySelectorAll('.modalNavTop')
const openModalNavTop = document.querySelectorAll('.mouseNavTop')
const searchHeader = document.getElementById('searchHeader')
const headerTopNav = document.getElementById('header-top__nav')
const inputHeader = document.getElementById('inputHeader')
const closeInputHeader = document.getElementById('closeInputHeader')

openModalNavTop.forEach((open,index) =>{

  open.addEventListener("mouseleave",()=>{
    modalNavTop.forEach((modal)=>{
      modal.style.display = `none`
    })
  })

  open.addEventListener("mouseenter",()=>{    
    modalNavTop.forEach((modal)=>{
      modal.style.display = `none`
    })
    modalNavTop[index].style.display = `block`
  })
})

closeModalNavTop.forEach((close,index) => {
  close.addEventListener("click",()=>{
    modalNavTop[index].style.display = `none`
  })
})

searchHeader.addEventListener("click",()=> {
  headerTopNav.style.visibility = `hidden`
  searchHeader.style.visibility = `hidden`
  inputHeader.classList.add('hoverEffect')
})

closeInputHeader.addEventListener("click",()=>{
  inputHeader.classList.remove('hoverEffect')
  headerTopNav.style.visibility = `visible`
  searchHeader.style.visibility = `visible`
})


