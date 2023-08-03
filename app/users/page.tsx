import type { Metadata } from "next";
import getAllUser from "@/lib/getAllUser";
import Link from "next/link";

export const metadat: Metadata =
{
    title:'Users',
}
export default async function UserPage()
{
    const userData: User[] =  await getAllUser()
    const users = userData
    console.log('hello')
    const content = (
        <section>
            <h2>
                <Link href="/">Back to Home 
            </Link>

            </h2>
            <br/>
            {
                users.map(user =>
                    {
                        return(
                            <>
                            <p key= {user.id}>
                                <Link href={`/users/${user.id}`}>{user.name}</Link>
                            </p>
                            <br/>
                            </>
                        )
                    })
            }
        </section>
    )
    return content
    
}