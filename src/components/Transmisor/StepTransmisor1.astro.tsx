import React, { useState } from 'react'
import { quantityParityBit } from '../../helpers/transmisor/functions';

function StepTransmisor1({ secuence, setSecuence }: { secuence: string, setSecuence: Function }) {
  const [parityBits, setParityBits] = useState<number>(0);

  return (
    <>
      <p className="text-gray-300 mb-3">En el primer caso calcularemos el valor de
        la cantidad de bits de paridad que necesitaremos utilizar para transformar nuestra cadena.
        <br />
        Con la siguiente formula:
        <strong className='text-indigo-300'>{" 2^p >= n + p + 1"}</strong>
        <br />Siendo:
        <ul>
          <li>• p {">"}  Cantidad de bits de paridad.</li>
          <li>• n {">"}  Cantidad de bits de la secuencia.</li>
        </ul>
      </p>
      <section className='flex gap-3 items-center justify-center'>
        <p className='text-indigo-300'>Cálculadora de bits de paridad:</p>
        <input type="number" pattern="[01]*" className="w-1/2 p-2 rounded-lg bg-gray-700 text-gray-300" placeholder="Secuencia completa" onInput={(e: React.FormEvent<Element>) => {
          const target = e.target as HTMLInputElement;
          const value = target.value;
          if (!/^[01]*$/.test(value)) {
            target.value = value.slice(0, -1);
          }
        }}
          onChange={(e) => setSecuence(e.target.value)}
        />
        <button className="px-4 py-2 bg-[rgb(var(--accent))] text-white rounded" onClick={() => { setParityBits(quantityParityBit(secuence)) }}>Calcular</button>
      </section>
      <section className='flex items-center justify-center mt-2'>
        {
          parityBits != 0 && (
            <strong className='text-indigo-300'>Necesitarás {parityBits} bits de paridad para poder transmitir correctamente la secuencia.</strong>
          )
        }
      </section>
    </>
  )
}

export default StepTransmisor1