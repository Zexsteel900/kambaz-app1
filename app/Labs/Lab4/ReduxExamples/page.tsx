"use client";
import { Provider } from "react-redux";
import store from "../store";
import dynamic from "next/dynamic";

const HelloRedux = dynamic(() => import("./HelloRedux/page"), { ssr: false });
const CounterRedux = dynamic(() => import("./CounterRedux/page"), { ssr: false });
const AddRedux = dynamic(() => import("./AddRedux/page"), { ssr: false });
const TodosRedux = dynamic(() => import("./todos/page"), { ssr: false });

export default function ReduxExamples() {
    return (
        <Provider store={store}>
            <div>
                <h2> Redux Examples </h2>
                <HelloRedux />
                <CounterRedux />
                <AddRedux />
                <TodosRedux />
            </div>
        </Provider>
    )
}
