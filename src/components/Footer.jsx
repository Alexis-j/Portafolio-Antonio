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
        <p>&copy; {currentYear} Alexis Jiménez C.
        </p>
      </div>
    </section>
  );
}
