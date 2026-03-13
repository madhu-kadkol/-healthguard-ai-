import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const RiskDashboard = ({ risks, userData }) => {
  const chartData = {
    labels: ['Heart Disease', 'Diabetes', 'Obesity'],
    datasets: [{
      data: [risks.heart, risks.diabetes, risks.obesity],
      backgroundColor: [
        'rgba(239, 68, 68, 0.8)',   // Red
        'rgba(245, 158, 11, 0.8)',  // Orange  
        'rgba(34, 197, 94, 0.8)'    // Green
      ],
      borderColor: ['rgba(239, 68, 68, 1)', 'rgba(245, 158, 11, 1)', 'rgba(34, 197, 94, 1)'],
      borderWidth: 2,
    }]
  }

  const overallRisk = ((risks.heart + risks.diabetes + risks.obesity) / 3).toFixed(1)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
      {/* Risk Chart */}
      <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
          📊 Your Risk Profile
          <span className="ml-4 px-4 py-1 bg-white/20 rounded-full text-sm font-medium">
            Overall: {overallRisk}%
          </span>
        </h3>
        <div className="w-full h-80 flex items-center justify-center">
          <Doughnut data={chartData} options={{
            responsive: true,
            plugins: {
              legend: { position: 'bottom' }
            }
          }} />
        </div>
      </div>

      {/* Risk Cards */}
      <div className="space-y-4">
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-xl font-bold text-white">❤️ Heart Disease</h4>
              <p className="text-white/80 mt-1">{risks.heart}% Risk</p>
            </div>
            <div className={`text-3xl font-bold ${
              risks.heart < 30 ? 'text-emerald-400' :
              risks.heart < 60 ? 'text-amber-400' : 'text-red-400'
            }`}>
              {risks.heart}%
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-xl font-bold text-white">🍬 Diabetes</h4>
              <p className="text-white/80 mt-1">{risks.diabetes}% Risk</p>
            </div>
            <div className={`text-3xl font-bold ${
              risks.diabetes < 30 ? 'text-emerald-400' :
              risks.diabetes < 60 ? 'text-amber-400' : 'text-red-400'
            }`}>
              {risks.diabetes}%
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-xl font-bold text-white">⚖️ Obesity</h4>
              <p className="text-white/80 mt-1">{risks.obesity}% Risk</p>
            </div>
            <div className={`text-3xl font-bold ${
              risks.obesity < 30 ? 'text-emerald-400' :
              risks.obesity < 60 ? 'text-amber-400' : 'text-red-400'
            }`}>
              {risks.obesity}%
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RiskDashboard
