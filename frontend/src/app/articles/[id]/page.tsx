"use client";

import Link from "next/link";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  fullContent: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}

const articlesData: Article[] = [
  {
    id: 1,
    title: "How to Choose the Right Engineering College",
    excerpt: "A comprehensive guide to selecting an engineering college that aligns with your career goals and aspirations.",
    content: "Choosing an engineering college is one of the most important decisions in your academic career.",
    fullContent: `Choosing an engineering college is one of the most important decisions in your academic career. This decision can shape your professional trajectory, personal growth, and network for years to come.

## Key Factors to Consider

When evaluating engineering colleges, consider the following factors:

1. College Rankings and Reputation: Rankings provide a good starting point, but they don't tell the complete story. Research both national and international rankings, but also look at specialization-specific rankings.

 2. Academics and Faculty:
Check the faculty's research credentials, publications, and real-world experience. Look for faculty members who are industry veterans or active researchers.

 3. Placement Records:
Examine placement statistics, average packages, and where graduates are placed. Check company preferences and job profiles offered.

 4. Infrastructure and Facilities:
Visit the campus if possible. Evaluate laboratories, computing facilities, libraries, hostels, and other amenities.

5. Specialization Options:
Ensure the college offers specializations that align with your interests. Check the quality of electives and project opportunities.

 6. Campus Culture and Community:
A vibrant campus life contributes significantly to your overall development. Look for active clubs, competitions, and collaborative learning opportunities.

 7. Cost and Financial Aid:
Compare fees, scholarships, and financial aid packages. Consider the overall ROI of your engineering degree.

## Making the Final Decision

Visit the campus, talk to current students and alumni, and trust your instincts. The right college is one where you feel you can grow both academically and personally.`,
    author: "Dr. Rajesh Kumar",
    date: "2026-05-01",
    readTime: "5 min read",
    category: "College Selection",
  },
  {
    id: 2,
    title: "Placement Trends in Top Engineering Universities",
    excerpt: "Explore the latest placement statistics, salary packages, and career opportunities across prominent engineering institutions.",
    content: "Recent data shows that placement trends have evolved significantly with the rise of technology sectors.",
    fullContent: `Recent data shows that placement trends have evolved significantly with the rise of technology sectors. Companies are now focusing on specialized skills in AI, cloud computing, and data science rather than traditional roles.

## Key Placement Trends

 Rising Demand for Tech Skills:
AI, machine learning, and data science roles are commanding the highest salary packages. Cloud engineering and DevOps positions are also in high demand.

 Internship to Full-Time Conversion:
Many companies are converting strong interns to full-time positions, with enhanced offers.

 Diversity in Recruiters:
Beyond traditional IT companies, sectors like fintech, automotive, and manufacturing are actively recruiting engineers from top colleges.

 Package Growth:
We've seen average package increases of 15-20% for candidates with emerging tech skills. However, salary distribution is becoming more skewed with specialized roles commanding premium packages.

## Tips for Better Placements

1. Build relevant projects during your college years
2. Participate in internships and gain real-world experience
3. Develop both technical and soft skills
4. Network with alumni and industry professionals
5. Focus on specialized skills that are in demand

The engineering job market is constantly evolving, and staying updated with industry trends is crucial for securing good placements.`,
    author: "Priya Sharma",
    date: "2026-04-28",
    readTime: "6 min read",
    category: "Placements",
  },
  {
    id: 3,
    title: "Beyond Rankings: What Really Matters in College Selection",
    excerpt: "While rankings are important, there are other crucial factors that can significantly impact your college experience and career growth.",
    content: "College rankings are a good starting point, but don't tell the complete story.",
    fullContent: `College rankings are a good starting point, but don't tell the complete story. Factors like campus culture, alumni network, internship opportunities, research facilities, and location play equally important roles in shaping your college experience.

## Beyond the Rankings

 Alumni Network:
A strong alumni network opens doors for internships, placements, and mentorship opportunities. Check the prominence of alumni in various industries.

 Research Opportunities:
If research interests you, look for colleges with active research centers and publications. Faculty collaborations can lead to innovative projects.

 Industry Partnerships:
Colleges with strong industry ties offer better internship opportunities and real-world project experience.

 Location Advantage:
College location impacts access to industry hubs, internship opportunities, and networking events. Cities with tech hubs or industrial clusters are advantageous.

 Student Diversity:
A diverse student body brings different perspectives and creates a richer learning environment.

## The Campus Experience

Visit campuses, talk to current students and alumni to get a complete picture. Ask about:
- Student life and extracurricular activities
- Hostel facilities and food
- Library and computing resources
- Industry visit frequency
- Mentorship and guidance availability

Remember, the best college is one where you feel you can thrive academically and personally.`,
    author: "Amit Verma",
    date: "2026-04-25",
    readTime: "7 min read",
    category: "Career Development",
  },
  {
    id: 4,
    title: "Engineering Specializations: Which One is Right for You?",
    excerpt: "Understand different engineering specializations and find the perfect fit for your interests and career aspirations.",
    content: "From BTech to specialized programs like AI Engineering, Robotics, or Data Science, the options are endless.",
    fullContent: `From BTech to specialized programs like AI Engineering, Robotics, or Data Science, the options are endless. Choosing the right specialization is crucial for your career satisfaction and success.

## Popular Engineering Specializations

Computer Science & AI: 
High demand, excellent placement packages, and diverse career paths. Covers software development, web development, AI, machine learning, and more.

 Mechanical Engineering:
Diverse opportunities across automotive, manufacturing, aerospace, and mechanical systems. Good balance between theory and practical application.

 Civil Engineering:
Essential for infrastructure projects. Opportunities in construction, transportation, and urban development.

 Electrical Engineering:
Critical for power systems, renewable energy, and electrical systems. Growing opportunities in renewable energy sector.

 Electronics & Communication:
Foundation for telecommunications, embedded systems, and consumer electronics.

 Data Science & Analytics:
Emerging specialization with explosive growth. High-paying roles and multiple industry applications.

## How to Choose

1. Assess your interests and strengths
2. Research market demand and salary trends
3. Check curriculum and facility availability
4. Talk to seniors and professionals in the field
5. Consider long-term career goals

## Future-Ready Skills

Whichever specialization you choose, ensure you also develop:
- Problem-solving skills
- Programming proficiency
- Communication abilities
- Team collaboration
- Continuous learning mindset

Choose a specialization that aligns with both your passion and market demand.`,
    author: "Dr. Meera Singh",
    date: "2026-04-22",
    readTime: "8 min read",
    category: "Academic Programs",
  },
  {
    id: 5,
    title: "Cracking the JEE: Preparation Strategy and Success Tips",
    excerpt: "Comprehensive guide to JEE Main and Advanced preparation with proven strategies and time management tips.",
    content: "JEE preparation requires systematic planning and consistent effort over months.",
    fullContent: `JEE preparation requires systematic planning and consistent effort over months. With the right strategy and dedication, you can crack even the toughest exams.

## Preparation Strategy

Phase 1: Foundation Building (Months 1-3)
- Complete NCERT thoroughly
- Build strong conceptual foundation
- Practice basic problems
- Identify weak areas

 Phase 2: Advanced Learning (Months 4-6)
- Study advanced topics and problem-solving techniques
- Work through reference books
- Practice tougher problems
- Start taking mock tests

Phase 3: Refinement (Months 7-12)
- Take full-length practice tests
- Analyze weak areas
- Revise formulae and concepts
- Practice time management

## Success Tips

1. Consistency is Key: Study regularly rather than cramming
2. Practice Problems: Solve PYQs and mock tests regularly
3. Time Management: Allocate time for each subject strategically
4. Health and Wellness: Don't neglect sleep, exercise, and mental health
5. Doubt Clearing: Address doubts immediately
6. Revision: Regular revision of important concepts

## Mental Preparation

- Build confidence gradually
- Stay positive despite setbacks
- Use successful people as inspiration
- Practice mindfulness and stress management
- Maintain work-life balance

The key to success in JEE is not just hard work, but smart work combined with consistency and determination.`,
    author: "Vikas Pandey",
    date: "2026-04-20",
    readTime: "9 min read",
    category: "Exam Preparation",
  },
  {
    id: 6,
    title: "How to Balance Academics and Extracurriculars in College",
    excerpt: "Master the art of balancing rigorous academics with enriching extracurricular activities for holistic development.",
    content: "College is the perfect time to develop well-rounded skills.",
    fullContent: `College is the perfect time to develop well-rounded skills. Balance your academics with sports, clubs, cultural activities, and volunteering opportunities. This combination helps develop leadership, teamwork, and communication skills essential for career success.

## The Importance of Balance

 Academic Excellence:
Strong academics provide the foundation for your career. Maintain good grades while pursuing other interests.

 Extracurricular Activities:
Participate in clubs, sports, cultural events, and volunteering. These activities develop soft skills and enhance your resume.

 Leadership Development:
Take leadership roles in clubs or organizations. This builds confidence and management skills.

## Time Management Strategies

1. Create a Schedule: Plan your week in advance
2. Prioritize Tasks: Focus on high-impact activities
3. Learn to Say No: Don't overcommit yourself
4. Use Productivity Tools: Apps and planners help stay organized
5. Take Breaks: Rest is essential for productivity

## Benefits of Holistic Development

- Better job prospects with diverse skill sets
- Improved mental health and stress management
- Enhanced networking opportunities
- Personal growth and self-discovery
- Higher overall satisfaction with college life

Remember, college is not just about grades. It's about becoming a well-rounded individual ready for the professional world.`,
    author: "Prof. Neha Tiwari",
    date: "2026-04-18",
    readTime: "6 min read",
    category: "Student Life",
  },
  {
    id: 7,
    title: "Top Interview Tips for Engineering Placements",
    excerpt: "Practical advice and strategies to ace your engineering placement interviews and land your dream job.",
    content: "Preparation is key to successful interviews.",
    fullContent: `Preparation is key to successful interviews. Research the company thoroughly, practice technical questions, work on communication skills, and prepare compelling stories about your projects and experiences. Mock interviews can significantly boost your confidence.

## Interview Preparation

 Technical Preparation
- Review core engineering concepts
- Practice coding problems (for CS students)
- Prepare for domain-specific questions
- Work on problem-solving approaches

 Communication Skills
- Practice clear and concise answers
- Work on body language and confidence
- Prepare the STAR method for behavioral questions
- Practice active listening

 Company Research
- Understand company culture and values
- Research recent projects and achievements
- Prepare questions for the interviewer
- Understand the role requirements

## Common Interview Types

 Technical Interviews: 
Focus on problem-solving and technical knowledge. Practice whiteboard coding and system design questions.

 HR Interviews:
Focus on cultural fit, motivation, and career goals. Prepare stories that demonstrate your values and aspirations.

Case Study Interviews:
Common in consulting roles. Practice analyzing business problems and presenting solutions.

## Success Tips

1. Practice Mock Interviews: Regular practice builds confidence
2. Get Feedback: Learn from each interview experience
3. Stay Updated: Keep up with industry trends
4. Network: Connect with professionals in these fields
5. Follow Up: Send thank-you notes after interviews

Remember, interviews are a two-way street. You're also evaluating if the company is right for you.`,
    author: "Rahul Singh",
    date: "2026-04-15",
    readTime: "7 min read",
    category: "Placements",
  },
  {
    id: 8,
    title: "Understanding College Cutoffs and Merit Lists",
    excerpt: "A complete guide to how college cutoffs work, how merit lists are prepared, and strategies to optimize your college selection.",
    content: "College cutoffs vary year by year based on number of applicants, difficulty level, and availability of seats.",
    fullContent: `College cutoffs vary year by year based on number of applicants, difficulty level, and availability of seats. Understanding how cutoffs work helps you make informed decisions during the ranking selection process.

## How Cutoffs Are Determined

 Factors Affecting Cutoffs
- Number of applicants and their performance
- Difficulty level of the exam
- Number of available seats
- Category-wise reservations
- Previous year trends

 Opening and Closing Ranks
- Opening rank: Highest rank that got admission
- Closing rank: Lowest rank that got admission
- Your rank should be better than the closing rank

## Merit List Preparation

 JoSAA Counseling Process
- Centralized counseling for IITs, NITs, IIITs, and GFTIs
- Multiple rounds of seat allotment
- Choice filling and locking process
- Upgradation and sliding options

 State-Level Counseling
- Separate counseling for state colleges
- State-specific eligibility criteria
- Home state quotas and reservations

## Strategies for Better Choices

1. Research Thoroughly: Understand cutoff trends
2. Keep Options Open: Apply to multiple categories
3. Choice Filling Strategy: Balance preferences with reality
4. Backup Options: Have safety colleges in mind
5. Stay Updated: Monitor counseling notifications

## Important Dates and Deadlines

- Regular monitoring of official websites
- Timely choice filling and locking
- Document verification processes
- Fee payment deadlines

Understanding the counseling process helps you make better decisions and secure admission in your preferred college.`,
    author: "Dr. Arun Kumar",
    date: "2026-04-12",
    readTime: "8 min read",
    category: "Admissions",
  },
  {
    id: 9,
    title: "The Role of Innovation and Research in Engineering College",
    excerpt: "Explore how innovation labs, research centers, and startup incubators are shaping modern engineering education.",
    content: "Modern engineering colleges are becoming innovation hubs.",
    fullContent: `Modern engineering colleges are becoming innovation hubs. Research opportunities, patent filings, and incubator support help students develop entrepreneurial mindsets alongside technical excellence. Many successful startups have emerged from college incubators.

## Innovation Ecosystem

 Research Centers
- Interdisciplinary research facilities
- Collaboration with industry partners
- Access to advanced equipment and funding
- Publication opportunities in reputed journals

 Innovation Labs
- Prototyping and testing facilities
- Access to cutting-edge technology
- Mentorship from industry experts
- Project-based learning opportunities

 Startup Incubators
- Idea validation and development support
- Funding opportunities and seed capital
- Mentorship from successful entrepreneurs
- Networking with investors and industry leaders

## Benefits for Students

 Skill Development
- Hands-on experience with real-world problems
- Exposure to emerging technologies
- Entrepreneurial thinking and innovation
- Research methodology and publication skills

 Career Opportunities
- Better placement prospects
- Startup opportunities
- Research positions in academia and industry
- Higher salary packages for innovative profiles

## Getting Involved

1. Join Research Projects: Work with faculty on ongoing research
2. Participate in Competitions: Innovation challenges and hackathons
3. Use Incubator Facilities: Develop your startup ideas
4. Attend Workshops: Learn about latest technologies and trends
5. Network: Connect with researchers and entrepreneurs

Innovation and research are becoming integral parts of engineering education, preparing students for the future.`,
    author: "Dr. Suresh Nair",
    date: "2026-04-10",
    readTime: "7 min read",
    category: "Academic Programs",
  },
  {
    id: 10,
    title: "Global Opportunities: International Internships and Exchange Programs",
    excerpt: "Discover how to leverage international internships and exchange programs for global exposure and career advancement.",
    content: "Many engineering colleges now offer international exchange programs, internships abroad, and global collaboration opportunities.",
    fullContent: `Many engineering colleges now offer international exchange programs, internships abroad, and global collaboration opportunities. These experiences provide valuable exposure to different work cultures and enhance your resume significantly.

## International Opportunities

 Exchange Programs
- Semester abroad at partner universities
- Credit transfer facilities
- Cultural immersion experiences
- Language learning opportunities

 International Internships
- Summer internships at global companies
- Research internships at foreign universities
- Virtual international projects
- Cross-cultural collaboration

 Global Competitions
- International hackathons and competitions
- Global design challenges
- International conferences and seminars
- Cross-border project collaborations

## Benefits of Global Exposure

 Career Advantages
- Enhanced resume with international experience
- Better job prospects with global companies
- Improved communication and adaptability skills
- Networking with international professionals

 Personal Growth
- Cultural awareness and sensitivity
- Independence and self-reliance
- Language skills and global perspective
- Broader worldview and understanding

## How to Get Started

1. Check College Programs: See what international opportunities your college offers
2. Research Requirements: Understand eligibility criteria and application processes
3. Language Preparation: Learn basic phrases in the host country's language
4. Cultural Research: Understand local customs and business etiquette
5. Financial Planning: Explore scholarships and funding options

## Popular Destinations

- USA, UK, Germany for technology and research
- Singapore, Japan for Asian business culture
- Australia, Canada for quality education and work experience
- European countries for cultural and historical exposure

International experiences can be transformative, opening doors to global career opportunities.`,
    author: "Priya Nambiar",
    date: "2026-04-08",
    readTime: "6 min read",
    category: "Career Development",
  },
  {
    id: 11,
    title: "Building a Strong College Profile: What Recruiters Look For",
    excerpt: "Understand what recruiters seek in engineering graduates and how to build a profile that stands out.",
    content: "Recruiters look beyond grades. Strong projects, internships, leadership experience, and communication skills make your profile stand out.",
    fullContent: `Recruiters look beyond grades. Strong projects, internships, leadership experience, and communication skills make your profile stand out. Start building your profile from day one of college.

## What Recruiters Value

 Academic Performance
- Consistent good grades
- Relevant coursework and specializations
- Academic projects and research work
- Technical certifications and online courses

Practical Experience
- Internships and work experience
- Personal projects and portfolio
- Open source contributions
- Freelance work and consulting

 Leadership and Extracurriculars
- Leadership roles in clubs and organizations
- Sports and cultural achievements
- Community service and volunteering
- Event organization experience

 Soft Skills
- Communication and presentation skills
- Teamwork and collaboration
- Problem-solving abilities
- Adaptability and learning agility

## Building Your Profile

 Freshman Year
- Focus on academics and basic skills
- Join clubs and societies
- Learn programming and technical skills
- Build a strong GPA foundation

 Sophomore Year
- Take on leadership roles
- Start working on projects
- Apply for internships
- Develop communication skills

 Junior Year
- Focus on specialized skills
- Work on major projects
- Seek research opportunities
- Build industry connections

 Senior Year
- Prepare for placements
- Complete major projects
- Network extensively
- Focus on job applications

## Showcasing Your Profile

1. Resume: Clear, concise, and achievement-oriented
2. LinkedIn: Professional online presence
3. Portfolio: Showcase your work and projects
4. GitHub: Code repositories and contributions
5. Personal Website: Comprehensive profile showcase

Remember, a strong profile is built consistently over four years, not just during placement season.`,
    author: "Vikram Patel",
    date: "2026-04-05",
    readTime: "6 min read",
    category: "Career Guidance",
  },
  {
    id: 12,
    title: "Women in Engineering: Opportunities and Empowerment",
    excerpt: "Insights on opportunities available for women engineers and initiatives promoting inclusivity in engineering.",
    content: "The engineering industry is actively working towards greater diversity.",
    fullContent: `The engineering industry is actively working towards greater diversity. Many colleges and companies offer scholarships, mentorship programs, and dedicated initiatives for women engineers, creating a more inclusive environment.

## Opportunities for Women in Engineering

 Educational Support
- Scholarships and financial aid specifically for women
- Mentorship programs connecting students with successful women engineers
- Women-focused engineering societies and clubs
- Leadership development programs

 Industry Initiatives
- Diversity hiring programs at major companies
- Women employee resource groups
- Flexible work arrangements and parental support
- Career advancement opportunities

 Networking Opportunities
- Women in Engineering conferences and events
- Professional associations and communities
- Alumni networks for women engineers
- Cross-industry collaboration platforms

## Challenges and Solutions

 Common Challenges
- Work-life balance concerns
- Lack of female role models
- Gender bias in workplace
- Limited networking opportunities

 Overcoming Barriers
- Building confidence through achievements
- Seeking mentorship and guidance
- Developing strong technical and soft skills
- Creating support networks

## Success Stories

Many women engineers have broken barriers and achieved great success in various fields:
- Technology leaders and CEOs
- Research scientists and professors
- Entrepreneurs and startup founders
- Engineering consultants and experts

## Future Outlook

The engineering field is becoming increasingly inclusive, with more opportunities for women to excel and lead. Initiatives at educational institutions and companies are creating pathways for success and ensuring diverse representation in the field.

## Getting Started

1. Join Women Engineering Groups: Connect with like-minded peers
2. Seek Mentorship: Find mentors who can guide your career
3. Build Skills: Focus on both technical and leadership skills
4. Network Actively: Attend conferences and industry events
5. Stay Confident: Believe in your abilities and pursue your goals

The future of engineering is diverse and inclusive, with women playing increasingly important roles in shaping technology and innovation.`,
    author: "Dr. Anjali Dutta",
    date: "2026-04-03",
    readTime: "7 min read",
    category: "Career Development",
  },
  {
    id: 13,
    title: "Emerging Tech Skills: AI, ML, and Blockchain - Why They Matter",
    excerpt: "Explore emerging technology domains and their relevance to modern engineering careers.",
    content: "AI, machine learning, blockchain, and IoT are reshaping industries.",
    fullContent: `AI, machine learning, blockchain, and IoT are reshaping industries. Engineers with these skills command premium packages. Many colleges now offer specializations in these areas during core curriculum or as electives.

## Emerging Technologies

 Artificial Intelligence & Machine Learning
- Core concepts: algorithms, neural networks, deep learning
- Applications: automation, predictive analytics, computer vision
- Career paths: ML engineer, AI researcher, data scientist
- Salary potential: High demand with premium packages

 Blockchain Technology
- Understanding distributed ledgers and smart contracts
- Applications: cryptocurrency, supply chain, healthcare
- Career opportunities: Blockchain developer, crypto analyst
- Industry adoption: Growing rapidly across sectors

 Internet of Things (IoT)
- Connecting physical devices to digital networks
- Applications: smart homes, industrial automation, healthcare
- Skills needed: Embedded systems, sensor networks, cloud computing
- Career growth: IoT solutions architect, embedded engineer

 Cloud Computing & DevOps
- Cloud platforms: AWS, Azure, GCP
- DevOps practices: CI/CD, containerization, monitoring
- Career roles: Cloud architect, DevOps engineer
- Industry demand: Almost every tech company needs these skills

## Why These Skills Matter

 Market Demand
- Tech companies are hiring specialists in these areas
- Traditional roles are evolving to include these technologies
- New job categories are emerging regularly

 Salary Premium
- AI/ML engineers command 30-50% higher salaries
- Blockchain specialists earn premium packages
- Cloud experts are in high demand globally

 Future-Proofing
- These technologies are here to stay
- Continuous learning and upskilling is essential
- Adaptability is key in the tech industry

## Learning Pathways

Self-Learning
- Online courses on Coursera, Udemy, edX
- YouTube tutorials and documentation
- Personal projects and experimentation
- Open source contributions

 College Programs
- Specialized electives and minors
- Research projects in emerging tech
- Industry collaborations and internships
- Certification programs

 Practical Experience
- Build personal projects and portfolios
- Contribute to open source projects
- Participate in hackathons and competitions
- Seek internships in relevant domains

## Getting Started

1. Choose Your Focus: Pick one or two technologies to specialize in
2. Build Foundations: Learn programming and basic concepts
3. Hands-on Practice: Work on real projects and applications
4. Stay Updated: Follow industry trends and new developments
5. Network: Connect with professionals in these fields

Emerging technologies offer exciting career opportunities. Start learning today to stay ahead in the competitive job market.`,
    author: "Tech Expert Rohit",
    date: "2026-04-01",
    readTime: "8 min read",
    category: "Academic Programs",
  },
  {
    id: 14,
    title: "Mental Health and Stress Management During College Years",
    excerpt: "Essential strategies for maintaining mental well-being and managing stress during competitive engineering college life.",
    content: "Engineering college can be stressful. Developing coping mechanisms, seeking support when needed, and maintaining a healthy lifestyle are crucial.",
    fullContent: `Engineering college can be stressful. Developing coping mechanisms, seeking support when needed, and maintaining a healthy lifestyle are crucial. Most colleges now offer counseling services and wellness programs for students.

## Understanding College Stress

 Common Stressors
- Academic pressure and exams
- Placement anxiety and career concerns
- Social and relationship challenges
- Financial worries and family expectations
- Time management and workload issues

 Signs of Stress
- Difficulty concentrating and poor academic performance
- Sleep disturbances and fatigue
- Mood swings and irritability
- Loss of interest in activities
- Physical symptoms like headaches and stomach issues

## Stress Management Strategies

 Time Management
- Create realistic schedules and study plans
- Break large tasks into smaller, manageable chunks
- Use productivity techniques like Pomodoro
- Learn to delegate when appropriate

 Healthy Lifestyle
- Regular exercise and physical activity
- Balanced diet and proper nutrition
- Adequate sleep (7-8 hours daily)
- Avoid excessive caffeine and energy drinks

 Mental Health Practices
- Mindfulness and meditation
- Deep breathing exercises
- Journaling and self-reflection
- Talking to friends and family

 Academic Strategies
- Active learning techniques
- Regular revision and practice
- Seeking help when struggling
- Setting realistic goals

## Support Systems

 College Resources
- Counseling centers and mental health professionals
- Academic advisors and mentors
- Student support groups
- Wellness programs and workshops

 External Support
- Professional counseling services
- Hotlines and helplines
- Online mental health resources
- Support from family and friends

## Building Resilience

 Positive Mindset
- Focus on progress, not perfection
- Celebrate small achievements
- Learn from failures and setbacks
- Practice gratitude and optimism

 Coping Skills
- Problem-solving techniques
- Emotional regulation strategies
- Relaxation and stress-reduction methods
- Building social support networks

## When to Seek Help

 Warning Signs
- Persistent sadness or anxiety
- Thoughts of self-harm
- Significant changes in eating or sleeping patterns
- Withdrawal from social activities
- Declining academic performance

 Getting Help
- Talk to trusted friends or family
- Contact college counseling services
- Consult mental health professionals
- Use campus helplines when available

## Prevention is Better Than Cure

1. Build Healthy Habits: Establish routines early
2. Develop Coping Skills: Learn stress management techniques
3. Create Support Networks: Build relationships you can rely on
4. Monitor Your Well-being: Regular self-checks and adjustments
5. Seek Help Early: Don't wait for problems to become severe

Remember, seeking help is a sign of strength, not weakness. Your mental health is as important as your academic success.`,
    author: "Dr. Pooja Sharma",
    date: "2026-03-30",
    readTime: "6 min read",
    category: "Student Life",
  },
  {
    id: 15,
    title: "From Campus to Career: Your First Engineering Job",
    excerpt: "Practical guide to transitioning from college life to your first engineering job in the corporate world.",
    content: "Your first job sets the tone for your career. Be prepared for real-world challenges, continue learning, build professional relationships, and embrace feedback.",
    fullContent: `Your first job sets the tone for your career. Be prepared for real-world challenges, continue learning, build professional relationships, and embrace feedback. Your college learnings provide foundation, but continuous growth is essential.

## Transitioning to Corporate Life

 Mindset Shift
- From student to professional
- Understanding corporate culture
- Adapting to workplace dynamics
- Taking ownership of your work

 First Month Challenges
- Learning new systems and processes
- Building relationships with colleagues
- Understanding company expectations
- Managing workload and deadlines

## Essential Skills for Success

 Technical Skills
- Deepening domain expertise
- Learning company-specific tools
- Staying updated with technology trends
- Continuous learning and upskilling

 Soft Skills
- Professional communication
- Team collaboration
- Time management
- Problem-solving in real scenarios

 Professional Development
- Setting career goals
- Seeking mentorship
- Building professional networks
- Developing leadership qualities

## Navigating Your First Job

Daily Responsibilities
- Understanding your role and responsibilities
- Managing priorities and deadlines
- Quality of work and attention to detail
- Learning from feedback and criticism

 Workplace Relationships
- Building rapport with colleagues
- Effective communication with managers
- Networking within the organization
- Seeking guidance and mentorship

 Work-Life Balance
- Setting boundaries between work and personal life
- Managing stress and avoiding burnout
- Maintaining health and wellness
- Pursuing personal interests and hobbies

## Career Growth Strategies

 Short-term Goals (First Year)
- Master your current role
- Learn company processes and culture
- Build technical and soft skills
- Establish professional credibility

 Long-term Planning
- Identify career progression paths
- Pursue additional certifications
- Seek challenging assignments
- Consider specialization options

## Common Challenges and Solutions

 Imposter Syndrome
- Recognize your achievements
- Focus on continuous learning
- Seek constructive feedback
- Celebrate small wins

 Workload Management
- Prioritize tasks effectively
- Learn to delegate when appropriate
- Communicate capacity constraints
- Use productivity tools and techniques

 Career Uncertainty
- Set clear goals and milestones
- Seek career counseling if needed
- Network with professionals
- Keep learning and adapting

## Building a Successful Career

1. Continuous Learning: Stay updated with industry trends
2. Relationship Building: Network and build professional connections
3. Performance Excellence: Deliver high-quality work consistently
4. Career Planning: Set goals and work towards them systematically
5. Work-Life Harmony: Maintain balance for long-term sustainability

## Final Thoughts

Your first job is the beginning of your professional journey. Approach it with enthusiasm, dedication, and a willingness to learn. Success comes from consistent effort, adaptability, and continuous growth. Remember that every expert was once a beginner, and your journey is just starting.`,
    author: "Arjun Kapoor",
    date: "2026-03-28",
    readTime: "7 min read",
    category: "Career Guidance",
  },
];

