import { TableThStyled, TableTrStyled, TransactionsHistory, TransactionsTableBody, TransactionsTableBodyItem, TransactionsTableHead } from "./TransactionHistory.styled"

export const TransactionHistory = ({ transactions }) => {
  return <div>
    <TransactionsHistory>
      <TransactionsTableHead>
        <TableTrStyled>
          <TableThStyled>Type</TableThStyled>
          <TableThStyled>Amount</TableThStyled>
          <TableThStyled>Currency</TableThStyled>
        </TableTrStyled>
      </TransactionsTableHead>
      <TransactionsTableBody>
        {transactions.map(({ id, type, amount, currency }) => (
          <TableTrStyled key={id}>
            <TransactionsTableBodyItem>{type}</TransactionsTableBodyItem>
            <TransactionsTableBodyItem>{amount}</TransactionsTableBodyItem>
            <TransactionsTableBodyItem>{currency}</TransactionsTableBodyItem>
          </TableTrStyled>
        ))}
      </TransactionsTableBody>
    </TransactionsHistory>
  </div>
}