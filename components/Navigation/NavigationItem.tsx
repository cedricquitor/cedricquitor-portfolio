import { useState } from "react";
import { Link } from "react-scroll";

interface NavigationItemProps {
  title: string;
  url: string;
  offset?: number;
  className?: string;
}

const NavigationItem = (props: NavigationItemProps) => {
  const [isLinkActive, setIsLinkActive] = useState(false);

  const { title, url, offset, className } = props;
  return (
    <Link
      to={url}
      smooth={true}
      duration={800}
      offset={offset ? offset : 0}
      spy={true}
      className={`${className} ${
        isLinkActive ? "text-blue-600" : "text-black"
      }`}
      onSetActive={() => setIsLinkActive(true)}
      onSetInactive={() => setIsLinkActive(false)}
    >
      {title}
    </Link>
  );
};

export default NavigationItem;
