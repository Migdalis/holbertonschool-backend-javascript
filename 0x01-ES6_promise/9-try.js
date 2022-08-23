export default function guardrail(mathFunction) {
  const queue = [];
  let rspn;

  try {
    rspn = mathFunction();
  } catch (err) {
    rspn = err.toString();
  }
  queue.push(rspn);
  queue.push('Guardrail was processed');
  return queue;
}
