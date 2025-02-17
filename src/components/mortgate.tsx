import { useState } from "react";

export default function Mortgage() {
  const [monthlyPayment, setMonthlyPayment] = useState('');
  const [totalPayment, setTotalPayment] = useState('');
  const [totalInterest, setTotalInterest] = useState('');

  function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const loanAmount = parseFloat(formData.get("loan")?.toString() || "0")
    const monthlyIntRate = parseFloat(formData.get("rate")?.toString() || "0") / 100 / 12
    const loanTermInMon = parseFloat(formData.get("term")?.toString() || "0") * 12
    // Calculator
    const monthAmount = (loanAmount * monthlyIntRate) / (1 -
      1 /
      Math.pow(
        1 + monthlyIntRate,
        loanTermInMon,
      ));
    const totalPayment = monthAmount * loanTermInMon
    const currencyFormatter = new Intl.NumberFormat(
      'en-US',
      {
        style: 'currency',
        currency: 'USD',
      },
    );
    setMonthlyPayment(currencyFormatter.format(monthAmount))
    setTotalPayment(currencyFormatter.format(totalPayment))
    setTotalInterest(currencyFormatter.format(totalPayment - loanAmount))
  }
  return (
    <div>
      <form
        onSubmit={submitForm}
        action="https://www.greatfrontend.com/api/questions/contact-form"
        method="post"
      >
        <div className="text-blue-400">Mortgage Calculator</div>
        <div className="flex gap-2">
          <label htmlFor="loan">Loan Amount:</label>
          <input type="number" name="loan" id="loan" min={1} required />
        </div>
        <div className="flex gap-2">
          <label htmlFor="term">Loan Term(years):</label>
          <input type="number" name="term" id="term" defaultValue={30} min={1} required />
        </div>
        <div className="flex gap-2">
          <label htmlFor="rate">Interest Rate(%):</label>
          <input type="number" name="rate" defaultValue={3} min={0.01} step={0.01} required />
        </div>
        <button>Calculate</button>
      </form>
      <hr />
      <div className="flex flex-col mt-5">
        <div>
          Monthly Payment Amount:{' '}
          <strong>{monthlyPayment}</strong>
        </div>
        <div>
          Total Payment Amount:{' '}
          <strong>{totalPayment}</strong>
        </div>
        <div>
          Total Interest Paid:{' '}
          <strong>{totalInterest}</strong>
        </div>
      </div>
    </div>

  );
}
