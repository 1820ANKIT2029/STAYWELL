import React from "react";
import ReactDOM from "react-dom";
import "./footer.css";

function Footer(){
    return (
        <div>
        

<img src="/assets/logo.png" class="h-32 footerlogo" alt="StayWeLL Logo" />
<footer class="bg-white rounded-lg shadow dark:bg-white-900 m-4 footer">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a  class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                {/* <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">StayWeLL</span> */}
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a class="hover:underline">StayWeLL™</a>. All Rights Reserved.</span>
    </div>
</footer>


        </div>
    )
}
export default Footer;