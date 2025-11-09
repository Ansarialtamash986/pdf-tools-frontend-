import React from "react";
import HeroSection from "../components/HeroSection";
import ToolCard from "../components/ToolCard";
import { Merge, Split, Compass, FileText } from "lucide-react";

const tools = [
  { icon: <Merge size={32} className="text-primary" />, title: "Merge PDF", description: "Combine multiple PDFs into one single file.", path: "/merge-pdf" },
  { icon: <Split size={32} className="text-primary" />, title: "Split PDF", description: "Extract one or more pages from your PDF.", path: "/split-pdf" },
  { icon: <Compass size={32} className="text-primary" />, title: "Compress PDF", description: "Reduce file size while optimizing for quality.", path: "/compress-pdf" },
  { icon: <FileText size={32} className="text-primary" />, title: "PDF to Word", description: "Convert your PDF to an editable Word document.", path: "/pdf-to-word" },
];

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <ToolCard key={index} {...tool} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
