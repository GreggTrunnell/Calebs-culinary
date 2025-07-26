
function HomePage() {
  
  const handleEmail = () => {
    const recipient = "gggtrunnell@gmail.com";
    //encodeURIComponent() ensures special characters like spaces (%20) and ?, &, etc., don’t break the URL.
    const subject = encodeURIComponent("Come make me food!");
    //window.location.href = 'mailto:...' is how you tell the browser to navigate to a mailto: link.
    //mailto is a protocol for adding an email link
    window.location.href = `mailto:${recipient}?subject=${subject}`;
  };

  const handleCall = () => {
    //like mailto, tel: is a protocol for adding a telephone link
    window.location.href = `tel:+15558675309`
  }

  return (
      <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // centers items horizontally
        gap: "1rem", // adds spacing between image and buttons
        padding: "1rem",
      }}
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC7rogHIvYpsGtMloHSQBjqSrV0OOuWfAVkQ&s"
        style={{ width: "325px", height: "300px" }}
      />
      <button className="btn btn-custom" onClick={handleEmail}>Email</button>
      <button className="btn btn-custom" onClick={handleCall}>Call Me</button>
    </div>
  );
}

export default HomePage;
