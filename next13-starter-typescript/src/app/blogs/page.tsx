'use client'    

import AppTable from '@/components/app.table';
import useSWR from 'swr';


const BlogsPage = () => {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());

    const { data, error, isLoading } = useSWR(
      "http://localhost:8000/blogs",
      fetcher,
      {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
      }
    );
    console.log("check res ---------------",data);
  
    if (isLoading) {
      return <div>Loading...</div>
    }

    return (
        <div>
            <div className='mt-3'>
                <AppTable
                    blogs={data}
                />
            </div>
        </div>
    )
}

export default BlogsPage;
