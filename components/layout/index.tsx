import Footer from "./Footer"
import Header from "./Header"

export default function Layout({children}){
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