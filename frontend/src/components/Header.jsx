const Header = () => {
  return (
    <nav className="bg-white shadow py-3">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <a href="/" className="flex items-center z-10">
          <img src="/nea-logo.png" alt="NEA" className="h-12 w-auto" />
        </a>
        <div className="hidden lg:flex items-center">
          <a
            href="https://www.nea.org.np/admin/assets/uploads/nea_white_paper.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 font-bold text-center animate-pulse"
          >
            <p className="m-0 leading-snug">*** ने. वि. प्रा श्वेतपत्र ***</p>
            <p className="m-0 leading-snug">(बैशाख २०८२)</p>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
