import React from 'react';
import TableContracts from './Particles/TableContracts';
import InformationContract from './Particles/InformationСontract';
import ActionContract from './Particles/ActionСontract';
import GasConsumingEquipment from './Particles/GasConsumingEquipment';
import SeparationGazEquipment from './Particles/SeparationGazEquipment';
import Indications from './Particles/Indications';
import MeasuringComplex from './Particles/MeasuringComplex';

export default function Index() {
    return (
        <div className="content">
            <div className="col-span-12 2xl:col-span-12">
                <TableContracts/>
            </div>
            <div className="grid grid-cols-12 gap-6 pt-2">
                <div className="col-span-12 2xl:col-span-6">
                    <InformationContract/>
                </div>
                <div className="col-span-12 2xl:col-span-6">
                    <ActionContract/>
                </div>
            </div>
            <div className="col-span-12 2xl:col-span-12 pt-2">
                <GasConsumingEquipment/>
            </div>
            <div className="col-span-12 2xl:col-span-12 pt-2">
                <SeparationGazEquipment/>
            </div>
            <div className="col-span-12 2xl:col-span-12 pt-2">
                <Indications/>
            </div>
            <div className="col-span-12 2xl:col-span-12 pt-2">
                <MeasuringComplex/>
            </div>
        </div>
    );
}
