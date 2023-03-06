import Header from '../../components/ui/header.js'
import Footer from '../../components/ui/footer.js'
import ContentHome from './content.js'

export default function LayoutHome(){
    return(
        `
        <div id="layout_home">
            ${Header()}
            ${ContentHome()}
            ${Footer()}
        </div>
        `
    )
}

