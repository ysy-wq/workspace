import Link from 'next/link'

const Index = () => (
  <div>
    <Link href='/about?name=lisi'>
      <a>About Page</a>
    </Link>
    <br />
    <Link href='/profile'>
      <a>Profile Page</a>
    </Link>
    <br />
    <Link href='/page?name=zhangsan'>
      <a>withRouter Page</a>
    </Link>
    <p>Hello Next.js</p>
  </div>
)

export default Index