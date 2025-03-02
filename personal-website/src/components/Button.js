export default function Button({ text, onClick, color = "#064523" }) {
    return (
        <button
            className={`bg-[${color}] text-white py-3 px-4 rounded-md w-1/4 text-thin text-lg hover:bg-neutral-800 transition duration-300 ease-in-out`}
            onClick={onClick}
        >
            {text}
        </button>
    );

}