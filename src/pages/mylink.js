import Link from 'next/link'

const people =[
    {v:'car', name:'Sayeed'},
    {v:'boat', name:'Atique'},
    {v:'Plane', name:'Kanon'},

]

export default function Mylink() {
    return <div>
        <Link as="/car/porosh" href="/[vehicle]/[person]">
            <a>Navigate to static link</a>
        </Link>
        {people.map( (e, i) => (
            <div key={i}>
                <Link as={`/${e.v}/${e.name}`} href="/[vehicle]/[person]">
                    <a>Navigate to {e.name} {e.v} link</a>
                </Link>
            </div>
        ))}
    </div>
}