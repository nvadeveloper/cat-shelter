import IndexPageImpression from "../components/IndexPageImpression"
import IndexPageBanner from "../components/IndexPageBanner"
import IndexPageBoats from "../components/IndexPageBoats"
import IndexPageYachts from "../components/IndexPageYachts"
import IndexPageFork from "../components/IndexPageFork"


const Home = () => {

  return (
    <>
      <IndexPageBanner />
      <IndexPageImpression />
      {/* <IndexPageBoats />
      <IndexPageYachts /> */}
      <IndexPageFork />
    </>
  )
}

export default Home