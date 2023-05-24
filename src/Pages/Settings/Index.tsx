import React from 'react';
import UserSettings from './Particles/UserSettings';

export default function Index() {
    return (
        <div className="content">
            <div className="grid grid-cols-1 gap-6">
                <UserSettings/>
            </div>
        </div>
    );
}
