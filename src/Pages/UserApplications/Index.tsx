import React from 'react';
import SearchApp from './Particles/SearchApp';
import CreateApp from './Particles/CreateApp';

export default function Index() {
    return (
        <div className="content">
            <div className="col-span-12 2xl:col-span-12">
                <SearchApp/>
            </div>
            <div className="col-span-12 2xl:col-span-12 pt-2">
                <CreateApp />
            </div>
        </div>
    );
}
