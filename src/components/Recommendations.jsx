import React from 'react'

const Recommendations = ({ risks }) => {
  const getRecommendations = (risks) => {
    const recs = []
    
    if (risks.heart > 50) {
      recs.push("🏃‍♂️ Walk 30min daily → -15% heart risk")
      recs.push("💧 Drink 3L water daily")
    }
    
    if (risks.diabetes > 50) {
      recs.push("🥗 Eat 5 veggie servings → -20% diabetes risk")
      recs.push("🍭 Cut sugar <25g daily")
    }
    
    if (risks.obesity > 30) {
      recs.push("🥗 High protein diet")
      recs.push("💪 Strength training 3x/week")
    }
    
    recs.push("😴 Prioritize 7-8hrs sleep nightly")
    recs.push("🧘‍♀️ 10min meditation → -30% stress")
    
    return recs.slice(0, 5)
  }

  const recommendations = getRecommendations(risks)

  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
      <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
        🔥 Top Recommendations
      </h3>
      
      <div className="grid md:grid-cols-2 gap-4">
        {recommendations.map((rec, i) => (
          <div key={i} className="group bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30 hover:bg-white/30 transition-all hover:scale-105 hover:shadow-2xl">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-2xl">✓</span>
              </div>
              <div className="flex-1">
                <p className="text-white font-medium group-hover:text-emerald-100">{rec}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
