import Footer from "./Footer"
import Header from "./Header"

export default function Layout({children}:{children:JSX.Element}):JSX.Element{
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