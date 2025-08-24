import React from "react";

interface KeyAchievementDataProp {
  data: string[];
}

function ExperienceKeyAchievementsSection({ data }: KeyAchievementDataProp) {
  return (
    <section className="mt-12 md:mt-16">
      {/* Section Header */}
      <div className="mb-8 md:mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Key Achievements
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4"></div>
        <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-2xl">
          Notable accomplishments and milestones achieved during my tenure, demonstrating impact and value delivered.
        </p>
      </div>

      {/* Achievements List */}
      <div className="space-y-4 md:space-y-5">
        {data.map((achievement, index) => (
          <div
            key={index}
            className="group relative flex items-start gap-4 p-4 md:p-6 bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 backdrop-blur-sm border border-neutral-700/40 hover:border-neutral-500/60 rounded-2xl transition-all duration-500 hover:scale-[1.01] hover:shadow-xl hover:-translate-y-1"
            style={{
              animationDelay: `${index * 75}ms`
            }}
          >
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            
            {/* Achievement Icon/Number */}
            <div className="flex-shrink-0 relative z-10">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-green-500/30 group-hover:border-green-400/50 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                {/* Trophy/Star Icon for achievements */}
                <svg className="w-4 h-4 md:w-5 md:h-5 text-green-400 group-hover:text-green-300 transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              
              {/* Achievement Number */}
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                {index + 1}
              </div>
            </div>

            {/* Achievement Content */}
            <div className="flex-1 relative z-10">
              <p className="text-neutral-300 group-hover:text-white transition-colors duration-300 leading-relaxed text-sm md:text-base font-medium">
                {achievement}
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-500 transform scale-0 group-hover:scale-100"></div>
            <div className="absolute bottom-4 right-6 w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-700 transform scale-0 group-hover:scale-100"></div>
          </div>
        ))}
      </div>

      {/* Optional: Achievements Summary */}
      <div className="mt-8 md:mt-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-sm border border-green-500/20 rounded-full">
          <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-green-400 text-sm font-medium">
            {data.length} Key Achievements Unlocked
          </span>
        </div>
      </div>
    </section>
  );
}

export default ExperienceKeyAchievementsSection;