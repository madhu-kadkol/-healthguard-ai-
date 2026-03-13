import React from 'react'

const Header = () => (
  <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
            <span className="text-2xl">🩺</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              HealthGuard AI
            </h1>
            <p className="text-white/80 text-sm">Personalized Risk Prediction</p>
          </div>
        </div>
        <div className="text-white/80">
          Hackathon MVP • Live Demo
        </div>
      </div>
    </div>
  </header>
)

export default Header
