import React, { useReducer } from "react";
const initialState = {
    username: "",
    password: "",
    firstname: "",
    lastname: ""

}
function reducer(state , { filed, value }) {
    return {
        ...state,
        filed: value
    }
}
function User() {
    const [state, dispatch] = useReducer(reducer,initialState)
    const onChangeHandler = (e) => {
        dispatch({ field: e.target.value, value: e.target.value })
    }
    const { username, password, firstname, lastname } = state
    return (
        <div>
            <input name="username" value={username} onChange={onChangeHandler} />
            <input name="password" value={password} onChange={onChangeHandler} />
            <input name="firstname" value={firstname} onChange={onChangeHandler} />
            <input name="lastname" value={lastname} onChange={onChangeHandler} />

        </div>
    )
}
export default User;