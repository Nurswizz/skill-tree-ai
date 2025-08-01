import { motion } from "framer-motion";
import {
  CheckCircle,
  Zap,
  BarChart3,
  Clock,
  Trophy,
  Users,
  Star,
  ArrowRight,
  Target,
  TrendingUp,
  Award,
  Flame,
  Code,
  Palette,
  Dumbbell,
  Brain,
  Lock,
  CheckCircle2,
} from "lucide-react";
import Button from "../components/ui/button";
import { Card } from "../components/ui/card";
import CardContent from "../components/ui/card_content";
import Badge from "../components/ui/badge";
import Navbar from "../components/NavbarForHome";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-slate text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="hero-gradient pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gaming-purple/20 to-gaming-blue/20"></div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-2 h-2 bg-gaming-purple rounded-full opacity-60 animate-float"></div>
          <div className="absolute top-40 right-1/3 w-1 h-1 bg-gaming-blue rounded-full opacity-40 animate-bounce-subtle"></div>
          <div className="absolute bottom-20 left-1/2 w-3 h-3 bg-gaming-green rounded-full opacity-50 animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gaming-purple/20 to-gaming-blue/20 border-gaming-purple/30 mb-6">
                <Star className="w-4 h-4 text-gaming-amber mr-2" />
                Level Up Your Life
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Transform Learning Into An{" "}
                <span className="bg-linear-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent">
                  Epic Quest
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Master real-world skills through RPG-style progression. Build
                your skill tree, earn XP, and level up across programming,
                design, fitness, and more. Make self-improvement as addictive as
                your favorite game.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                <Button
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-700 to-blue-600 hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg font-bold"
                  onClick={() => {
                    window.location.href = "/auth";
                  }}
                >
                  Begin Your Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="gaming-card rounded-2xl p-6 shadow-2xl">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-700 to-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold">42</span>
                      </div>
                      <div>
                        <div className="font-semibold">Alex Rivera</div>
                        <div className="text-sm text-gray-400">
                          Code Warrior
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gaming-amber">
                        2,847 XP
                      </div>
                      <div className="text-sm text-gray-400">
                        Today's Progress
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Level Progress</span>
                      <span>2,847 / 3,200 XP</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div
                        className="xp-bar h-3 rounded-full"
                        style={{ width: "89%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-dark-slate/50 rounded-lg p-3">
                      <div className="text-gaming-blue font-semibold">
                        JavaScript
                      </div>
                      <div className="text-sm text-gray-400">Level 8</div>
                      <div className="text-2xl font-bold">+120 XP</div>
                    </div>
                    <div className="bg-dark-slate/50 rounded-lg p-3">
                      <div className="text-gaming-green font-semibold">
                        React
                      </div>
                      <div className="text-sm text-gray-400">Level 6</div>
                      <div className="text-2xl font-bold">+85 XP</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gaming-amber rounded-full flex items-center justify-center">
                        <Star
                          className="w-4 h-4 text-dark-slate"
                          fill="currentColor"
                        />
                      </div>
                      <span className="text-sm">7-day streak!</span>
                    </div>
                    <Button className="bg-gradient-to-r from-purple-700 to-blue-600">
                      Continue Quest
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 bg-gradient-to-b from-dark-slate to-mid-slate"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Why Choose{" "}
              <span className="bg-gaming-blue to-gaming-blue bg-clip-text text-transparent">
                Ascendia?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your learning journey with our revolutionary
              RPG-inspired platform that makes skill development addictive and
              rewarding.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Zap,
                title: "Dynamic Skill Trees",
                description:
                  "Navigate branching skill paths with prerequisite unlocks, just like your favorite RPG. Master fundamentals to unlock advanced abilities.",
                highlight: "+XP for every milestone",
                color: "from-gaming-purple to-gaming-blue",
              },
              {
                icon: BarChart3,
                title: "Smart XP System",
                description:
                  "Earn experience points for every task completed. Watch your skills level up as you progress through increasingly challenging content.",
                highlight: "Real progress tracking",
                color: "from-gaming-blue to-gaming-green",
              },
              {
                icon: Clock,
                title: "Discipline Over Grinding",
                description:
                  "Daily task limits prevent burnout and encourage consistent, focused learning. Quality over quantity for sustainable growth.",
                highlight: "Healthy learning habits",
                color: "from-gaming-green to-gaming-amber",
              },
              {
                icon: TrendingUp,
                title: "Advanced Analytics",
                description:
                  "Deep insights into your learning patterns, optimal study times, and skill progression rates. Data-driven personal development.",
                highlight: "Optimize your growth",
                color: "from-gaming-amber to-gaming-purple",
              },
              {
                icon: Flame,
                title: "Streak & Rewards",
                description:
                  "Maintain daily streaks to unlock exclusive rewards, badges, and bonuses. Your consistency is rewarded with tangible benefits.",
                highlight: "Unlock achievements",
                color: "from-red-500 to-gaming-amber",
              },
              {
                icon: Target,
                title: "Multi-Domain Mastery",
                description:
                  "From programming and design to fitness and personal development. Build a diverse skill portfolio across multiple life domains.",
                highlight: "Become well-rounded",
                color: "from-gaming-blue to-red-500",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="gaming-card rounded-xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300 h-full">
                  <CardContent className="p-0">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl mx-auto mb-6 flex items-center justify-center`}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <div className="text-gaming-green font-semibold">
                      {feature.highlight}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Interactive Skill Tree Preview */}
      <section id="skills" className="py-20 bg-mid-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Experience the{" "}
              <span className="bg-gaming-purple to-gaming-blue bg-clip-text text-transparent">
                Skill Tree
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Navigate through interconnected skill nodes, unlock new abilities,
              and see your progression visualized like never before.
            </p>
          </motion.div>

          <motion.div
            className="bg-dark-slate/50 rounded-2xl p-8 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center space-y-8">
              {/* Level 1 - Foundation */}
              <div className="flex items-center space-x-8">
                <motion.div
                  className="skill-node w-16 h-16 bg-gradient-to-r from-green-500 to-green-400 rounded-full flex items-center justify-center cursor-pointer relative group"
                  whileHover={{ scale: 1.1 }}
                >
                  <CheckCircle2 className="w-8 h-8 text-white" />
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-dark-slate px-3 py-1 rounded text-sm whitespace-nowrap z-10">
                    HTML Basics (Completed)
                  </div>
                </motion.div>
              </div>

              {/* Connection lines */}
              <div className="w-px h-8 bg-green-500"></div>

              {/* Level 2 - Intermediate */}
              <div className="flex items-center space-x-12">
                <motion.div
                  className="skill-node w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full flex items-center justify-center cursor-pointer relative group"
                  whileHover={{ scale: 1.1 }}
                >
                  <Palette className="w-8 h-8 text-white" />
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-dark-slate px-3 py-1 rounded text-sm whitespace-nowrap z-10">
                    CSS Styling (In Progress)
                  </div>
                </motion.div>

                <motion.div
                  className="skill-node w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full flex items-center justify-center cursor-pointer relative group"
                  whileHover={{ scale: 1.1 }}
                >
                  <Code className="w-8 h-8 text-white" />
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-dark-slate px-3 py-1 rounded text-sm whitespace-nowrap z-10">
                    JavaScript (In Progress)
                  </div>
                </motion.div>
              </div>

              {/* Connection lines */}
              <div className="flex space-x-12">
                <div className="w-px h-8 bg-gaming-green to-gray-500"></div>
                <div className="w-px h-8 bg-gaming-green to-gray-500"></div>
              </div>

              {/* Level 3 - Advanced */}
              <div className="flex items-center space-x-16">
                {[
                  { icon: Brain, label: "React (Locked)" },
                  { icon: Dumbbell, label: "Node.js (Locked)" },
                  { icon: Award, label: "Database Design (Locked)" },
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    className="skill-node w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center cursor-pointer relative group opacity-50"
                    whileHover={{ scale: 1.05 }}
                  >
                    <skill.icon className="w-8 h-8 text-gray-400" />
                    <Lock className="w-4 h-4 absolute -top-1 -right-1 text-gray-500" />
                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-dark-slate px-3 py-1 rounded text-sm whitespace-nowrap z-10">
                      {skill.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Progress summary */}
            <motion.div
              className="mt-12 grid md:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp} className="text-center">
                <div className="text-2xl font-bold text-gaming-green">3/12</div>
                <div className="text-gray-400">Skills Completed</div>
              </motion.div>
              <motion.div variants={fadeInUp} className="text-center">
                <div className="text-2xl font-bold text-gaming-blue">2</div>
                <div className="text-gray-400">In Progress</div>
              </motion.div>
              <motion.div variants={fadeInUp} className="text-center">
                <div className="text-2xl font-bold text-gray-500">7</div>
                <div className="text-gray-400">Locked</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-mid-slate to-dark-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Perfect for{" "}
                <span className="bg-gaming-blue bg-clip-text text-transparent">
                  Ambitious Learners
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Whether you're a lifelong learner or someone looking to level up
                your career, Ascendia provides the structure and motivation you
                need to achieve your goals.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Career Advancement",
                    description:
                      "Build job-relevant skills systematically. Track your progress towards specific career goals and get hired faster.",
                    color: "bg-gaming-green",
                  },
                  {
                    title: "Personal Development",
                    description:
                      "Develop holistic skills across fitness, mindfulness, creativity, and more. Become the best version of yourself.",
                    color: "bg-gaming-blue",
                  },
                  {
                    title: "Sustainable Habits",
                    description:
                      "Build lasting learning habits without burnout. Our system encourages consistency over intensity.",
                    color: "bg-gaming-purple",
                  },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div
                      className={`w-8 h-8 ${benefit.color} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}
                    >
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-300">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-full h-96 bg-gradient-to-br from-purple-500/20 to-blue-600/20 rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden">
                <div className="text-center">
                  <BarChart3 className="w-24 h-24 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Dashboard Preview</h3>
                  <p className="text-gray-300">
                    Modern interface showing analytics and growth metrics
                  </p>
                </div>

                {/* Floating achievement badges */}
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full flex items-center justify-center shadow-lg"
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Star className="w-8 h-8 text-white" fill="currentColor" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-500 to-green-400 rounded-full flex items-center justify-center shadow-lg"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Zap className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500 via-blue-600 to-green-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-slate/50"></div>

        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Epic Journey?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join over 50,000 learners who are already leveling up their skills.
            Your adventure in gamified learning starts now.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-12">
            <Button
              className="w-full sm:w-auto px-10 py-4 bg-white text-gaming-purple hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl text-lg font-bold"
              onClick={() => {
                window.location.href = "/auth";
              }}
            >
              Start Winning
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-slate border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent">
                  Ascendia
                </span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Transform your learning journey with gamified skill development.
                Level up your life, one quest at a time.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Users, href: "#" },
                  { icon: Trophy, href: "#" },
                  { icon: Target, href: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gaming-purple transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-3 text-gray-400">
                {["Features", "Skill Trees", "Analytics", "Mobile App"].map(
                  (item, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-3 text-gray-400">
                {["Help Center", "Community", "Contact Us", "API Docs"].map(
                  (item, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Ascendia. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
