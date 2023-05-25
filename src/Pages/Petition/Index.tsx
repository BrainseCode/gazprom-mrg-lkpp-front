import React from 'react';
import Petition from './Particles/Petition';
import CreateInfo from './Particles/CreateInfo';

export default function Index() {
    return (
        <div className="content">
            <div className="grid grid-cols-1 gap-6">
                <Petition/>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-2">
                <CreateInfo/>
            </div>
        </div>
    );
}
