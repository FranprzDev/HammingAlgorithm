import React, { useState } from 'react';
import { quantityParityBit } from '../helpers/transmisor/functions'
import StepTransmisor1 from './Transmisor/StepTransmisor1.astro';
import StepTransmisor2 from './Transmisor/StepTransmisor2.astro';
import StepTransmisor3 from './Transmisor/StepTransmisor3.astro';

interface StepProps {
  number: number;
  isActive: boolean;
  isCompleted: boolean;
}

const Step: React.FC<StepProps> = ({ number, isActive, isCompleted }) => {
  return (
    <div
      className={`
        w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold
        ${isActive ? 'bg-[rgb(var(--accent))] text-white' :
          isCompleted ? 'bg-[rgb(var(--accent-light))] text-[rgb(var(--accent-dark))]' : 'bg-gray-700 text-gray-400'}
        transition-all duration-300 ease-in-out
      `}
    >
      {number}
    </div>
  );
};

const Stepper: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [secuence, setSecuence] = useState<string>("")

  const steps = [1, 2, 3, 4, 5];

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        {steps.map((step) => (
          <React.Fragment key={step}>
            <Step
              number={step}
              isActive={step === currentStep}
              isCompleted={step < currentStep}
            />
            {step < 5 && (
              <div className={`flex-1 h-1 ${step < currentStep ? 'bg-[rgb(var(--accent-light))]' : 'bg-gray-700'}`}></div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-[rgba(var(--accent-light),0.2)]">
        <h2 className="text-2xl font-bold mb-4 text-[rgb(var(--accent-light))]">Paso {currentStep}</h2>
        {
          currentStep == 1 && (
            <StepTransmisor1 secuence={secuence} setSecuence={setSecuence}/>
          )
        }
        {
          currentStep == 2 && (
            <StepTransmisor2 secuence={secuence} setSecuence={setSecuence}/>
          )
        }
        {
          currentStep == 3 && (
            <StepTransmisor3 secuence={secuence} setSecuence={setSecuence}/>
          )
        }
      </div>
      <div className="flex justify-between mt-8">
        <button
          onClick={handlePrev}
          disabled={currentStep === 1}
          className="px-4 py-2 bg-[rgb(var(--accent))] text-white rounded disabled:bg-gray-700 disabled:text-gray-500 transition-all duration-300 ease-in-out"
        >
          Anterior
        </button>
        <button
          onClick={handleNext}
          disabled={currentStep === 5}
          className="px-4 py-2 bg-[rgb(var(--accent))] text-white rounded disabled:bg-gray-700 disabled:text-gray-500 transition-all duration-300 ease-in-out"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Stepper;