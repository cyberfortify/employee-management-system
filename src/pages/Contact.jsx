const Contact = () => {
    return (
      <div className="p-4 max-w-4xl mx-auto pb-20">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className=" leading-relaxed mb-6">
          Feel free to reach out via the following platforms:
        </p>
  
        <ul className="space-y-2 text-blue-600">
          <li>
            📧 Email: <a href="mailto:try.aditya2003@gmail.com" className="underline">try.aditya2003@gmail.com</a>
          </li>
          <li>
            💻 GitHub: <a href="https://github.com/cyberfortify" className="underline" target="_blank" rel="noopener noreferrer">github.com/cyberfortify</a>
          </li>
          <li>
            🔗 LinkedIn: <a href="https://linkedin.com/in/aditya-vk-professional" className="underline" target="_blank" rel="noopener noreferrer">linkedin.com/in/aditya-vk-professional</a>
          </li>
        </ul>
      </div>
    );
  };
  
  export default Contact;
  