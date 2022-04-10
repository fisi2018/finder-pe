import { ReactElement } from "react"
import Footer from "./Footer"
import Header from "./Header"
type PropsComponent={
    children:ReactElement
}
export default function Layout({children}:PropsComponent):ReactElement{
    return(
        <section>
            <Header/>
            <main >
                {children}
            </main>
            <Footer/>
        </section>
    )
}