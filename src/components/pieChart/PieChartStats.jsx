import React from 'react';
import useAxios from '../../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import {
  FiUsers,
  FiBookOpen,
  FiCheckCircle,
  FiClipboard,
  FiUserCheck,
} from 'react-icons/fi';
import ChartStatsSkeleton from '../../pages/shared/ChartStatsSkeleton';

const LABELS = {
  totalUser: 'Total Users',
  totalClass: 'Total Classes',
  totalEnrolledClass: 'Enrolled Classes',
  totalAssignment: 'Assignments',
  totalTeacher: 'Approved Teachers',
};

const ICONS = {
  totalUser: <FiUsers className="w-7 h-7 sm:w-8 sm:h-8 text-blue-500" />,
  totalClass: <FiBookOpen className="w-7 h-7 sm:w-8 sm:h-8 text-yellow-500" />,
  totalEnrolledClass: (
    <FiCheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-green-500" />
  ),
  totalAssignment: (
    <FiClipboard className="w-7 h-7 sm:w-8 sm:h-8 text-purple-500" />
  ),
  totalTeacher: <FiUserCheck className="w-7 h-7 sm:w-8 sm:h-8 text-pink-500" />,
};

const METRICS_ORDER = [
  'totalUser',
  'totalClass',
  'totalEnrolledClass',
  'totalAssignment',
  'totalTeacher',
];

const COLORS = ['#60A5FA', '#FBBF24', '#34D399', '#A78BFA', '#F472B6'];

const PieChartStats = () => {
  const axiosInstance = useAxios();

  // fetch data
  const {
    data: stats = {},
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['countUpNumber'],
    queryFn: async () => {
      const res = await axiosInstance('/home-countUp');
      return res.data;
    },
    staleTime: 5 * 60 * 1000,
  });

  const chartData = METRICS_ORDER.map((key, idx) => ({
    key,
    name: LABELS[key],
    value: Number(stats?.[key]) || 0,
    fill: COLORS[idx % COLORS.length],
  }));

  if (isLoading) {
    return <ChartStatsSkeleton />;
  }

  if (isError) {
    return (
      <p className="text-center text-red-500 py-10">
        Failed to load dashboard data.
      </p>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10 space-y-8 md:space-y-12">
      {/* Heading */}
      <div className="text-center text-gray-700 dark:text-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold font-quicksand">
          Platform Insights
        </h2>
        <p className=" mt-1 text-sm sm:text-base mb-5 text-gray-500 dark:text-gray-400 font-thin">
          A quick overview of users, classes, enrollments, assignments and
          teachers.
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
        {chartData.map(({ key, value }) => (
          <div
            key={key}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-5 sm:p-6 flex items-center gap-4 hover:shadow-xl transition"
          >
            <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 shrink-0">
              {ICONS[key]}
            </div>
            <div className="min-w-0">
              <p className="text-gray-500 text-xs sm:text-sm truncate">
                {LABELS[key]}
              </p>
              <p className="text-2xl sm:text-3xl font-extrabold leading-tight text-gray-700 dark:text-gray-200 ">
                {value}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
        {/* Bar Chart */}
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-semibold text-center mb-4 sm:mb-6 text-gray-700 dark:text-gray-200">
            Platform Overview (Bar)
          </h3>
          <div className="w-full h-[320px] sm:h-[360px] text-gray-700 dark:text-gray-200">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{ top: 8, right: 8, left: -10, bottom: 8 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 12 }}
                  interval={0}
                  angle={-10}
                  dy={10}
                  height={50}
                />
                <YAxis />
                <Tooltip />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                  {chartData.map((entry, idx) => (
                    <Cell key={`bar-${idx}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Donut Chart */}
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-semibold text-center mb-4 sm:mb-6 text-gray-700 dark:text-gray-200">
            Data Distribution (Donut)
          </h3>
          <div className="w-full h-[320px] sm:h-[360px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={110}
                  innerRadius={65}
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {chartData.map((entry, idx) => (
                    <Cell key={`cell-${idx}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend wrapperStyle={{ fontSize: 12 }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChartStats;
