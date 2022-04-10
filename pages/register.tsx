import { ReactElement, useState } from "react"
import RegisterForm from "../components/common/RegisterForm"
import VerifyForm from "../components/common/VerifyForm";
import Layout from "../components/layout"

export default function Register():ReactElement{
    const [verify,setVerify] =useState<boolean>(false);
    return(
        <section className="min-h-screen p-6 flex  justify-center items-center bg-gradient-to-br from-purple-900 to-purple-500" >
                {verify?
                <VerifyForm/>
                :
                <RegisterForm setVerify={setVerify} />
                }
        </section>
    )
}
Register.getLayout=function getLayout(page:ReactElement):ReactElement{
    return(
        <Layout>
            {page}
        </Layout>
    )
}