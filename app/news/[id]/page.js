export default function NewsDetailPage({params}){

    const {id} = params;

    return (
        <div>
            <h1>News Detail Page</h1>
            <h1>News Id: {id}</h1>
        </div>
    )
}