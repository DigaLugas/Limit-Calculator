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
    return (
      <div className="grid gap-4">
        <div className="grid gap-2">
          <label className="text-sm font-medium">Expressão</label>
          <input
            type="text"
            value={expression}
            onChange={(e) => setExpression(e.target.value)}
            placeholder="Ex: x^2 + 2x + 1"
            className="p-2 border rounded"
          />
        </div>
  
        <div className="grid grid-cols-3 gap-4">
          <div className="grid gap-2">
            <label className="text-sm font-medium">Variável</label>
            <input
              type="text"
              value={variable}
              onChange={(e) => setVariable(e.target.value)}
              className="p-2 border rounded"
            />
          </div>
  
          <div className="grid gap-2">
            <label className="text-sm font-medium">Tendendo a</label>
            <input
              type="text"
              value={approachingValue}
              onChange={(e) => setApproachingValue(e.target.value)}
              placeholder="Ex: 0, 1, -1, etc"
              className="p-2 border rounded"
            />
          </div>
  
          <div className="grid gap-2">
            <label className="text-sm font-medium">Direção</label>
            <select
              value={direction}
              onChange={(e) => setDirection(e.target.value)}
              className="p-2 border rounded"
            >
              <option value="both">Ambos os lados</option>
              <option value="left">Pela esquerda</option>
              <option value="right">Pela direita</option>
            </select>
          </div>
        </div>
  
        <button
          onClick={onCalculate}
          className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Calcular Limite
        </button>
      </div>
    );
  };
  