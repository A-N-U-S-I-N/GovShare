function Footer() {
    return (
      <footer className="bg-light text-center py-3 mt-5">
        <div className="container">
          <small>
            &copy; {new Date().getFullYear()} GovDocShare. All rights reserved.
          </small><br>
          <small>Developed by <a href="https://anushkacode.vercel.app" className="text-decoration-none text-body link-primary" target="_blank" rel="noreferrer" >Anushka Singh</a></small>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  
