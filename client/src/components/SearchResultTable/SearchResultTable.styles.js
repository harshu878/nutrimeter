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
    #active{
      background-color: #d0d0d0;
    }
    tr {
      font-size: 12px;
      border-bottom: 1px solid #f7f7f7;
      &:hover{
        cursor: pointer;
        background-color: #f7f7f7;
      }
      td {
        padding: 3px 8px;
      }
    }
  }
`
