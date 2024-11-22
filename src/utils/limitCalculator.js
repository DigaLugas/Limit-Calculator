import { derivative, evaluate, format } from 'mathjs';


export const calculateLimit = (expr, variable, approach, dir) => {
  const steps = [];
  let result = '';

  const addStep = (description, value) => {
    steps.push({ description, value });
  };


  expr = expr.toLowerCase().replace(/\s+/g, '');

  try {
    if (expr.includes('/')) {
      const [numerator, denominator] = expr.split('/');

      const numValue = evaluateExpr(numerator, approach, variable);
      const denValue = evaluateExpr(denominator, approach, variable);

      if (numValue === 0 && denValue === 0) {
        addStep('Forma indeterminada 0/0 detectada', '0/0');
        addStep('Aplicando regra de L’Hôpital', '');

        const numDeriv = getDerivative(numerator, variable);
        const denDeriv = getDerivative(denominator, variable);

        addStep('Derivada do numerador', numDeriv);
        addStep('Derivada do denominador', denDeriv);

        const newExpr = `${numDeriv} / ${denDeriv}`;
        addStep('Nova expressão após L’Hôpital', newExpr);

        result = evaluateExpr(newExpr, approach, variable);
      } else if (numValue === Infinity && denValue === Infinity) {
        addStep('Forma indeterminada ∞/∞ detectada', '∞/∞');
        result = 'Aplicar L’Hôpital (simplificação necessária)';
      } else {
        result = numValue / denValue;
      }
    } else if (expr.includes(variable)) {
      result = evaluateExpr(expr, approach, variable);
      addStep('Substituição direta', `${expr} = ${result}`);
    } else {
      result = parseFloat(expr);
      addStep('Valor constante', result);
    }
  } catch (err) {
    throw new Error('Erro ao calcular limite: ' + err.message);
  }

  return { result: formatResult(result), steps };
};

const evaluateExpr = (expr, value, variable) => {
  try {
    const substituted = expr.replace(new RegExp(variable, 'g'), `(${value})`);
    return evaluate(substituted);
  } catch {
    throw new Error(`Expressão inválida: "${expr}"`);
  }
};

const getDerivative = (expr, variable) => {
  try {
    return format(derivative(expr, variable), { precision: 4 });
  } catch {
    throw new Error(`Erro ao derivar a expressão: "${expr}"`);
  }
};

const formatResult = (value) => {
  if (typeof value === 'number') {
    return value.toFixed(4).replace(/\.?0+$/, '');
  }
  return value.toString();
};
