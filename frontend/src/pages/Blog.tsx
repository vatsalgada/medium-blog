import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks"

interface BlogInterface {
    "content": string;
    "title": string;
    "id": number;
    "author": {
        "name": string;
    }
}

export const Blog = () => { 
    
   const {loading, blogs} = useBlogs();
   //console.log(blogs)
    if(loading) {
        return <div>Loading</div>
    } else return <div className="">  
    <Appbar />
    <div className="flex justify-center">
    <div className="max-w-l">
        {blogs?.map(Blog =>
    <BlogCard 
    id = {Blog.id}
    authorname= {Blog.author.name || "George R.R"}
    title={Blog.title}
    content={Blog.content}
     publishedDate="23rd March" />
)}


    </div>
    </div>
    </div>
}