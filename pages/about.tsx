import Layout from "../components/layout";
import {ReactElement} from "react";
export default function About(){
    return(
        <section>
            <h1>Acerca de Finder</h1>
        </section>
    )
}
About.getLayout=function getLayout(page:ReactElement ){
    return(
        <Layout>
            {page}
        </Layout>
    )
}