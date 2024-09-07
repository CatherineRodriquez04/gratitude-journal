import React from 'react';

const FloatingCloud1 = ({ className }) => (
    <div className={`absolute ${className} w-[100px] h-[100px] bg-white bg-opacity-15 rounded-full animate-drift`}></div>
);
const FloatingCloud2 = ({ className }) => (
    <div className={`absolute ${className} w-[100px] h-[100px] bg-white bg-opacity-15 rounded-full animate-drift2`}></div>
);
const FloatingCloud3 = ({ className }) => (
    <div className={`absolute ${className} w-[100px] h-[100px] bg-white bg-opacity-15 rounded-full animate-drift3`}></div>
);

const FloatingClouds = () => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Multiple floating clouds with different positions */}
        {/* <FloatingCloud1 className="top-10 left-10" /> */}
        {/* <FloatingCloud1 className="top-20 left-40" />
        <FloatingCloud1 className="top-[300px] right-10" /> */}
        <FloatingCloud1 className="top-[400px] right-[300px]" />
        <FloatingCloud1 className="top-[450px] left-[250px]" />
        <FloatingCloud1 className="top-[550px] right-[600px] " />
        <FloatingCloud1 className="top-[150px] left-[600px] " />
        <FloatingCloud1 className="top-[350px] right-[750px] " />
        <FloatingCloud1 className="top-[450px] left-[30px] " />


        <FloatingCloud2 className="top-[100px] left-[100px]" />
        <FloatingCloud2 className="top-[50px] right-[100px] " />
        <FloatingCloud2 className="top-[650px] left-[800px] " />
        <FloatingCloud2 className="top-[625px] right-[300px] " />
        <FloatingCloud2 className="top-[550px] left-[550px] " />
        {/* <FloatingCloud2 className="top-[150px] right-[225px] " />
        <FloatingCloud2 className='top-[700px] left-[50px] ' /> */}
        <FloatingCloud2 className="top-[300px] left-[80px] " />
        <FloatingCloud2 className="top-[400px] left-[400px]" />

        <FloatingCloud3 className="top-80 left-20 " />
        <FloatingCloud3 className="top-[750px] left-[400px]" />
        <FloatingCloud3 className="top-[700px] left-[125px] " />
        <FloatingCloud3 className="top-[200px] left-[450p]" />
        <FloatingCloud3 className="top-[300px] right-[250px] " />
        <FloatingCloud3 className="top-[750px] right-[80px] " />
        <FloatingCloud3 className="top-[30px] right-[300px]" />
        {/* <FloatingCloud3 className="top-[400px] right-[625px]" />
        <FloatingCloud3 className="top-[200px] right-[50px]" /> */}
    </div>
    );
};

export default FloatingClouds;