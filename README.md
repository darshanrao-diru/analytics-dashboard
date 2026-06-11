# Analytics Dashboard for SaaS

A comprehensive analytics dashboard for SaaS platforms featuring real-time metrics, interactive charts, filtering capabilities, and data export functionality.

## Features

- 📊 **Interactive Charts**: Line, bar, and pie charts powered by Recharts
- 📈 **Real-time Metrics**: Live updating key performance indicators (KPIs)
- 🔍 **Advanced Filtering**: Filter data by date range, metrics, and dimensions
- 📥 **Data Export**: Export analytics as CSV or PDF reports
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile
- 🎨 **Dark Mode**: Built-in dark/light theme toggle
- ⚡ **Performance**: Optimized rendering and caching

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **State Management**: Zustand
- **Export**: jsPDF, HTML2Canvas, CSV-Writer
- **Data Fetching**: Axios

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Setup environment variables:
\`\`\`bash
cp .env.example .env.local
\`\`\`

3. Start development server:
\`\`\`bash
npm run dev
\`\`\`

Visit http://localhost:3000

## Project Structure

```
├── pages/
│   ├── index.tsx           # Main dashboard
│   ├── reports.tsx         # Reports page
│   └── api/                # API routes for data
├── components/
│   ├── charts/             # Chart components
│   ├── filters/            # Filter components
│   ├── metrics/            # Metric display components
│   └── layout/             # Layout components
├── lib/
│   ├── api.ts              # API client
│   ├── hooks.ts            # Custom hooks
│   └── utils.ts            # Utility functions
└── styles/                 # Global styles
```

## Key Features

### Dashboard Metrics
- Total Revenue
- Active Users
- Conversion Rate
- Churn Rate
- Customer Lifetime Value
- Average Order Value

### Charts
- Revenue trend over time
- User acquisition funnel
- Traffic sources
- Device breakdown
- Geographic distribution
- Product performance

### Export Options
- PDF Reports with selected metrics
- CSV for spreadsheet analysis
- Scheduled reports via email

## API Endpoints

- `GET /api/metrics` - Get all metrics
- `GET /api/metrics/:metric` - Get specific metric data
- `GET /api/reports` - Get saved reports
- `POST /api/reports/export` - Export report as PDF/CSV

## Customization

Edit dashboard metrics in `lib/constants.ts` to match your SaaS metrics.

## Deployment

Deploy to Vercel:
\`\`\`bash
vercel deploy
\`\`\`

## License

MIT
