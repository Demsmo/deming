import { ACTIONS } from "./calculator";
import { Button } from "./calculator.style";

export default function OperationButton({ dispatch, operation }) {
    return (
        <Button onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}>
            {operation}
        </Button>
    )
}