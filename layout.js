import PageHome from "./pages/Home/index.js"
export default function LayoutApp(){
    return(`
        <div id="layout_app">${PageHome()}</div>
    `)
}
