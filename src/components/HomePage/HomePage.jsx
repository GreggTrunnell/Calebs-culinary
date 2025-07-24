
function HomePage() {
  
  const handleEmail = () => {
    const recipient = "gggtrunnell@gmail.com";
    const subject = encodeURIComponent("Come make me food!");
    window.location.href = `mailto:${recipient}?subject=${subject}`;
  };

  const handleCall = () => {
    window.location.href = `tel:+15558675309`
  }

  return (
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC7rogHIvYpsGtMloHSQBjqSrV0OOuWfAVkQ&s"
        style={{ width: "325px", height: "300px" }}
      />
      <button onClick={handleEmail}>Email</button>
      <button onClick={handleCall}>Call Me</button>
    </div>
  );
}

export default HomePage;
