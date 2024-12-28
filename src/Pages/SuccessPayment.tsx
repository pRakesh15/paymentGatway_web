import { Link, useSearchParams } from "react-router-dom";


const SuccessPayment = () => {

    const searchQuery = useSearchParams()[0]

    const paymentid = searchQuery.get("paymentid")

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-md">
                <div>
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                        <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Payment Successful!
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Thank you for your Payment. Your donation  has been processed successfully.
                    </p>
                </div>
                <div className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm">
                        <p className="text-center text-sm text-gray-500 mb-4">
                            Payment id: <span className="font-semibold">{paymentid}</span> 
                        </p>
                        <p className="text-center text-sm text-gray-500 mb-4">
                            A confirmation email has been sent to your email address.
                        </p>
                    </div>
                    <div>
                        <Link to={"/"}>

                            <button
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                            >
                                Continue browsing...
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default SuccessPayment