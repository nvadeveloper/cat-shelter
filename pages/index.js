import IndexPageImpression from "../components/IndexPageImpression"
import IndexPageBanner from "../components/IndexPageBanner"
import IndexPageBoats from "../components/IndexPageBoats"
import IndexPageYachts from "../components/IndexPageYachts"
import Image from "next/image"


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