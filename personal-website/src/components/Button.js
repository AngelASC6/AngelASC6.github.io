// Difficulties getting a passed in color attribute to work, for now using a static color
export default function Button({ text, onClick }) {
  return (
    <button
      className={`bg-[#064523] text-white py-3 px-4 rounded-md Ssm:w-1/2 md:w-1/4 text-thin text-lg hover:bg-neutral-800 transition duration-300 ease-in-out`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
