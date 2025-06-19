const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 text-center text-sm py-3 border-t border-gray-200 dark:border-gray-700 w-full fixed bottom-0 left-0 z-40">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p>
          © {new Date().getFullYear()} <span className="font-semibold">Employee Manager</span> • Built by <span className="font-semibold text-blue-600">Aditya Vishwakarma</span>
        </p>
        <div className="flex gap-4 text-sm">
          <a
            href="https://github.com/cyberfortify"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/aditya-vk-professional"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
