import { PostType } from "../interface/type"

const  getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
 
  
}

export default async function BlogPage() {

  const data : PostType[] = await getData()
  
  return (
    <>
      {
        data.map(post=>{
          return (
            <div key={post.id}>
              <p>{post.id}</p>
              <h2>{post.title}</h2>
            </div>
          )
        })
      }
      
    </>
    )
  }

