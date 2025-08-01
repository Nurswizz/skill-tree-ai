import { CheckCircle2 } from "lucide-react"

const Navbar = () => {
    const user = {
        name: "John Doe",
        level: 5,
        // Add more user properties as needed
    };
    return (
        <nav className="bg-dark-slate/90 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Ascendia
              </span>
            </a>
            
            <div className="flex items-center space-x-6">
              <a href="/dashboard" className="text-gaming-purple font-medium">
                Dashboard
              </a>
              <a href="/skill-tree" className="text-gray-300 hover:text-white transition-colors">
                Skill Tree
              </a>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">{user.level}</span>
                </div>
                <span className="text-sm font-medium">{user.name}</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;