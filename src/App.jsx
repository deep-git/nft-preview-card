import React, {useState} from 'react'
import './App.css'

function App() {

  const [hoverImage, setHoverImage] = useState(false);

  return (
    <div className="bg-darkblue_main min-h-screen font-outfit flex justify-center items-center">
      <main className="w-[300px] rounded-xl bg-darkblue_card p-5">
        <section className="border-b-[1px] border-b-darkblue_line">
          <div className="relative rounded-lg overflow-hidden" onMouseEnter={() => setHoverImage(true)} onMouseLeave={() => setHoverImage(false)}>
            <img src="image-equilibrium.jpg" alt="Image equilibrium"/>

            <div className={`${hoverImage === true ? 'flex' : 'hidden'} absolute bg-cyan/[0.5] cursor-pointer top-0 w-full h-full flex justify-center items-center`}>
              <img src="icon-view.svg" alt="View upon hover" />
            </div>
          </div>
          
          <h1 className="text-xl text-default_white font-semibold mt-6 cursor-pointer hover:text-cyan">Equilibrium #3429</h1>
          <p className="mt-5 text-primary_softblue">Our Equilibrium collection promotes balance and calm.</p>

          <div className="flex mb-5 mt-6 justify-between">
            <div className="flex items-center">
              <img src="icon-ethereum.svg" alt="Ethereum" className="text-sm h-[16px]"/>
              <p className="ml-2 text-cyan text-sm">0.041 ETH</p>
            </div>

            <div className="flex items-center">
              <img src="icon-clock.svg" alt="Clock" className="text-sm h-[16px]"/>
              <p className="ml-2 text-primary_softblue text-sm">3 days left</p>
            </div>
          </div>
        </section>

        <aside className="flex mb-2 mt-4 items-center">
            <img src="image-avatar.png" alt="Profile avatar" className="w-7 h-7 rounded-full border-default_white border-[1px]"/>
            <p className="ml-4 text-sm text-primary_softblue">Creation of <span className="text-default_white cursor-pointer hover:text-cyan">Jules Wyvern</span></p>
        </aside>
      </main>
    </div>
  )
}

export default App
