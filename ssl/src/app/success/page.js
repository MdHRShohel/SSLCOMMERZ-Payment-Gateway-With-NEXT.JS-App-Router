import React from 'react';
import AppNavBar from "@/components/Master/AppNavBar";
import Link from "next/link";
const Page = () => {
    return (
        <>
            <AppNavBar/>
            <div className="container">
                <div className="row h-100  justify-content-center align-items-center">
                    <div className="col-md-2 centered text-center col-sm-12 col-lg-2">
                        <img className="w-50" src="/images/success.svg"/><br/>
                        <h6 className="my-2">Payment Successful </h6>
                        <Link className="btn mt-2 btn-success" href="/">Order List</Link>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Page;