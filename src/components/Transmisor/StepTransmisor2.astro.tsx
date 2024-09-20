import React, { useState } from 'react'

function StepTransmisor2({ secuence, setSecuence }: { secuence: string, setSecuence: Function }) {

  return (
    <>
      <p className="text-gray-300 mb-3">Una vez que ya tenemos la cantidad de bits de paridad que debemos agregar a
        nuestra secuencia, procederemos a saber donde agregarlos.
        <br />
        Las posiciones donde los agregamos deben ser:
        <strong className='text-indigo-300'>{" 2^p ; p >= 0"}</strong>
      </p>
    </>
  )
}

export default StepTransmisor2