import Link from "next/link";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "How to Choose the Right Engineering College",
    excerpt: "A comprehensive guide to selecting an engineering college that aligns with your career goals and aspirations.",
    content: "Choosing an engineering college is one of the most important decisions in your academic career. Consider factors like college rankings, specialization options, placement records, faculty expertise, and infrastructure. It's not just about the name, but the overall learning environment that suits your needs.",
    author: "Dr. Rajesh Kumar",
    date: "2026-05-01",
    readTime: "5 min read",
    category: "College Selection",
  },
  {
    id: 2,
    title: "Placement Trends in Top Engineering Universities",
    excerpt: "Explore the latest placement statistics, salary packages, and career opportunities across prominent engineering institutions.",
    content: "Recent data shows that placement trends have evolved significantly with the rise of technology sectors. Companies are now focusing on specialized skills in AI, cloud computing, and data science rather than traditional roles. We've seen average package increases of 15-20% for candidates with emerging tech skills.",
    author: "Priya Sharma",
    date: "2026-04-28",
    readTime: "6 min read",
    category: "Placements",
  },
  {
    id: 3,
    title: "Beyond Rankings: What Really Matters in College Selection",
    excerpt: "While rankings are important, there are other crucial factors that can significantly impact your college experience and career growth.",
    content: "College rankings are a good starting point, but don't tell the complete story. Factors like campus culture, alumni network, internship opportunities, research facilities, and location play equally important roles in shaping your college experience. Visit campuses, talk to current students and alumni to get a complete picture.",
    author: "Amit Verma",
    date: "2026-04-25",
    readTime: "7 min read",
    category: "Career Development",
  },
  {
    id: 4,
    title: "Engineering Specializations: Which One is Right for You?",
    excerpt: "Understand different engineering specializations and find the perfect fit for your interests and career aspirations.",
    content: "From BTech to specialized programs like AI Engineering, Robotics, or Data Science, the options are endless. Choose based on your interests, market demand, and personal goals. Research job market trends, salary potential, and growth opportunities in each specialization before making your decision.",
    author: "Dr. Meera Singh",
    date: "2026-04-22",
    readTime: "8 min read",
    category: "Academic Programs",
  },
  {
    id: 5,
    title: "Cracking the JEE: Preparation Strategy and Success Tips",
    excerpt: "Comprehensive guide to JEE Main and Advanced preparation with proven strategies and time management tips.",
    content: "JEE preparation requires systematic planning and consistent effort over months. With the right strategy and dedication, you can master even the toughest topics and emerge successful.",
    author: "Vikas Pandey",
    date: "2026-04-20",
    readTime: "9 min read",
    category: "Exam Preparation",
  },
  {
    id: 6,
    title: "How to Balance Academics and Extracurriculars in College",
    excerpt: "Master the art of balancing rigorous academics with enriching extracurricular activities for holistic development.",
    content: "College is the perfect time to develop well-rounded skills. Balance your academics with sports, clubs, cultural activities, and volunteering opportunities. This combination helps develop leadership, teamwork, and communication skills essential for career success.",
    author: "Prof. Neha Tiwari",
    date: "2026-04-18",
    readTime: "6 min read",
    category: "Student Life",
  },
  {
    id: 7,
    title: "Top Interview Tips for Engineering Placements",
    excerpt: "Practical advice and strategies to ace your engineering placement interviews and land your dream job.",
    content: "Preparation is key to successful interviews. Research the company thoroughly, practice technical questions, work on communication skills, and prepare compelling stories about your projects and experiences. Mock interviews can significantly boost your confidence.",
    author: "Rahul Singh",
    date: "2026-04-15",
    readTime: "7 min read",
    category: "Placements",
  },
  {
    id: 8,
    title: "Understanding College Cutoffs and Merit Lists",
    excerpt: "A complete guide to how college cutoffs work, how merit lists are prepared, and strategies to optimize your college selection.",
    content: "College cutoffs vary year by year based on number of applicants, difficulty level, and availability of seats. Understanding how cutoffs work helps you make informed decisions during the ranking selection process.",
    author: "Dr. Arun Kumar",
    date: "2026-04-12",
    readTime: "8 min read",
    category: "Admissions",
  },
  {
    id: 9,
    title: "The Role of Innovation and Research in Engineering College",
    excerpt: "Explore how innovation labs, research centers, and startup incubators are shaping modern engineering education.",
    content: "Modern engineering colleges are becoming innovation hubs. Research opportunities, patent filings, and incubator support help students develop entrepreneurial mindsets alongside technical excellence. Many successful startups have emerged from college incubators.",
    author: "Dr. Suresh Nair",
    date: "2026-04-10",
    readTime: "7 min read",
    category: "Academic Programs",
  },
  {
    id: 10,
    title: "Global Opportunities: International Internships and Exchange Programs",
    excerpt: "Discover how to leverage international internships and exchange programs for global exposure and career advancement.",
    content: "Many engineering colleges now offer international exchange programs, internships abroad, and global collaboration opportunities. These experiences provide valuable exposure to different work cultures and enhance your resume significantly.",
    author: "Priya Nambiar",
    date: "2026-04-08",
    readTime: "6 min read",
    category: "Career Development",
  },
  {
    id: 11,
    title: "Building a Strong College Profile: What Recruiters Look For",
    excerpt: "Understand what recruiters seek in engineering graduates and how to build a profile that stands out.",
    content: "Recruiters look beyond grades. Strong projects, internships, leadership experience, and communication skills make your profile stand out. Start building your profile from day one of college.",
    author: "Vikram Patel",
    date: "2026-04-05",
    readTime: "6 min read",
    category: "Career Guidance",
  },
  {
    id: 12,
    title: "Women in Engineering: Opportunities and Empowerment",
    excerpt: "Insights on opportunities available for women engineers and initiatives promoting inclusivity in engineering.",
    content: "The engineering industry is actively working towards greater diversity. Many colleges and companies offer scholarships, mentorship programs, and dedicated initiatives for women engineers, creating a more inclusive environment.",
    author: "Dr. Anjali Dutta",
    date: "2026-04-03",
    readTime: "7 min read",
    category: "Career Development",
  },
  {
    id: 13,
    title: "Emerging Tech Skills: AI, ML, and Blockchain - Why They Matter",
    excerpt: "Explore emerging technology domains and their relevance to modern engineering careers.",
    content: "AI, machine learning, blockchain, and IoT are reshaping industries. Engineers with these skills command premium packages. Many colleges now offer specializations in these areas during core curriculum or as electives.",
    author: "Tech Expert Rohit",
    date: "2026-04-01",
    readTime: "8 min read",
    category: "Academic Programs",
  },
  {
    id: 14,
    title: "Mental Health and Stress Management During College Years",
    excerpt: "Essential strategies for maintaining mental well-being and managing stress during competitive engineering college life.",
    content: "Engineering college can be stressful. Developing coping mechanisms, seeking support when needed, and maintaining a healthy lifestyle are crucial. Most colleges now offer counseling services and wellness programs for students.",
    author: "Dr. Pooja Sharma",
    date: "2026-03-30",
    readTime: "6 min read",
    category: "Student Life",
  },
  {
    id: 15,
    title: "From Campus to Career: Your First Engineering Job",
    excerpt: "Practical guide to transitioning from college life to your first engineering job in the corporate world.",
    content: "Your first job sets the tone for your career. Be prepared for real-world challenges, continue learning, build professional relationships, and embrace feedback. Your college learnings provide foundation, but continuous growth is essential.",
    author: "Arjun Kapoor",
    date: "2026-03-28",
    readTime: "7 min read",
    category: "Career Guidance",
  },
];

