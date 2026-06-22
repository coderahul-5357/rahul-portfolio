import React from "react";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a]/80 py-12">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center space-y-6">
        <div className="flex space-x-6">
          <a href="https://github.com/coderahul-5357" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/rahulendla" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:mr.endlarahul@gmail.com" className="text-gray-400 hover:text-white transition-colors">
            <Mail size={24} />
          </a>
        </div>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Rahul Endla. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
