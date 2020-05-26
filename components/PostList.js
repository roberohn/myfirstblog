import Link from 'next/link'

export default function PostList({ posts }) {
    if (posts === 'undefined') return null
    
    return (
        <div>
            {!posts && <div>No Posts!</div>}
            <ul class="list-group list-group-flush">
                {posts &&
                    posts.map((post ) => {
                        return (
                            <li class="list-group-item" key={post.slug}>
                                <Link href={{ pathname: `/post/${post.slug}` }}>
                                    <a>{post.frontmatter.title} | released {post.frontmatter.date}</a>
                                </Link>
                            </li>
                        )
                    })}
            </ul>
        </div>
    )
}