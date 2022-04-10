import { ReactElement } from "react"
import LoginForm from "../components/common/LoginForm"
import Layout from "../components/layout"

export default function Login():ReactElement{
    return(
        <section className="min-h-screen p-6 flex  justify-center items-center bg-gradient-to-br from-purple-900 to-purple-500" >
                <LoginForm/>
        </section>
    )
}
Login.getLayout=function getLayout(page:ReactElement):ReactElement{
    return(

    <Layout>
        {page}
    </Layout>
    )
}