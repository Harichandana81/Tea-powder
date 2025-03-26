import tea1 from "../assets/Ceremonial.jpg"
import tea01 from "../assets/bb.jpg"
import tea02 from "../assets/cc2.jpg"
import tea2 from "../assets/blacktea.jpg"
import tea22 from "../assets/blacks0.jpg"
import tea23 from "../assets/blacks8.jpg"
import tea41 from "../assets/sencha.jpg"
import tea42 from "../assets/Blended2.jpg"
import tea43 from "../assets/Blended4.jpg"
import tea52 from "../assets/pinn.jpg"
import tea53 from "../assets/pinn3.jpg"
import tea54 from"../assets/pinn1.jpg"
import tea88 from "../assets/gin.jpg"
import t89 from "../assets/Ginseny1.jpg"
import t90 from "../assets/Ginseny2.jpg"
import m66 from "../assets/matcha2.jpg"
import m67 from "../assets/matcha1.jpg"
import m68 from '../assets/matcha.jpg'
import f44 from '../assets/Floral1.jpg'
import f45 from '../assets/Floral2.jpg'
import f46 from '../assets/Floral3.jpg'
import v33 from '../assets/v1.jpg';
import v34 from '../assets/v2.jpg';
import v35 from '../assets/v3.jpg';
import c11 from '../assets/c1.jpg'
import c12 from '../assets/c2.jpg'
import c13 from '../assets/c3.jpg'
import a11 from '../assets/a1.jpg'
import a22 from '../assets/a2.jpg'
import a33 from '../assets/a3.jpg'
import b1 from '../assets/b11.jpg'
import b2 from '../assets/b22.jpg'
import b3 from '../assets/b33.jpg'
import o1 from '../assets/o1.jpg'
import o2 from '../assets/o12.jpg'
import o3 from '../assets/o13.jpg'
import f1 from '../assets/f1.jpg'
import f2 from '../assets/f2.jpg'
import f3 from '../assets/f3.jpg'
import t1 from '../assets/t1.jpg'
import t2 from '../assets/t2.jpg'
import t3 from '../assets/t3.jpg'
import h1 from '../assets/h1.jpg'
import h2 from '../assets/h3.jpg'
import h3 from '../assets/h4.jpg'
import k1 from '../assets/k1.jpg'
import k2 from '../assets/k3.jpg'
import k3 from '../assets/k4.jpg'
import l1 from '../assets/l1.jpg'
import l2 from '../assets/l2.jpg'
import l3 from '../assets/l3.jpg'
import s1 from '../assets/s11.jpg'
import s2 from '../assets/s2.jpg'
import s3 from '../assets/s4.jpg'
import x1 from "../assets/x1.jpg"
import x2 from "../assets/x2.jpg"
import x3 from "../assets/x5.jpg"
import w1 from "../assets/w1.jpg"
import w2 from "../assets/w2.jpg"
import w3 from "../assets/w4.jpg"








