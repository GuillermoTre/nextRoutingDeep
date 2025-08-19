
import  Link from 'next/link'

export default function News(){
    return (
        <div>
            <h1>News Page</h1>
            <ul>
                <li><Link href='/news/first'>First News Item</Link></li>
                <li><Link href='/news/second'>Second News Item</Link></li>
                <li><Link href='/news/third'>Third News Item</Link></li>
            </ul>
        </div>
    )
}