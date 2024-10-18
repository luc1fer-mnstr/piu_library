import { Mail, Phone, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-200 py-10 mt-10">
            <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between">
                {/* Column 1: Quick Links */}
                <div className="w-full sm:w-1/4 mb-6">
                    <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="/" className="hover:text-orange-500">Home</a></li>
                        <li><a href="/about" className="hover:text-orange-500">About Us</a></li>
                        <li><a href="/courses" className="hover:text-orange-500">Courses</a></li>
                        <li><a href="/contact" className="hover:text-orange-500">Contact</a></li>
                    </ul>
                </div>
                
                {/* Column 2: Contact Information */}
                <div className="w-full sm:w-1/4 mb-6">
                    <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                    <div className="flex items-center mb-2">
                        <Mail className="w-5 h-5 mr-2" />
                        <a href="mailto:info@university.com" className="hover:text-orange-500">info@university.com</a>
                    </div>
                    <div className="flex items-center mb-2">
                        <Phone className="w-5 h-5 mr-2" />
                        <a href="tel:+959999999" className="hover:text-orange-500">+95 999 999 999</a>
                    </div>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="hover:text-orange-500"><Facebook className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-orange-500"><Twitter className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-orange-500"><Linkedin className="w-5 h-5" /></a>
                    </div>
                </div>
                
                {/* Column 3: University Info */}
                <div className="w-full sm:w-1/4 mb-6">
                    <h3 className="text-lg font-bold mb-4">About the Project</h3>
                    <p className="text-sm">
                        This website was created by the second-year students of PIU's batch 1, aiming to provide an online library platform for students to access educational resources.
                    </p>
                </div>
            </div>
            
            {/* Footer Bottom Section */}
            <div className="mt-10 border-t border-gray-800 pt-4 text-center text-sm">
                <p>&copy; 2024 PIU Online Library. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
