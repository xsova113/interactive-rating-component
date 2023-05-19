import Image from "next/image";

interface ThankStateProps {
  rating: number;
}

const ThankState: React.FC<ThankStateProps> = ({ rating }) => {
  return (
    <div className="flex flex-col items-center mt-3">
      <Image
        src="images/illustration-thank-you.svg"
        alt="Image"
        width={150}
        height={150}
        className="mt-4 mb-5"
      />
      <div className="mb-11 text-[15px] text-[#FB7718] bg-gray-800 py-3 px-5 rounded-full">You selected {rating} out of 5</div>
      <h1 className="text-white font-semibold text-2xl mb-5">Thank you!</h1>
      <p className="text-slate-300 text-[15px] text-center">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don&apos;t hesitate to get in touch!
      </p>
    </div>
  );
};

export default ThankState;
