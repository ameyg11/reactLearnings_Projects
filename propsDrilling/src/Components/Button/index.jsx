
import { Text } from '../Text'

export default function Button({count, onButtonClick}) {
    // console.log(count)
  return (
    <>
    <button onClick ={onButtonClick}>Click to increment </button>
    <Text count={count}/>
    </>
  )
}
