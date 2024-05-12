import { Link } from "react-router-dom"
import { Avatar } from "./Avatar"
import { AddButton } from "./AddButton"

export const Appbar = () => {
    return <div>
        <div className="border-b flex justify-between  ">
            <Link to={'/blog'}>           
             <div className="flex flex-col justify-center text-lg p-2">
                Medium
            </div>
            </Link>

            <div className="flex">
        <div className="p-2">
            <Link to={'/publish'}><AddButton /></Link>
    
</div>
    <div className="p-1 pr-2">
                <Avatar name="A" size="big"></Avatar>
                </div>
            </div>
        </div>
    </div>
}