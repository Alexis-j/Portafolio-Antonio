import React, { useEffect, useState } from "react";
import "../style/footer.css";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Actualizar el año actual
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <section id="footer" >
      <div className="footer">
        <div>
          <nav className="navbar">
            <ul className='nav-list'>
              <li><a href='/'>About</a></li>
              <li><a href='/'>Projects</a></li>
              <li><a href='/'>Contact</a></li>
            </ul>
          </nav>
        </div>
        <div>
          <p>&copy; {currentYear} Alexis Jiménez C.</p>
        </div>
      </div>
    </section>
  );
}
