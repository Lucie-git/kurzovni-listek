import { useEffect, useState } from 'react';
import './style.css';

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
