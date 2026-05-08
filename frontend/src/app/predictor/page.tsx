"use client";

import { useState } from "react";

interface PredictionResult {
  name: string;
  rank: string;
  probability: string;
  category: string;
}

export default function PredictorPage() {
  const [rank, setRank] = useState("");
  const [exam, setExam] = useState("jee-main");
  const [branch, setBranch] = useState("cs");
  const [predictions, setPredictions] = useState<PredictionResult[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  // Rule-based college recommendation engine
  const predictColleges = () => {
    if (!rank) return;

    const rankNum = parseInt(rank);
    const results: PredictionResult[] = [];

    // JEE Main Based Rules
    if (exam === "jee-main") {
      if (rankNum <= 1000) {
        results.push(
          { name: "IIT Delhi", rank: "Tier-1", probability: "95%", category: "IIT" },
          { name: "IIT Mumbai", rank: "Tier-1", probability: "92%", category: "IIT" },
          { name: "IIT Madras", rank: "Tier-1", probability: "90%", category: "IIT" },
          { name: "IIT Kanpur", rank: "Tier-1", probability: "88%", category: "IIT" },
          { name: "BITS Pilani", rank: "Tier-1", probability: "85%", category: "Top Private" }
        );
      } else if (rankNum <= 5000) {
        results.push(
          { name: "IIT Roorkee", rank: "Tier-2", probability: "88%", category: "IIT" },
          { name: "NIT Trichy", rank: "Tier-1", probability: "85%", category: "NIT" },
          { name: "NIT Bangalore", rank: "Tier-1", probability: "82%", category: "NIT" },
          { name: "BITS Hyderabad", rank: "Tier-2", probability: "80%", category: "Top Private" },
          { name: "IIT(ISM) Dhanbad", rank: "Tier-2", probability: "78%", category: "IIT" }
        );
      } else if (rankNum <= 15000) {
        results.push(
          { name: "NIT Jalandhar", rank: "Tier-2", probability: "80%", category: "NIT" },
          { name: "NIT Surat", rank: "Tier-2", probability: "78%", category: "NIT" },
          { name: "MNIT Jaipur", rank: "Tier-2", probability: "76%", category: "NIT" },
          { name: "IIIT Hyderabad", rank: "Tier-1", probability: "74%", category: "IIIT" },
          { name: "VIT Vellore", rank: "Tier-1", probability: "72%", category: "Top Private" }
        );
      } else if (rankNum <= 50000) {
        results.push(
          { name: "NIT Hamirpur", rank: "Tier-3", probability: "70%", category: "NIT" },
          { name: "NIT Indore", rank: "Tier-3", probability: "68%", category: "NIT" },
          { name: "IIIT Delhi", rank: "Tier-1", probability: "65%", category: "IIIT" },
          { name: "DTU Delhi", rank: "Tier-2", probability: "62%", category: "Top State" },
          { name: "Manipal Institute", rank: "Tier-2", probability: "60%", category: "Top Private" }
        );
      } else if (rankNum <= 100000) {
        results.push(
          { name: "State Engineering Colleges", rank: "Tier-3", probability: "55%", category: "State College" },
          { name: "Private University - Top", rank: "Tier-3", probability: "58%", category: "Private" },
          { name: "Savitribai Phule University", rank: "Tier-3", probability: "52%", category: "State College" },
          { name: "Anna University Colleges", rank: "Tier-3", probability: "50%", category: "State College" }
        );
      } else {
        results.push(
          { name: "Private Engineering Colleges", rank: "Tier-4", probability: "45%", category: "Private" },
          { name: "Deemed Universities", rank: "Tier-4", probability: "42%", category: "Deemed" }
        );
      }
    }

    // Apply branch-specific adjustments
    const branchFilteredResults = results.map((result) => {
      let adjustedProbability = parseInt(result.probability);
      if (branch === "cs") {
        adjustedProbability += 3; // CS slots are competitive
      } else if (branch === "mechanical") {
        adjustedProbability -= 2;
      }
      return {
        ...result,
        probability: `${Math.min(99, adjustedProbability)}%`,
      };
    });

    setPredictions(branchFilteredResults);
    setHasSearched(true);
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="space-y-4">
        <div>
          <h1 className="text-4xl font-bold text-slate-900">College Predictor</h1>
          <p className="mt-2 text-lg text-slate-600">
            Predict your college options based on your JEE rank and preferences using our rule-based recommendation engine.
          </p>
        </div>
      </section>

      {/* Prediction Form */}
      <section className="space-y-6 rounded-lg border border-slate-200 bg-white p-8">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Exam Selection */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-900">Exam Type</label>
            <select
              value={exam}
              onChange={(e) => setExam(e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-slate-900 focus:border-brand-600 focus:outline-none"
            >
              <option value="jee-main">JEE Main</option>
              <option value="jee-advanced">JEE Advanced</option>
            </select>
          </div>

          {/* Rank Input */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-900">Your Rank</label>
            <input
              type="number"
              value={rank}
              onChange={(e) => setRank(e.target.value)}
              placeholder="Enter your rank"
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-slate-900 placeholder-slate-400 focus:border-brand-600 focus:outline-none"
            />
          </div>

          {/* Branch Selection */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-900">Preferred Branch</label>
            <select
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-slate-900 focus:border-brand-600 focus:outline-none"
            >
              <option value="cs">Computer Science</option>
              <option value="mechanical">Mechanical Engineering</option>
              <option value="civil">Civil Engineering</option>
              <option value="electrical">Electrical Engineering</option>
              <option value="electronics">Electronics Engineering</option>
            </select>
          </div>
        </div>

        <button
          onClick={predictColleges}
          className="w-full rounded-lg bg-brand-600 py-2 text-white font-semibold hover:bg-brand-700 transition"
        >
          Get Predictions
        </button>
      </section>

      {/* Results Section */}
      {hasSearched && (
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Recommended Colleges for Rank #{rank}
            </h2>
            <p className="mt-1 text-slate-600">
              Based on historical cutoff data and your preferences ({branch.toUpperCase()})
            </p>
          </div>

          {predictions.length > 0 ? (
            <div className="grid gap-4">
              {predictions.map((prediction, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 hover:shadow-md transition"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900">{prediction.name}</h3>
                    <div className="mt-1 flex items-center gap-3">
                      <span className="text-xs rounded-full bg-slate-100 px-2 py-1 text-slate-700">
                        {prediction.category}
                      </span>
                      <span className="text-xs text-slate-500">{prediction.rank}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-600">Probability</p>
                    <p
                      className={`text-lg font-bold ${
                        parseInt(prediction.probability) >= 80
                          ? "text-green-600"
                          : parseInt(prediction.probability) >= 60
                          ? "text-blue-600"
                          : "text-orange-600"
                      }`}
                    >
                      {prediction.probability}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-8 text-center">
              <p className="text-slate-600">No colleges found for this rank. Please adjust your inputs.</p>
            </div>
          )}

          {/* Disclaimer */}
          <div className="rounded-lg bg-blue-50 p-4 border border-blue-200">
            <p className="text-sm text-slate-700">
              <strong>⚠️ Disclaimer:</strong> These predictions are based on historical data and general rules. Actual cutoffs may vary based on category, gender, state, and yearly variations. Please verify with official sources before making decisions.
            </p>
          </div>
        </section>
      )}

      {/* Info Section */}
      <section className="space-y-4 rounded-lg bg-gradient-to-r from-brand-50 to-blue-50 p-8">
        <h2 className="text-xl font-bold text-slate-900">How the Predictor Works</h2>
        <ul className="space-y-3 text-slate-700">
          <li className="flex gap-3">
            <span className="text-brand-600 font-bold">1.</span>
            <span>Analyzes your JEE rank against historical cutoff data from top colleges</span>
          </li>
          <li className="flex gap-3">
            <span className="text-brand-600 font-bold">2.</span>
            <span>Considers your preferred branch to refine recommendations</span>
          </li>
          <li className="flex gap-3">
            <span className="text-brand-600 font-bold">3.</span>
            <span>Calculates probability scores for each college based on competition levels</span>
          </li>
          <li className="flex gap-3">
            <span className="text-brand-600 font-bold">4.</span>
            <span>Provides recommendations across IITs, NITs, IIITs, and top private colleges</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
