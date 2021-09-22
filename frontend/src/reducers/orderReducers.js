import { ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_CREATE_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_DETAILS_FAIL } from "../constants/orderConstants"

export const orderCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case ORDER_CREATE_REQUEST:
            return {
                loading: true,
            }
        case ORDER_CREATE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                order: action.paylaod
            }
        case ORDER_CREATE_FAIL:
            return {
                laoding: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const orderDetailsReducer = (state = { loading: true, orderItems: [], shipping: {}, }, action) => {
    switch (action.type) {
        case ORDER_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case ORDER_DETAILS_SUCCESS:
            return {
                laoding: false,
                order: action.paylaod
            }
        case ORDER_DETAILS_FAIL:
            return {
                laoding: false,
                error: action.payload
            }
        default:
            return state
    }
}