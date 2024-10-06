export default function Footer() {
    return (
      <footer className="bg-gray-800 p-4 text-center text-white">
        <p>© 2024 Matheus Rezende</p>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/matsrezende" target="_blank" rel="noopener noreferrer">
            <img src="/github-icon.svg" alt="GitHub" width="24" />
          </a>
          <a href="https://www.linkedin.com/in/mattheusrezende" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin-icon.svg" alt="LinkedIn" width="24" />
          </a>
        </div>
      </footer>
    );
  }
  