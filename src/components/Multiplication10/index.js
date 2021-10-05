
const Multiplication10 = () => {
  const coefs = Array.from({length: 10}, (value, index) => index + 1)
  console.log(coefs)

  const transformToLi = (coef) => {
    return (
      <tr>
        <td>{coef}</td>
        <td>&times;</td>
        <td>10</td>
        <td>=</td>
        <td>{coef * 10}</td>
      </tr>
    )
  }

  return (
    <table>
      {
        coefs.map(transformToLi)
      }
    </table>
  )
}

export default Multiplication10;