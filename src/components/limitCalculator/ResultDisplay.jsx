import { ArrowRight, Calculator, Info } from 'lucide-react';

export const ResultDisplay = ({ result, steps }) => {
  return (
    <div className="space-y-4 p-4 bg-gray-50 rounded-lg shadow-lg border border-gray-200">
      <div className="flex items-center gap-2 text-lg font-semibold text-gray-800">
        <Calculator className="h-6 w-6 text-blue-500" />
        <span>Resultado:</span>
        <span className="text-blue-600">{result || 'N/A'}</span>
      </div>

      {steps.length > 0 ? (
        <div className="space-y-3">
          <h3 className="font-semibold flex items-center gap-2 text-gray-700">
            <Info className="h-5 w-5 text-green-500" />
            Passos da Resolução:
          </h3>
          <div className="space-y-2 pl-2 border-l-2 border-green-300">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-2 text-sm text-gray-600">
                <ArrowRight className="h-4 w-4 text-gray-400" />
                <div>
                  <p className="font-medium">{step.description}:</p>
                  <p className="font-mono text-gray-800">{step.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-sm text-gray-500 italic">Nenhum passo de resolução disponível.</p>
      )}
    </div>
  );
};
