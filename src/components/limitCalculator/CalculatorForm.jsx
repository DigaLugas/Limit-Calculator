import React from 'react';
import { AlertCircle } from 'lucide-react';

export const CalculatorForm = ({
  expression,
  setExpression,
  variable,
  setVariable,
  approachingValue,
  setApproachingValue,
  direction,
  setDirection,
  onCalculate
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate();
  };

  const isValid = expression && variable && approachingValue;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Expressão */}
      <div className="space-y-2">
        <label htmlFor="expression" className="block text-sm font-medium text-gray-700">
          Expressão Matemática
        </label>
        <div className="relative">
          <input
            id="expression"
            type="text"
            value={expression}
            onChange={(e) => setExpression(e.target.value)}
            placeholder="Ex: x^2 + 2x + 1"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
          {!expression && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              <AlertCircle size={20} />
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Variável */}
        <div className="space-y-2">
          <label htmlFor="variable" className="block text-sm font-medium text-gray-700">
            Variável
          </label>
          <input
            id="variable"
            type="text"
            value={variable}
            onChange={(e) => setVariable(e.target.value)}
            placeholder="Ex: x"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
        </div>

        {/* Valor de Aproximação */}
        <div className="space-y-2">
          <label htmlFor="approaching" className="block text-sm font-medium text-gray-700">
            Tendendo a
          </label>
          <input
            id="approaching"
            type="text"
            value={approachingValue}
            onChange={(e) => setApproachingValue(e.target.value)}
            placeholder="Ex: 0, 1, -1, ∞"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
        </div>

        {/* Direção */}
        <div className="space-y-2">
          <label htmlFor="direction" className="block text-sm font-medium text-gray-700">
            Direção
          </label>
          <select
            id="direction"
            value={direction}
            onChange={(e) => setDirection(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white transition-colors"
          >
            <option value="both">Ambos os lados</option>
            <option value="left">Pela esquerda</option>
            <option value="right">Pela direita</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={!isValid}
        className={`w-full px-6 py-3 rounded-lg font-medium transition-all duration-200 
          ${isValid 
            ? 'bg-blue-600 hover:bg-blue-700 text-white' 
            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
      >
        Calcular Limite
      </button>
    </form>
  );
};