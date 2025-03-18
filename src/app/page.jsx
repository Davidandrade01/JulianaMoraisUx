import Cases from "@/components/Cases/cases"
import HeroBanner from "@/components/HeroBanner/HeroBanner"
import Navbar from "@/components/Navbar/navbar"
import Footer from "@/components/Footer/Footer"
import CvBtn from "@/components/CV/CvBtn"

export default function Home(){

  return(

    <>
    <Navbar/>
    <HeroBanner/>
    <Cases/>

    <div className=" w-100 d-flex justify-content-center">
      <CvBtn/>
    </div>

    <Footer/>
    
    
    </>
  )

}