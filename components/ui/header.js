import { header } from "../../lib/home/header.js";
import {ModalContact,ModalNav} from "../../pages/Home/Modal/header.js"
function Header() {
  return (
    `
    <div id="header">
      <div class="header">
        <div class="header-top">
            <div class="header-top__logo">
                <img src="../../assets/images/logo.png" />
            </div>
            <nav id="header-top__contact">
                ${(header.contact.items).map((item) => {
                    return (`
                        <a class="mouseContact">
                            <li>
                              ${item.content}
                              ${item.icon}
                              ${ModalContact(item.content,item.modal)}
                            </li>
                        </a>
                    `)
                  }).join("")}
                <button type="button" class="btnOrange">Đăng ký đầy đủ</button>
            </nav>
        </div>
        <div class="navHeader">
          <nav id="header-top__nav">
          ${(header.navigation.items).map((item) =>{
            return (`
                <a class="mouseNavTop">
                  <li>
                    ${item.content}
                    ${ModalNav(item.style,item.navMenu,item.idMenu)}
                  </li>
                </a>
            `)
          }).join('')}
          </nav>

          <div id="inputHeader">
              <input type="text" placeholder="Tìm kiếm"/>
              <div id="closeInputHeader">
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

          <div id="searchHeader">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="20px" height="20px" fill="#fff">
              <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508
                  23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0
                  26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23
                  7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123
                  21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"/>
            </svg>
          </div>
        </div>
      </div>
  </div>
  `
  );
}
export default Header;

