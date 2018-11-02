// authentication.js

import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER } from './types';
import setAuthToken from '../setAuthToken';
import jwt_decode from 'jwt-decode';

export const addProduct = (product, history) => dispatch => {
    axios.post('http://localhost:4200/product/add', product)
        .then(res => history.push('/product/add')).catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}

export const editProduct = (product, id) => dispatch => {
    //change to update
    axios.post('http://localhost:4200/product/update/' + id, product)
        .then(res => console.log(res.data))
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}

export const sellProduct = (product, id) => dispatch => {
    //change to update
    axios.post('http://localhost:4200/product/sell/' + this.props.match.params.id, product)
            .then(res => {
                axios.get('http://localhost:4200/product/delete/' + this.props.match.params.id)
                    .then(console.log('Deleted'))
                    .catch(err => {
                        dispatch({
                            type: GET_ERRORS,
                            payload: err.response.data
                        });
                    });
            });
}

export const getProduct = (id) => dispatch => {
    axios.get('http://localhost:4200/product/edit/' + id)
        .then(response => {
            debugger
            return response;
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

export const logoutUser = (history) => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
    history.push('/login');
}