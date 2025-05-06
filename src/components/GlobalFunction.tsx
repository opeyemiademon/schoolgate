export const selectStyle = {
    menuButton: ({ isDisabled }:any) => (
        `flex text-sm text-gray-500 px-2  mt-2 justify-between border border-gray-300 rounded shadow-sm transition-all duration-300 focus:outline-none ${
            isDisabled
                ? "bg-gray-200"
                : "bg-white hover:border-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500/20"
        }`
    ),
    searchBox:' w-full p-2 ',
    searchIcon:'hidden',
    
    menu: " w-full  bg-white shadow-lg border border-color-border absolute rounded p-2 mt-1.5 text-sm text-gray-700 z-50 ",
    listItem: ({ isSelected }:any) => (
        `block transition duration-200  px-2 py-2 cursor-pointer select-none truncate rounded ${
            isSelected
                ? `text-white bg-blue-500`
                : `text-gray-500 hover:bg-blue-100 hover:text-blue-500`
        }`
    )
}