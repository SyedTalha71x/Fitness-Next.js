import { useRouter } from 'next/router'

export default function Slug(allblogs) {
    const router = useRouter()


    return <div className="text-white">
        <main className="mt-4">
            <h1>{allblogs && allblogs.title}</h1>
            <hr />
            <p>
                {allblogs && allblogs.description}
            </p>
        </main>
    </div>;
}

export async function getStaticProps(context) {

    const { slug } = context.params;
    let myblog = await fs.promises.readFile(`jsondata/${slug}.json`, "utf-8");
    return {
        props: {
            myblog: JSON.parse(myblog)
        },
    }
}

export async function getStaticPaths() {

    return {
        paths: [
            { params: { slug: "blog1" } },
            { params: { slug: "blog2" } },
        ]
        , fallback: false
    }
}
