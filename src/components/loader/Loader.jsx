import React from 'react';

const Loader = () => {
    return (
       
            <div class="flex items-center justify-center">
                <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-blue-600 border-dashed" role="status">
                </div>
               
                    <span class="visually-hidden">Loading...</span>
            </div>
       
    );
};

export default Loader;