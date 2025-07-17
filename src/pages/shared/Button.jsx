import { useNavigate } from 'react-router';

const Button = ({
  label,
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
      onClick={handleClick}
      className={`
          relative
          disabled:opacity-70
          disabled:cursor-not-allowed
          rounded-md
          hover:opacity-80
          transition
          px-4
          cursor-pointer
          ${outline ? 'bg-white' : 'bg-green-600'}
          ${outline ? 'border-black' : 'border-green-600'}
          ${outline ? 'text-black' : 'text-white'}
          ${small ? 'text-sm' : 'text-md'}
          ${small ? 'py-1.5' : 'py-3'}
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
