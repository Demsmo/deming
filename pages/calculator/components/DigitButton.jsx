import { ACTIONS } from "../calculator";
import { Button } from "../../../styles/calculator.style";

export default function DigitButton({ dispatch, digit }) {
    return (
        <Button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}>
            {digit}
        </Button>
    )
}