import React from 'react'

export default function(props) {
  const {company} = props
  return (
    <tr>
      <td>{company.Id}</td>
      <td>{company.Name}</td>
      <td>{company.sharePriceDate}</td>
      <td>{company.sharePrice}</td>
      <td>{company.comments}</td>
    </tr>
  )
}
