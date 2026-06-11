import { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { motion } from 'framer-motion';
import { FiDownload, FiCalendar, FiTrendingUp } from 'react-icons/fi';

const COLORS = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'];

export default function Dashboard() {
  const [dateRange, setDateRange] = useState({ start: '2024-01-01', end: '2024-06-10' });
  const [revenueData, setRevenueData] = useState<any[]>([]);
  const [userMetrics, setUserMetrics] = useState<any>({});

  useEffect(() => {
    fetchData();
  }, [dateRange]);

  const fetchData = async () => {
    // Mock data for demonstration
    setRevenueData([
      { date: 'Jan', revenue: 45000, users: 2400 },
      { date: 'Feb', revenue: 52000, users: 2800 },
      { date: 'Mar', revenue: 48000, users: 2600 },
      { date: 'Apr', revenue: 61000, users: 3200 },
      { date: 'May', revenue: 55000, users: 2900 },
      { date: 'Jun', revenue: 67000, users: 3400 },
    ]);

    setUserMetrics({
      totalRevenue: 328000,
      activeUsers: 17300,
      conversionRate: 3.24,
      churnRate: 1.2,
      avgOrderValue: 145.5,
      ltv: 2450,
    });
  };

  const trafficSourceData = [
    { name: 'Organic', value: 35 },
    { name: 'Paid', value: 28 },
    { name: 'Direct', value: 22 },
    { name: 'Referral', value: 15 },
  ];

  const handleExport = (format: 'pdf' | 'csv') => {
    alert(`Exporting data as ${format.toUpperCase()}...`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-slate-800/50 backdrop-blur border-b border-slate-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-white">Analytics Dashboard</h1>
            <div className="flex gap-3">
              <button onClick={() => handleExport('pdf')} className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                <FiDownload /> PDF
              </button>
              <button onClick={() => handleExport('csv')} className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                <FiDownload /> CSV
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Metrics */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6">
            <p className="text-gray-400 text-sm">Total Revenue</p>
            <h3 className="text-3xl font-bold text-white mt-2">${(userMetrics.totalRevenue || 0).toLocaleString()}</h3>
            <p className="text-green-400 mt-2 flex items-center gap-1"><FiTrendingUp size={16} /> +12.5% vs last month</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6">
            <p className="text-gray-400 text-sm">Active Users</p>
            <h3 className="text-3xl font-bold text-white mt-2">{(userMetrics.activeUsers || 0).toLocaleString()}</h3>
            <p className="text-green-400 mt-2 flex items-center gap-1"><FiTrendingUp size={16} /> +8.3% growth</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6">
            <p className="text-gray-400 text-sm">Conversion Rate</p>
            <h3 className="text-3xl font-bold text-white mt-2">{userMetrics.conversionRate}%</h3>
            <p className="text-blue-400 mt-2">Industry avg: 2.8%</p>
          </div>
        </motion.div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Revenue Chart */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-6">Revenue Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="date" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip contentStyle={{ background: '#1e293b', border: '1px solid #475569' }} />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Traffic Sources */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-6">Traffic Sources</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={trafficSourceData} cx="50%" cy="50%" labelLine={false} label={({ name, value }) => `${name}: ${value}%`} outerRadius={100} fill="#8884d8" dataKey="value">
                  {trafficSourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ background: '#1e293b', border: '1px solid #475569' }} />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          {/* User Growth */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-6">User Growth</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="date" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip contentStyle={{ background: '#1e293b', border: '1px solid #475569' }} />
                <Legend />
                <Bar dataKey="users" fill="#10b981" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
