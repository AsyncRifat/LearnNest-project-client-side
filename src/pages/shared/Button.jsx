import { useNavigate } from 'react-router';

const Button = ({
  label,
  type = 'button',
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
  address,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) onClick();
    if (address) navigate(address);
  };

  return (
    <button
      disabled={disabled}
      type={type}
      onClick={handleClick}
      className={`
          relative
          disabled:opacity-70
          disabled:cursor-not-allowed
          rounded-md
          hover:bg-green-700
          transition
          px-4
          cursor-pointer
          
          ${outline ? 'bg-white' : 'bg-green-600'}
          ${outline ? 'border-black' : 'border-green-600'}
          ${outline ? 'text-black' : 'text-white'}
          ${small ? 'text-sm' : 'text-md'}
          ${small ? 'py-1.5' : 'py-2'}
          ${small ? '' : 'w-full'}
          ${small ? 'font-light' : 'font-semibold'}
          ${small ? 'border-[1px]' : 'border-2'}
          ${disabled ? 'disabled:hover:cursor-not-allowed' : ''}
        `}
    >
      {Icon && (
        <Icon
          size={24}
          className="
              absolute
              left-4
              top-3
            "
        />
      )}
      {label}
    </button>
  );
};

export default Button;
