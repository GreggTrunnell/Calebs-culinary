// import brunchImg from `./public/images/openart-image_UyWRjhBZ_1753502710045_raw.jpg`

function Services() {

  //I orginally did not use an array for the different sections. Changing it to a .map eliminates clutter in return statement, reads easier,
  //much better for scalability. 
const accordionItems = [
  {
    id: "One",
    title: "Brunch",
    image: "public/images/openart-image_UyWRjhBZ_1753502710045_raw.jpg",
    strong: "This meal is typically before noon but after breakfast.",
    body: `Brunch is really trying to bridge the gap between what's accepted as breakfast food and what's accepted as lunch food. It's not
     easy to balance the pride and feelings that both breakfast and lunch bring to the table. But it's their willingness to set aside their 
     differences and work together that truly knocks your socks off!`,
    show: true
  },
  {
    id: "Two",
    title: "Lunchin",
    image: "public/images/openart-image_TAlvrg2K_1753503994615_raw.jpg",
    strong: "This is widely considered the middle meal of the day.",
    body: `To be honest, I don't know many people who eat three meals a day. I mean, you eat breakfast at, say, 8 a.m., and then lunch just 
    four hours later! I'm just not that hungry after four hours—plus, I'm lazy, so that's part of it too. Maybe that's why you need me to 
    cook you lunch. Well, if you're one of those peeps who does eat three meals a day, this would be your middle one.`,
    show: false
  },
  {
    id: "Three",
    title: "Supper",
    image: "public/images/openart-image_snNn-UnN_1753504195658_raw.jpg", 
    strong: "This is considered the last meal of the day.",
    body: `Now, why call it supper, you may ask? Well, calling the last meal of the day dinner might confuse certain age demographics. 
    The older generation is accustomed to referring to what we call lunch as dinner. Calling it supper doesn't necessarily confuse either 
    demographic, so it's the one I prefer.`,
    show: false
  }
];

return (
    <div className="accordion" id="accordionExample">
      {accordionItems.map(({ id, title, image, strong, body, show }) => (
        <div className="accordion-item" key={id}>
          <h2 className="accordion-header" id={`heading${id}`}>
            <button
              className={`accordion-button ${!show ? "collapsed" : ""}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${id}`}
              aria-expanded={show}
              aria-controls={`collapse${id}`}
            >
              {title}
            </button>
          </h2>
          <div
            id={`collapse${id}`}
            className={`accordion-collapse collapse ${show ? "show" : ""}`}
            aria-labelledby={`heading${id}`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <img src={image}/>
              <strong>{strong}</strong> {body}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Services;
