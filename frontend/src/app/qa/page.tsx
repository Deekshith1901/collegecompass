"use client";

import { useState, useMemo } from "react";

interface Discussion {
  id: number;
  title: string;
  question: string;
  category: string;
  replies: number;
  views: number;
  author: string;
  timestamp: string;
  isPinned: boolean;
}

const discussions: Discussion[] = [
  {
    id: 1,
    title: "IIT vs BITS: Which is better for Computer Science?",
    question: "I've received offers from both IIT Delhi (CS) and BITS Pilani (CS). Which one should I choose? Please consider placement, academics, and campus life.",
    category: "College Comparison",
    replies: 24,
    views: 1250,
    author: "Ananya_2026",
    timestamp: "2 days ago",
    isPinned: true,
  },
  {
    id: 2,
    title: "How important are JEE Main vs Advanced scores?",
    question: "I scored well in JEE Main but got below the cutoff for JEE Advanced. Are there good colleges available through the Main score? What are my options?",
    category: "Admissions",
    replies: 18,
    views: 890,
    author: "Rohan_23",
    timestamp: "1 week ago",
    isPinned: true,
  },
  {
    id: 3,
    title: "Best colleges for Mechanical Engineering with 50k rank",
    question: "With an AIR of 50,000 in JEE Main, which colleges should I consider for Mechanical Engineering? Any suggestions on good options?",
    category: "College Selection",
    replies: 15,
    views: 620,
    author: "Priya_Mech",
    timestamp: "3 days ago",
    isPinned: false,
  },
  {
    id: 4,
    title: "How much do college placements really matter?",
    question: "I keep hearing about placement statistics, but is it really that important? Can I get a good job even from a lower-ranked college?",
    category: "Career Guidance",
    replies: 32,
    views: 1450,
    author: "Career_Curious",
    timestamp: "1 week ago",
    isPinned: false,
  },
  {
    id: 5,
    title: "NIT vs Private Colleges - What's your experience?",
    question: "Confused between NITs and top private colleges. What were your experiences? Please share pros and cons of both.",
    category: "College Comparison",
    replies: 28,
    views: 950,
    author: "StudentHelper",
    timestamp: "5 days ago",
    isPinned: false,
  },
  {
    id: 6,
    title: "Internship opportunities and how to make the most of them",
    question: "My college is starting internship season. How should I approach this? Which companies should I target? Any tips?",
    category: "Career Guidance",
    replies: 12,
    views: 540,
    author: "Intern_Seeker",
    timestamp: "4 days ago",
    isPinned: false,
  },
  {
    id: 7,
    title: "Fee comparison: Top IITs vs BITS vs VIT",
    question: "Can someone provide a fee breakdown for top IITs, BITS Pilani, and VIT? How does ROI compare across these institutions?",
    category: "College Comparison",
    replies: 22,
    views: 1100,
    author: "Budget_Conscious",
    timestamp: "6 days ago",
    isPinned: false,
  },
  {
    id: 8,
    title: "How to prepare for college interviews?",
    question: "I'm shortlisted for interviews at NIT Trichy and IIT Bombay. What kind of questions should I expect? Any tips to prepare?",
    category: "Admissions",
    replies: 19,
    views: 780,
    author: "Interview_Ready",
    timestamp: "1 week ago",
    isPinned: false,
  },
  {
    id: 9,
    title: "Best colleges for Civil Engineering outside top 10 NITs",
    question: "Looking for good civil engineering colleges outside the top NITs. Which ones have good infrastructure and placements?",
    category: "College Selection",
    replies: 14,
    views: 450,
    author: "Civil_Aspirant",
    timestamp: "5 days ago",
    isPinned: false,
  },
  {
    id: 10,
    title: "Hostel life and campus experience - Tell your stories",
    question: "What's the hostel life like at your college? Food, facilities, social life? Would love to hear your real experiences!",
    category: "Campus Life",
    replies: 45,
    views: 2300,
    author: "Campus_Explorer",
    timestamp: "3 days ago",
    isPinned: false,
  },
  {
    id: 11,
    title: "GATE preparation while in college - Is it worth it?",
    question: "Should I start preparing for GATE while still in my third year? How to balance college and GATE prep?",
    category: "Career Guidance",
    replies: 16,
    views: 620,
    author: "Future_MS",
    timestamp: "4 days ago",
    isPinned: false,
  },
  {
    id: 12,
    title: "Cutoff trends: Will they increase or decrease next year?",
    question: "Based on previous year trends, what do you think about cutoff predictions for next year's counseling? Any insights?",
    category: "Admissions",
    replies: 21,
    views: 980,
    author: "Data_Analyst",
    timestamp: "2 days ago",
    isPinned: false,
  },
  {
    id: 13,
    title: "Starting up right after B.Tech from college",
    question: "Anyone here planning to start a startup after completing B.Tech? What's your idea? How are you planning to fund it?",
    category: "Career Guidance",
    replies: 11,
    views: 520,
    author: "Startup_Dreams",
    timestamp: "6 days ago",
    isPinned: false,
  },
  {
    id: 14,
    title: "Faculty and research quality at different colleges",
    question: "How important is faculty quality and research opportunities during college selection? Which colleges excel in this?",
    category: "College Selection",
    replies: 17,
    views: 710,
    author: "Research_Minded",
    timestamp: "1 week ago",
    isPinned: false,
  },
  {
    id: 15,
    title: "International opportunities: Exchange, internships abroad",
    question: "Which colleges have international exchange programs or help with internships abroad? Share your experiences!",
    category: "Campus Life",
    replies: 13,
    views: 480,
    author: "Global_Explorer",
    timestamp: "5 days ago",
    isPinned: false,
  },
  {
    id: 16,
    title: "Sports and cultural activities - Finding the right balance",
    question: "How to balance academics with sports/cultural activities? Which college is best for overall development?",
    category: "Campus Life",
    replies: 25,
    views: 1320,
    author: "Balanced_Student",
    timestamp: "3 days ago",
    isPinned: false,
  },
];

