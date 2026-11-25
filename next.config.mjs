/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/students", destination: "/dashboard/students", permanent: true },
      { source: "/parents", destination: "/dashboard/parents", permanent: true },
      { source: "/staff", destination: "/dashboard/staff", permanent: true },
      { source: "/attendance", destination: "/dashboard/attendance", permanent: true },
      { source: "/curriculum", destination: "/dashboard/curriculum", permanent: true },
      { source: "/finance", destination: "/dashboard/finance", permanent: true },
      { source: "/meals", destination: "/dashboard/meals", permanent: true },
      { source: "/health", destination: "/dashboard/health", permanent: true },
      { source: "/transport", destination: "/dashboard/transport", permanent: true },
      { source: "/communication", destination: "/dashboard/communication", permanent: true },
      { source: "/calendar", destination: "/dashboard/calendar", permanent: true },
      { source: "/reports", destination: "/dashboard/reports", permanent: true },
      { source: "/documents", destination: "/dashboard/documents", permanent: true },
      { source: "/settings", destination: "/dashboard/settings", permanent: true },
    ];
  },
};

export default nextConfig;
