import IndexPageImpression from "../components/IndexPageImpression"
import IndexPageBanner from "../components/IndexPageBanner"
import IndexPageBoats from "../components/IndexPageBoats"
import IndexPageYachts from "../components/IndexPageYachts"


const Home = () => {

  return (
    <>
      <IndexPageBanner />
      <IndexPageImpression />
      <IndexPageBoats />
      <IndexPageYachts />
    </>
  )
}

export default Home