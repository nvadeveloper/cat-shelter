import Link from "next/link"
import Impression from "../components/Impression"
import IndexPageBanner from "../components/IndexPageBanner"
import IndexPageBoats from "../components/IndexPageBoats"
import IndexPageYachts from "../components/IndexPageYachts"


const Home = () => {
  return (
    <> 
      <main>
        <IndexPageBanner />
        <Impression />
        <IndexPageBoats />
        <IndexPageYachts />
        

        
      </main>
      <div className="flex">
        {/* <CardWithCorusel />
        <CardWithCorusel />
        <CardWithCorusel /> */}
      </div>
      
    </>
  )
}

export default Home