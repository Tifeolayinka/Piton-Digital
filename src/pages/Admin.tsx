import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects, services, testimonials } from '../data/content';
import { ArrowLeft, Edit, Plus, Save, Trash2, LayoutDashboard, FileText, Users, Settings } from 'lucide-react';

const Admin: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const [activeTab, setActiveTab] = useState<'projects' | 'services' | 'testimonials'>('projects');
    const [editItem, setEditItem] = useState<any>(null);
    
    const [projectsData, setProjectsData] = useState(projects);
    const [servicesData, setServicesData] = useState(services);
    const [testimonialsData, setTestimonialsData] = useState(testimonials);

    const handleSave = () => {
        if (!editItem) return;

        if (activeTab === 'projects') {
            setProjectsData(prev => prev.map(p => p.title === editItem.title ? editItem : p));
        } else if (activeTab === 'services') {
            setServicesData(prev => prev.map(s => s.number === editItem.number ? editItem : s));
        } else if (activeTab === 'testimonials') {
            setTestimonialsData(prev => prev.map(t => t.name === editItem.name ? editItem : t));
        }
        setEditItem(null);
    };

    return (
        <div className="min-h-screen bg-zinc-50 flex">
            {/* ... sidebar ... */}
            <div className="w-64 bg-piton-black text-white p-6 flex flex-col">
                {/* ... */}
            </div>

            {/* Main Content */}
            <div className="flex-1 p-10 overflow-y-auto">
                {/* ... header ... */}
                <div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
                    {activeTab === 'projects' && <ProjectsList data={projectsData} onEdit={setEditItem} />}
                    {activeTab === 'services' && <ServicesList data={servicesData} onEdit={setEditItem} />}
                    {activeTab === 'testimonials' && <TestimonialsList data={testimonialsData} onEdit={setEditItem} />}
                </div>
            </div>

            {/* Simple Modal for Edit Demo */}
            {editItem && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-xl max-w-md w-full">
                        <h3 className="text-xl font-bold mb-4">Edit Item</h3>
                        
                        <div className="space-y-4 mb-6">
                            {/* Dynamic Form Fields based on item properties */}
                            {Object.keys(editItem).map(key => {
                                if (key === 'image' || key === 'icon' || key === 'tags' || key === 'caseStudy' || key === 'desc') return null; // Skip complex fields for simple demo
                                return (
                                    <div key={key}>
                                        <label className="block text-xs font-bold text-zinc-500 uppercase mb-1">{key}</label>
                                        <input 
                                            type="text" 
                                            value={editItem[key]} 
                                            onChange={(e) => setEditItem({ ...editItem, [key]: e.target.value })}
                                            className="w-full border border-zinc-200 rounded p-2 text-sm font-medium focus:outline-none focus:border-piton-black"
                                        />
                                    </div>
                                );
                            })}
                            {(editItem.desc) && (
                                <div>
                                    <label className="block text-xs font-bold text-zinc-500 uppercase mb-1">Description</label>
                                    <textarea 
                                        value={editItem.desc} 
                                        onChange={(e) => setEditItem({ ...editItem, desc: e.target.value })}
                                        className="w-full border border-zinc-200 rounded p-2 text-sm font-medium focus:outline-none focus:border-piton-black h-24 resize-none"
                                    />
                                </div>
                            )}
                        </div>

                        <div className="flex justify-end gap-2">
                            <button onClick={() => setEditItem(null)} className="px-4 py-2 text-sm bg-zinc-100 rounded hover:bg-zinc-200">Cancel</button>
                            <button onClick={handleSave} className="px-4 py-2 text-sm bg-piton-black text-white rounded hover:bg-zinc-800">Save Changes</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const NavItem = ({ icon: Icon, label, active, onClick }: any) => (
    // ... same as before
    <button 
        onClick={onClick}
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${active ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'}`}
    >
        <Icon className="w-4 h-4" />
        {label}
    </button>
);

const ProjectsList = ({ onEdit }: { onEdit: (item: any) => void }) => (
    <table className="w-full text-left">
        {/* ... header ... */}
        <thead className="bg-zinc-50 text-zinc-500 text-xs uppercase font-medium border-b border-zinc-200">
            <tr>
                <th className="px-6 py-4">Project Name</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Tags</th>
                <th className="px-6 py-4 text-right">Actions</th>
            </tr>
        </thead>
        <tbody className="divide-y divide-zinc-100">
            {projects.map((p, i) => (
                <tr key={i} className="hover:bg-zinc-50 transition-colors group">
                    {/* ... columns ... */}
                    <td className="px-6 py-4 font-medium text-piton-black flex items-center gap-3">
                        <img src={p.image} className="w-10 h-10 rounded object-cover bg-zinc-200" />
                        {p.title}
                    </td>
                    <td className="px-6 py-4 text-sm text-zinc-500">{p.type}</td>
                    <td className="px-6 py-4">
                        <div className="flex gap-1">
                            {p.tags.slice(0, 2).map(t => (
                                <span key={t} className="px-2 py-0.5 bg-zinc-100 text-[10px] font-mono rounded text-zinc-500">{t}</span>
                            ))}
                        </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button onClick={() => onEdit(p)} className="p-2 text-zinc-400 hover:text-piton-black hover:bg-zinc-200 rounded"><Edit className="w-4 h-4" /></button>
                            <button className="p-2 text-zinc-400 hover:text-red-500 hover:bg-red-50 rounded"><Trash2 className="w-4 h-4" /></button>
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);

const ServicesList = ({ onEdit }: { onEdit: (item: any) => void }) => (
    <table className="w-full text-left">
        {/* ... header ... */}
        <thead className="bg-zinc-50 text-zinc-500 text-xs uppercase font-medium border-b border-zinc-200">
            <tr>
                <th className="px-6 py-4">Service</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4 text-right">Actions</th>
            </tr>
        </thead>
        <tbody className="divide-y divide-zinc-100">
            {services.map((s, i) => (
                <tr key={i} className="hover:bg-zinc-50 transition-colors group">
                    <td className="px-6 py-4 font-medium text-piton-black">{s.title}</td>
                    <td className="px-6 py-4 text-sm text-zinc-500">{s.price}</td>
                    <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button onClick={() => onEdit(s)} className="p-2 text-zinc-400 hover:text-piton-black hover:bg-zinc-200 rounded"><Edit className="w-4 h-4" /></button>
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);

const TestimonialsList = ({ onEdit }: { onEdit: (item: any) => void }) => (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {testimonials.map((t, i) => (
            <div key={i} className="p-4 border border-zinc-200 rounded-lg hover:border-piton-accent transition-colors relative group">
                {/* ... content ... */}
                <div className="flex items-center gap-3 mb-3">
                    <img src={t.image} className="w-8 h-8 rounded-full" />
                    <div>
                        <h4 className="font-bold text-sm text-piton-black">{t.name}</h4>
                        <p className="text-[10px] text-zinc-500">{t.role}</p>
                    </div>
                </div>
                <p className="text-xs text-zinc-500 line-clamp-3">"{t.quote}"</p>
                
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => onEdit(t)} className="p-1.5 text-zinc-400 hover:text-piton-black bg-white rounded shadow-sm border border-zinc-100"><Edit className="w-3 h-3" /></button>
                </div>
            </div>
        ))}
    </div>
);

export default Admin;

