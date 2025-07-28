import ContactInfo from "../ContactInfo/ContactInfo";

function HomePage() {
  


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
        src="public/images/chef-photo.png"
        alt="Cartoon of a mustached chef smiling"
        style={{ width: "500px", height: "475px" }}
      />
    <ContactInfo />
    </div>
  );
}

export default HomePage;
