function Footer() {
  return (
    <footer className="relative bottom-0 bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            Empowering learners with in-demand tech skills. We provide high-quality online courses to help you advance your career in the ever-evolving tech landscape.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Explore Courses</h2>
          <ul>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Web Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Data Science
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Cybersecurity
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Software Engineering
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">
                More Courses...
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Get In Touch</h2>
          <ul>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors duration-300">
              Facebook
            </a>
            <a href="#" className="hover:text-white transition-colors duration-300">
              Twitter
            </a>
            <a href="#" className="hover:text-white transition-colors duration-300">
              Instagram
            </a>
          </div>
        </div>
      </div>
      <p className="text-center text-xs pt-8">© 2024 Edunet. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
