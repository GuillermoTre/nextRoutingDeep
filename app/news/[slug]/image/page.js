import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";
export default function ImagePage({params}){

    const newItemSlug = params.slug;

    const newsItem = DUMMY_NEWS.find((news) => news.slug === newItemSlug);

    if(!newsItem){
        notFound();
    }

    return (
        <div>
            <img src={`/images/news/${newsItem.image}`} alt={newItemSlug.title} />
        </div>
    )
}