import React from 'react';
import "../Components/About.css"// Ensure the CSS file is correctly imported



const About = () => {
  return (
    <div>
     
      <h1 className='head'>About Us</h1>

      <section>
  <h2 className='head1'>Matcha Tea</h2>
  <div className="image-container">
    <div className="image-wrapper">
      <img id='img1'
        src="https://i.pinimg.com/474x/8f/66/bd/8f66bd937467ff5b1e181359aa5559fd.jpg"
        alt="Green Tea 1"
        className="hover-image"
      />
      <img id='img1'
        src="https://i.pinimg.com/736x/2d/6d/bd/2d6dbd2e1bfd2087207d9ee6d4d7f50f.jpg"
        alt="Green Tea 2"
        className="hover-image hidden"
      />
    </div>
  </div>
  <p className='p1'>
  Matcha is a finely ground powder made from shade-grown green tea leaves, <br />  primarily cultivated in Japan. Unlike regular green tea,  <br /> where leaves are steeped and discarded, Matcha involves consuming the entire leaf, making it more nutrient-dense. <br />Its vibrant green color and unique production process set it apart from other teas.<br /> It is used in a variety of recipes, such as Matcha Lattes, Matcha Ice Cream, Matcha Cheesecake, and Matcha Smoothie Bowls. Its vibrant color and unique flavor make it a popular ingredient in both sweet and savory dishes.
  </p>
</section>

      <section>
  <h2 className='head2'>Black Tea</h2>
  <div className="image-container">
    <div className="image-wrapper">
      <img id='img2'
        src="https://i.pinimg.com/736x/3a/01/ba/3a01ba7d5b73eec574e5027b339eaada.jpg"
        alt="Green Tea 1"
        className="hover-image"
      />
      <img id='img2'
        src="https://i.pinimg.com/736x/d6/92/69/d69269c9f5477d48b3461e5411cd7bfa.jpg"
        alt="Green Tea 2"
        className="hover-image hidden"
      />
    </div>
  </div>
  <p className='p2'>
  Black tea is a fully oxidized tea made from the leaves of the Camellia sinensis plant.  <br /> It is one of the most popular types of tea worldwide, known for its bold, robust flavor and dark color. <br /> Unlike green or white tea, black tea undergoes a complete oxidation process, which gives it its distinctive taste. <br /> black tea may improve heart health, aid digestion, and support immune function.<br />Black tea is rich in antioxidants, such as theaflavins and thearubigins, which help  support overall health.  <br />Black tea has a strong, malty, and slightly astringent flavor.
  </p>
</section>

<section>
  <h2 className='head3'>Herbal Tea</h2>
  <div className="image-container">
    <div className="image-wrapper">
      <img id='img3'
        src="https://i.pinimg.com/736x/63/1f/8c/631f8c541be70700c3f7c454812ee819.jpg"
        alt="Green Tea 1"
        className="hover-image"
      />
      <img id='img3'
        src="https://i.pinimg.com/736x/9a/a1/fc/9aa1fc95d3954b261c75295abee7ca30.jpg"
        alt="Green Tea 2"
        className="hover-image hidden"
      />
    </div>
  </div>
  <p className='p3'>
  Herbal tea, also known as tisane, is a caffeine-free beverage made from the infusion of herbs, flowers, fruits, spices, or other plant materials.Unlike traditional teas (black, green, white, etc.),herbal teas do not contain leaves from the Camellia sinensis plant.Herbal teas are naturally caffeine-free, making them an excellent choice for those who want to avoid caffeine. They can be enjoyed at any time of day, including evenings.Herbal teas have been used for centuries in traditional medicine systems like Ayurveda and Traditional Chinese Medicine (TCM). <br />They are often consumed for their healing properties and soothing effects.
  </p>
</section>

<section>
  <h2 className='head4'>Sencha Tea</h2>
  <div className="image-container">
    <div className="image-wrapper">
      <img id='img4'
        src="https://i.pinimg.com/474x/da/18/fe/da18fea95d8fa57a8b2fee8c14058a06.jpg"
        alt="Green Tea 1"
        className="hover-image"
      />
      <img id='img4'
        src="https://i.pinimg.com/474x/6a/f1/ad/6af1adec94bedc636405981265b0bd62.jpg"
        alt="Green Tea 2"
        className="hover-image hidden"
      />
    </div>
  </div>
  <p className='p4'>
  Sencha is a type of Japanese green tea made from steamed tea leaves.  <br />Accounting for about 80% of the country's tea production. <br />  Unlike Matcha, which is a powdered tea, Sencha is made from whole leaves that are steeped in hot water.<br /> Sencha is rich in antioxidants, particularly catechins, which help combat free radicals and support overall health.<br /> It is also a common offering to guests and is associated with hospitality and mindfulness.
  </p>
</section>
<section>
  <h2 className='head3'>Oolong Tea</h2>
  <div className="image-container">
    <div className="image-wrapper">
      <img id='img3'
        src="https://i.pinimg.com/736x/c5/37/36/c53736bf38709cda45d1b18396c79740.jpg"
        alt="Green Tea 1"
        className="hover-image"
      />
      <img id='img3'
        src="https://i.pinimg.com/736x/19/02/75/190275ef4eb24844b8a5049a6c059b78.jpg"
        alt="Green Tea 2"
        className="hover-image hidden"
      />
    </div>
  </div>
  <p className='p3'>
  Oolong tea is a partially oxidized tea made from the leaves of the Camellia sinensis plant. <br /> It sits between green tea (unoxidized) and black tea (fully oxidized), offering a unique balance of flavors.<br /> Oolong tea is highly prized for its complexity and is often referred to as the "champagne of teas."<br /> Oolong tea is rich in antioxidants, such as catechins and theaflavins, which help combat free radicals and support overall health.The art of brewing and savoring Oolong tea is considered a meditative practice.
  </p>
</section>
    </div>
  );
};

export default About;