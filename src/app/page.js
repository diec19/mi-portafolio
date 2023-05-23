import Image from 'next/image'
import Header from './components/Header'
import Inicio from './components/Inicio'

export default function Home() {




  return (
    <>
      <header>
        <Header />
      </header>

      <main classNameName="flex min-h-screen flex-col items-center justify-between p-24">

        <section>
          <Inicio />

          <hr />
        </section>

        <section>
          Sobre mi

          <hr />
        </section>
        <section>
          Habilidades

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
