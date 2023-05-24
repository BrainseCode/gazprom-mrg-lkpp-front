import React from 'react';
import TableProfile from './Particles/TableProfile';
import TableContracts from './Particles/TableContracts';
import MeasuringComplexes from './Particles/MeasuringComplexes';
import Appeals from './Particles/Appeals';
import './home.css';

export default function Index() {
    return (
        <div className="content">
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 2xl:col-span-6">
                    <TableProfile/>
                </div>
                <div className="col-span-12 2xl:col-span-6">
                    <TableContracts/>
                </div>
            </div>
            <div className="col-span-12 2xl:col-span-12 pt-2">
                <MeasuringComplexes/>
            </div>
            <div className="col-span-12 2xl:col-span-12 pt-2">
                <Appeals/>
            </div>
        </div>
    );
}
