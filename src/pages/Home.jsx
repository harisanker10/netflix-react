import Main from "../compnents/Main";
import Row from "../compnents/Row";

function Home() {
  return (
    <>
    <Main />
    <Row title="Upcoming" category="upcoming" />
    <Row title="Top Rated" category="topRated" />
    <Row title="Trending" category="trending" />
    <Row title="Popular" category="popular" />
    <Row title="Horror" category="horror" />
    </>
  )
}

export default Home
