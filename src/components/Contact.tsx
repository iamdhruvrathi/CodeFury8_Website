/* import React from 'react';
import { Phone, Mail, MessageCircle, Instagram, Linkedin, Github, Users } from 'lucide-react';

const Contact = () => {
  const contacts = [
    {
      name: 'Arjun Sharma',
      role: 'Event Coordinator',
      phone: '+91 98765 43210',
      email: 'arjun@ieeeuvcecs.com',
      whatsapp: 'https://wa.me/919876543210'
    },
    {
      name: 'Priya Patel',
      role: 'Technical Lead',
      phone: '+91 98765 43211',
      email: 'priya@ieeeuvcecs.com',
      whatsapp: 'https://wa.me/919876543211'
    },
    {
      name: 'Rohit Kumar',
      role: 'Registration Head',
      phone: '+91 98765 43212',
      email: 'rohit@ieeeuvcecs.com',
      whatsapp: 'https://wa.me/919876543212'
    }
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/ieeeuvcecs',
      color: 'text-pink-400 hover:text-pink-300'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/company/ieee-uvce',
      color: 'text-blue-400 hover:text-blue-300'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/ieee-uvce',
      color: 'text-gray-400 hover:text-gray-300'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-cyan-400 glow-text">Get In</span> Touch
        </h2>

        <div className="max-w-6xl mx-auto">
          {/* Contact Persons */}
        /*  <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contacts.map((contact, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl text-center transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-1">{contact.name}</h3>
                <p className="text-cyan-400 font-medium mb-4">{contact.role}</p>
                
                <div className="space-y-3">
                  <a
                    href={`tel:${contact.phone}`}
                    className="flex items-center justify-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">{contact.phone}</span>
                  </a>
                  
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center justify-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">{contact.email}</span>
                  </a>
                  
                  <a
                    href={contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glow-button bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-full text-sm transition-all duration-300 inline-flex items-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Community Links */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* WhatsApp Group */}
            <div className="glass-card p-6 rounded-2xl text-center">
              <MessageCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">WhatsApp Group</h3>
              <p className="text-gray-300 mb-4">Join our official WhatsApp group for updates and discussions</p>
              <a
                href="https://chat.whatsapp.com/codefury8"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-button bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Join Group
              </a>
            </div>

            {/* Telegram Group */}
            <div className="glass-card p-6 rounded-2xl text-center">
              <MessageCircle className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Telegram Channel</h3>
              <p className="text-gray-300 mb-4">Follow our Telegram channel for important announcements</p>
              <a
                href="https://t.me/codefury8"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-button bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Follow Channel
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="glass-card p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
            <div className="flex justify-center space-x-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} transition-all duration-300 transform hover:scale-110`}
                  aria-label={social.name}
                >
                  <social.icon className="w-8 h-8" />
                </a>
              ))}
            </div>
            <p className="text-gray-400 mt-6">Stay updated with the latest news and announcements</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 
*/



import React from 'react';
import { Phone, Mail, MessageCircle, Instagram, Linkedin, Github, Users } from 'lucide-react';

const Contact = () => {
  const contacts = [
    {
      name: 'Girish Bharadwaj',
      role: 'Chairperson, Computer Society, IEEE UVCE',
      phone: '+91 74065 43569',
      email: 'girish@ieeeuvcecs.com',
      whatsapp: 'https://wa.me/917406543569'
    },
    {
      name: 'Samyuktha Sridhar',
      role: 'Vice Chairperson, Computer Society, IEEE UVCE',
      phone: '+91 91085 62257',
      email: 'samyuktha@ieeeuvcecs.com',
      whatsapp: 'https://wa.me/919108562257'
    }
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/ieeeuvcecs',
      color: 'text-pink-400 hover:text-pink-300'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/company/ieee-uvce',
      color: 'text-blue-400 hover:text-blue-300'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/ieee-uvce',
      color: 'text-gray-400 hover:text-gray-300'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-cyan-400 glow-text">For More Queries,</span> Contact
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Contact Persons */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {contacts.map((contact, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl text-center transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{contact.name}</h3>
                <p className="text-cyan-400 font-medium mb-4">{contact.role}</p>

                <div className="space-y-3">
                  <a
                    href={`tel:${contact.phone}`}
                    className="flex items-center justify-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">{contact.phone}</span>
                  </a>

                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center justify-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">{contact.email}</span>
                  </a>

                  <a
                    href={contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glow-button bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-full text-sm transition-all duration-300 inline-flex items-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Social Media */}
          <div className="glass-card p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
            <div className="flex justify-center space-x-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} transition-all duration-300 transform hover:scale-110`}
                  aria-label={social.name}
                >
                  <social.icon className="w-8 h-8" />
                </a>
              ))}
            </div>
            <p className="text-gray-400 mt-6">Stay updated with the latest news and announcements</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;