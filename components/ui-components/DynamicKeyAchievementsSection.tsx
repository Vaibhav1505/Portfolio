import React from "react";

interface KeyAchievementDataProp {
  data: string[];
}

function DynamicKeyAchievementsSection({ data }: KeyAchievementDataProp) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold text-white mb-3">
        Key Achievements
      </h2>
      <ul className="list-disc list-inside space-y-2 text-neutral-400">
        {data.map((achievement, index) => (
          <li key={index} className="leading-relaxed">
            {achievement}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default DynamicKeyAchievementsSection;
