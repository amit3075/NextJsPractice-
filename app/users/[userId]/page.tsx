import type { Metadata } from "next"
import getAllUser from "@/lib/getAllUser"
import getUser from "@/lib/getUserPost"
import getUserPost from "@/lib/getUserPost"
import { Suspense } from "react"
import UserPosts from "./components/UserPosts"


import { notFound } from 'next/navigation'



type Params = {
    params:
    {
        userId:string
    }
}
export async function generateMetadata({params: {userId}
}:Params): Promise<Metadata>
{
    const userData: User =await getUser(userId)
    const user: User = await userData;
    // if(!user.name)
    // {
    //     return{
    //         title:"User not found"
    //     }
    // }
    return{
        title: user.name,
        description: `This is the page of ${user.name}`
    };
}


export default async function Userpage({params:{userId}}:Params) {
    const userData: User = await getUser(userId)
   // const UserPostData :Post[] = await getUserPost(userId)
   const userPosts:Post[] = await getUserPost(userId);
    // const [user,userPosts] = await Promise.all([userData,UserPostData])
  const userPostsData = await getUser(userId);
    return (
   <>
   <h2>{userData.name}</h2>
   <br/>
   <Suspense fallback={<h2>Loading.....</h2>}>
   {/* <userPosts posts = {userPosts}/> */}
   <UserPosts promise = {userPostsData}/>
   </Suspense>
  
   </>
  )
}
export async function generateStaticParams() {
    const userData:Promise< User[]> = getAllUser()
    const users = await userData
    return users.map(user=>(
        {userId:user.id.toString()
        }))
    
}