// export const Avatar = ({initials} : {initials: string}) => {
//     return <span className="inline-flex items-center justify-center size-5  rounded-full bg-gray-500 text-xs font-semibold text-white leading-none">
//     {initials[0].toUpperCase()}
//   </span>
// }

export function Avatar({ name, size = "small" }: { name: string, size?: "small" | "big" }) {
    return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
    <span className={`${size === "small" ? "text-xs" : "text-md"} font-semibold text-white`}>
        {name[0]}
    </span>
</div>
}