
import { Text } from '../Text'

export default function Button({onButtonClick}) {
    // console.log(count)


  return (
    <>
    <button onClick ={onButtonClick}>Click to increment </button>
    <Text/>
    </>
  )
}
