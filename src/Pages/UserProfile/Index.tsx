import React from 'react';
import UserTableProfile from './Particles/UserTableProfile';
import LegalInfo from './Particles/LegalInfo';
import './userProfile.css';

export default function Index() {
    return (
        <div className="content">
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 2xl:col-span-6">
                    <UserTableProfile/>
                </div>
                <div className="col-span-12 2xl:col-span-6">
                    <LegalInfo/>
                </div>
            </div>
        </div>
    );
}
