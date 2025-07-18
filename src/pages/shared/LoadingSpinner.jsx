import { ClipLoader } from 'react-spinners';

const LoadingSpinner = ({ smallHeight }) => {
  return (
    <div
      className={` ${smallHeight ? 'h-[250px]' : 'h-[70vh]'}
      flex 
      flex-col 
      justify-center 
      items-center `}
    >
      <ClipLoader size={40} color="#40407a" />
    </div>
  );
};

export default LoadingSpinner;
