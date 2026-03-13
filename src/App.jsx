import React, { useState } from 'react'
import RiskDashboard from './components/RiskDashboard'
import InputForm from './components/InputForm'
import Recommendations from './components/Recommendations'
import Header from './components/Header'

function App() {
  const [userData, setUserData] = useState(null)
  const [risks, setRisks] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [step, setStep] = useState(1)

  const predictRisks = async (data) => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch('/api/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`)
      }
      const result = await response.json()
      setUserData(data)
      setRisks(result)
      setStep(2)
    } catch (err) {
      console.error('Prediction error:', err)
      setError('Failed to get predictions. Please make sure the API server is running (npm run api).')
    }
    setLoading(false)
  }

  const demoData = {
    age: 35, bmi: 27.5, sleep: 6.2, steps: 7500, stress: 7, diet: 65
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600">
      <Header />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {step === 1 && (
          <>
            <InputForm
              onSubmit={predictRisks}
              loading={loading}
              demoData={demoData}
            />
            {error && (
              <div className="max-w-2xl mx-auto mt-6">
                <div className="bg-red-500/20 backdrop-blur-sm border border-red-400/30 rounded-2xl p-4 text-red-100 text-center">
                  ⚠️ {error}
                </div>
              </div>
            )}
          </>
        )}

        {step === 2 && risks && (
          <div>
            <RiskDashboard risks={risks} userData={userData} />
            <Recommendations risks={risks} />
            <button
              onClick={() => { setStep(1); setError(null); }}
              className="mt-8 bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-2xl hover:bg-white/30 transition-all"
            >
              ← New Analysis
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
