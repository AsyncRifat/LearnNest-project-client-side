import MenuItem from './MenuItem';
import { FaRegClipboard, FaUsers } from 'react-icons/fa';
import { HiBookOpen } from 'react-icons/hi';
import { FcStatistics } from 'react-icons/fc';

const AdminMenu = () => {
  return (
    <div>
      <MenuItem icon={FcStatistics} label="Statistics" address="stats" />
      <MenuItem
        icon={FaRegClipboard}
        label="Teacher Request"
        address="teacher-request"
      />
      <MenuItem icon={FaUsers} label="Users" address="users-request" />
      <MenuItem
        icon={HiBookOpen}
        label="All classes"
        address="all-classes-request"
      />
    </div>
  );
};

export default AdminMenu;
