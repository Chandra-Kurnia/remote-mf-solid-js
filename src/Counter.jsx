import { createSignal } from "solid-js";

export default () => {
    const [count, setCount] = createSignal(0)
    return(
        <div className="bg-slate">
            <span>Count = {count()}</span>
            <button onClick={() => setCount(count() + 1)}>Add count</button>
        </div>
    )
}