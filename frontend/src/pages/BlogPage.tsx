import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { Appbar } from "../components/Appbar";
import { Avatar } from "../components/Avatar";
import { Spinner } from "../components/Spinner";

export const BlogPage = () => {
    const { id} = useParams();

    const {loading,blog} = useBlog({id})
    
    if(loading){
        return <div>
            <Appbar />
            <div className="flex justify-center">
                <div className="flex flex-col justify-center ">
                    <div> <Spinner></Spinner></div>
               
                </div>
            </div>
            
            </div>
    }else
    return <>
      <Appbar></Appbar>
        <div className="grid grid-cols-12  max-w-screen-2xl p-2 pt-7">
            <div className="col-span-8 p-2 pt-">
                <div className="text-5xl font-bold ">{blog?.title}</div>
                <div className="pt-3 text-slate-500">Posted on 16 Aug, 2023</div>
                <div className="pt-4">{blog?.content}</div>
            </div>
            <div className="col-span-4">
                <div className="text-gray-600">
                    Author
                </div>
                <div className="flex">
                    <div className="pr-2 flex flex-col justify-center h-center">
                        <Avatar  name={blog?.author.name || 'A'} size="big"></Avatar>
                    </div>
                    <div>             
                         <div className="text-l font-bold">
                    {blog?.author.name || "Anonymous"}
                </div><div>
                    A random pharse
                </div>
                </div>
  
                </div>
            </div>
        </div>
    </>
}