export default function ArticleDetail({ params }: { params: { id: string } }) {
  const article = articlesData.find((a) => a.id === parseInt(params.id));

  if (!article) {
    return (
      <div className="space-y-8">
        <div className="rounded-lg bg-red-50 p-8 text-center">
          <h2 className="text-2xl font-bold text-red-900">Article Not Found</h2>
          <p className="mt-2 text-red-700">Sorry, we couldn't find the article you're looking for.</p>
          <Link href="/articles" className="mt-4 inline-block text-red-600 font-medium hover:text-red-700">
            Back to Articles →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Article Header */}
      <article className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="inline-block rounded-full bg-brand-100 px-3 py-1 text-sm font-medium text-brand-700">
              {article.category}
            </span>
            <span className="text-sm text-slate-500">{article.readTime}</span>
          </div>
          <h1 className="text-5xl font-bold text-slate-900">{article.title}</h1>
          <div className="flex items-center gap-4 border-t border-b border-slate-200 py-4">
            <div>
              <p className="font-semibold text-slate-900">{article.author}</p>
              <p className="text-sm text-slate-500">
                {new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-slate max-w-none">
          <div className="space-y-4 text-slate-700">
            {article.fullContent.split("\n\n").map((paragraph, idx) => {
              if (paragraph.startsWith("##")) {
                return (
                  <h2 key={idx} className="text-2xl font-bold text-slate-900 mt-6 mb-3">
                    {paragraph.replace("##", "").trim()}
                  </h2>
                );
              }
              if (paragraph.startsWith("###")) {
                return (
                  <h3 key={idx} className="text-xl font-semibold text-slate-800 mt-4 mb-2">
                    {paragraph.replace("###", "").trim()}
                  </h3>
                );
              }
              if (paragraph.includes("\n- ")) {
                const lines = paragraph.split("\n");
                return (
                  <div key={idx} className="list-disc list-inside space-y-2">
                    {lines[0] && (
                      <p className = "font-medium text-slate-800">
                        {lines[0]} 
                      </p>
                    )}
                    <ul className="list-disc ml-6 space-y-2">
                      {lines.slice(1).map((item, i) => ( 
                        <li key={i}>{item.replace("- ", "")}</li>
                      ))}
                  </ul>
                </div>
                );
              }
              if (paragraph.startsWith("1. ")) {
                return (
                  <ol key={idx} className="list-decimal list-inside space-y-2">
                    {paragraph.split("\n").map((item, i) => (
                      <li key={i}>{item.replace(/^\d+\. /, "")}</li>
                    ))}
                  </ol>
                );
              }
              return (
                <p key={idx} className="text-slate-700 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>
      </article>

      {/* Back to Articles */}
      <div className="border-t border-slate-200 pt-8">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-brand-600 font-medium hover:text-brand-700 transition-colors"
        >
          ← Back to Articles
        </Link>
      </div>
    </div>
  );
}
