'use client';
import { text } from "stream/consumers";
import toolData from "../data/1.json"
import {BackgroundGradient} from "./ui/background-gradient"
import{HoverEffect} from "./ui/card-hover-effect"
interface Tool{
  
    id: number,
    title:string,
    slug:string,
    description:string,
    isFeatured: boolean
    

}
const Fcard = () => {
  const fcard = toolData.tools.filter((tool:Tool) => tool.isFeatured)
  return (
    <div className="py-12 bg-gray-900 mt-10">
    
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 justify-center">
              {fcard.map((tool:Tool)=> (
                <div key={tool.id} className="flex justify-center">
                      <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                        <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                          
                            <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{tool.title}</p>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{tool.description}</p>
                          
                          
                        </div>

                      </BackgroundGradient>

                </div>    
              ))}
        </div>
    
    </div>
  )
};

export default Fcard;
