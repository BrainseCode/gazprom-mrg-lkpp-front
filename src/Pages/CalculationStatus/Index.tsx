import React from 'react';
import CalculationStatus from './Particles/CalculationStatus';

export default function Index() {
    return (
        <div className="content">
            <div className="col-span-12 2xl:col-span-12">
                <CalculationStatus/>
            </div>
        </div>
    );
}
