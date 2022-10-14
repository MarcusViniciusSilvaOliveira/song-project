import React, { useContext } from 'react';
import { Context } from '../../../context/store';

import { REQUEST_PEDDING } from '../../../helpers/constants'
import { SpinnerDiv, BackGround } from './styles'

import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
    const { state } = useContext(Context);
    return (
        state.requestState === REQUEST_PEDDING ?
            <div>
                <SpinnerDiv>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </SpinnerDiv>
                <BackGround>
                </BackGround>
            </div>
            :
            <>
            </>
    );
}

export default Loading;