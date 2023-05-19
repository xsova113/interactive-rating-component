"use client";
import Image from "next/image";

interface ActiveStateProps {
  setRating: (value: number) => void;
  setIsSubmitted: (value: boolean) => void;
}

const ActiveState: React.FC<ActiveStateProps> = ({
  setRating,
  setIsSubmitted,
}) => {
  const selections = [1, 2, 3, 4, 5];

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <>
      <div className="space-y-6 pt-4">
        <div className="flex bg-slate-600 rounded-full w-[60px] h-[60px] items-center justify-center">
          <Image
            src="/images/icon-star.svg"
            alt="star-icon"
            width={25}
            height={25}
          />
        </div>

        <h1 className="text-white text-3xl">How did we do?</h1>
        <p className="text-gray-400 text-[15px]">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <form onSubmit={handleSubmit}>
          <div className="gap-6 flex justify-between mb-7">
            {selections.map((item, index) => (
              <div className="flex justify-center bg-slate-700 rounded-full w-[45px] h-[45px] text-gray-300 cursor-pointer hover:bg-[#FB7718]  active:bg-[#FB7718]/80 ">
                <input
                  type="button"
                  onClick={() => setRating(item)}
                  key={index}
                  className="cursor-pointer visited:text-white focus:outline-none focus:text-white"
                  value={item}
                />
              </div>
            ))}
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-full text-white hover:text-[#FB7718] bg-[#FB7718] hover:bg-white"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ActiveState;