export default function ArticlesPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="space-y-4">
        <div>
          <h1 className="text-4xl font-bold text-slate-900">College Selection Insights</h1>
          <p className="mt-2 text-lg text-slate-600">
            Expert articles, guides, and tips to help you make informed decisions about your engineering college journey.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="grid gap-6">
        {articles.map((article) => (
          <article
            key={article.id}
            className="rounded-lg border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="inline-block rounded-full bg-brand-100 px-3 py-1 text-sm font-medium text-brand-700">
                    {article.category}
                  </span>
                  <span className="text-sm text-slate-500">{article.readTime}</span>
                </div>
                <h2 className="mt-3 text-2xl font-semibold text-slate-900 hover:text-brand-600 cursor-pointer">
                  {article.title}
                </h2>
                <p className="mt-2 text-slate-600">{article.excerpt}</p>
                <p className="mt-4 text-sm text-slate-500">
                  By {article.author} • {new Date(article.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <Link
                  href={`/articles/${article.id}`}
                  className="mt-4 inline-flex items-center text-brand-600 font-medium hover:text-brand-700"
                >
                  Read Article →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* CTA Section */}
      <section className="space-y-4 rounded-lg bg-gradient-to-r from-brand-50 to-brand-100 p-8">
        <h2 className="text-2xl font-bold text-slate-900">Start Your College Journey Today</h2>
        <p className="text-slate-600">
          Use CollegeCompass to explore colleges, compare options, and make the best decision for your future.
        </p>
        <div className="flex gap-4">
          <a
            href="/colleges"
            className="inline-block rounded-lg bg-brand-600 px-6 py-2 text-white font-medium hover:bg-brand-700 transition"
          >
            Explore Colleges
          </a>
          <a
            href="/predictor"
            className="inline-block rounded-lg border border-brand-600 px-6 py-2 text-brand-600 font-medium hover:bg-brand-50 transition"
          >
            Try Predictor
          </a>
        </div>
      </section>
    </div>
  );
}
