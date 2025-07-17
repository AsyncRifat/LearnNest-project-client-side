import { PulseLoader } from 'react-spinners';

const LoadingSpinner = ({ smallHeight }) => {
  return (
    <div
      className={` ${smallHeight ? 'h-[250px]' : 'h-[70vh]'}
      flex 
      flex-col 
      justify-center 
      items-center `}
    >
      <PulseLoader size={20} color="" />
    </div>
  );
};

export default LoadingSpinner;
