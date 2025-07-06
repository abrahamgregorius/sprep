export default function App() {
  const mentors = [
    {
      name: "Alex Chen",
      role: "Algorithm Specialist",
      experience: "5+ years at Google",
      expertise: "Data Structures, Competitive Programming",
      image: "/placeholder.svg?height=300&width=300",
      rating: "4.9",
    },
    {
      name: "Sarah Williams",
      role: "Programming Mentor",
      experience: "Senior Developer at Microsoft",
      expertise: "Python, Java, Web Development",
      image: "/placeholder.svg?height=300&width=300",
      rating: "4.8",
    },
    {
      name: "David Kumar",
      role: "AI & Machine Learning Expert",
      experience: "PhD in Computer Science",
      expertise: "Machine Learning, Deep Learning, AI",
      image: "/placeholder.svg?height=300&width=300",
      rating: "4.9",
    },
    {
      name: "Lisa Zhang",
      role: "Cybersecurity Specialist",
      experience: "Cybersecurity Consultant",
      expertise: "Network Security, Ethical Hacking",
      image: "/placeholder.svg?height=300&width=300",
      rating: "4.7",
    },
  ]

  const benefits = [
    {
      title: "Paham Duluan",
      description: "Sebelum kuliah dimulai, kamu sudah siap dengan fundamental programming",
      icon: "🎯",
    },
    {
      title: "Lifetime Access",
      description: "Akses selamanya ke materi dan latihan soal yang terus diupdate",
      icon: "♾️",
    },
    {
      title: "S-Class Mentors",
      description: "Belajar langsung dari member S-Class yang berpengalaman",
      icon: "⭐",
    },
    {
      title: "Certificate & Community",
      description: "Dapatkan sertifikat dan bergabung dengan networking community",
      icon: "🏆",
    },
  ]

  const features = [
    "Algorithm & Data Structures",
    "Programming Fundamentals",
    "Problem Solving Techniques",
    "Project-Based Learning",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-green-400/20 to-emerald-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-pink-600/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Stars */}
      <div className="absolute top-20 left-20 text-white/20 text-4xl animate-bounce delay-300">✨</div>
      <div className="absolute top-40 right-32 text-cyan-300/30 text-3xl animate-bounce delay-700">⭐</div>
      <div className="absolute bottom-32 left-16 text-pink-300/25 text-5xl animate-bounce delay-1000">💫</div>
      <div className="absolute bottom-20 right-20 text-purple-300/30 text-4xl animate-bounce delay-500">✦</div>

      {/* Navigation */}
      <nav className="relative z-50 p-6 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-3xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            S-Prep
          </div>
          <div className="hidden md:flex space-x-8 text-white/90">
            <a href="#home" className="hover:text-cyan-300 transition-all duration-300 hover:scale-110">
              Home
            </a>
            <a href="#about" className="hover:text-cyan-300 transition-all duration-300 hover:scale-110">
              About
            </a>
            <a href="#mentors" className="hover:text-cyan-300 transition-all duration-300 hover:scale-110">
              Mentors
            </a>
            <a href="#pricing" className="hover:text-cyan-300 transition-all duration-300 hover:scale-110">
              Pricing
            </a>
          </div>
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative z-10 px-6 py-12 md:py-14">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-300/30 backdrop-blur-sm">
              <span className="text-cyan-300 text-sm font-medium">🚀 Bootcamp Terbaik untuk Freshmen Binus</span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text leading-tight">
              S-Prep
            </h1>
            <div className="text-2xl md:text-4xl text-white/80 font-light mb-8 tracking-wider">bootcamp</div>

            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
              Belajar <span className="text-cyan-300 font-semibold italic">algorithm</span> and{" "}
              <span className="text-purple-300 font-semibold italic">programming</span> dari tutor terbaik.{" "}
              <br className="hidden md:block" />
              Cocok untuk jurusan CS, DS, AI, CyberSec, GameAT, dan lainnya!
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                <span className="relative z-10">Daftar Sekarang 🚀</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold text-lg backdrop-blur-sm hover:bg-white/10 hover:border-cyan-300 transition-all duration-300 hover:scale-105">
                Learn More ✨
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      {/* <section className="relative z-10 px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="text-white/90 text-sm font-medium">{feature}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Benefits Section */}
      <section id="about" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Why Choose{" "}
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
                S-Prep?
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Persiapkan dirimu dengan program bootcamp yang dirancang khusus untuk mahasiswa Binus
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group relative">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 md:min-h-[18rem] border border-white/20 hover:border-cyan-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-white/70 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section id="mentors" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Meet Our{" "}
              <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">
                Mentors
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Belajar dari para ahli dengan pengalaman industri terbaik dan track record yang terbukti
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mentors.map((mentor, index) => (
              <div key={index} className="group relative">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/20 hover:border-yellow-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/10">
                  <div className="relative mb-6">
                    <img
                      src={mentor.image || "/placeholder.svg"}
                      alt={mentor.name}
                      className="w-24 h-24 rounded-2xl mx-auto object-cover border-4 border-white/20 group-hover:border-yellow-300/50 transition-all duration-300"
                    />
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      ⭐ {mentor.rating}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{mentor.name}</h3>
                  <p className="text-yellow-300 font-semibold mb-2 text-sm">{mentor.role}</p>
                  <p className="text-white/60 text-xs mb-3">{mentor.experience}</p>
                  <p className="text-white/70 text-xs leading-relaxed">{mentor.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block mb-6 px-6 py-3 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full border border-red-300/30 backdrop-blur-sm animate-pulse">
              <span className="text-red-300 font-bold">🔥 LIMITED TIME OFFER 🔥</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text mb-8">
              SPECIAL PRICE
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="group relative">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-cyan-300/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="text-center">
                  <div className="text-cyan-300 text-lg font-semibold mb-4">Individual</div>
                  <div className="text-5xl md:text-6xl font-black text-white mb-2">149k</div>
                  <div className="text-white/60 mb-6">per person</div>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center text-white/80">
                      <span className="text-green-400 mr-3">✓</span>
                      <span className="text-sm">Full course access</span>
                    </div>
                    <div className="flex items-center text-white/80">
                      <span className="text-green-400 mr-3">✓</span>
                      <span className="text-sm">Personal mentoring</span>
                    </div>
                    <div className="flex items-center text-white/80">
                      <span className="text-green-400 mr-3">✓</span>
                      <span className="text-sm">Certificate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-gradient-to-br from-white/15 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-purple-300/50">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  BEST VALUE
                </div>
                <div className="text-center">
                  <div className="text-purple-300 text-lg font-semibold mb-4">Pair Package</div>
                  <div className="text-5xl md:text-6xl font-black text-white mb-2">199k</div>
                  <div className="text-white/60 mb-6">for 2 people</div>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center text-white/80">
                      <span className="text-green-400 mr-3">✓</span>
                      <span className="text-sm">Everything in Individual</span>
                    </div>
                    <div className="flex items-center text-white/80">
                      <span className="text-green-400 mr-3">✓</span>
                      <span className="text-sm">Pair programming sessions</span>
                    </div>
                    <div className="flex items-center text-white/80">
                      <span className="text-green-400 mr-3">✓</span>
                      <span className="text-sm">Group projects</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-4">
            <div className="inline-block bg-gradient-to-r from-red-500 to-orange-500 rounded-full px-8 py-4 mb-8 animate-bounce">
              <span className="text-white font-bold text-lg">⚡ KUOTA TERBATAS, DAFTAR SEKARANG! ⚡</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to{" "}
              <span className="text-transparent bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text">Start?</span>
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Jangan sampai ketinggalan! Bergabunglah dengan S-Prep sekarang dan persiapkan dirimu untuk sukses di Binus
              University.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group relative px-12 py-4 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full text-white font-bold text-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25">
                <span className="relative z-10">Daftar Sekarang 🎯</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="px-12 py-4 border-2 border-white/30 text-white rounded-full font-bold text-xl backdrop-blur-sm hover:bg-white/10 hover:border-cyan-300 transition-all duration-300 hover:scale-105">
                Hubungi Kami 💬
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
              S-Prep
            </div>
            <p className="text-white/60 mb-6">Bootcamp terbaik untuk persiapan kuliah di Binus University</p>
            <div className="flex justify-center space-x-6">
              <a href="https://linktr.ee/sprep" className="text-white/60 hover:text-cyan-300 transition-colors">
                🔗 Linktree
              </a>
              <a href="#" className="text-white/60 hover:text-cyan-300 transition-colors">
                📧 Email
              </a>
              <a href="#" className="text-white/60 hover:text-cyan-300 transition-colors">
                📱 WhatsApp
              </a>
            </div>
          </div>
          <div className="text-center text-white/40 text-sm">
            <p>&copy; 2024 S-Prep Bootcamp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
