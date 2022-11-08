import styled from 'styled-components'

export const TableWrapper = styled.table`
  font-family: 'Open Sans', sans-serif;
  width: 100%;
  border-radius: 10px;
  thead {
    border-top-left-radius: 10px;
    -moz-border-top-left-radius: 10px;
    -webkit-border-top-left-radius: 10px;
    height: 27.95px;
    background-color: #eeeeee;
    color: #54504c;
    font-size: 13px;
  }
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
