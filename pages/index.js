import Link from "next/link"
import IndexPageImpression from "../components/IndexPageImpression"
import IndexPageBanner from "../components/IndexPageBanner"
import IndexPageBoats from "../components/IndexPageBoats"
import IndexPageYachts from "../components/IndexPageYachts"


const Home = () => {
  return (
    <> 
      <main>
        <IndexPageBanner />
        <IndexPageImpression />
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