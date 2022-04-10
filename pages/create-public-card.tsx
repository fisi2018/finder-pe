import Layout from "../components/layout";
import { BiCurrentLocation } from "react-icons/bi"
import { ReactElement} from "react";
import CreateCardForm from "../components/common/CreateCardForm";

export default function PublicCard():ReactElement{
    
    return(
        <section className="min-h-screen p-6 flex  justify-center items-center bg-gradient-to-br from-purple-900 to-purple-500" >
                <CreateCardForm/>
        </section>
    )
}
PublicCard.getLayout=function getLayout(page:ReactElement):ReactElement{
   return(

   <Layout>
        {page}
    </Layout>
   ) 
}