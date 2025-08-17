import PieChartStats from '../../../components/pieChart/PieChartStats';
import useUserRole from '../../../hooks/useUserRole';
import Forbidden from '../../Forbidden/Forbidden';
import LoadingSpinner from '../../shared/LoadingSpinner';
// import TeacherRequest from '../Admin/TeacherRequest';
import MyEnrollClass from '../Student/MyEnrollClass';
import MyClass from '../Teacher/MyClass';

const DashboardHome = () => {
  const [role, isRoleLoading] = useUserRole();

  if (isRoleLoading) {
    return <LoadingSpinner />;
  } else if (role === 'admin') {
    return <PieChartStats />;
  } else if (role === 'teacher') {
    return <MyClass />;
  } else if (role === 'student') {
    return <MyEnrollClass />;
  } else {
    return <Forbidden />;
  }
};

export default DashboardHome;
