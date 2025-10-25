import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 right-0 z-50 p-6">
      <Button 
        asChild
        variant="secondary"
        size="default"
      >
        <a href="https://chilidocs.co.in/signin" target="_blank" rel="noopener noreferrer">
          Login
        </a>
      </Button>
    </header>
  );
};

export default Header;
