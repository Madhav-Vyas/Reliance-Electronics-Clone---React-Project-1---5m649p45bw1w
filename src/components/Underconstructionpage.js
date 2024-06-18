import React from 'react'

const Underconstructionpage = () => {
    return (
        <div>

            <div class="bg-gray-900 text-white flex items-center justify-center min-h-screen">
                <div class="text-center p-6 max-w-lg">
                    <div class="bg-blue-500 rounded-full p-6 mb-6 inline-block">
                        <i class="fas fa-tools text-6xl"></i>
                    </div>
                    <h1 class="text-4xl font-bold mb-4">We're Under Construction</h1>
                    <p class="mb-6 text-lg">
                        Our website is currently undergoing scheduled maintenance. We should be back shortly. Thank you for your patience.
                    </p>
                    <div class="flex justify-center space-x-4 mt-6">
                        <a href="https://twitter.com" class="text-blue-400 hover:text-blue-600"><i class="fab fa-twitter text-3xl"></i></a>
                        <a href="https://facebook.com" class="text-blue-700 hover:text-blue-900"><i class="fab fa-facebook text-3xl"></i></a>
                        <a href="https://linkedin.com" class="text-blue-500 hover:text-blue-700"><i class="fab fa-linkedin text-3xl"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Underconstructionpage