import {maps} from "../../lib/maps/maps.js"

const points = document.querySelectorAll(".point")
const modalMapsChild = document.querySelectorAll(".modalMapsChild")

points.forEach((point,index) =>{
    point.addEventListener("mouseover",()=>{
        modalMapsChild[index].innerHTML = `
                                            <div class="modalMaps">
                                                <div class="modalMaps__main">
                                                    <div class="modalMaps__items">
                                                        <div class="modalMaps__name">${maps[index].name}</div>
                                                        <div>${maps[index].time}</div>
                                                        <div>${maps[index].site}</div>
                                                    </div>
                                                </div>
                                            </div>
        `
    })

    point.addEventListener("mouseout",()=>{
        for(let i = 0; i < modalMapsChild.length; i++ ){
            modalMapsChild[i].innerHTML = ``
        }
    })
})

// Tắt modal

const closeModalMaps1 = document.getElementById('closeModalMaps1')
const tableModalMaps = document.getElementById('tableModalMaps')
const listMapsList = document.querySelectorAll('.listMaps__list')

const handleOpenModalMaps = ()=>{
    tableModalMaps.style.display = `flex`
}
const handleCloseModalMaps = ()=> {
    tableModalMaps.style.display = `none`
}

listMapsList.forEach((list) =>{
    list.addEventListener("click",()=>{handleOpenModalMaps()})
})

closeModalMaps1.addEventListener("click",()=>handleCloseModalMaps())

tableModalMaps.addEventListener("click",(e)=>{
    const checked = e.target.closest(".tableModalMaps__main")
    if(!checked) handleCloseModalMaps()
})