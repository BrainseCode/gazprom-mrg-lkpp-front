import React from 'react';
import MeasuringComplex from './Particles/MeasuringComplex';
import GeneralInfo from './Particles/GeneralInfo';
import Value from './Particles/Value';

export default function Index() {
    return (
        <div className="content">
            <div className="col-span-12 2xl:col-span-12">
                <MeasuringComplex/>
            </div>
            <div className="col-span-12 2xl:col-span-12 pt-2">
                <GeneralInfo/>
            </div>
            <div className="col-span-12 2xl:col-span-12 pt-2">
                <Value/>
            </div>
        </div>
    );
}
