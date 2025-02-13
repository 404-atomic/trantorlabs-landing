export const scrollToSection = (sectionId: string) => {
  // Remove the '#' if it's included in the sectionId
  const id = sectionId.startsWith('#') ? sectionId.substring(1) : sectionId;
  const element = document.getElementById(id);
  
  if (element) {
    const headerOffset = 80; // Height of fixed header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};
