import { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '../../ui/alert';
import { calculateLimit } from '../../utils/limitCalculator';
import { Instructions } from './Instructions';
import { ResultDisplay } from './ResultDisplay';
import { CalculatorForm } from './CalculatorForm';

const LimitCalculator = () => {
  const [expression, setExpression] = useState('');
  const [variable, setVariable] = useState('x');
  const [approachingValue, setApproachingValue] = useState('');
  const [direction, setDirection] = useState('both');
  const [result, setResult] = useState('');
  const [steps, setSteps] = useState([]);
  const [error, setError] = useState('');

  const evaluateLimit = () => {
    setError('');
    setResult('');
    setSteps([]);

    try {
      if (!expression || !approachingValue) {
        throw new Error('Por favor, preencha todos os campos.');
      }

      const { result: limitResult, steps: solutionSteps } = calculateLimit(
        expression,
        variable,
        parseFloat(approachingValue),
        direction
      );

      setResult(limitResult);
      setSteps(solutionSteps);
    } catch (err) {
      setError(err.message || 'Erro inesperado');
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-center">Calculadora de Limites</h1>
        <p className="text-center text-gray-600">
          Calcule limites de funções com passos detalhados
        </p>
      </div>

      <CalculatorForm
        expression={expression}
        setExpression={setExpression}
        variable={variable}
        setVariable={setVariable}
        approachingValue={approachingValue}
        setApproachingValue={setApproachingValue}
        direction={direction}
        setDirection={setDirection}
        onCalculate={evaluateLimit}
      />

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Erro</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {result && <ResultDisplay result={result} steps={steps} />}

      <Instructions />
    </div>
  );
};

export default LimitCalculator;
