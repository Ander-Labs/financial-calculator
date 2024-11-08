import React, { useState } from "react";

export default function InterestCalculator() {
  const [capital, setCapital] = useState<string>("");
  const [interesAnual, setInteresAnual] = useState<string>("");
  const [tiempo, setTiempo] = useState<string>("");
  const [resultado, setResultado] = useState<string | number>("");
  const [resultadoAcumulado, setResultadoAcumulado] = useState<string | number>(
    ""
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const capitalNum = parseFloat(capital);
    const interesAnualNum = parseFloat(interesAnual) / 100;
    const tiempoNum = parseFloat(tiempo);

    if (capitalNum > 0 && interesAnualNum > 0 && tiempoNum > 0) {
      const interesSimple = capitalNum * interesAnualNum * tiempoNum;
      const totalInteresSimple = capitalNum + interesSimple;
      setResultado(interesSimple.toFixed(2));
      setResultadoAcumulado(totalInteresSimple.toFixed(2));
    } else {
      setResultado("Por favor, ingresa valores válidos en todos los campos.");
      setResultadoAcumulado("");
    }
  };

  return (
    <>
      <div className="w-5/6 md:w-1/2 px-2 py-2 flex flex-col justify-center items-center border rounded-lg shadow-lg bg-white">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-4"
        >
          <label>
            Capital
            <input
              type="number"
              value={capital}
              onChange={(e) => setCapital(e.target.value)}
              className="border pl-2 border-neutral-600 rounded-lg"
              required
            />
          </label>
          <label>
            Tasa de interés anual (%)
            <input
              type="number"
              value={interesAnual}
              onChange={(e) => setInteresAnual(e.target.value)}
              className="border pl-2 border-neutral-600 rounded-lg"
              required
            />
          </label>
          <label>
            Tiempo en años
            <input
              type="number"
              value={tiempo}
              onChange={(e) => setTiempo(e.target.value)}
              className="border pl-2 border-neutral-600 rounded-lg"
              required
            />
          </label>
          <button
            type="submit"
            className="bg-red-600 rounded-md text-white w-32 h-10"
          >
            Calcular
          </button>
          <div>
            <p>Interés simple: {resultado}</p>
            <p>Total: {resultadoAcumulado}</p>
          </div>
        </form>
      </div>
    </>
  );
}
