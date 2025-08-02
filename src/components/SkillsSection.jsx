import { useState } from "react";
import { cn } from "@/lib/utils";


const skills = [
  {
    name: "HTML", level: 95, category: "Frontend"
  } ,
  {
    name: "CSS", level: 90, category: "Frontend"
  },
  {
    name: "JavaScript", level: 70, category: "Frontend"
  },
  {
    name: "React", level: 75, category: "Frontend"
  },
  {
    name: "TypeScript", level: 70, category: "Frontend"
  },
  {
    name: "Astro", level: 70, category: "Frontend"
  },
  //backend

  {
    name: "MySQL", level: 70, category: "Backend"
  },
  {
    name: "Node.js", level: 60, category: "Backend"
  },
  {
    name: "MongoDB", level: 65, category: "Backend"
  },
//tools
{
    name: "Github", level: 90, category: "Tools"
  },
  {
    name: "MCP", level: 90, category: "Tools"
  },
  {
    name: "AI tools", level: 90, category: "Tools"
  },
  {
    name: "VSCode", level: 90, category: "Tools"
  },

];
const categories = ["all", "Frontend", "Backend", "Tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory]= useState("all");
    const filteredSkills = skills.filter(
      (skill) => activeCategory === "all" || skill.category === activeCategory
    );
    
    return (

        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, key)=>(
                <button 
                key={key}
                className={cn("px-6 py-2 rounded-full transition-colors duration-300 capitalize",
                  activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary/10"
                )}
                onClick={()=>setActiveCategory(category)}
                >
                    {category}
                </button>
            ))}
              </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key)=>(
                        <div 
                        key={key} 
                        className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">
                                    {skill.name}
                                </h3>
                            </div>
                            <div className="w-full bg-secondary/50 rounded-full overflow-hidden">
                        <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                        style={{width: `${skill.level}%`}} />

                       
                            </div>
                            <div className="text-right mt-2">
                                <span className="text-muted-foreground text-sm">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>

    );
};
