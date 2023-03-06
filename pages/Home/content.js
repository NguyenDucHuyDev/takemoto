import {libHome} from '../../lib/home/pageHome.js'
import {productService,productProvide} from './Modal/productHome.js'
import Maps from "../../components/maps/maps.js"

function ContentHome(){
    return`
        <div class="contentHome">
            <section class="complete">
                <div class="complete__main">
                    <div class="complete__start">
                        <div class="complete__title">Hoàn tất đăng ký AWS</div>
                        <div class="complete__content">Hàng triệu khách hàng đang sử dụng giải pháp đám mây của AWS để xây dựng các ứng dụng phức tạp với tính linh hoạt, khả năng mở rộng, độ bảo mật và độ tin cậy cao</div>
                        <button type="button" class="btnOrange">Đăng ký đầy đủ</button>
                        <div class="complete__contentDiff">Tham gia cùng chúng tôi và bắt đầu xây dựng ngay hôm nay</div>
                    </div>
                </div>
            </section>

            <div class="contentHome__background">
                <section class="contentHome__content">

                    <div class="level">
                        <div class="level__start">
                            ${(libHome.rank.items).map(item =>{
                            return(`
                                <div class="level__item">
                                    <div>
                                        <div class="level__title">${item.title}</div>
                                        <div class="level__des">${item.des}</div>
                                        <div class="level__more">${item.more}</div>
                                    </div>
                                    <img src=${item.icon} />
                                </div>
                                `)
                            }).join('')}
                        </div>
                    </div>
                    
                    <div class="changeDivSolution">
                        <div class="libSolution">
                            <div class="libSolution__start">
                            ${(libHome.solution.items).map(item =>{
                                return(`
                                    <div class="libSolution__item">
                                        <div class="libSolution__title">${item.title}</div>
                                        <div class="libSolution__des">${item.des}</div>
                                    </div>
                                    `)
                                }).join('')}
                            </div>
                        </div>
                    </div>

                    <div class="discover">
                        <div class="discover__start">
                            <div class="discover__start--title">Khám phá giải pháp của chúng tôi</div>

                            <div class="discover-branch">
                                <div class="discover__title">Theo ngành</div>
                                <div class="discover-items">
                                    ${libHome.discover.branch.map(branch=>{
                                        return`
                                        <div class="discover-item">
                                            <img src=${branch.icon} width="120" />
                                            <div class="discover-items--title">${branch.title}</div>
                                            <div class="discover-items--des">${branch.des}</div>
                                        </div>
                                        `
                                    }).join('')}
                                </div>
                                <div class="discover__viewAll">Xem tất cả ngành >></div>
                            </div>

                            <div class="discover-branch">
                                <div class="discover__title">Theo danh mục công nghệ</div>
                                <div class="discover-items">
                                    ${libHome.discover.items.map(item=>{
                                        return`
                                        <div class="discover-item">
                                            <img src=${item.icon} width="120" />
                                            <div class="discover-items--title">${item.title}</div>
                                            <div class="discover-items--des">${item.des}</div>
                                        </div>
                                        `
                                    }).join('')}
                                </div>
                                <div class="discover__viewAll">Xem tất cả giải pháp >></div>
                            </div>
                        </div>
                    </div>
                    </section>
            </div>
            <div class="contentHome__content">
                <div class="serviceHome">
                    <div class="discover__start--title">Tìm hiểu các sản phẩm của chúng tôi</div>
                        <div class="slideHome" id="slideServiceHome">
                            <div class="slideHome__main" id="slideServiceHome__main">
                                ${(libHome.service.items).map(item =>{
                                    return`
                                        <div class="serviceHome__item">
                                            <img src=${item.icon} width="80" />
                                            <div>${item.title}</div>
                                        </div>
                                    `
                                }).join('')}
                            </div>

                            <div class="slideHome__arrowLeft" id="service__arrowLeft">
                                <img src="../../assets/images/arrow-left.png" width="24px"/>
                            </div>

                            <div class="slideHome__arrowRight" id="service__arrowRight">
                                <img src="../../assets/images/arrow-right.png" width="24px"/>
                            </div>
                        </div>

                        <div class="showProductHome">
                            ${(libHome.service.items).map(item =>{
                                return `${productService(item.actionItems)} `
                            }).join('')}
                        </div>

                        <div class="viewAllService__main">
                            ${(libHome.service.items).map(item => {
                                return`<div class="showProductHome__viewAll viewAllService">${item.view}</div>`
                            }).join('')}
                        </div>

                    </div>
                </div>
            </div>

            <div class="trainHome">
                <div class="contentHome__content">
                    <div class="trainHome__main">
                        <div class="discover__start--title">Đào tạo và chứng nhận</div>
                        <div class="trainHome__who">
                            <div>Dành cho nhà xây dựng</div>
                            <div>Dành cho người đưa ra quyết định</div>
                        </div>
                        <div class="trainHome__desMain">
                            <div class="trainHome__des">Dành cho các nhà phát triển, nhà khoa học dữ liệu, kiến trúc sư giải pháp hay bất kỳ ai muốn tìm hiểu cách xây dựng trên AWS ngay hôm nay </div>
                            <div class="trainHome__flex">
                            ${(libHome.train.items).map(item =>{
                                return`
                                    <div class="trainHome__item">
                                        <img src=${item.icon} width="275"/>
                                        <div class="trainHome__title">${item.title}</div>
                                        <div class="trainHome__desDiff">${item.des}</div>
                                        <div class="trainHome__titleDiff">${item.titleDiff}</div>
                                    </div>
                                `
                            }).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="contentHome__content">
                <div class="serviceHome">
                    <div class="discover__start--title">Cung cấp giải pháp sáng tạo cho khách hàng</div>
                    <div class="slideHome" id="slideProvideHome">
                        <div class="slideHome__main" id="slideProvideHome__main">
                            ${(libHome.provide.items).map(item =>{
                                return`
                                    <div class="provideHome__item">
                                        <img src=${item.icon} width="80" />
                                        <div>${item.title}</div>
                                    </div>
                                `
                            }).join('')}
                        </div>

                        <div class="slideHome__arrowLeft" id="provide__arrowLeft">
                            <img src="../../assets/images/arrow-left.png" width="24px"/>
                        </div>
                        <div class="slideHome__arrowRight" id="provide__arrowRight">
                            <img src="../../assets/images/arrow-right.png" width="24px"/>
                        </div>
                    </div>

                    <div class="showProductHome">
                        ${(libHome.provide.items).map(item =>{
                            return `${productProvide(item.actionItems)} `
                        }).join('')}
                    </div>
                    
                    <div class="viewAllService__main">
                        ${(libHome.provide.items).map(item => {
                            return`<div class="showProductHome__viewAll viewAllProvide">${item.view}</div>`
                        }).join('')}
                    </div>
                </div>
            </div>

            <div class="buildHome">
                <div class="contentHome__content">
                    <div class="buildHome__main">
                        <div class="discover__start--title">Được xây dựng để đáp ứng những yêu cầu khắt khe nhất</div>
                        <div class="trainHome__flex">
                        ${(libHome.build.items).map(item =>{
                            return`
                                <div class="trainHome__item buildHome__item">
                                    <img src=${item.icon} width="100"/>
                                    <div class="trainHome__title buildHome__title">${item.title}</div>
                                    <div class="trainHome__desDiff">${item.des}</div>
                                </div>
                            `
                        }).join('')}
                        </div>
                    </div>
                </div>
            </div>

            <div class="networkHome">
                <div class="contentHome__content">
                    <div class="networkHome__main">
                        <div class="discover__start--title">Mạng lưới các Khu vực AWS trên toàn cầu</div>
                        <div class="networkHome__des">Đám mây AWS trải rộng trên 99 Vùng sẵn sàng tại 31 khu vực địa lý trên khắp thế giới và đã công bố kế hoạch tăng thêm 12 Vùng sẵn sàng và 4 Khu vực AWS khác tại Canada, Israel, New Zealand và Thái Lan.</div>
                        ${Maps()}
                    </div>
                </div>
            </div>

            <div class="reportHome">
                <div class="contentHome__content">
                    <div class="reportHome__main">
                        <div class="discover-items reportHome__items">
                            ${libHome.report.items.map(item=>{
                                return`
                                <div class="discover-item reportHome__item">
                                    <img src=${item.icon} width="240" />
                                    <div class="discover-items--title reportHome__title">${item.title}</div>
                                    <div class="discover-items--des reportHome__des">${item.des}</div>
                                </div>
                                `
                            }).join('')}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    `
} 
export default ContentHome