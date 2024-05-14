import { Avatar } from "./Avatar";
import { Link } from "react-router-dom";

interface BlogCardProps {
    id: number
    authorname: string;
    title: string;
    content: string;
    publishedDate: string;
}

export const BlogCard = ({id, authorname, title, content, publishedDate}: BlogCardProps) => {
    return <Link to={`/blog/${id}`}>   <div className="border-b border-slate-300 w-screen max-w-screen-md cursor-pointer">
    <div className="flex">
        <div>  <Avatar name = {authorname} size="small"></Avatar></div>
      
        <div className="font-thin pl-1 text-gray-600">
            {'  ●  ' + authorname + '  ● '} 
          </div> 
         
             
           <div className="pl-2 font-thin text-gray-500">
            {publishedDate}</div>
            </div>
        <div className="font-semibold text-xl pt-2"  >{title}</div>
        <div className="text-md font-thin"> {content.substring(0,100) + '...'}</div>
        <div className="font-thin text-xs text-slate-400 pt-3">{ `${Math.ceil(content.length / 500)} minutes` }</div>
    </div>
    </Link>
 
}

