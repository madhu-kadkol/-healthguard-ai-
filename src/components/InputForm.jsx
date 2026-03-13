import React, { useState } from 'react'

const InputForm = ({ onSubmit, loading, demoData }) => {
  const [formData, setFormData] = useState({
    age: '', bmi: '', sleep: '', steps: '', stress: '', diet: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const loadDemo = () => {
    setFormData({
      age: demoData.age, bmi: demoData.bmi, 
      sleep: demoData.sleep, steps: demoData.steps,
      stress: demoData.stress, diet: demoData.diet
    })
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Enter Your Health Data
        </h2>
        
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-white/90 mb-2 font-medium">Age</label>
            <input
              type="number"
              value={formData.age}
              onChange={(e) => setFormData({...formData, age: e.target.value})}
              className="w-full p-4 bg-white/20 border border-white/30 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="35"
              required
            />
          </div>
          
          <div>
            <label className="block text-white/90 mb-2 font-medium">BMI</label>
            <input type="number" step="0.1" value={formData.bmi} onChange={(e) => setFormData({...formData, bmi: e.target.value})}
              className="w-full p-4 bg-white/20 border border-white/30 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="27.5" required />
          </div>
          
          <div>
            <label className="block text-white/90 mb-2 font-medium">Avg Sleep (hrs)</label>
            <input type="number" step="0.1" value={formData.sleep} onChange={(e) => setFormData({...formData, sleep: e.target.value})}
              className="w-full p-4 bg-white/20 border border-white/30 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="6.2" required />
          </div>
          
          <div>
            <label className="block text-white/90 mb-2 font-medium">Daily Steps</label>
            <input type="number" value={formData.steps} onChange={(e) => setFormData({...formData, steps: e.target.value})}
              className="w-full p-4 bg-white/20 border border-white/30 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="7500" required />
          </div>
          
          <div>
            <label className="block text-white/90 mb-2 font-medium">Stress (1-10)</label>
            <input type="number" min="1" max="10" value={formData.stress} onChange={(e) => setFormData({...formData, stress: e.target.value})}
              className="w-full p-4 bg-white/20 border border-white/30 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="7" required />
          </div>
          
          <div>
            <label className="block text-white/90 mb-2 font-medium">Diet Score (0-100)</label>
            <input type="number" min="0" max="100" value={formData.diet} onChange={(e) => setFormData({...formData, diet: e.target.value})}
              className="w-full p-4 bg-white/20 border border-white/30 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="65" required />
          </div>
        </form>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold py-4 px-8 rounded-2xl hover:from-emerald-600 hover:to-teal-700 transition-all shadow-2xl hover:shadow-emerald-500/25 disabled:opacity-50"
          >
            {loading ? 'Analyzing...' : '🔮 Predict My Risks'}
          </button>
          
          <button
            type="button"
            onClick={loadDemo}
            className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-2xl hover:bg-white/30 transition-all border border-white/30"
          >
            ⚡ Load Demo Data
          </button>
        </div>
      </div>
    </div>
  )
}

export default InputForm
