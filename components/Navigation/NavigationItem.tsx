import { useState } from "react";
import { Link } from "react-scroll";

interface NavigationItemProps {
  title: string;
  url: string;
  offset?: number;
  className?: string;
  onClick?: () => void;
}

const NavigationItem = (props: NavigationItemProps) => {
  const [isLinkActive, setIsLinkActive] = useState(false);

  const { title, url, offset, className, onClick } = props;
  return (
    <Link
      to={url}
      smooth={true}
      duration={800}
      offset={offset ? offset : 0}
      spy={true}
      className={`${className} ${
        isLinkActive ? "text-emerald-600" : "text-black"
      }`}
      onClick={onClick}
      onSetActive={() => setIsLinkActive(true)}
      onSetInactive={() => setIsLinkActive(false)}
    >
      {title}
    </Link>
  );
};

export default NavigationItem;
