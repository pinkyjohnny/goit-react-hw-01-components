export const TransactionHistory = ( { transactions }) => {
    return <div className="transactionhistory">
        <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
     </thead>
    <tbody>     
   {transactions.map(({ id, type, amount, currency }) => (
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
))} 
  </tbody>
  </table>
    </div>
}