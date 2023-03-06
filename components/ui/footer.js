import { footer } from "../../lib/home/footer.js"
function Footer(){
    return`
        <div class="footer">
            <div class="footer__background">
                <div class="contentHome__content">
                    <div class="footer__main">
                        <div class="footer__info">
                            ${(footer.infoAWS).map(info=>{
                                return`
                                        ${(info.items).map(item =>{
                                            return`
                                            <div class="footer__info--item">
                                                <div class="footer__info--title">${item.title}</div>
                                                <div class="footer__info--desMain">
                                                    ${(item.desMain).map(des=>{
                                                        return`
                                                            <div class="footer__info--des">${des.des}</div>
                                                        `
                                                    }).join('')}
                                                </div>
                                            </div>
                                            `
                                        }).join('')}
                                `
                            }).join('')}
                        </div>

                        <div class="footer__social">
                            ${(footer.infoAWS).map(info =>{
                                return`
                                    <div class="btnOrange footer__btn">${info.btn}</div>
                                    <div class="footer__iconSocial">
                                        ${info.iconSocial.map(icon=>{
                                            return`
                                                <img src=${icon.icon} width="30px"/>
                                            `
                                        }).join('')}
                                    </div>
                                    <div class="footer__isAWS">${info.isAWS}</div>
                                `
                            }).join('')}
                            
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="footer__final">
                <div class="contentHome__content">
                        ${footer.infoAWS.map(info =>{
                            return`
                            <div class="footer__final--main">
                                <div>${info.security}</div>
                                <div>|</div>
                                <div>${info.rules}</div>
                                <div>|</div>
                                <div>${info.cookie}</div>
                                <div>|</div>
                                <p class="footer__final--year">${info.year}</p>
                            </div>
                            `
                        }).join('')}
                </div>
            </div>


        </div>
    `
}

export default Footer