import toast from 'react-hot-toast';
import { usePatchData } from '../../../utils/utils';

const UserDataRows = ({ user, refetch }) => {
  const { _id, name, email, role, image, status } = user;

  const { mutate: updateUserStatus } = usePatchData({
    endpoint: '/make-admin',
    queryKey: 'search-users',
    onSuccess: () => {
      toast.success('Admin made!');
      refetch();
    },
    onError: () => toast.error('Failed to update user.'),
  });

  const handleMakeAdmin = id => {
    // console.log('admin making', id);
    updateUserStatus({
      id: id,
      data: { role: 'admin' },
    });
  };

  return (
    <>
      {!user || user.length === 0 ? (
        <p>No user here</p>
      ) : (
        <tr>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">{name}</p>
          </td>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">{email}</p>
          </td>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">{role}</p>
          </td>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <img
              src={image}
              alt={name}
              className="h-7 w-7 rounded-full object-cover"
            />
          </td>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm uppercase">
            {status ? (
              <p
                className={`${
                  status === 'verified' ? 'text-green-600' : 'text-yellow-500'
                }`}
              >
                {status}
              </p>
            ) : (
              <p className="text-red-500 whitespace-no-wrap">Unavailable</p>
            )}
          </td>

          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            {(role === 'teacher' || role === 'student') && (
              <button
                className="badge badge-success hidden md:block"
                onClick={() => {
                  handleMakeAdmin(_id);
                }}
              >
                Make Admin
              </button>
            )}
            {(role === 'teacher' || role === 'student') && (
              <button
                className="badge badge-success block md:hidden"
                onClick={() => {
                  handleMakeAdmin(_id);
                }}
              >
                Make_Admin
              </button>
            )}
          </td>
        </tr>
      )}
    </>
  );
};

export default UserDataRows;
