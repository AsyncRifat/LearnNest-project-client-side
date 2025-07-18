const UserDataRows = ({ user }) => {
  const { name, email, role, image, status } = user;
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
            <span className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight ">
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
              ></span>
              <span className="relative">Update Role</span>
            </span>

            {/* Modal */}
            {/* <UpdateUserModal /> */}
          </td>
        </tr>
      )}
    </>
  );
};

export default UserDataRows;
