
function Services() {

  return (
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Brunch
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>This meal is typically before noon but after breakfast.</strong>Brunch is really trying to bridge the gap between what's 
            accepted as breakfast food and what's accepted as lunch food. It's not easy to balance the pride and feelings that both 
            breakfast and lunch bring to the table. But it's their willingness to set aside their differences and work together that truly 
            knocks your socks off!
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Lunchin
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>This is widely considered the middle meal of the day.</strong>To be honest, I don't know many people who eat three meals
             a day. I mean, you eat breakfast at, say, 8 a.m., and then lunch just four hours later! I'm just not that hungry after four 
             hours—plus, I'm lazy, so that's part of it too. Maybe that's why you need me to cook you lunch. Well, if you're one of those 
             peeps who does eat three meals a day, this would be your middle one.  </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Supper
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>This is considered the last meal of the day.</strong> Now, why call it supper, you may ask? Well, calling the last meal 
            of the day dinner might confuse certain age demographics. The older generation is accustomed to referring to what we call lunch 
            as dinner. Calling it supper doesn't necessarily confuse either demographic, so it's the one I prefer.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
