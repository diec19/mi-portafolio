import Image from 'next/image'
import Header from './components/page/Header'
import Inicio from './components/page/Inicio'
import SobreMi from './components/page/SobreMi'
import Habilidades from './components/page/Habilidades'

export default function Home() {




  return (
    <>
      <header>
        <Header />
      </header>

      <main classNameName="flex min-h-screen flex-col items-center justify-between p-24">

        <section>
          <Inicio />

          
        </section>


        <section>
          <SobreMi/>

         
        </section>
        <section>
         < Habilidades/>

          <hr />
        </section>
        <section>
          Proyectos

          <hr />
        </section>
        <section>
          contactame

          <hr />
        </section>

      </main>
    </>
  )
}
