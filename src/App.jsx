import React, { useState, useEffect } from 'react'
import RiskDashboard from './components/RiskDashboard'
import InputForm from './components/InputForm'
import Recommendations from './components/Recommendations'
import Header from './components/Header'

function App() {
  const [userData, setUserData] = useState(null)
  const [risks, setRisks] = useState(null)
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState(1)

  const predictRisks = async (data) => {
    setLoading(true)
    try {
      const response = await fetch('/api/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      const result = await response.json()
      setRisks(result)
      setStep(2)
    } catch (error) {
      console.error('Prediction error:', error)
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
          <InputForm 
            onSubmit={predictRisks}
            loading={loading}
            demoData={demoData}
          />
        )}
        
        {step === 2 && risks && (
          <div>
            <RiskDashboard risks={risks} userData={userData} />
            <Recommendations risks={risks} />
            <button 
              onClick={() => setStep(1)}
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
