// components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-dark-surface border-t border-dark-border text-dark-muted py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-dark-text font-bold text-lg mb-4">Disciplined AF</h3>
            <p className="text-sm text-dark-muted">Your comprehensive fitness tracking companion</p>
          </div>
          
          <div>
            <h3 className="text-dark-text font-semibold mb-4">Developer</h3>
            <p className="text-sm mb-2 text-dark-muted">
              <span className="font-medium text-dark-text">Satyansh Acharya</span>
            </p>
            <p className="text-sm mb-2 text-dark-muted">
              📞 <a href="tel:+919317094177" className="hover:text-primary-400 transition-colors text-dark-text">+91 9317094177</a>
            </p>
            <p className="text-sm text-dark-muted">
              ✉️ <a href="mailto:acharyasatyansh@gmail.com" className="hover:text-primary-400 transition-colors text-dark-text">acharyasatyansh@gmail.com</a>
            </p>
          </div>
          
          <div>
            <h3 className="text-dark-text font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/app" className="hover:text-primary-400 transition-colors text-dark-muted">Dashboard</a></li>
              <li><a href="/app/log-workout" className="hover:text-primary-400 transition-colors text-dark-muted">Log Workout</a></li>
              <li><a href="/app/progress" className="hover:text-primary-400 transition-colors text-dark-muted">Progress</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-dark-border mt-8 pt-6 text-center text-sm text-dark-muted">
          <p>© {new Date().getFullYear()} Disciplined AF. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

