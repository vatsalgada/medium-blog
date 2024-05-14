// LoadingSkeleton.js
import React from 'react';

const LoadingSkeleton = () => {
  //return (
    // <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
    //        <div className="border-b border-slate-300 w-screen max-w-screen-md animate-pulse">
    //   <div className="flex items-center">
    //     <div className="bg-gray-600 rounded-full w-6 h-6 mr-2"></div>
    //     <div className="font-thin text-gray-500">Loading...</div>
    //   </div>
    //   <div className="font-semibold text-xl pt-2 h-8 bg-gray-500 rounded-lg mb-2"></div>
    //   <div className="text-md font-thin h-16 bg-gray-500 rounded-lg mb-2"></div>
     
    // </div>
    // </div>
 
 return <div role="status" className="animate-pulse">
        <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
            <div className="flex">
                <div className="h-4 w-4 bg-gray-200 rounded-full w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                <div className="flex justify-center flex-col pl-2 flex justify-center flex-col">
                 
                </div>
                <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                </div>
            </div>
            <div className="text-xl font-semibold pt-2">
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
            <div className="text-md font-thin">
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
            <div className="text-slate-500 text-sm font-thin pt-4">
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
        </div>
    <span className="sr-only">Loading...</span>
</div>
}


export default LoadingSkeleton;
