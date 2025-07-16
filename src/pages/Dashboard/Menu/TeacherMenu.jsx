import React from 'react';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { MdAddBox } from 'react-icons/md';
import MenuItem from './MenuItem';

const TeacherMenu = () => {
  return (
    <>
      <MenuItem icon={MdAddBox} label="Add class" address="add-class" />
      <MenuItem
        icon={FaChalkboardTeacher}
        label="My class"
        address="my-class"
      />
    </>
  );
};

export default TeacherMenu;
