import lebron_jr_smith from "/lebron_jr_smith.jpg";

interface LeWordProps {
  text: string;
}

function LeWord({ text }: LeWordProps) {
  return (
    <div className="relative flex flex-col items-center">
      <img src={lebron_jr_smith} className="w-56 md:w-72 lg:w-96" />
      <div className="absolute top-1/5 left-1/2 -translate-x-1/2 text-xl font-bold text-white drop-shadow-xl">
        {text}
      </div>
    </div>
  );
}

export default LeWord;
