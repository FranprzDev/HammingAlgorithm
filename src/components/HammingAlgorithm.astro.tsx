import { Info, WifiOff } from 'lucide-astro'

type IBalloon = {
  text?: string
  icon?: string
}

export default function HammingAlgorithm() {
  return (
    <div className="mt-12 space-y-12">
      <section>
        <article className='text-center py-4'>
          <a className="text-3xl font-semibold mb-6 text-center text-indigo-300" href="/funcionamiento/transmisor">Transmisor</a>
        </article>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <Balloon text="Datos [T(x)]" />
          <Arrow />
          <Balloon text="Hamming" />
          <Arrow />
          <Balloon text="Datos para transmitir [T'(x)]" />
        </div> 
      </section>

      <section>
      <article className='text-center py-4'>
          <a className="text-3xl font-semibold mb-6 text-center text-indigo-300" href="/funcionamiento/receptor">Receptor</a>
        </article>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <Balloon text="Datos Recibidos [T'(x)]" />
          <Arrow />
          <Balloon text="Hamming" />
          <Arrow />
          <Balloon text="Dato Original [T(x)]" />
        </div>
      </section>
    </div>
  );
}

function Balloon({ text, icon }: IBalloon): JSX.Element {
  return (
    <div className="p-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center min-w-[150px] min-h-[150px]">
      {
        text &&
          <p className="text-center font-semibold">{text}</p>
      }
    </div>
  );
}

function Arrow() {
  return (
    <div className="text-4xl text-gray-400 transform rotate-90 md:rotate-0">→</div>
  );
}