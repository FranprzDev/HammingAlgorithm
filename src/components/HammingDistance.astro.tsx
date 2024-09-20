import { useState } from 'react';

export default function HammingDistance() {
  const [currentStep, setCurrentStep] = useState(0);
  const string1 = "10111011"
  const string2 = "10010011"
  const maxSteps = string1.length;

  const calculateHammingDistance = () => {
    let distance = 0;
    for (let i = 0; i < string1.length; i++) {
      if (string1[i] !== string2[i]) {
        distance++;
      }
    }
    return distance;
  };

  const hammingDistance = calculateHammingDistance();

  const handleNext = () => {
    if (currentStep < maxSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-white">Cálculo de la Distancia de Hamming</h2>
      <div className="flex justify-center space-x-4 mb-6">
        <div className="text-xl font-mono">
          {string1.split('').map((char, index) => (
            <span
              key={index}
              className={`inline-block w-8 h-8 text-center leading-8 border ${
                index < currentStep
                  ? char !== string2[index]
                    ? 'bg-red-500 text-white'
                    : 'bg-green-500 text-white'
                  : 'bg-gray-700 text-white'
              }`}
            >
              {char}
            </span>
          ))}
        </div>
        <div className="text-xl font-mono">
          {string2.split('').map((char, index) => (
            <span
              key={index}
              className={`inline-block w-8 h-8 text-center leading-8 border ${
                index < currentStep
                  ? char !== string1[index]
                    ? 'bg-red-500 text-white'
                    : 'bg-green-500 text-white'
                  : 'bg-gray-700 text-white'
              }`}
            >
              {char}
            </span>
          ))}
        </div>
      </div>
      <div className="text-center mb-4">
        <p className="text-lg text-white">
          Paso {currentStep} de {maxSteps}
        </p>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={handlePrev}
          disabled={currentStep === 0}
          className="px-4 py-2 bg-[rgb(var(--accent))] text-white rounded disabled:bg-gray-700 disabled:text-gray-500 transition-all duration-300 ease-in-out"
        >
          Anterior
        </button>
        <button
          onClick={handleNext}
          disabled={currentStep === maxSteps}
          className="px-4 py-2 bg-[rgb(var(--accent))] text-white rounded disabled:bg-gray-700 disabled:text-gray-500 transition-all duration-300 ease-in-out"
        >
          Siguiente
        </button>
      </div>
      {currentStep === maxSteps && (
        <div className="mt-6 text-center">
          <p className="text-2xl font-bold text-white">
            Distancia de Hamming: {hammingDistance}
          </p>
        </div>
      )}
    </div>
  );
}