const products = [
    {
      id: 11,
      title: "Ceremonial Grade Matcha Tea Powder",
      price: 700.00,
      category: "matchatea",
      dis:"Ceremonial Grade Matcha Tea Powder is the highest quality matcha available, traditionally used in Japanese tea ceremonies. It is made from the youngest tea leaves, which are shade-grown, hand-picked, and stone-ground into a fine, vibrant green powder.",
      point1:"1.Color: Vibrant, bright green due to high chlorophyll content",
      point2:"2.Taste: Smooth, umami-rich, and slightly sweet with no bitterness.",
      image:[tea1,tea01,tea02],
    },
    {
      id: 21,
      title: "Pure Black Tea Powder",
      price: 899.00,
      category: "blackteapowder",
      dis:"Pure Black Tea Powder is a finely ground form of black tea leaves, celebrated for its bold, robust, and malty flavor. It is highly versatile, perfect for traditional brewing, lattes, baking, and cooking. Rich in antioxidants, it offers a deep, aromatic experience with a slightly astringent finish.",
      point1:"1.Color: Dark brown to black when brewed.",
      point2:"2.Taste:Bold, rich, and slightly malty with a deep aroma.",
      image: [tea2,tea22,tea23] ,
    },
     {
      id: 41,
      title: "Blended Sencha Tea Powder",
      price: 1200.00,
      category: "senchateapowder",
      dis:"Blended Sencha Tea Powder is a versatile and flavorful variation of traditional Sencha green tea powder. It combines the fresh, grassy notes of Sencha with additional ingredients like fruits, herbs, or spices to create unique and exciting flavor profiles.",
      point1: "1.Blended Ingredients: Often mixed with fruits, flowers, or spices for added complexity.",
      point2: "2.Base Flavor: Fresh, grassy, and slightly sweet (from Sencha).",
      image: [tea41,tea42,tea43] ,
    },
    {
      id: 51,
      title: "Pineapple Oolong Tea Powder",
      price: 499.99,
      category: "oolongteapowder",
      dis: "Pineapple Oolong Tea Powder is a unique and flavorful blend that combines the rich, floral notes of Oolong tea with the tropical sweetness of pineapple. This blend offers a refreshing and exotic taste, making it perfect for tea enthusiasts looking for something different.",
      point1: "1.Flavor: A harmonious blend of floral Oolong and sweet, tangy pineapple.",
      point2: "2.Aroma: Tropical and inviting, with a hint of floral undertones.",
      image: [tea52,tea53,tea54] ,
    },
    {
      id: 52,
      title: "Ginseny Oolong Tea Powder",
      price: 1000.00,
      category: "oolongteapowder",
      dis: "Ginseng Oolong Tea Powder is a unique and healthful blend that combines the rich, floral notes of Oolong tea with the earthy, slightly bitter flavor of ginseng. This blend is prized for its balanced taste and numerous health benefits.",
      point1: "1.Flavor: A harmonious blend of floral Oolong and earthy, slightly sweet ginseng.",
      point2: "2.Aroma: Rich and aromatic, with a hint of herbal ginseng.",
      image: [tea88,t89,t90],
     
    },
    {
      id: 42,
      title: "Matcha Style Sencha Tea Powder",
      price: 499.99,
      category: "senchateapowder",
      dis:"Matcha Style Sencha Tea Powder is a finely ground green tea powder that combines the fresh, grassy flavor of Sencha with the smooth, vibrant qualities of Matcha. It offers a unique balance of flavors and is versatile for both traditional tea preparation and culinary uses.",
      point1: "1.Flavor: Fresh, grassy, and slightly sweet (like Sencha) with a smooth, umami-rich finish (like Matcha).",
      point2: "2.Color: Vibrant green, similar to Matcha, but slightly lighter.",
      image: [m66,m67,m68],
     
    },
    {
      id: 31,
      title: "Floral Herbal Tea Powder",
      price: 749.00,
      category: "herbalteapowder",
      dis: "Floral Herbal Tea Powder is a delightful blend made from finely ground flowers and herbs, offering a fragrant, soothing, and caffeine-free tea experience. It is perfect for those who enjoy floral aromas and gentle flavors. ",
      point1: "1.Flavor: Light, floral, and slightly sweet, with notes of the specific flowers used (e.g., rose, jasmine, lavender).",
      point2: "2.Aroma: Highly fragrant and calming, ideal for relaxation.",
      image: [f44,f45,f46],
    },
   
    {
      id: 12,
      title: "Vanilla Matcha Tea Powder",
      price: 500.00,
      category: "matchatea",
      dis: "Vanilla Matcha Tea Powder is a delightful blend of high-quality Matcha green tea powder and natural vanilla flavor. This combination creates a smooth, creamy, and slightly sweet tea experience, perfect for those who enjoy a touch of sweetness in their Matcha. ",
      point1: "1.Flavor: Smooth, creamy, and slightly sweet with a hint of vanilla.",
      point2: "2.Aroma: Fragrant and inviting, with a balance of Matcha's earthiness and vanilla's sweetness.",
      image:[v33,v34,v35],

    },
    {
      id: 22,
      title: "Flavored Black Tea Powder",
      price: 698.00,
      category: "blackteapowder",
      dis: "Flavored Black Tea Powder is a versatile and exciting variation of traditional black tea powder, infused with natural or artificial flavors to create unique and delicious taste experiences. It combines the bold, robust flavor of black tea with added notes of fruits, spices, or flowers.",
      point1: "1.Flavor: Bold and robust (from black tea) with added fruity, spicy, or floral notes.",
      point2: "2.Aroma: Rich and inviting, with hints of the added flavors.",
      image: [c11,c12,c13],
    
    },
    {
      id: 32,
      title: "Fruity Herbal Tea Powder",
      price: 900.00,
      category: "herbalteapowder",
      dis:"Fruity Herbal Tea Powder is a vibrant and refreshing blend made from finely ground fruits and herbs, offering a naturally sweet and caffeine-free tea experience. It is perfect for those who enjoy fruity flavors and a burst of natural sweetness.",
      point1: "1.Flavor: Sweet, tangy, and refreshing, with notes of the specific fruits used (e.g., berries, citrus, tropical fruits).",
      point2: "2.Aroma: Bright and inviting, with a fruity fragrance.",
      image: [a11,a22,a33]
   
    },
    {
      id: 13,
      title: "Blume Organic Matcha Tea Powder",
      price: 810.00,
      category: "matchatea",
      dis: "Blume Organic Matcha Tea Powder is a premium, organic Matcha powder known for its high quality, vibrant green color, and smooth, umami-rich flavor. Sourced from carefully cultivated tea leaves, it is perfect for traditional tea ceremonies, lattes, and culinary creations. ",
      point1: "1.Flavor: Smooth, rich, and slightly sweet with a pronounced umami taste.",
      point2: "2.Color: Vibrant green, indicating high chlorophyll content and quality.",
      image:[b1,b2,b3],
      
    },
    {
      id: 53,
      title: "Peachy Oolong Tea Powder",
      price: 499.99,
      category: "oolongteapowder",
      dis:"Peachy Oolong Tea Powder is a delightful blend that combines the rich, floral notes of Oolong tea with the sweet, juicy flavor of peaches. This blend offers a refreshing and aromatic tea experience, perfect for those who enjoy fruity and floral flavors. ",
      point1:"1.Flavor: A harmonious blend of floral Oolong and sweet, juicy peaches.",
      point2:"2.Aroma: Fragrant and inviting, with a balance of floral and fruity notes.",
      image:[o1,o2,o3]
     
    },
    {
      id: 23,
      title: "Fresh Black Tea Powder",
      price: 720.52,
      category: "blackteapowder",
      dis:"Fresh Black Tea Powder is a finely ground form of high-quality black tea leaves, known for its bold, robust flavor and versatility. It retains the rich, malty taste of traditional black tea while offering the convenience of a powder format.",
      point1: "1.Flavor: Bold, robust, and slightly malty with a deep, rich aroma.",
      point2: "2.Color: Dark brown to black when brewed.",
      image: [f1,f2,f3],
    },
    {
      id: 33,
      title: "Tea of Earth Organic Herbal Tea Powder",
      price: 990.99,
      category: "herbalteapowder",
      dis:"Tea of Earth Organic Herbal Tea Powder is a premium, organic blend made from finely ground herbs, flowers, and natural ingredients. It offers a caffeine-free, healthful, and aromatic tea experience, perfect for relaxation and wellness.",
      point1: "1.Flavor: Naturally sweet, floral, or earthy, depending on the blend (e.g., chamomile, peppermint, hibiscus).",
      point2: "2.Aroma: Fragrant and soothing, with a calming herbal scent.",
      image:[t1,t2,t3],
    
    },
    {
      id: 55,
      title: "Coconut Oolong Tea Powder",
      price: 499.99,
      category: "oolongteapowder",
      dis:"Coconut Oolong Tea Powder is a unique and tropical blend that combines the rich, floral notes of Oolong tea with the creamy, sweet flavor of coconut. This blend offers a refreshing and exotic tea experience, perfect for those who enjoy tropical flavors.",
      point1: "1.Flavor: A harmonious blend of floral Oolong and creamy, sweet coconut.",
      point2: "2.Aroma: Tropical and inviting, with a balance of floral and coconut notes.",
      image:[h1,h2,h3],
 
    },
    {
      id: 15,
      title: "Bootanicals Matcha Tea Powder",
      price: 669.17,
      category: "matchatea",
      dis:"Bootanicals Matcha Tea Powder is a premium, high-quality Matcha powder known for its vibrant green color, smooth texture, and rich, umami flavor. Sourced from carefully cultivated tea leaves, it is perfect for traditional tea ceremonies, lattes, and culinary creations. ",
      point1: "1.Flavor: Smooth, rich, and slightly sweet with a pronounced umami taste.",
      point2:"2.Color: Vibrant green, indicating high chlorophyll content and quality.",
      image:[k1,k2,k3],

    
    },
    {
      id: 24,
      title: "Vanilla Lavender Black Tea Powder",
      price: 773.00,
      category: "blackteapowder",
      dis:"Vanilla Lavender Black Tea Powder is a unique and aromatic blend that combines the bold, robust flavor of black tea with the sweet, creamy notes of vanilla and the calming, floral essence of lavender. This blend offers a soothing and flavorful tea experience, perfect for relaxation and indulgence.",
      point1: "1.Flavor: Bold and robust (from black tea) with sweet vanilla and floral lavender undertones.",
      point2: "2.Aroma: Fragrant and inviting, with a balance of floral and creamy notes.",
      image:[l1,l2,l3],
    
    },
    {
      id: 43,
      title: "Sakura Sencha Tea Powder",
      price: 4000.00,
      category: "senchateapowder",
      dis:"Sakura Sencha Tea Powder is a delicate and aromatic blend that combines the fresh, grassy flavor of Sencha green tea with the subtle, floral essence of cherry blossoms (sakura). This blend offers a unique and refreshing tea experience, perfect for those who enjoy floral and light flavors.",
      point1: "1.Flavor: Fresh, grassy, and slightly sweet (from Sencha) with a delicate floral note (from sakura).",
      point2: "2.Aroma: Light and fragrant, with a hint of cherry blossom.",
      image:[s1,s2,s3]
  
    },
    {
      id: 34,
      title: "Turmeric Ginger Spice Herbal Tea Powder",
      price: 788.00,
      category: "herbalteapowder",
      dis:"Turmeric Ginger Spice Herbal Tea Powder is a warming and healthful blend made from finely ground turmeric, ginger, and other spices. This caffeine-free herbal tea powder offers a spicy, earthy flavor and is packed with antioxidants and anti-inflammatory properties. ",
      point1: "1.Flavor: Spicy, earthy, and slightly pungent with a warming finish.",
      point2: "2.Aroma: Invigorating and aromatic, with hints of ginger and turmeric.",
      image:[x1,x2,x3]
  
    },
    {
      id: 47,
      title: "Té Matcha Premium Tea Powder",
      price: 1700.00,
      category: "matchatea",
      dis:"Té Matcha Premium Tea Powder is a high-quality, ceremonial-grade Matcha powder known for its vibrant green color, smooth texture, and rich, umami flavor. Sourced from carefully cultivated tea leaves, it is perfect for traditional tea ceremonies, lattes, and culinary creations. ",
      point1: "1.Flavor: Smooth, rich, and slightly sweet with a pronounced umami taste.",
      point2: "2.Color: Vibrant green, indicating high chlorophyll content and quality.",
      image:[w1,w2,w3],
     
    },
    
    // {
    //   id: 26,
    //   title: "Honey Black Tea Powder",
    //   price: 21.00,
    //   category: "blackteapowder",
  
    // },
    // {
    //   id: 45,
    //   title: "Flavored Sencha Tea Powder",
    //   price: 499.99,
    //   category: "senchateapowder",
  
    // },
      
    // {
    //   id: 36,
    //   title: "Unique & Blended Herbal Tea Powder",
    //   price: 99.99,
    //   category: "herbalteapowder",

    // },

    // {
    //   id: 26,
    //   title: "Lavender Black Tea Powder",
    //   price: 72.78,
    //   category: "blackteapowder",
 
    // },
   
   
 
    // {
    //   id: 37,
    //   title: "Exotic & Rare Herbal Tea Powder",
    //   price: 99.99,
    //   category: "herbalteapowder",
 
    // },
    // {
    //   id: 27,
    //   title: "Teami Chai Black Tea Powder",
    //   price: 42.57,
    //   category: "blackteapowder",

    // },
    
    // {
    //   id: 38,
    //   title: "Turmeric Ginger Spice Herbal Tea Powder",
    //   price: 99.99,
    //   category: "herbalteapowder",
   
    // },
   
    // {
    //   id: 57,
    //   title: "Roasted & Speciality Oolong Tea Powder",
    //   price: 499.99,
    //   category: "oolongteapowder",

    // },
    
    // {
    //   id: 46,
    //   title: "Functional Sencha Tea Powder",
    //   price: 499.99,
    //   category: "senchateapowder",

    // },
    // {
    //   id: 17,
    //   title: "Classic Grade Matcha Tea Powder",
    //   price: 74.27,
    //   category: "matchatea",

    // },
   
    
    // {
    //   id: 58,
    //   title: "Coconut Oolong Tea Powder",
    //   price: 499.99,
    //   category: "oolongteapowder",
    
    // },
    // {
    //   id: 48,
    //   title: "Yuzu Sencha Tea Powder",
    //   price: 499.99,
    //   category: "senchateapowder",
    
    // },
  
   
    // {
    //   id: 59,
    //   title: "Honey Oolong Tea Powder",
    //   price: 499.99,
    //   category: "oolongteapowder",
  
    // },
   
   
   
  ];
  
  export default products;