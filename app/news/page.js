
import  Link from 'next/link'
import Image from 'next/image'
import { DUMMY_NEWS } from '../../dummy-news'



export default function News(){

    const news = DUMMY_NEWS.map(newsItem => (
        <li key={newsItem.id}>
            <Link href={`/news/${newsItem.slug}`}>
                <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} width={200} height={200} />
                <span>{newsItem.title}</span>
            </Link>
        </li>
    ))




    return (
        <div>
            <h1>News Page</h1>
            <ul className='news-list'>
                {news}
            </ul>
        </div>
    )
}