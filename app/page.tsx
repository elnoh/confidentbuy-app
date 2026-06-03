'use client';

import { useState } from 'react';

interface AnalysisResult {
  confidenceScore: number;
  summary: string;
  pros: string[];
  cons: string[];
  recommendation: string;
  priceInsight?: string;
}

async function analyzeProduct(url: string): Promise<AnalysisResult> {
  const mockData = {
    reviewCount: 1247,
    avgRating: 4.3,
    recentSentiment: 0.78,
    fakeReviewRisk: 0.18,
    priceHistory: { current: 89, lowest30d: 72, avg: 95 },
    commonComplaints: ["runs small", "thin material"],
    commonPraise: ["comfortable", "good value"],
  };

  const reviewTrust = Math.round(
    (mockData.avgRating / 5) * 40 +
    (1 - mockData.fakeReviewRisk) * 30 +
    mockData.recentSentiment * 30
  );

  const value = Math.round(
    ((mockData.priceHistory.lowest30d / mockData.priceHistory.current) * 50) +
    (mockData.priceHistory.current < mockData.priceHistory.avg ? 50 : 30)
  );

  const qualitySignals = Math.round(
    (mockData.reviewCount > 500 ? 40 : 25) +
    ((5 - mockData.commonComplaints.length) * 12)
  );

  const confidenceScore = Math.min(100, Math.max(0, Math.round(
    (reviewTrust * 0.40) + (value * 0.25) + (qualitySignals * 0.20) + (70 * 0.15)
  )));

  return {
    confidenceScore,
    summary: "Good overall product with solid value. Some recent sizing concerns reported.",
    pros: ["Comfortable for daily wear", "Good price-to-quality ratio", "Fast shipping"],
    cons: ["Runs slightly small according to 27% of recent buyers", "Material feels thinner than expected"],
    recommendation: confidenceScore > 75
      ? "Strong buy — go for it (check sizing chart)"
      : "Proceed with caution — verify sizing before buying",
    priceInsight: `Currently $${mockData.priceHistory.current}. Best price in last 30 days was $${mockData.priceHistory.lowest30d}.`,
  };
}

export default function ConfidentBuyLanding() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleAnalyze = async () => {
    if (!url) return;
    setLoading(true);

    try {
      const analysis = await analyzeProduct(url);
      setResult(analysis);
    } catch (error) {
      console.error(error);
      alert("Something went wrong analyzing the product. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-3xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-sm mb-6">
          AI-Powered Shopping Intelligence
        </div>

        <h1 className="text-6xl font-semibold tracking-tighter mb-4">
          Buy with real<br />confidence.
        </h1>

        <p className="text-xl text-zinc-400 max-w-md mx-auto mb-10">
          Get instant analysis on reviews, value, quality signals, and personal fit before you buy.
        </p>

        <div className="flex gap-3 max-w-2xl mx-auto">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste any product URL (Amazon, eBay, etc.)"
            className="flex-1 bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-4 text-lg placeholder:text-zinc-500 focus:outline-none focus:border-white/30"
          />
          <button
            onClick={handleAnalyze}
            disabled={loading || !url}
            className="bg-white text-black px-8 rounded-2xl font-medium disabled:opacity-50 hover:bg-zinc-200 transition-colors"
          >
            {loading ? 'Analyzing...' : 'Analyze'}
          </button>
        </div>

        <p className="text-xs text-zinc-500 mt-3">
          Works with most major retailers • Private • No account needed to try
        </p>
      </div>

      {result && (
        <div className="max-w-2xl mx-auto px-6 pb-20">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <div className="flex items-baseline gap-4 mb-6">
              <div className="text-sm tracking-[2px] text-white/60">CONFIDENCE SCORE</div>
              <div className="text-7xl font-semibold tracking-tighter text-emerald-400">
                {result.confidenceScore}
              </div>
              <div className="text-white/60">/ 100</div>
            </div>

            <p className="text-lg mb-6">{result.summary}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <div className="text-emerald-400 font-medium mb-2">Pros</div>
                <ul className="space-y-1 text-sm text-zinc-300">
                  {result.pros.map((pro, i) => (
                    <li key={i}>• {pro}</li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-rose-400 font-medium mb-2">Cons</div>
                <ul className="space-y-1 text-sm text-zinc-300">
                  {result.cons.map((con, i) => (
                    <li key={i}>• {con}</li>
                  ))}
                </ul>
              </div>
            </div>

            {result.priceInsight && (
              <p className="text-sm text-zinc-400 mb-4">{result.priceInsight}</p>
            )}

            <div className="pt-6 border-t border-zinc-800 text-sm">
              <span className="text-white/60">Recommendation:</span>{" "}
              <span className="font-medium">{result.recommendation}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}