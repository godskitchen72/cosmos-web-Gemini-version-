"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ShieldCheck, Server, Cloud, Brain, Activity, 
  FileText, DollarSign, BarChart3, Stethoscope, 
  UserCheck, Zap, ChevronRight, Menu
} from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-cosmos-navy selection:bg-cosmos-blue selection:text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-screen" />
      <div className="absolute top-0 inset-x-0 h-[800px] z-0 pointer-events-none bg-glow-gradient" />

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto backdrop-blur-md border-b border-white/5 rounded-b-2xl">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-cosmos-blue flex items-center justify-center font-bold text-xl">C</div>
          <span className="text-xl font-bold tracking-widest uppercase">Cosmos</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#solutions" className="hover:text-cosmos-blue transition-colors">Solutions</a>
          <a href="#products" className="hover:text-cosmos-blue transition-colors">Products</a>
          <a href="#company" className="hover:text-cosmos-blue transition-colors">Company</a>
          <a href="#resources" className="hover:text-cosmos-blue transition-colors">Resources</a>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-medium text-white hover:text-cosmos-blue transition-colors">Contact Sales</button>
          <button className="px-5 py-2.5 text-sm font-semibold text-white bg-cosmos-blue hover:bg-cosmos-cyan transition-colors rounded-lg shadow-[0_0_15px_rgba(0,184,255,0.4)]">
            Request Demo
          </button>
        </div>
        <button className="md:hidden text-white"><Menu /></button>
      </nav>

      {/* 1. HERO SECTION */}
      <section className="relative z-10 pt-32 pb-20 px-6 text-center max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Navigate Healthcare <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cosmos-blue to-cosmos-cyan">
              With Intelligence
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Transforming patient care, documentation, billing, and revenue cycle management through intelligent, AI-powered healthcare technology. One Platform. Complete Control.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-cosmos-blue hover:bg-cosmos-cyan transition-all rounded-lg flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,184,255,0.4)]">
              Request Demo <ChevronRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all rounded-lg flex items-center justify-center gap-2">
              Explore Platform
            </button>
          </div>
        </motion.div>
      </section>

      {/* 2. TRUST SECTION */}
      <section className="relative z-10 py-10 border-y border-white/5 bg-cosmos-midnight/30">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
          <div className="flex items-center gap-2 text-sm font-semibold tracking-wider uppercase"><ShieldCheck className="text-cosmos-blue"/> HIPAA Compliant</div>
          <div className="flex items-center gap-2 text-sm font-semibold tracking-wider uppercase"><Server className="text-cosmos-blue"/> SOC 2 Type II</div>
          <div className="flex items-center gap-2 text-sm font-semibold tracking-wider uppercase"><Cloud className="text-cosmos-blue"/> Cloud Secure</div>
        </div>
      </section>

      {/* 4. DASHBOARD SECTION */}
      <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">One Platform. <span className="text-cosmos-blue">Complete Control.</span></h2>
          <p className="text-gray-400">Integrated solutions that work together to streamline your entire practice.</p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel overflow-hidden border-t-4 border-t-cosmos-blue shadow-2xl"
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/20">
            <div className="font-semibold flex items-center gap-2"><Activity className="w-5 h-5 text-cosmos-blue"/> Front Desk Dashboard</div>
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
          </div>
          <div className="p-6 bg-cosmos-midnight/40 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-gray-400 text-sm border-b border-white/10">
                  <th className="pb-3 px-4 font-medium">Patient</th>
                  <th className="pb-3 px-4 font-medium">Provider</th>
                  <th className="pb-3 px-4 font-medium">Appointment</th>
                  <th className="pb-3 px-4 font-medium">Status</th>
                  <th className="pb-3 px-4 font-medium">Billing Status</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4 font-medium">Sarah Jenkins</td>
                  <td className="py-4 px-4 text-gray-300">Dr. Smith</td>
                  <td className="py-4 px-4 text-gray-300">10:00 AM</td>
                  <td className="py-4 px-4"><span className="px-2 py-1 rounded bg-yellow-500/20 text-yellow-300 text-xs font-semibold">Needs MD Visit</span></td>
                  <td className="py-4 px-4 text-gray-400">Pending</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4 font-medium">Michael Chang</td>
                  <td className="py-4 px-4 text-gray-300">Dr. Adams (Chiro)</td>
                  <td className="py-4 px-4 text-gray-300">10:30 AM</td>
                  <td className="py-4 px-4"><span className="px-2 py-1 rounded bg-red-500/20 text-red-300 text-xs font-semibold">Incomplete NF3</span></td>
                  <td className="py-4 px-4 text-gray-400">Action Required</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4 font-medium">David Rodriguez</td>
                  <td className="py-4 px-4 text-gray-300">PT Dept</td>
                  <td className="py-4 px-4 text-gray-300">11:15 AM</td>
                  <td className="py-4 px-4"><span className="px-2 py-1 rounded bg-green-500/20 text-green-300 text-xs font-semibold">Completed Today</span></td>
                  <td className="py-4 px-4"><span className="text-cosmos-blue font-medium">Billing Ready</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* 3. PLATFORM OVERVIEW */}
      <section className="relative z-10 py-20 bg-cosmos-midnight/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Brain, title: "AI-Powered Workflows", desc: "Intelligent automation reduces documentation time and improves accuracy across your practice." },
              { icon: FileText, title: "No-Fault Automation", desc: "Generate NF2 and NF3 documents instantly with built-in compliance and payer requirements." },
              { icon: DollarSign, title: "Smart Billing", desc: "Automate claims, reduce denials, and accelerate collections with real-time intelligence." },
              { icon: BarChart3, title: "Real-Time Insights", desc: "Powerful dashboards and reports give you visibility to make smarter, faster decisions." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="glass-panel p-6 hover:border-cosmos-blue/50 transition-all group"
              >
                <feature.icon className="w-10 h-10 text-cosmos-blue mb-4 group-hover:scale-110 transition-transform"/>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHO WE SERVE */}
      <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Built For <span className="text-cosmos-blue">Your Specialty</span></h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { icon: UserCheck, title: "Medical Doctors" },
            { icon: Activity, title: "Chiropractors" },
            { icon: Zap, title: "Physical Therapy" },
            { icon: Stethoscope, title: "Orthopedics" },
            { icon: FileText, title: "No-Fault & PI" },
          ].map((specialty, idx) => (
            <div key={idx} className="glass-panel px-6 py-8 w-40 flex flex-col items-center justify-center gap-4 hover:bg-white/10 transition-colors cursor-default">
              <specialty.icon className="w-8 h-8 text-gray-300"/>
              <span className="text-sm font-semibold">{specialty.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CALL TO ACTION */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-cosmos-midnight to-[#0a1930] border border-cosmos-blue/20 rounded-3xl p-12 text-center shadow-[0_0_50px_rgba(0,184,255,0.1)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
          <h2 className="text-4xl font-bold mb-6 relative z-10">Ready To Transform Your Practice?</h2>
          <p className="text-gray-300 mb-8 relative z-10 text-lg">Join the ecosystem of healthcare providers utilizing Cosmos to automate workflows and maximize revenue.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <button className="px-8 py-4 text-base font-semibold text-white bg-cosmos-blue hover:bg-cosmos-cyan transition-all rounded-lg shadow-[0_0_20px_rgba(0,184,255,0.4)]">
              Request A Demo
            </button>
            <button className="px-8 py-4 text-base font-semibold text-white bg-transparent border border-white/20 hover:bg-white/5 transition-all rounded-lg">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="relative z-10 border-t border-white/10 bg-[#040f24] pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-cosmos-blue flex items-center justify-center font-bold text-sm">C</div>
              <span className="text-lg font-bold uppercase tracking-widest">Cosmos</span>
            </div>
            <p className="text-sm text-gray-400 max-w-xs mb-6">Navigate Healthcare With Intelligence. Smart Billing. Better Care.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Solutions</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-cosmos-blue transition-colors">Overview</a></li>
              <li><a href="#" className="hover:text-cosmos-blue transition-colors">Clinical</a></li>
              <li><a href="#" className="hover:text-cosmos-blue transition-colors">Billing</a></li>
              <li><a href="#" className="hover:text-cosmos-blue transition-colors">No-Fault</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-cosmos-blue transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-cosmos-blue transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-cosmos-blue transition-colors">Partners</a></li>
              <li><a href="#" className="hover:text-cosmos-blue transition-colors">News</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-cosmos-blue transition-colors">Request Demo</a></li>
              <li><a href="#" className="hover:text-cosmos-blue transition-colors">Contact Sales</a></li>
              <li>(888) 555-0123</li>
              <li>info@cosmosmedtech.com</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>© 2026 Cosmos Medical Technologies. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
