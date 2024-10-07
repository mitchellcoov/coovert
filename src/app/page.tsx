import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coovert",
  description: "Home page for coovert.ca",
};


export default function Home() {

  return (
    <div>
      <div className="grid grid-rows-[450px_minmax(50px,_100px)_30px_minmax(50px,_100px)] justify-center justify-items-center items-center lg:flex lg:flex-row lg:justify-between  bg-img">
        
        <a className="row-start-2" href="http://mable.coovert.gay">
          <h1 className="hover:neonText text-5xl lg:text-7xl lg:pl-40 " >mable</h1>
        </a>
        <h1 className="text-5xl lg:text-7xl self-end mb-40" >choose your coovert</h1>
        <a className="row-start-4" href="http://mitchell.coovert.ca">
          <h1 className="hover:neonText text-5xl lg:text-7xl lg:pr-12" >mitchell</h1>
        </a>
      </div>
    </div>


  );
}
