import { motion } from "framer-motion";
import Button from "../components/ui/button";
import {Card, CardHeader, CardTitle, CardContent} from "../components/ui/card";
import Badge from "../components/ui/badge";
import Progress from "../components/ui/progress";
import Navbar from "../components/Navbar";
import {  
  Trophy, 
  Target,  
  Flame, 
  TrendingUp,
  Award,
  Star,
  CheckCircle2,
  Calendar,
  BarChart3,
  Zap,
  Plus,
  ArrowRight
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Dashboard() {
  // Mock user data
  const user = {
    name: "Alex Rivera",
    level: 42,
    currentXP: 2847,
    nextLevelXP: 3200,
    streak: 7,
    title: "Code Warrior"
  };

  const skills = [
    { name: "JavaScript", level: 8, xp: 1250, color: "text-gaming-blue" },
    { name: "React", level: 6, xp: 850, color: "text-gaming-green" },
    { name: "TypeScript", level: 5, xp: 620, color: "text-gaming-purple" },
    { name: "Node.js", level: 4, xp: 480, color: "text-gaming-amber" }
  ];

  const achievements = [
    { title: "First Steps", description: "Complete your first task", earned: true },
    { title: "Streak Master", description: "7-day learning streak", earned: true },
    { title: "Code Warrior", description: "Reach level 5 in JavaScript", earned: true },
    { title: "Multi-talented", description: "Level up 3 different skills", earned: false }
  ];

  const todaysTasks = [
    { task: "Complete React Hooks tutorial", xp: 120, completed: true },
    { task: "Build a small TypeScript project", xp: 200, completed: false },
    { task: "Practice algorithm challenges", xp: 150, completed: false }
  ];

  return (
    <div className="min-h-screen bg-dark-slate text-white">
      {/* Navigation */}
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}!</h1>
              <p className="text-gray-300">Ready to continue your learning quest?</p>
            </div>
            <Badge className="px-4 py-2 bg-gradient-to-r from-gaming-purple/20 to-gaming-blue/20 border-gaming-purple/30">
              <Star className="w-4 h-4 text-gaming-amber mr-2" />
              {user.title}
            </Badge>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Stats */}
          <div className="lg:col-span-2 space-y-6">
            {/* Level Progress */}
            <motion.div variants={fadeInUp} initial="initial" animate="animate">
              <Card className="gaming-card">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Level Progress</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 bg-gradient-to-r from-gaming-purple to-gaming-blue rounded-full flex items-center justify-center">
                        <span className="font-bold">{user.level}</span>
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span>Current XP</span>
                      <span>{user.currentXP} / {user.nextLevelXP} XP</span>
                    </div>
                    <Progress value={(user.currentXP / user.nextLevelXP) * 100} className="h-3" />
                    <div className="text-sm text-gray-400">
                      {user.nextLevelXP - user.currentXP} XP to next level
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Today's Tasks */}
            <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ delay: 0.1 }}>
              <Card className="gaming-card">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Today's Quests</span>
                    <Button className="bg-gradient-to-r from-gaming-purple to-gaming-blue">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Quest
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {todaysTasks.map((task, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-dark-slate/50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            task.completed 
                              ? 'bg-gaming-green border-gaming-green' 
                              : 'border-gray-600'
                          }`}>
                            {task.completed && <CheckCircle2 className="w-4 h-4 text-dark-slate" />}
                          </div>
                          <span className={task.completed ? 'line-through text-gray-400' : ''}>
                            {task.task}
                          </span>
                        </div>
                        <Badge className="text-gaming-amber border-gaming-amber">
                          +{task.xp} XP
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Skills Overview */}
            <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ delay: 0.2 }}>
              <Card className="gaming-card">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Skill Progress</span>
                    <a href="/skill-tree">
                      <Button className="border-gaming-purple hover:bg-gaming-purple/10">
                        View Tree
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {skills.map((skill, index) => (
                      <div key={index} className="p-4 bg-dark-slate/50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className={`font-semibold ${skill.color}`}>{skill.name}</span>
                          <Badge className="border-gray-600">
                            Lv. {skill.level}
                          </Badge>
                        </div>
                        <div className="text-sm text-gray-400 mb-2">{skill.xp} XP</div>
                        <Progress value={(skill.level / 10) * 100} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Column - Stats & Achievements */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ delay: 0.3 }}>
              <Card className="gaming-card">
                <CardHeader>
                  <CardTitle>Quick Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Flame className="w-5 h-5 text-gaming-amber" />
                        <span>Current Streak</span>
                      </div>
                      <span className="text-xl font-bold text-gaming-amber">{user.streak} days</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Target className="w-5 h-5 text-gaming-green" />
                        <span>Tasks Today</span>
                      </div>
                      <span className="text-xl font-bold text-gaming-green">
                        {todaysTasks.filter(t => t.completed).length}/{todaysTasks.length}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="w-5 h-5 text-gaming-blue" />
                        <span>This Week</span>
                      </div>
                      <span className="text-xl font-bold text-gaming-blue">1,240 XP</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Achievements */}
            <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ delay: 0.4 }}>
              <Card className="gaming-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Trophy className="w-5 h-5 text-gaming-amber" />
                    <span>Achievements</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {achievements.map((achievement, index) => (
                      <div key={index} className={`p-3 rounded-lg border ${
                        achievement.earned 
                          ? 'bg-gaming-amber/10 border-gaming-amber/30' 
                          : 'bg-gray-800/50 border-gray-700'
                      }`}>
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            achievement.earned 
                              ? 'bg-gaming-amber text-dark-slate' 
                              : 'bg-gray-700 text-gray-400'
                          }`}>
                            <Award className="w-4 h-4" />
                          </div>
                          <div>
                            <div className={`font-semibold ${achievement.earned ? 'text-gaming-amber' : 'text-gray-400'}`}>
                              {achievement.title}
                            </div>
                            <div className="text-xs text-gray-500">{achievement.description}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Actions */}
            <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ delay: 0.5 }}>
              <Card className="gaming-card">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button className="w-full bg-gradient-to-r from-gaming-purple to-gaming-blue justify-start">
                      <Zap className="w-4 h-4 mr-2" />
                      Start New Quest
                    </Button>
                    <Button className="w-full border-gaming-green hover:bg-gaming-green/10 justify-start">
                      <BarChart3 className="w-4 h-4 mr-2" />
                      View Analytics
                    </Button>
                    <Button className="w-full border-gaming-amber hover:bg-gaming-amber/10 justify-start">
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule Learning
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}