export default function QAPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [showNewDiscussionModal, setShowNewDiscussionModal] = useState(false);
  const [newDiscussion, setNewDiscussion] = useState({
    title: "",
    question: "",
    category: "College Selection",
  });

  const categories = [
    "All Categories",
    "College Selection",
    "College Comparison",
    "Admissions",
    "Career Guidance",
    "Campus Life",
  ];

  const filteredDiscussions = useMemo(() => {
    return discussions.filter((discussion) => {
      const matchesSearch = discussion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        discussion.question.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All Categories" || discussion.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // Pinned discussions first, then sorted by views
  const sortedDiscussions = [...filteredDiscussions].sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;
    return b.views - a.views;
  });

  const handleStartDiscussion = () => {
    setShowNewDiscussionModal(true);
  };

  const handleSubmitDiscussion = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    alert("Thank you for your question! Your discussion will be posted after moderation.");
    setNewDiscussion({ title: "", question: "", category: "College Selection" });
    setShowNewDiscussionModal(false);
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="space-y-4">
        <div>
          <h1 className="text-4xl font-bold text-slate-900">Community Q&A</h1>
          <p className="mt-2 text-lg text-slate-600">
            Get answers to your college selection, admission, and career questions from our community.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="space-y-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <input
            type="text"
            placeholder="Search discussions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 rounded-lg border border-slate-200 bg-white px-4 py-2 text-slate-900 placeholder-slate-400 focus:border-brand-600 focus:outline-none"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-slate-900 focus:border-brand-600 focus:outline-none"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        {(searchTerm || selectedCategory !== "All Categories") && (
          <p className="text-sm text-slate-600">
            Found {sortedDiscussions.length} discussion{sortedDiscussions.length !== 1 ? "s" : ""}
            {searchTerm && ` matching "${searchTerm}"`}
            {selectedCategory !== "All Categories" && ` in "${selectedCategory}"`}
          </p>
        )}
      </section>

      {/* Discussions List */}
      <section className="space-y-4">
        {sortedDiscussions.length > 0 ? (
          sortedDiscussions.map((discussion) => (
            <div
              key={discussion.id}
              className={`rounded-lg border transition-all hover:shadow-md ${
                discussion.isPinned
                  ? "border-brand-300 bg-brand-50"
                  : "border-slate-200 bg-white"
              } p-5`}
            >
              <div className="space-y-3">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      {discussion.isPinned && (
                        <span className="text-sm font-semibold text-brand-600">📌 Pinned</span>
                      )}
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                        {discussion.category}
                      </span>
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-slate-900 hover:text-brand-600 cursor-pointer">
                      {discussion.title}
                    </h3>
                  </div>
                </div>

                {/* Question Preview */}
                <p className="text-slate-600 line-clamp-2">{discussion.question}</p>

                {/* Footer */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-slate-100">
                  <div className="flex gap-6 text-sm text-slate-500">
                    <span className="flex items-center gap-1">
                      💬 {discussion.replies} {discussion.replies === 1 ? "reply" : "replies"}
                    </span>
                    <span className="flex items-center gap-1">
                      👁️ {discussion.views} {discussion.views === 1 ? "view" : "views"}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span>By {discussion.author}</span>
                    <span>•</span>
                    <span>{discussion.timestamp}</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-8 text-center">
            <p className="text-slate-600">No discussions found. Try adjusting your search or filters.</p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="space-y-4 rounded-lg bg-gradient-to-r from-slate-50 to-slate-100 p-8 text-center">
        <h2 className="text-2xl font-bold text-slate-900">Have a Question?</h2>
        <p className="text-slate-600">
          Join the community discussion and get help from students and experts.
        </p>
        <button
          onClick={handleStartDiscussion}
          className="inline-block rounded-lg bg-brand-600 px-6 py-2 text-white font-medium hover:bg-brand-700 transition"
        >
          Start a Discussion
        </button>
      </section>

      {/* New Discussion Modal */}
      {showNewDiscussionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Start a New Discussion</h3>
                <p className="text-sm text-slate-600">Share your question with the community</p>
              </div>

              <form onSubmit={handleSubmitDiscussion} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Title</label>
                  <input
                    type="text"
                    required
                    value={newDiscussion.title}
                    onChange={(e) => setNewDiscussion({ ...newDiscussion, title: e.target.value })}
                    className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-slate-900 focus:border-brand-600 focus:outline-none"
                    placeholder="What's your question?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">Category</label>
                  <select
                    value={newDiscussion.category}
                    onChange={(e) => setNewDiscussion({ ...newDiscussion, category: e.target.value })}
                    className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-slate-900 focus:border-brand-600 focus:outline-none"
                  >
                    {categories.filter(cat => cat !== "All Categories").map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">Question Details</label>
                  <textarea
                    required
                    rows={4}
                    value={newDiscussion.question}
                    onChange={(e) => setNewDiscussion({ ...newDiscussion, question: e.target.value })}
                    className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-slate-900 focus:border-brand-600 focus:outline-none"
                    placeholder="Provide more details about your question..."
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    type="submit"
                    className="flex-1 rounded-lg bg-brand-600 px-4 py-2 text-white font-medium hover:bg-brand-700 transition"
                  >
                    Post Discussion
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowNewDiscussionModal(false)}
                    className="flex-1 rounded-lg border border-slate-200 px-4 py-2 text-slate-700 font-medium hover:bg-slate-50 transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
