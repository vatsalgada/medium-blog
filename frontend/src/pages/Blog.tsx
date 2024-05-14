import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import LoadingSkeleton from "../components/LoadingSkeleton";
import { useBlogs } from "../hooks"


export const Blog = () => { 
    
   const {loading, blogs} = useBlogs();
   //console.log(blogs)
    if(loading) {
        return <div>
            <Appbar />
            <div className="flex justify-center">
                <div>
                <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
                </div>
            </div>
            
            </div>
    }else 
    return <div className="">  
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