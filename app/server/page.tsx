import { cookies } from "next/headers";

export default async function Home() {
    const cookieStore = await cookies();
    const dummyCookie = cookieStore.get('dummyCookie');

    return (
        <div>
            <h1>Cookie Demo</h1>
            <div style={{ marginTop: '20px' }}>
                <h2>Cookie from Server Component:</h2>
                <pre>{JSON.stringify(dummyCookie, null, 2)}</pre>
            </div>
        </div>
    );
}
