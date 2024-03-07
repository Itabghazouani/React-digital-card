import ItabPhoto from "../assets/itab-photo.jpg";

export default function Info() {
  return (
    <div className="info">
      <img src={ItabPhoto} alt="Photo of Itab, the creator of this page" className="info--image"/>
      <h1 className="info--name">Itab Ghazouani</h1>
      <h3 className="info--profession">FrontEnd Developer</h3>
      <a href="https://my-coding-journey.netlify.app/" target="_blank" rel="noopener noreferrer" className="info--website_link">
        Visit My Coding Journey
      </a>
      <div className="info--btn_links">
        <a href="mailto:itab.ghazouani@gmail.com" target="_blank" rel="noopener noreferrer" className="info--email_btn">
          <i className="fa-solid fa-envelope"></i>Email
        </a>
        <a href="https://www.linkedin.com/in/itab-ghazouani/" target="_blank" rel="noopener noreferrer" className="info--linkedin_btn">
          <i className="fa-brands fa-linkedin"></i>Linkedin
        </a>
      </div>
    </div>
  )
}
