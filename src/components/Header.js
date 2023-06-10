import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Collapse, Button, VStack } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import './Header.css';

const socials = [
  {
    icon: faEnvelope,
    url: "mailto:itserinlin@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://www.github.com/erinreix",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/linyutien",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      headerElement.style.transform = prevScrollPos > currentScrollPos ? "translateY(0)" : "translateY(-200px)";
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (anchor) => () => {
    const element = document.getElementById(`${anchor}-section`);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transition="transform 0.3s ease-in-out"
      backgroundColor="#121211"
      ref={headerRef}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack px={16} py={4} justifyContent="space-between" alignItems="center">
          <HStack spacing={8}>
            {socials.map(({ icon, url }) => (
              <a key={url} href={url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={icon} size="2x" className="item-hover" />
              </a>
            ))}
          </HStack>
          <HStack spacing={8} display={{ base: "none", md: "flex" }} fontWeight="bold">
            <a href="#projects" onClick={handleClick("projects")} className="item-hover">
              Projects
            </a>
            <a href="mailto:itserinlin@gmail.com" className="item-hover">
              Contact Me
            </a>
          </HStack>
          <Button display={{ base: "flex", md: "none" }} onClick={() => setIsNavOpen(!isNavOpen)} variant="unstyled">
            {isNavOpen ? <CloseIcon boxSize={6} /> : <HamburgerIcon boxSize={6} />}
          </Button>
        </HStack>
        <Collapse in={isNavOpen} animateOpacity>
          <VStack py={4} display={{ base: "flex", md: "none" }} fontWeight="bold" alignItems="center" spacing={4}>
            <a href="#projects" onClick={handleClick("projects")} className="item-hover">
              Projects
            </a>
            <a href="mailto:itserinlin@gmail.com" className="item-hover">
              Contact Me
            </a>
          </VStack>
        </Collapse>
      </Box>
    </Box>
  );
};

export default Header;
