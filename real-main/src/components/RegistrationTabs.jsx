import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBuilding, FaChartLine, FaBox, FaShoppingCart, FaFileContract, FaUser, FaEnvelope, FaPhone, FaBriefcase, FaGlobeAmericas, FaDollarSign, FaCheckCircle, FaShieldAlt, FaArrowRight } from 'react-icons/fa';

const RegistrationTabs = () => {
    const [activeTab, setActiveTab] = useState('Enterprise');
    const [formData, setFormData] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const tabs = [
        { id: 'Enterprise', label: 'Enterprise', icon: FaBuilding, gradient: 'from-blue-600 to-blue-700', lightBg: 'bg-blue-50', darkBg: 'bg-blue-600', hoverBg: 'hover:bg-blue-700', ringColor: 'ring-blue-500', textColor: 'text-blue-700' },
        { id: 'Investor', label: 'Investor', icon: FaChartLine, gradient: 'from-emerald-600 to-emerald-700', lightBg: 'bg-emerald-50', darkBg: 'bg-emerald-600', hoverBg: 'hover:bg-emerald-700', ringColor: 'ring-emerald-500', textColor: 'text-emerald-700' },
        { id: 'Supplier', label: 'Supplier', icon: FaBox, gradient: 'from-violet-600 to-violet-700', lightBg: 'bg-violet-50', darkBg: 'bg-violet-600', hoverBg: 'hover:bg-violet-700', ringColor: 'ring-violet-500', textColor: 'text-violet-700' },
        { id: 'Buyer', label: 'Buyer', icon: FaShoppingCart, gradient: 'from-amber-600 to-amber-700', lightBg: 'bg-amber-50', darkBg: 'bg-amber-600', hoverBg: 'hover:bg-amber-700', ringColor: 'ring-amber-500', textColor: 'text-amber-700' },
        { id: 'Deal', label: 'Deal', icon: FaFileContract, gradient: 'from-rose-600 to-rose-700', lightBg: 'bg-rose-50', darkBg: 'bg-rose-600', hoverBg: 'hover:bg-rose-700', ringColor: 'ring-rose-500', textColor: 'text-rose-700' }
    ];

    const currentTab = tabs.find(t => t.id === activeTab);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        alert(`✅ Registration submitted successfully as ${activeTab}!\n\nThis is a demo - no data was actually sent.`);
        setIsSubmitting(false);
        setFormData({});
    };

    const formVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1], staggerChildren: 0.1 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    };

    const FormField = ({ label, type = "text", placeholder, name, icon: Icon, className = "" }) => (
        <motion.div variants={itemVariants} className={className}>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">{label} <span className="text-red-500">*</span></label>
            <div className="relative group">
                {Icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-gray-600 transition-colors"><Icon size={14} /></div>}
                <input type={type} name={name} placeholder={placeholder} value={formData[name] || ''} onChange={(e) => handleInputChange(name, e.target.value)} className={`w-full ${Icon ? 'pl-9' : 'pl-3'} pr-3 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:${currentTab.ringColor} focus:ring-opacity-20 focus:border-gray-900 outline-none transition-all text-xs hover:border-gray-400`} />
            </div>
        </motion.div>
    );

    const SelectField = ({ label, options, name, icon: Icon, className = "" }) => (
        <motion.div variants={itemVariants} className={className}>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">{label} <span className="text-red-500">*</span></label>
            <div className="relative group">
                {Icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-gray-600 transition-colors z-10"><Icon size={14} /></div>}
                <select name={name} value={formData[name] || ''} onChange={(e) => handleInputChange(name, e.target.value)} className={`w-full ${Icon ? 'pl-9' : 'pl-3'} pr-8 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:${currentTab.ringColor} focus:ring-opacity-20 focus:border-gray-900 outline-none transition-all appearance-none text-xs cursor-pointer hover:border-gray-400`}>
                    {options.map((opt, i) => (<option key={i} value={i === 0 ? "" : opt}>{opt}</option>))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
            </div>
        </motion.div>
    );

    const TextAreaField = ({ label, placeholder, name, rows = 4, className = "" }) => (
        <motion.div variants={itemVariants} className={className}>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">{label} <span className="text-red-500">*</span></label>
            <textarea name={name} rows={rows} placeholder={placeholder} value={formData[name] || ''} onChange={(e) => handleInputChange(name, e.target.value)} className={`w-full px-3 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:${currentTab.ringColor} focus:ring-opacity-20 focus:border-gray-900 outline-none transition-all resize-none text-xs hover:border-gray-400`} />
        </motion.div>
    );

    const SubmitButton = () => (
        <motion.div variants={itemVariants} className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-3">
            <div className="flex items-center gap-2 text-xs text-gray-600"><FaShieldAlt className="text-green-600" size={14} /><span>Secure & encrypted</span></div>
            <button type="submit" disabled={isSubmitting} className={`group px-6 py-2.5 bg-gradient-to-r ${currentTab.gradient} ${currentTab.hoverBg} text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm`}>
                {isSubmitting ? (<><svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>Processing...</>) : (<>Register as {activeTab}<FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" /></>)}
            </button>
        </motion.div>
    );

    const FormHeader = ({ title, subtitle, description }) => {
        const Icon = currentTab.icon;
        return (
            <motion.div variants={itemVariants} className="pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2.5 mb-2">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${currentTab.gradient} text-white shadow-md`}><Icon size={18} /></div>
                    <div><h2 className="text-xl font-bold text-gray-900">{title}</h2><p className="text-xs text-gray-500 mt-0.5">{subtitle}</p></div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{description}</p>
            </motion.div>
        );
    };

    const EnterpriseForm = () => (
        <motion.form variants={formVariants} initial="hidden" animate="visible" exit="exit" onSubmit={handleSubmit} className="space-y-6">
            <FormHeader title="Enterprise Registration" subtitle="Join the BiasharaLink™ verified network" description="Register your business to access African trade opportunities and connect with global partners." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField label="Contact Name" placeholder="John Doe" name="contact_name" icon={FaUser} />
                <FormField label="Email Address" type="email" placeholder="john@company.com" name="email" icon={FaEnvelope} />
                <FormField label="Phone Number" type="tel" placeholder="+254 712 345 678" name="phone" icon={FaPhone} />
                <FormField label="Company Name" placeholder="Your Company Ltd" name="company_name" icon={FaBuilding} />
                <SelectField label="Country" name="country" icon={FaGlobeAmericas} options={['Select country', 'Kenya', 'Nigeria', 'South Africa', 'Ghana', 'Ethiopia', 'Tanzania', 'Uganda', 'Rwanda']} />
                <SelectField label="Industry Sector" name="sector" icon={FaBriefcase} options={['Select sector', 'Technology & Software', 'Agriculture & Agribusiness', 'Manufacturing', 'Financial Services', 'Healthcare', 'Logistics & Transport', 'Energy & Utilities']} />
                <SelectField label="Your Role" name="role" icon={FaUser} className="md:col-span-2" options={['Select your role', 'CEO / Managing Director', 'Founder / Co-Founder', 'Business Development Manager', 'Operations Manager', 'Finance Director', 'Other Executive']} />
            </div>
            <SubmitButton />
        </motion.form>
    );

    const InvestorForm = () => (
        <motion.form variants={formVariants} initial="hidden" animate="visible" exit="exit" onSubmit={handleSubmit} className="space-y-6">
            <FormHeader title="Investor Registration" subtitle="Access DealHouse™ platform opportunities" description="Request access to curated African trade investment opportunities and verified deals." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField label="Contact Name" placeholder="Jane Smith" name="contact_name" icon={FaUser} />
                <FormField label="Email Address" type="email" placeholder="jane@institution.com" name="email" icon={FaEnvelope} />
                <FormField label="Phone Number" type="tel" placeholder="+1 555 123 4567" name="phone" icon={FaPhone} />
                <FormField label="Institution Name" placeholder="Investment Fund LLC" name="institution" icon={FaBuilding} />
                <SelectField label="Investor Type" name="investor_type" icon={FaChartLine} options={['Select investor type', 'Venture Capital', 'Private Equity', 'Angel Investor', 'Family Office', 'Institutional Investor', 'Development Finance']} />
                <SelectField label="Sector Focus" name="sector_focus" icon={FaBriefcase} options={['Primary sector focus', 'Technology & Innovation', 'Healthcare & Life Sciences', 'Energy & Utilities', 'Infrastructure', 'Financial Services', 'Agriculture', 'Multi-Sector']} />
                <SelectField label="Typical Investment Range" name="ticket_size" icon={FaDollarSign} className="md:col-span-2" options={['Select investment range', 'Under $100K', '$100K - $500K', '$500K - $2M', '$2M - $10M', '$10M - $50M', '$50M+']} />
            </div>
            <SubmitButton />
        </motion.form>
    );

    const SupplierForm = () => (
        <motion.form variants={formVariants} initial="hidden" animate="visible" exit="exit" onSubmit={handleSubmit} className="space-y-6">
            <FormHeader title="Supplier Registration" subtitle="Join Asili Markets™ supplier network" description="Register as a commodity supplier to access verified global buyers and premium trade opportunities." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField label="Contact Name" placeholder="Your full name" name="contact_name" icon={FaUser} />
                <FormField label="Email Address" type="email" placeholder="you@organization.com" name="email" icon={FaEnvelope} />
                <FormField label="Phone Number" type="tel" placeholder="+254 712 345 678" name="phone" icon={FaPhone} />
                <FormField label="Company / Cooperative Name" placeholder="Your organization" name="organization" icon={FaBuilding} />
                <SelectField label="Country of Origin" name="country" icon={FaGlobeAmericas} options={['Select country', 'Kenya', 'Ethiopia', 'Uganda', 'Tanzania', 'Rwanda', 'Burundi', 'Malawi', 'Zambia']} />
                <SelectField label="Primary Commodities" name="commodities" icon={FaBox} options={['Select commodities', 'Coffee', 'Tea', 'Cocoa', 'Cotton', 'Cashew Nuts', 'Spices', 'Dried Fruits', 'Essential Oils']} />
                <FormField label="Annual Supply Capacity" placeholder="e.g., 1,000 metric tons" name="capacity" icon={FaBox} className="md:col-span-2" />
            </div>
            <SubmitButton />
        </motion.form>
    );

    const BuyerForm = () => (
        <motion.form variants={formVariants} initial="hidden" animate="visible" exit="exit" onSubmit={handleSubmit} className="space-y-6">
            <FormHeader title="Buyer Registration" subtitle="Source quality African commodities" description="Join our network of verified buyers to source premium commodities from African suppliers." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField label="Contact Name" placeholder="Your full name" name="contact_name" icon={FaUser} />
                <FormField label="Email Address" type="email" placeholder="you@company.com" name="email" icon={FaEnvelope} />
                <FormField label="Phone Number" type="tel" placeholder="+1 555 123 4567" name="phone" icon={FaPhone} />
                <FormField label="Company Name" placeholder="Your company name" name="company" icon={FaBuilding} />
                <SelectField label="Country" name="country" icon={FaGlobeAmericas} options={['Select country', 'United States', 'United Kingdom', 'Germany', 'Netherlands', 'Japan', 'China', 'France', 'Italy']} />
                <SelectField label="Commodities of Interest" name="commodities" icon={FaShoppingCart} options={['Select commodities', 'Coffee', 'Tea', 'Cocoa', 'Cotton', 'Cashew Nuts', 'Spices', 'Dried Fruits', 'Essential Oils']} />
                <FormField label="Annual Purchase Volume" placeholder="e.g., 500 metric tons" name="volume" icon={FaBox} className="md:col-span-2" />
            </div>
            <SubmitButton />
        </motion.form>
    );

    const DealForm = () => (
        <motion.form variants={formVariants} initial="hidden" animate="visible" exit="exit" onSubmit={handleSubmit} className="space-y-6">
            <FormHeader title="Deal Registration" subtitle="Submit to DealHouse™ platform" description="Submit your investment opportunity to be featured on our platform and connect with qualified investors." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField label="Contact Name" placeholder="Your full name" name="contact_name" icon={FaUser} />
                <FormField label="Email Address" type="email" placeholder="you@company.com" name="email" icon={FaEnvelope} />
                <FormField label="Phone Number" type="tel" placeholder="+254 712 345 678" name="phone" icon={FaPhone} />
                <FormField label="Company Name" placeholder="Your company name" name="company" icon={FaBuilding} />
                <SelectField label="Deal Type" name="deal_type" icon={FaFileContract} options={['Select deal type', 'Equity Investment', 'Debt Financing', 'Trade Finance', 'Convertible Note', 'Joint Venture', 'Strategic Partnership']} />
                <SelectField label="Industry Sector" name="sector" icon={FaBriefcase} options={['Select sector', 'Technology & Software', 'Agriculture & Agribusiness', 'Infrastructure & Construction', 'Renewable Energy', 'Financial Services', 'Healthcare', 'Manufacturing']} />
                <FormField label="Investment Amount Sought" placeholder="e.g., $2,000,000" name="amount" icon={FaDollarSign} className="md:col-span-2" />
                <TextAreaField label="Brief Description" placeholder="Provide a concise overview of your investment opportunity, including key highlights, traction, and use of funds..." name="description" className="md:col-span-2" />
            </div>
            <SubmitButton />
        </motion.form>
    );

    const renderForm = () => {
        const forms = { Enterprise: EnterpriseForm, Investor: InvestorForm, Supplier: SupplierForm, Buyer: BuyerForm, Deal: DealForm };
        const FormComponent = forms[activeTab];
        return <FormComponent />;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
            <div className='mt-28'></div>
            <div className=" py-4 px-4 ">
                
            </div>
            <div className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
                            <div><h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">{activeTab} Portal</h2><p className="text-gray-600 text-sm">Choose your registration type and get started</p></div>
                        </div>
                    </motion.div>
                    <div className="bg-white rounded-xl shadow-lg border border-gray-200 mb-6 p-1.5 overflow-x-auto">
                        <div className="flex gap-1.5 min-w-max sm:min-w-0">
                            {tabs.map((tab) => {
                                const Icon = tab.icon;
                                const isActive = activeTab === tab.id;
                                return (
                                    <button key={tab.id} onClick={() => setActiveTab(tab.id)} className="relative flex-1 min-w-[110px] sm:min-w-0">
                                        <motion.div className={`flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2.5 rounded-lg font-medium transition-all ${isActive ? `${tab.lightBg} ${tab.textColor} shadow-md` : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`} whileHover={{ scale: isActive ? 1 : 1.02 }} whileTap={{ scale: 0.98 }}>
                                            <Icon size={14} />
                                            <span className="text-xs sm:text-sm">{tab.label}</span>
                                            {isActive && <motion.div layoutId="activeIndicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent" transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }} />}
                                        </motion.div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    <motion.div layout className="bg-white rounded-xl shadow-lg border border-gray-200 p-5 sm:p-7">
                        <AnimatePresence mode="wait">{renderForm()}</AnimatePresence>
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="flex items-center gap-2.5 p-3 bg-white rounded-lg shadow-md border border-gray-100"><FaShieldAlt className="text-green-600 text-lg" /><div><p className="font-semibold text-gray-900 text-sm">Secure Platform</p><p className="text-xs text-gray-600">Bank-level encryption</p></div></div>
                        <div className="flex items-center gap-2.5 p-3 bg-white rounded-lg shadow-md border border-gray-100"><FaCheckCircle className="text-blue-600 text-lg" /><div><p className="font-semibold text-gray-900 text-sm">Verified Network</p><p className="text-xs text-gray-600">Trusted partners only</p></div></div>
                        <div className="flex items-center gap-2.5 p-3 bg-white rounded-lg shadow-md border border-gray-100"><FaGlobeAmericas className="text-purple-600 text-lg" /><div><p className="font-semibold text-gray-900 text-sm">Global Reach</p><p className="text-xs text-gray-600">African & worldwide</p></div></div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationTabs;