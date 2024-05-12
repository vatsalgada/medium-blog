import { useEffect, useState } from "react"
import axios from "axios"


interface Blog {
    "content": string;
    "title": string;
    "id": number;
    "author": {
        "name"?: string;
    }
}

export const useBlog = ({ id }: {id: any}) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog | null>(null);

    useEffect(() => {
        axios.get(`https://backend.contactvgada.workers.dev/api/v1/blog/${id}`, {headers: {Authorization: 'bearer '+ localStorage.getItem('token')}}).then(resposne => {
            setBlog(resposne.data);
            console.log(resposne.data)
            setLoading(false);
        })   
    },[id])

    return{
        loading, 
        blog
    }
}


export const useBlogs = ()=> {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        axios.get('https://backend.contactvgada.workers.dev/api/v1/blog/', {headers: {Authorization: localStorage.getItem('token')}}).then(resposne => {
            setBlogs(resposne.data);
            console.log(resposne.data)
            setLoading(false);
        })   
    },[])

    return{
        loading, 
        blogs
    }
}