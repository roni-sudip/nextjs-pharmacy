import { useRouter } from 'next/router'

export default function Person() {
    const router = useRouter();
    console.log(router.query);
    return <h1>Person Page</h1>
}