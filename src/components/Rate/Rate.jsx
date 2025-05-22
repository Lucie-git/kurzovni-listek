import { useEffect, useState } from 'react';
import './style.css';

//2. Upravte komponentu `Rate` tak, aby si z API stáhla správný kurz pro měnu, kterou dostane v prop `from`. Zařiďte, aby se správná data stáhla kdykoliv, když se změní hodnota uvnitř *prop* `from`. K tomu budete potřebovat `useEffect` se závislostí na *prop* `from`.

export const Rate = ({ from }) => {
  const [rate, setRate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.frankfurter.app/latest?from=${from}&to=CZK`);
      const json = await response.json();
      const exRate = json.rates.CZK;
      setRate(exRate);
    };
    fetchData();
  }),
    [from];

  return (
    <div className="rate">
      <div className="rate__currency">1 {from}</div>
      <div>=</div>
      <div className="rate__value">{rate} CZK</div>
    </div>
  );
};
