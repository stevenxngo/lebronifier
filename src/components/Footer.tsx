function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer>
      <p>© {year}. Built with React and Vite, deployed on Github Pages.</p>
    </footer>
  );
}

export default Footer;