function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer>
      <p>© {year}. Built with React and Vite.</p>
    </footer>
  );
}

export default Footer;