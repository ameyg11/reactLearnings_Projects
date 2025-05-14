import { useCount } from "../../context/count-context" 

export const Text = () => {
    // console.log(props.count )

    const {count} = useCount();

    return (
        <>
        <p>Count is {count}</p>
        </>
      )
}