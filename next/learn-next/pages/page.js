import { withRouter } from 'next/router'
const Page = withRouter(props => (
  <h1>{props.router.query.name}</h1>
))
export default Page