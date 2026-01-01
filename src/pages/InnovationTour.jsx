import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const InnovationTour = () => {
    return (
        <div className="flex flex-col min-h-screen bg-transparent overflow-x-hidden">
            <Header />

            {/* Main Content */}
            <div className="flex-grow pt-[4.75rem] lg:pt-[5.25rem]">
                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl lg:text-6xl font-bold text-n-1 mb-8 text-center">
                            Innovation Tour
                        </h1>

                        <div className="text-n-1 text-lg space-y-6">
                            <p className="text-center text-gray-400">
                                Content will be added soon...
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer className="mt-auto" />
        </div>
    );
};

export default InnovationTour;
