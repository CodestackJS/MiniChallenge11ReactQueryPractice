import usePosts from "../hooks/usePosts";


const PostListWQueryHook = () => {

    const {data: posts, error} = usePosts()

  return (
    <>
        {error ? <p>{error.message}</p> :null}
        {posts?.map(post => (
            <li key={post.id}>{post.title}</li>
        ))}
    
    
    </>
  )
}

export default PostListWQueryHook