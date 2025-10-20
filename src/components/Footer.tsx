import { Flame, Linkedin, Twitter, Youtube, Mail, Globe } from "lucide-react";

const Footer = () => {
  const links = [
    { label: "About Us", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Flame className="w-6 h-6 text-orange-500" />
            <h3 className="text-xl font-bold">ChiliDocs</h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {links.map((link, index) => (
              <a 
                key={index} 
                href={link.href}
                className="text-background/80 hover:text-background transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <div className="flex gap-3">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a 
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-background/80 border-t border-background/20 pt-4">
          <a href="mailto:hellochilidocs@gmail.com" className="flex items-center gap-1 hover:text-background transition-colors">
            <Mail className="w-3 h-3" />
            <span>hellochilidocs@gmail.com</span>
          </a>
          <span className="text-background/40">•</span>
          <a href="https://www.chilidocs.co.in" className="flex items-center gap-1 hover:text-background transition-colors">
            <Globe className="w-3 h-3" />
            <span>www.chilidocs.co.in</span>
          </a>
          <span className="text-background/40">•</span>
          <span className="text-background/60">© {new Date().getFullYear()} ChiliDocs. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
