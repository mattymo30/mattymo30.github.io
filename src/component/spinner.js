import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const Spinner = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <TailSpin
        height="80"
        width="80"
        color="#324680"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        />
        </div>
    );
};

export default Spinner;
