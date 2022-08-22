import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <p>
        Pokémon is a registered trademark of Nintendo. © Nintendo, Nintendo
        Entertainment Planning & Development, and Pokémon are trademarks of Nintendo
        and/or Nintendo&apos;s affiliated companies. © 1995-{new Date().getFullYear()} Nintendo.
      </p>
    </footer>
  );
}

export default Footer;