import Sidebar from "./Sidebar"
import GoalsCard from "./GoalsCard"
import HorizontalCarousel from "./HorizontalCarousel"

const Home = () => {
  return (
    <div className="w-screen h-screen bg-slate-200 overflow-hidden">
       <div className={`sm:flex-1 sm:flex h-full`}>
        <Sidebar/>  
      <div className={"flex flex-col h-screen overflow-scroll "}>
        <HorizontalCarousel/>
        <GoalsCard/>
        </div>
        </div> 
    </div>
  )
}

export default Home