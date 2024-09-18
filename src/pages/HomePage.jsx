import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getAllMenuItems } from '../lib/loders'

const HomePage = () => {
    const { data: posts, error, isLoading } = useQuery({
        queryKey: ['menuItems'],
        queryFn: getAllMenuItems,
        refetchInterval: 60 * 60 * 1000, // Refetch every hour
    })

    // console.log(data)
    return (
        <div>
            <h1 className='text-center text-4xl font-bold'>All posts</h1>
            <section className='p-5'>
                {
                    posts?.data?.map((post) => {
                        return (
                            <article className='bg-slate-800/90 my-3 rounded-md  p-5' key={post.id}>
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                            </article>
                        )
                    })
                }
            </section>
            {isLoading && <p>Loading Data⏳...</p>}
        </div>
    )
}

export default HomePage