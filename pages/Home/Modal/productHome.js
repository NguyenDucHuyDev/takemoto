export function productService(actionItems){
    return`
        <div class="productHome__service">
            ${actionItems.map(item =>{
                return `
                    <div class="productService__item">
                        <div class="productHome__free">${item.free}</div>
                        <div class="productHome__title">${item.title}</div>
                        <div class="productHome__des">${item.des}</div>
                    </div>                `
            }).join('')}
        </div>
    `
} 

export function productProvide(actionItems){
    return`
        <div class="productHome__provide">
            ${actionItems.map(item =>{
                return `
                    <div class="productProvide__item">
                        <img src=${item.image} width="250"/>
                        <div class="productHome__title">${item.title}</div>
                        <div class="productHome__des">${item.des}</div>
                    </div>
                `
            }).join('')}
        </div>
    `
} 