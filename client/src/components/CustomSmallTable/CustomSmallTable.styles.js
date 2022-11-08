import styled from 'styled-components'

export const TableWrapper = styled.table`
  font-family: 'Open Sans', sans-serif;
  width: 100%;
  border-radius: 10px;
  tbody {
    tr {
      font-size: 12px;
      td {
        padding: 3px 8px;
      }
    }
    tr:nth-child(even) {
      background-color: #f7f7f7;
    }
  }
`
