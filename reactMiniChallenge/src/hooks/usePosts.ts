import axios from "axios";
import { useQuery } from "@tanstack/react-query";

interface Post{
    id: number
    title: string
    body: string

}

const usePosts = () => {

    const fetchPosts = () =>
        axios
        .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
        .then(res => (res.data))


        return useQuery<Post[],Error>({
            queryKey: ["posts"],
            queryFn: fetchPosts,
        });



}
   
        
export default usePosts