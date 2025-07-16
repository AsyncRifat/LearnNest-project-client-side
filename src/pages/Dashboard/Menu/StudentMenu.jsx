import React from 'react';
import MenuItem from './MenuItem';
import { MdClass } from 'react-icons/md';

const StudentMenu = () => {
  return (
    <>
      <MenuItem
        icon={MdClass}
        label="My enroll class"
        address="my-enroll-class"
      />
    </>
  );
};

export default StudentMenu;
