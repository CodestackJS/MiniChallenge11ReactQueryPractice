import { useQuery } from "@tanstack/react-query"
import axios from "axios"


interface Post{
    id: number
    title: string
    completed: string
}


const PostListWQuery = () => {

    const fetchPosts = () =>
        axios
        .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
        .then(res => (res.data))

        const {data: posts, error} = useQuery<Post[],Error>({
            queryKey: ["posts"],
            queryFn: fetchPosts
        });



  return (
    <>
        {error ? <p>{error.message}:</p> :null }
        {posts?.map(post =>(
            <li key={post.id}>{post.title}</li>
        ))}



    </>
  )
}

export default PostListWQuery