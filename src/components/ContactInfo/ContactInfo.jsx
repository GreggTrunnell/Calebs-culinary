
function ContactInfo() {

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
    <div className='ContactInfo'>
      <button className="btn btn-custom" onClick={handleEmail}>Email: gggtrunnell@gmail.com</button>
      <button className="btn btn-custom" onClick={handleCall}>Call Me: (555) 867-5309</button>

    </div>
  );
}

export default ContactInfo;
