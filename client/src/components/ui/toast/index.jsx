import React, { useContext } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

import { Context } from '../../../context/store';

const ToastAlert = () => {

    const title = {
        TOAST_SUCCESS: { class: 'success' , name: 'Sucesso'},
        TOAST_ERROR: { class: 'danger' , name: 'Error'},
        TOAST_INFO: { class: 'info' , name: 'Aviso'}
    }

    const { state, dispatch } = useContext(Context);
    return (
        <ToastContainer position={'top-end'}>
            <Toast bg={title[state.toastAlert.type]?.class} onClose={() => {dispatch({type : '', payload: ''})}} show={state.toastAlert.message !== ''} delay={3000} autohide>
                <Toast.Header>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">{title[state.toastAlert.type]?.name}</strong>
                    <small></small>
                </Toast.Header>
                <Toast.Body className={'text-white'}>{state.toastAlert.message}</Toast.Body>
            </Toast>
        </ToastContainer>
    );
}

export default ToastAlert;