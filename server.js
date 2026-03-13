import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

// Health risk prediction endpoint
// Uses a rule-based algorithm as an MVP (can be replaced with a real ML model later)
app.post('/api/predict', (req, res) => {
    const { age, bmi, sleep, steps, stress, diet } = req.body

    // Validate input
    if (age == null || bmi == null || sleep == null || steps == null || stress == null || diet == null) {
        return res.status(400).json({ error: 'All fields are required: age, bmi, sleep, steps, stress, diet' })
    }

    // --- Heart Disease Risk ---
    let heart = 10
    if (age > 45) heart += 15
    else if (age > 35) heart += 8
    if (bmi > 30) heart += 15
    else if (bmi > 25) heart += 8
    if (stress > 7) heart += 12
    else if (stress > 5) heart += 6
    if (steps < 5000) heart += 10
    else if (steps < 8000) heart += 4
    if (sleep < 6) heart += 8
    if (diet < 40) heart += 10
    else if (diet < 60) heart += 5
    heart = Math.min(Math.max(Math.round(heart), 0), 100)

    // --- Diabetes Risk ---
    let diabetes = 8
    if (age > 50) diabetes += 12
    else if (age > 35) diabetes += 6
    if (bmi > 30) diabetes += 20
    else if (bmi > 25) diabetes += 10
    if (diet < 40) diabetes += 15
    else if (diet < 60) diabetes += 8
    if (steps < 5000) diabetes += 10
    else if (steps < 8000) diabetes += 4
    if (stress > 7) diabetes += 8
    if (sleep < 6) diabetes += 6
    diabetes = Math.min(Math.max(Math.round(diabetes), 0), 100)

    // --- Obesity Risk ---
    let obesity = 5
    if (bmi > 35) obesity += 30
    else if (bmi > 30) obesity += 20
    else if (bmi > 25) obesity += 10
    if (diet < 40) obesity += 15
    else if (diet < 60) obesity += 8
    if (steps < 5000) obesity += 15
    else if (steps < 8000) obesity += 6
    if (sleep < 6) obesity += 8
    if (stress > 7) obesity += 6
    obesity = Math.min(Math.max(Math.round(obesity), 0), 100)

    res.json({ heart, diabetes, obesity })
})

app.listen(PORT, () => {
    console.log(`✅ HealthGuard AI API server running on http://localhost:${PORT}`)
})
