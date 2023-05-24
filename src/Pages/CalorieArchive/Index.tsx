import React from 'react';
import CalorieArchive from './Particles/CalorieArchive';
import SearchCalorieArchive from './Particles/SearchCalorieArchive';

export default function Index() {
    return (
        <div className="content">
            <div className="col-span-12 2xl:col-span-12">
                <CalorieArchive/>
            </div>
            <div className="col-span-12 2xl:col-span-12 pt-2">
                <SearchCalorieArchive/>
            </div>
        </div>
    );
}
