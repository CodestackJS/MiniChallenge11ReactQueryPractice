import axios from "axios";
import { useEffect, useState } from "react"

//Do not forget to install axios: open terminal cd into the file > npm install axios

interface Post{
    id: number
    title: string
    body: string
}

const PostList = () => {

    //creating useState
    const [posts, setPosts] = useState<Post[]>([]);
    const [error, setError] = useState('');

    //creating fetch data function to use axios
    const fetchData = () => {
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(res => setPosts(res.data))
        .catch(error => setError(error));
    }

    useEffect(() => {
        fetchData();
    })

  return (
    <>
        {posts.map((post) => (
            <li key={post.id}>{post.title}</li>

        ))}
    
    
    </>
  )
}

export default PostList