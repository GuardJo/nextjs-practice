import { Metadata } from "next";
import CountButton from "../../components/CountButton"

export const metadata: Metadata = {
    title: 'Test',
};

export default () => {
    return (
        <div>
            <h2>Counter Buttion</h2>
            <CountButton>Click</CountButton>
        </div>
    );
}