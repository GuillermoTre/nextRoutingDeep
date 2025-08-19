import Image from "next/image";
import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";

export default function NewsDetailPage({params}){

    const {slug} = params;

    const newsItem = DUMMY_NEWS.find((news) => news.slug === slug);

    if(!newsItem){
        notFound();
    }

    return (
        <article className="news-article">
            <header>
                <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} width={200} height={200} />
                <h1>{newsItem.title}</h1>
                <time>{newsItem.date}</time>
            </header>
            <p>{newsItem.content}</p>
        </article>
    )
}