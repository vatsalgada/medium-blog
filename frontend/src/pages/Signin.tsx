import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"

export const Signin = () => {
    
    return <><div className="grid grid-cols-1 md:grid-cols-2 ">
       <div className="md:col-span-2">
            <Auth type="signin"></Auth>
        </div>
        <div className=""> <Quote></Quote></div>
       </div></>
}