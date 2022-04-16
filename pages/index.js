import Link from "next/link"
import IndexPageImpression from "../components/IndexPageImpression"
import IndexPageBanner from "../components/IndexPageBanner"
import IndexPageBoats from "../components/IndexPageBoats"
import IndexPageYachts from "../components/IndexPageYachts"
import Footer from "../components/Footer"


const Home = () => {
  return (
    <> 
      <main>
        <IndexPageBanner />
        <IndexPageImpression />
        <IndexPageBoats />
        <IndexPageYachts /> 
      </main>
      <Footer/>
      
    </>
  )
}

export default Home