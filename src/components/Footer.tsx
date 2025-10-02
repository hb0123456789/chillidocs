import { Flame, Linkedin, Twitter, Youtube, Mail, Globe } from "lucide-react";

const Footer = () => {
  const links = [
    { label: "About Us", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Careers", href: "#" }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Flame className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold">Chillidocs</h3>
          </div>
          <p className="text-background/80 text-lg">Spice Up Your Order Process.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {links.map((link, index) => (
            <a 
              key={index} 
              href={link.href}
              className="text-background/80 hover:text-background transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        
        <div className="flex flex-col items-center gap-4 mb-8">
          <a href="mailto:hello@chillidocs.com" className="flex items-center gap-2 text-background/80 hover:text-background transition-colors">
            <Mail className="w-4 h-4" />
            <span>hello@chillidocs.com</span>
          </a>
          <a href="https://www.chillidocs.com" className="flex items-center gap-2 text-background/80 hover:text-background transition-colors">
            <Globe className="w-4 h-4" />
            <span>www.chillidocs.com</span>
          </a>
        </div>
        
        <div className="flex justify-center gap-4 mb-8">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a 
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
        
        <div className="text-center text-sm text-background/60 border-t border-background/20 pt-8">
          <p>© {new Date().getFullYear()} Chillidocs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
