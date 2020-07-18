// @ts-nocheck
import React, { createContext, useReducer, useContext } from "react";

// action types
export const actionTypes = {
	SET_VIEWER: "SET_VIEWER",
};

// action creators
export const setViewer = async (payload, dispatch) => {
	dispatch({
		type: actionTypes.SET_VIEWER,
		payload,
	});
};

// reducer
const reducer = (state, action) => {
	switch (action.type) {
		case actionTypes.SET_VIEWER:
			return { ...state, viewer: action.payload };
		default:
			return state;
	}
};

// initial state
const initState =
	typeof window !== "undefined"
		? {
				viewer: null,
		  }
		: {}; // fallback to {} so that sub states don't return null

// context that stores and shares data
const StoreContext = createContext(initState);

// component to wrap upper level root component with Provider
export const StoreProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initState);

	return (
		<StoreContext.Provider value={{ state, dispatch }}>
			{children}
		</StoreContext.Provider>
	);
};

// useStore hook.  Acts as Consumer through useContext
export default function useStore() {
	const { state, dispatch } = useContext(StoreContext);
	return { state, dispatch };
}
