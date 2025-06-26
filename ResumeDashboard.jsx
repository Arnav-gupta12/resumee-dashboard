import React from 'react';
import { BarChart, Bar, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Button, Card } from 'shadcn/ui'; // or swap with Headless UI if needed
import { motion } from 'framer-motion';
import { Upload, Download, RefreshCw, MessageSquare, BookOpen, CheckCircle, AlertCircle, FileText, TrendingUp, Users, Star, Heart, Lightbulb } from 'lucide-react';

// Dummy Data
const summary = {
  resumeScore: 87,
  communication: 85,
  readability: 90,
};

const metrics = [
  { label: 'ATS Compatibility', value: 'Yes', percent: 92, icon: <CheckCircle className="text-green-400" /> },
  { label: 'Keyword Match', value: '78%', icon: <TrendingUp className="text-blue-400" /> },
  { label: 'Experience Relevance', value: '80%', icon: <Users className="text-purple-400" /> },
  { label: 'Resume Length', value: '2 pages', icon: <FileText className="text-yellow-400" /> },
  { label: 'Action Verbs Used', value: 18, icon: <Star className="text-orange-400" /> },
  { label: 'Grammar Issues', value: 2, icon: <AlertCircle className="text-red-400" /> },
  { label: 'Read Time', value: '2 mins', icon: <BookOpen className="text-pink-400" /> },
];

const radarData = [
  { metric: 'Communication', score: 85 },
  { metric: 'Technical', score: 92 },
  { metric: 'Problem-Solving', score: 78 },
  { metric: 'Cultural Fit', score: 88 },
  { metric: 'Confidence', score: 82 },
];

const skillCategories = [
  { name: 'Technical', value: 40 },
  { name: 'Leadership', value: 20 },
  { name: 'Communication', value: 15 },
  { name: 'Management', value: 10 },
  { name: 'Other', value: 15 },
];
const skillColors = ['#a78bfa', '#f472b6', '#38bdf8', '#facc15', '#34d399'];

const resumeSummary = [
  'Led a team of 5 engineers to deliver a SaaS product on time.',
  'Improved system performance by 30% through code optimization.',
  'Collaborated with cross-functional teams to define project requirements.',
  'Mentored junior developers and conducted code reviews.',
];

const strengths = [
  'Strong technical background and leadership experience.',
  'Excellent communication and collaboration skills.',
  'Proactive in identifying and solving problems.',
];

