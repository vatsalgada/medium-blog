export const ButtonHover = ({type}: {type: "signup" | "signin"}) => {
    return <>
<a href="#_" className="inline-flex items-center justify-center w-full h-10 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none">
{type == 'signup' ? "Sign Up" : "Sign In"}</a>
    </>
}