import React from 'react';
import GroupUser from './Particles/GroupUser';
import Users from './Particles/Users';

export default function Index() {
    return (
        <div className="content">
            <div className="grid grid-cols-1 gap-6">
                <GroupUser/>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-2">
                <Users/>
            </div>
        </div>
    );
}