const improvements = [
  'Add more quantifiable achievements.',
  'Reduce resume length to 1 page if possible.',
  'Address minor grammar issues.',
];

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function ResumeDashboard() {
  return (
    <div className="min-h-screen bg-[#181f2a] text-white px-4 py-8 font-sans">
      {/* Top Summary */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div variants={cardVariants} initial="initial" animate="animate" transition={{ delay: 0 }}>
            <Card className="bg-[#232b3b] rounded-xl shadow-lg p-6 flex flex-col items-center">
              <span className="text-2xl font-semibold mb-2">Resume Score</span>
              <span className="text-4xl font-bold text-blue-400">{summary.resumeScore}</span>
              <span className="text-gray-400 mt-2">/ 100</span>
            </Card>
          </motion.div>
          <motion.div variants={cardVariants} initial="initial" animate="animate" transition={{ delay: 0.1 }}>
            <Card className="bg-[#232b3b] rounded-xl shadow-lg p-6 flex flex-col items-center">
              <span className="flex items-center gap-2 text-2xl font-semibold mb-2"><MessageSquare className="w-6 h-6 text-blue-300" /> Communication</span>
              <span className="text-4xl font-bold text-blue-300">{summary.communication}</span>
              <span className="text-gray-400 mt-2">/ 100</span>
            </Card>
          </motion.div>
          <motion.div variants={cardVariants} initial="initial" animate="animate" transition={{ delay: 0.2 }}>
            <Card className="bg-[#232b3b] rounded-xl shadow-lg p-6 flex flex-col items-center">
              <span className="flex items-center gap-2 text-2xl font-semibold mb-2"><BookOpen className="w-6 h-6 text-green-300" /> Readability</span>
              <span className="text-4xl font-bold text-green-300">{summary.readability}</span>
              <span className="text-gray-400 mt-2">/ 100</span>
            </Card>
          </motion.div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {metrics.map((m, i) => (
            <motion.div key={m.label} variants={cardVariants} initial="initial" animate="animate" transition={{ delay: 0.1 * i }}>
              <Card className="bg-[#232b3b] rounded-xl shadow-lg p-5 flex flex-col items-center">
                <div className="mb-2">{m.icon}</div>
                <span className="font-semibold text-lg mb-1">{m.label}</span>
                <span className="text-2xl font-bold text-blue-200">{m.value}</span>
                {m.percent && (
                  <span className="text-green-400 text-sm mt-1">{m.percent}%</span>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Graphs Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <motion.div variants={cardVariants} initial="initial" animate="animate" transition={{ delay: 0.1 }}>
            <Card className="bg-[#232b3b] rounded-xl shadow-lg p-6">
              <span className="font-semibold text-lg mb-4 block">Key Metrics Comparison</span>
              <ResponsiveContainer width="100%" height={250}>
                <RadarChart data={radarData} outerRadius={90}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis dataKey="metric" stroke="#cbd5e1" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#64748b" />
                  <Radar name="Score" dataKey="score" stroke="#818cf8" fill="#818cf8" fillOpacity={0.5} />
                </RadarChart>
              </ResponsiveContainer>
            </Card>
          </motion.div>
          <motion.div variants={cardVariants} initial="initial" animate="animate" transition={{ delay: 0.2 }}>
            <Card className="bg-[#232b3b] rounded-xl shadow-lg p-6">
              <span className="font-semibold text-lg mb-4 block">Skill Category Distribution</span>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie data={skillCategories} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                    {skillCategories.map((entry, idx) => (
                      <Cell key={`cell-${idx}`} fill={skillColors[idx % skillColors.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </Card>
          </motion.div>
        </div>

        {/* Resume Summary Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <motion.div variants={cardVariants} initial="initial" animate="animate" transition={{ delay: 0.1 }}>
            <Card className="bg-[#232b3b] rounded-xl shadow-lg p-6 h-full">
              <span className="font-semibold text-lg mb-2 block flex items-center gap-2"><FileText className="w-5 h-5 text-blue-400" /> Extracted Bullet Points</span>
              <ul className="list-disc list-inside text-gray-200 mt-2 space-y-1">
                {resumeSummary.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </Card>
          </motion.div>
          <motion.div variants={cardVariants} initial="initial" animate="animate" transition={{ delay: 0.2 }}>
            <Card className="bg-[#232b3b] rounded-xl shadow-lg p-6 h-full">
              <span className="font-semibold text-lg mb-2 block flex items-center gap-2"><Heart className="w-5 h-5 text-pink-400" /> Strengths</span>
              <ul className="list-disc list-inside text-gray-200 mt-2 space-y-1">
                {strengths.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </Card>
          </motion.div>
          <motion.div variants={cardVariants} initial="initial" animate="animate" transition={{ delay: 0.3 }}>
            <Card className="bg-[#232b3b] rounded-xl shadow-lg p-6 h-full">
              <span className="font-semibold text-lg mb-2 block flex items-center gap-2"><Lightbulb className="w-5 h-5 text-yellow-300" /> Suggested Improvements</span>
              <ul className="list-disc list-inside text-gray-200 mt-2 space-y-1">
                {improvements.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-6">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-6 py-3 flex items-center gap-2 shadow-md transition-all duration-200">
            <Upload className="w-5 h-5" /> Upload Resume
          </Button>
          <Button className="bg-green-500 hover:bg-green-600 text-white rounded-lg px-6 py-3 flex items-center gap-2 shadow-md transition-all duration-200">
            <Download className="w-5 h-5" /> Download Report
          </Button>
          <Button className="bg-purple-500 hover:bg-purple-600 text-white rounded-lg px-6 py-3 flex items-center gap-2 shadow-md transition-all duration-200">
            <RefreshCw className="w-5 h-5" /> Reanalyze Resume
          </Button>
        </div>
      </div>
    </div>
  );
} 