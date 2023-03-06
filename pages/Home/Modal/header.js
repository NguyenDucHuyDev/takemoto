export function ModalContact(nameId, itemModal) {
  return (`
    <div class="modalContact">
        <nav class="modalContact__main">
            ${ nameId === "Tiếng Việt"
                ? `   
                <div class="grid_contact">
                    ${itemModal.map((item) => {
                        return `<li>${item.content}</li>`;
                    }).join("")}
                </div>
                `
                : `
                    ${itemModal.map((item) => {
                        return `<li>${item.content}</li>`;
                    }).join("")}
                `
            }
        </nav>
        <div class="closeModal">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="16px" height="16px">
                <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687
                6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687
                22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031
                7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969
                26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031
                26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312
                26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687
                22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"/>
            </svg>
        </div>
    </div>
    `)
}   

export function ModalNav(style,navMenu,idMenu){
    return(`
        <div class="modalNavTop">
            <div class="modalNavTop__main">
                <div class="modalNavMenu">
                    ${(style === "menu") 
                    ?
                    `
                        <nav class="modalNavMenu__menu">

                        ${(idMenu === "product") ?
                        `
                            ${navMenu.map( item => {
                                return`<li class="menuNav_li product">${item.menu}</li>`                            
                            }).join('')}
                        `
                        :""
                        }

                        ${(idMenu === "solution") ?
                            `
                                ${navMenu.map( item => {
                                    return`<li class="menuNav_li solution">${item.menu}</li>`                            
                                }).join('')}
                            `
                            :""
                        }
                        </nav>
                        <div class="modalNavMenu__content">
                                <div class="contentNavMenuTop">
                                    ${(idMenu === "product") ?
                                    `
                                        ${navMenu.map(item => {
                                            return(`
                                                <div class="modalTextMenu productTextMenu">
                                                    <div class="contentNavMenuTop__menu">${item.menu}</div>
                                                        ${(item.des).map(des => {
                                                            return(`
                                                                <div class="allTitleDes">
                                                                    <div class="allTitleDes__title">${des.title}</div>
                                                                    <div class="allTitleDes__des">${des.des}</div>
                                                                </div>
                                                            `)
                                                        }).join('')}
                                                </div>
                                            `)
                                        }).join('')}
                                    `
                                    :""
                                    }

                                    ${(idMenu === "solution") ?
                                    `
                                        ${navMenu.map(item => {
                                            return(`
                                                <div class="modalTextMenu solutionTextMenu">
                                                    <div class="contentNavMenuTop__menu">${item.menu}</div>
                                                        ${(item.des).map(des => {
                                                            return(`
                                                                <div class="allTitleDes">
                                                                    <div class="allTitleDes__title">${des.title}</div>
                                                                    <div class="allTitleDes__des">${des.des}</div>
                                                                </div>
                                                            `)
                                                        }).join('')}
                                                </div>
                                            `)
                                        }).join('')}
                                    `
                                    :""
                                    }
                                </div>
                                <div class="vehicleNavMenuTop">
                                ${(idMenu === "product") ?
                                `
                                    ${navMenu.map(item => {
                                        return(`
                                            <div class="productVehicle">
                                                <div class="contentNavMenuTop__menu">Tài nguyên và nội dung phương tiện</div>
                                                <div class="headerTable">
                                                ${(item.info).map(item => {
                                                    return(`
                                                        <div class="headerTable__main">
                                                            <div class="headerTable__title">${item.title}</div>
                                                            <div class="headerTable__des">${item.des}</div>
                                                        </div>
                                                    `)
                                                }).join('')}
                                                </div>
                                            </div>
                                        `)
                                    }).join('')}
                                `
                                :""
                                }

                                ${(idMenu === "solution") ?
                                `
                                    ${navMenu.map(item => {
                                        return(`
                                            <div class="solutionVehicle">
                                                <div class="contentNavMenuTop__menu">Tài nguyên và nội dung phương tiện</div>
                                                <div class="headerTable">
                                                ${(item.info).map(item => {
                                                    return(`
                                                        <div class="headerTable__main">
                                                            <div class="headerTable__title">${item.title}</div>
                                                            <div class="headerTable__des">${item.des}</div>
                                                        </div>
                                                    `)
                                                }).join('')}
                                                </div>
                                            </div>
                                        `)
                                    }).join('')}
                                `
                                :""
                                }
                                </div>
                        </div>
                    `
                    :""
                    }

                    ${(idMenu ==="valuation")
                    ?
                    `
                        <div class="valuation__grid">
                            ${navMenu.map(item=>{
                                return `
                                    <div class="valuation__flex">
                                        <img src=${item.logo} width="120" height="80" />
                                        <div class="valuation__title">${item.title}</div>
                                        <div class="valuation__des">${item.des}</div>
                                    </div>
                                `
                            }).join('')}
                        </div>
                    `
                    :""
                    }
                    
                    ${(idMenu === "docs")
                    ?
                    `
                        <div class="docs__flex">
                            <div class="docs__flex--col">
                                ${navMenu.map(item=>{
                                    return `
                                        <img src=${item.icon} width="120" height="120" />
                                        <div class="docs__flex--title">${item.title}</div>
                                        <div class="docs__flex--des">${item.des}</div>
                                        <div class="docs__flex--viewAll">${item.viewAll}</div>
                                    `
                                }).join('')}
                            </div>
                            <div class="docs__flex--view">
                                <div class="viewDocs__title">Xem tài liệu về các dịch vụ phổ biến</div>
                                <div class="viewDocs__gird">
                                    ${navMenu.map(item => {
                                    return`
                                        ${(item.service.items).map(item =>{
                                            return`
                                                <div class="viewDocs__flex">
                                                    <img src=${item.icon} width="40" height="40" />
                                                    <div class="viewDocs__title">${item.title}</div>
                                                </div>
                                            `
                                        }).join('')}
                                    `
                                    }).join('')}
                                </div>
                            </div>
                        </div>
                    `
                    :""
                    }

                    ${(idMenu === "learn")
                    ?
                    `
                      <div class="learn__gird">
                        ${navMenu.map(item =>{
                            return`
                             <div class="learn__main">
                                <div class="learn__title">${item.title}</div>
                                <div class="learn__desMain">
                                    ${item.desMain.map(des=>{
                                    return `
                                        <div class="learn__des">${des.des}</div>
                                    `
                                    }).join('')}
                                </div>
                             </div>
                            `
                        }).join('')}
                      </div> 
                    `
                    :""
                    }

                    ${(idMenu === "network")
                    ?
                    `
                        <div class="network__gird">
                        ${navMenu.map(item =>{
                            return`
                             <div class="network__main">
                                <div class="network__title">${item.title}</div>
                                <div class="network__desDiff">${item.desDiff}</div>
                                <div class="network__desMain">
                                    ${item.desMain.map(des=>{
                                    return `
                                        <div class="network__des">${des.des}</div>
                                    `
                                    }).join('')}
                                </div>
                             </div>
                            `
                        }).join('')}
                        </div>
                    `
                    :""
                    }

                    ${(idMenu ==="AWS")
                    ?
                    `
                        <div class="AWS__gird">
                        ${navMenu.map(item =>{
                            return`
                             <div class="network__main">
                                <div class="network__title">${item.title}</div>
                                <div class="network__desMain">
                                    ${item.desMain.map(des=>{
                                    return `
                                        <div class="network__des">${des.des}</div>
                                    `
                                    }).join('')}
                                </div>
                                <div class="network__title">${item.titleDiff}</div>
                             </div>
                            `
                        }).join('')}
                        </div>
                    `
                    :""
                    }

                    ${(idMenu === "client")
                    ?
                    `
                        <div class="client_flex">
                            <div class="client_flex--col1">
                                ${navMenu.map(item=>{
                                    return`
                                        <img src=${item.icon} width="120" height="80" />
                                       <div class="client__title">${item.title}</div> 
                                       <div class="">${item.desDiff}</div> 
                                       <div class="network__title">${item.titleDiff}</div> 
                                    `
                                }).join('')}
                            </div>
                            <div class="client_flex--col2">
                                ${navMenu.map(item=>{
                                return`                           
                                    ${item.desMain.map(des=>{
                                        return `
                                            <div class="valuation__flex">
                                                <div class="valuation__title">${des.title}</div>
                                                <div class="valuation__des">${des.des}</div>
                                            </div>
                                        `
                                    }).join('')}
                                `
                                }).join('')}
                            </div>
                        </div>
                    `
                    :""
                    }

                    ${(idMenu == "event")
                    ?
                    `
                        <div class="AWS__gird event__gird">
                        ${navMenu.map(item =>{
                            return`
                            <div class="network__main">
                                <div class="network__title">${item.title}</div>
                                <div class="valuation__des">${item.des}</div>
                                <div class="network__desDiff event__desDiff">${item.desDiff}</div>
                            </div>
                            `
                        }).join('')}
                        </div>
                    `
                    :""
                    }

                    ${(idMenu == "more")
                    ?
                    `
                        <div class="learn__gird">
                        ${navMenu.map(item =>{
                            return`
                            <div class="learn__main">
                                <div class="learn__title">${item.title}</div>
                                <div class="learn__desMain">
                                    ${item.desMain.map(des=>{
                                    return `
                                        <div class="learn__des">${des.des}</div>
                                    `
                                    }).join('')}
                                </div>
                            </div>
                            `
                        }).join('')}
                        </div> 
                    `
                    :""
                    }
                    <div class="closeModalNavTop">
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="20px" height="20px" fill="#fff">
                        <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687
                        6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687
                        22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031
                        7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969
                        26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031
                        26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312
                        26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687
                        22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"/>
                    </svg>
                </div>
                </div>
            </div>
        </div>
    `)}
