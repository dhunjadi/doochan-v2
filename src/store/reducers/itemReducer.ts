export interface IItem {
  id: string;
  title: string;
  description: string;
  price: number;
  section: string;
  qty: number;
  img: string[];
}

export interface itemReducerState {
  items: IItem[];
}

const initialState = {
  items: [
    {
      id: "1",
      title: "The Starry Night Replica",
      description:
        "An oil-on-canvas painting by the Dutch Post-Impressionist painter Vincent van Gogh",
      price: 949.99,
      section: "Art",
      qty: 0,
      img: [
        "/images/Art/StarryNight1.jpg",

        "/images/Art/StarryNight2.jpg",

        "/images/Art/StarryNight3.jpg",

        "/images/Art/StarryNight4.jpg",

        "/images/Art/StarryNight5.jpg",
      ],
    },
    {
      id: "2",
      title: "The Mona Lisa Replica",
      description:
        "A half-length portrait painting by Italian artist Leonardo da Vinci",
      price: 999.59,
      section: "Art",
      qty: 0,
      img: [
        "/images/Art/MonaLisa1.jpg",

        "/images/Art/MonaLisa2.jpg",

        "/images/Art/MonaLisa3.jpg",

        "/images/Art/MonaLisa4.jpg",

        "/images/Art/MonaLisa5.jpg",
      ],
    },
    {
      id: "3",
      title: "The Scream Replica",
      description:
        "An expressionistic construction based on Edvard Munch's actual experience of a scream piercing through nature while on a walk",
      price: 749.99,
      section: "Art",
      qty: 0,
      img: [
        "/images/Art/TheScream1.jpg",

        "/images/Art/TheScream2.jpg",

        "/images/Art/TheScream3.jpg",

        "/images/Art/TheScream4.jpg",

        "/images/Art/TheScream5.jpg",
      ],
    },
    {
      id: "4",
      title: "The American Gothic Replica",
      description:
        "A 1930 painting by Grant Wood in the collection of the Art Institute of Chicago",
      price: 449.79,
      section: "Art",
      qty: 0,
      img: [
        "/images/Art/AmericanGothic1.jpg",

        "/images/Art/AmericanGothic2.jpg",

        "/images/Art/AmericanGothic3.jpg",

        "/images/Art/AmericanGothic4.jpg",

        "/images/Art/AmericanGothic5.jpg",
      ],
    },
    {
      id: "5",
      title: "The Night Watch Replica",
      description: "A group portrait of a company of civic guardsmen",
      price: 499.89,
      section: "Art",
      qty: 0,
      img: [
        "/images/Art/NightWatch1.jpg",

        "/images/Art/NightWatch2.jpg",

        "/images/Art/NightWatch3.jpg",

        "/images/Art/NightWatch4.jpg",

        "/images/Art/NightWatch5.jpg",
      ],
    },
    {
      id: "6",
      title: "The Birth of Venus Replica",
      description:
        "A painting by the Italian artist Sandro Botticelli depicting the goddess Venus arriving at the shore after her birth",
      price: 549.99,
      section: "Art",
      qty: 0,
      img: [
        "/images/Art/BirthOfVenus1.jpg",

        "/images/Art/BirthOfVenus2.jpg",

        "/images/Art/BirthOfVenus3.jpg",

        "/images/Art/BirthOfVenus4.jpg",

        "/images/Art/BirthOfVenus5.jpg",
      ],
    },
    {
      id: "7",
      title: "T-shirt",
      description: "Basic white T-shirt",
      price: 9.99,
      section: "ClothesAndShoes",
      qty: 0,
      img: [
        "/images/ClothesAndShoes/T-Shirt1.jpg",

        "/images/ClothesAndShoes/T-Shirt2.jpg",

        "/images/ClothesAndShoes/T-Shirt3.jpg",

        "/images/ClothesAndShoes/T-Shirt4.jpg",

        "/images/ClothesAndShoes/T-Shirt5.jpg",
      ],
    },

    {
      id: "8",
      title: "Jeans",
      description: "Slim tapered dark navy jeans",
      price: 19.99,
      section: "ClothesAndShoes",
      qty: 0,
      img: [
        "/images/ClothesAndShoes/Jeans1.jpg",

        "/images/ClothesAndShoes/Jeans2.jpg",

        "/images/ClothesAndShoes/Jeans3.jpg",

        "/images/ClothesAndShoes/Jeans4.jpg",

        "/images/ClothesAndShoes/Jeans5.jpg",
      ],
    },
    {
      id: "9",
      title: "Dress Shirt",
      description: "Black button-down dress shirt",
      price: 89.99,
      section: "ClothesAndShoes",
      qty: 0,
      img: [
        "/images/ClothesAndShoes/DressShirt1.jpg",

        "/images/ClothesAndShoes/DressShirt2.jpg",

        "/images/ClothesAndShoes/DressShirt3.jpg",

        "/images/ClothesAndShoes/DressShirt4.jpg",

        "/images/ClothesAndShoes/DressShirt5.jpg",
      ],
    },
    {
      id: "10",
      title: "Polo Shirt",
      description: "Navy blue polo shirt",
      price: 39.99,
      section: "ClothesAndShoes",
      qty: 0,
      img: [
        "/images/ClothesAndShoes/PoloShirt1.jpg",

        "/images/ClothesAndShoes/PoloShirt2.jpg",

        "/images/ClothesAndShoes/PoloShirt3.jpg",

        "/images/ClothesAndShoes/PoloShirt4.jpg",

        "/images/ClothesAndShoes/PoloShirt5.jpg",
      ],
    },
    {
      id: "11",
      title: "Sleeveless Shirt",
      description: "Training sleeveless shirt",
      price: 12.99,
      section: "ClothesAndShoes",
      qty: 0,
      img: [
        "/images/ClothesAndShoes/SleevelessShirt1.jpg",

        "/images/ClothesAndShoes/SleevelessShirt2.jpg",

        "/images/ClothesAndShoes/SleevelessShirt3.jpg",

        "/images/ClothesAndShoes/SleevelessShirt4.jpg",

        "/images/ClothesAndShoes/SleevelessShirt5.jpg",
      ],
    },
    {
      id: "12",
      title: "Shorts",
      description: "Black sweat shorts",
      price: 25.99,
      section: "ClothesAndShoes",
      qty: 0,
      img: [
        "/images/ClothesAndShoes/Shorts1.jpg",

        "/images/ClothesAndShoes/Shorts2.jpg",

        "/images/ClothesAndShoes/Shorts3.jpg",

        "/images/ClothesAndShoes/Shorts4.jpg",

        "/images/ClothesAndShoes/Shorts5.jpg",
      ],
    },
    {
      id: "13",
      title: "Desk Lamp",
      description: "Black desk lamp",
      price: 14.99,
      section: "Furniture",
      qty: 0,
      img: [
        "/images/Furniture/Lamp1.jpg",

        "/images/Furniture/Lamp2.jpg",

        "/images/Furniture/Lamp3.jpg",

        "/images/Furniture/Lamp4.jpg",

        "/images/Furniture/Lamp5.jpg",
      ],
    },
    {
      id: "14",
      title: "Sofa",
      description: "Modern leather sofa couch with wood base",
      price: 399.99,
      section: "Furniture",
      qty: 0,
      img: [
        "/images/Furniture/Sofa1.jpg",

        "/images/Furniture/Sofa2.jpg",

        "/images/Furniture/Sofa3.jpg",

        "/images/Furniture/Sofa4.jpg",

        "/images/Furniture/Sofa5.jpg",
      ],
    },

    {
      id: "15",
      title: "Round Table",
      description: "Wooden dining table in light oak",
      price: 99.99,
      section: "Furniture",
      qty: 0,
      img: [
        "/images/Furniture/Table1.jpg",

        "/images/Furniture/Table2.jpg",

        "/images/Furniture/Table3.jpg",

        "/images/Furniture/Table4.jpg",

        "/images/Furniture/Table5.jpg",
      ],
    },
    {
      id: "16",
      title: "Chair",
      description: "Home decor wooden chair",
      price: 64.99,
      section: "Furniture",
      qty: 0,
      img: [
        "/images/Furniture/Chair1.jpg",

        "/images/Furniture/Chair2.jpg",

        "/images/Furniture/Chair3.jpg",

        "/images/Furniture/Chair4.jpg",

        "/images/Furniture/Chair5.jpg",
      ],
    },
    {
      id: "17",
      title: "Curtains",
      description: "Basic room darkening curtains",
      price: 29.99,
      section: "Furniture",
      qty: 0,
      img: [
        "/images/Furniture/Curtains1.jpg",

        "/images/Furniture/Curtains2.jpg",

        "/images/Furniture/Curtains3.jpg",

        "/images/Furniture/Curtains4.jpg",

        "/images/Furniture/Curtains5.jpg",
      ],
    },

    {
      id: "18",
      title: "Bed",
      description: "Upholstered Platform Bed",
      price: 329.99,
      section: "Furniture",
      qty: 0,
      img: [
        "/images/Furniture/Bed1.jpg",

        "/images/Furniture/Bed2.jpg",

        "/images/Furniture/Bed3.jpg",

        "/images/Furniture/Bed4.jpg",

        "/images/Furniture/Bed5.jpg",
      ],
    },
    {
      id: "19",
      title: "Men's Bracelet",
      description: "Chain link watch bracelet",
      price: 14.99,
      section: "Jewellery",
      qty: 0,
      img: [
        "/images/Jewellery/MenBracelet1.jpg",

        "/images/Jewellery/MenBracelet2.jpg",

        "/images/Jewellery/MenBracelet3.jpg",

        "/images/Jewellery/MenBracelet4.jpg",

        "/images/Jewellery/MenBracelet5.jpg",
      ],
    },
    {
      id: "20",
      title: "Men's Necklace",
      description: "Men's pendant necklace",
      price: 49.99,
      section: "Jewellery",
      qty: 0,
      img: [
        "/images/Jewellery/MenNecklace1.jpg",

        "/images/Jewellery/MenNecklace2.jpg",

        "/images/Jewellery/MenNecklace3.jpg",

        "/images/Jewellery/MenNecklace4.jpg",

        "/images/Jewellery/MenNecklace5.jpg",
      ],
    },
    {
      id: "21",
      title: "Men's Ring",
      description: "Sterling silver pinky ring",
      price: 8.99,
      section: "Jewellery",
      qty: 0,
      img: [
        "/images/Jewellery/MenRing1.jpg",

        "/images/Jewellery/MenRing2.jpg",

        "/images/Jewellery/MenRing3.jpg",

        "/images/Jewellery/MenRing4.jpg",

        "/images/Jewellery/MenRing5.jpg",
      ],
    },
    {
      id: "22",
      title: "Women's necklace",
      description: "Vintage inspired cord necklace with pendant in silver",
      price: 49.99,
      section: "Jewellery",
      qty: 0,
      img: [
        "/images/Jewellery/WomenNecklace1.jpg",

        "/images/Jewellery/WomenNecklace2.jpg",

        "/images/Jewellery/WomenNecklace3.jpg",

        "/images/Jewellery/WomenNecklace4.jpg",

        "/images/Jewellery/WomenNecklace5.jpg",
      ],
    },
    {
      id: "23",
      title: "Women's Bracelet",
      description: "Chainn bracelet in gold",
      price: 14.99,
      section: "Jewellery",
      qty: 0,
      img: [
        "/images/Jewellery/WomenBracelet1.jpg",

        "/images/Jewellery/WomenBracelet2.jpg",

        "/images/Jewellery/WomenBracelet3.jpg",

        "/images/Jewellery/WomenBracelet4.jpg",

        "/images/Jewellery/WomenBracelet5.jpg",
      ],
    },
    {
      id: "24",
      title: "Women's Ring",
      description: "Hammered circle ring in sterling silver ",
      price: 9.99,
      section: "Jewellery",
      qty: 0,
      img: [
        "/images/Jewellery/WomenRing1.jpg",

        "/images/Jewellery/WomenRing2.jpg",

        "/images/Jewellery/WomenRing3.jpg",

        "/images/Jewellery/WomenRing4.jpg",

        "/images/Jewellery/WomenRing5.jpg",
      ],
    },
    {
      id: "25",
      title: "Toy Car",
      description: "Plastic toy car",
      price: 19.99,
      section: "Toys",
      qty: 0,
      img: [
        "/images/Toys/Car1.jpg",

        "/images/Toys/Car2.jpg",

        "/images/Toys/Car3.jpg",

        "/images/Toys/Car4.jpg",

        "/images/Toys/Car5.jpg",
      ],
    },
    {
      id: "26",
      title: "Toy Truck",
      description: "Plastic toy truck",
      price: 19.99,
      section: "Toys",
      qty: 0,
      img: [
        "/images/Toys/Truck1.jpg",

        "/images/Toys/Truck2.jpg",

        "/images/Toys/Truck3.jpg",

        "/images/Toys/Truck4.jpg",

        "/images/Toys/Truck5.jpg",
      ],
    },
    {
      id: "27",
      title: "Superman Action Figure",
      description: "Plastic 12-inch Superman action figure",
      price: 11.99,
      section: "Toys",
      qty: 0,
      img: [
        "/images/Toys/Superman1.jpg",

        "/images/Toys/Superman2.jpg",

        "/images/Toys/Superman3.jpg",

        "/images/Toys/Superman4.jpg",

        "/images/Toys/Superman5.jpg",
      ],
    },
    {
      id: "28",
      title: "Spiderman Action Figure",
      description: "Spiderman Marvel hero series 12-inch action figure",
      price: 9.99,
      section: "Toys",
      qty: 0,
      img: [
        "/images/Toys/Spiderman1.jpg",

        "/images/Toys/Spiderman2.jpg",

        "/images/Toys/Spiderman3.jpg",

        "/images/Toys/Spiderman4.jpg",

        "/images/Toys/Spiderman5.jpeg",
      ],
    },
    {
      id: "29",
      title: "Batman Action Figure",
      description: "DC comics Batman 12-inch action figure 5",
      price: 9.99,
      section: "Toys",
      qty: 0,
      img: [
        "/images/Toys/Batman1.jpg",

        "/images/Toys/Batman2.jpeg",

        "/images/Toys/Batman3.jpg",

        "/images/Toys/Batman4.jpg",

        "/images/Toys/Batman5.jpg",
      ],
    },
    {
      id: "30",
      title: "Wolverine Action Figure",
      description: "Marvel legends series X-men Wolverine action figure",
      price: 24.99,
      section: "Toys",
      qty: 0,
      img: [
        "/images/Toys/Wolverine1.jpg",

        "/images/Toys/Wolverine2.jpg",

        "/images/Toys/Wolverine3.jpeg",

        "/images/Toys/Wolverine4.jpg",

        "/images/Toys/Wolverine5.jpg",
      ],
    },
    {
      id: "31",
      title: "Statue of Liberty Replica",
      description:
        "The Statue of Liberty is one of the most recognizable statues in the United States. It is often seen as a symbol of freedom and justice",
      price: 249.99,
      section: "Art",
      qty: 0,
      img: [
        "/images/Art/StatueOfLiberty1.jpg",

        "/images/Art/StatueOfLiberty2.jpg",

        "/images/Art/StatueOfLiberty3.jpg",

        "/images/Art/StatueOfLiberty4.jpg",

        "/images/Art/StatueOfLiberty5.jpg",
      ],
    },
    {
      id: "32",
      title: "Christ the Redeemer Replica",
      description:
        "Christ the Redeemer is a statue in Rio de Janeiro, Brazil that was built as a symbol of Brazilian Christianity",
      price: 269.99,
      section: "Art",
      qty: 0,
      img: [
        "/images/Art/ChristRedeemer1.jpg",

        "/images/Art/ChristRedeemer2.jpg",

        "/images/Art/ChristRedeemer3.jpg",

        "/images/Art/ChristRedeemer4.jpg",

        "/images/Art/ChristRedeemer5.jpg",
      ],
    },
    {
      id: "33",
      title: "Maiden With a Seagull Replica",
      description:
        "The statue of Maiden with the seagull is a symbol, not only of Opatija, but the entire Kvarner region",
      price: 279.89,
      section: "Art",
      qty: 0,
      img: [
        "/images/Art/MaidenWithASeagull1.jpg",

        "/images/Art/MaidenWithASeagull2.jpg",

        "/images/Art/MaidenWithASeagull3.jpg",

        "/images/Art/MaidenWithASeagull4.jpg",

        "/images/Art/MaidenWithASeagull5.jpg",
      ],
    },
    {
      id: "34",
      title: "Venus de Milo Replica",
      description:
        "The Venus de Milo is an ancient Greek sculpture from the Hellenistic period, depicting a Greek goddess.",
      price: 289.95,
      section: "Art",
      qty: 0,
      img: [
        "/images/Art/VenusDeMilo1.jpg",

        "/images/Art/VenusDeMilo2.jpeg",

        "/images/Art/VenusDeMilo3.jpg",

        "/images/Art/VenusDeMilo4.jpg",

        "/images/Art/VenusDeMilo5.jpeg",
      ],
    },
    {
      id: "35",
      title: "Spring Temple Buddha Replica",
      description:
        "The Spring Temple Buddha is a colossal statue depicting Vairocana Buddha located in the Zhaocun township of Lushan County, Henan, China",
      price: 299.95,
      section: "Art",
      qty: 0,
      img: [
        "/images/Art/SpringTempleBuddha1.jpg",

        "/images/Art/SpringTempleBuddha2.jpg",

        "/images/Art/SpringTempleBuddha3.jpg",

        "/images/Art/SpringTempleBuddha4.jpg",

        "/images/Art/SpringTempleBuddha5.jpg",
      ],
    },
    {
      id: "36",
      title: "Augustus of Primaporta Replica",
      description:
        "Augustus of Primaporta Replica is a portrait statue of Augustus Caesar, the first emperor of the Roman Empire",
      price: 309.99,
      section: "Art",
      qty: 0,
      img: [
        "/images/Art/AugustusOfPrimaporta1.jpg",

        "/images/Art/AugustusOfPrimaporta2.jpg",

        "/images/Art/AugustusOfPrimaporta3.jpg",

        "/images/Art/AugustusOfPrimaporta4.jpg",

        "/images/Art/AugustusOfPrimaporta5.jpg",
      ],
    },
    {
      id: "37",
      title: "Discobolus Replica",
      description:
        "The Discobolus of Myron is a Greek sculpture completed at the start of the Classical period at around 460–450 BC.",
      price: 255.99,
      section: "Art",
      qty: 0,
      img: [
        "/images/Art/Discobolus1.jpg",

        "/images/Art/Discobolus2.jpg",

        "/images/Art/Discobolus3.jpg",

        "/images/Art/Discobolus4.jpg",

        "/images/Art/Discobolus5.jpg",
      ],
    },
    {
      id: "38",
      title: "Peplos Kore Replica",
      description:
        "The Peplos Kore is a statue of a girl and one of the most well-known examples of Archaic Greek art",
      price: 229.99,
      section: "Art",
      qty: 0,
      img: [
        "/images/Art/PeplosKore1.jpg",

        "/images/Art/PeplosKore2.jpg",

        "/images/Art/PeplosKore3.jpg",

        "/images/Art/PeplosKore4.jpg",

        "/images/Art/PeplosKore5.jpg",
      ],
    },
    {
      id: "39",
      title: "Little Dancer of Fourteen Years",
      description:
        "The Little Fourteen-Year-Old Dancer is a sculpture begun c. 1880 by Edgar Degas of a young student of the Paris Opera Ballet dance school, a Belgian named Marie van Goethem",
      price: 259.95,
      section: "Art",
      qty: 0,
      img: [
        "/images/Art/LittleDancer1.jpg",

        "/images/Art/LittleDancer2.jpg",

        "/images/Art/LittleDancer3.jpg",

        "/images/Art/LittleDancer4.jpg",

        "/images/Art/LittleDancer5.jpg",
      ],
    },
    {
      id: "40",
      title: "Chelsea Boots",
      description: "High quality chelsea boots",
      price: 65.99,
      section: "ClothesAndShoes",
      qty: 0,
      img: [
        "/images/ClothesAndShoes/ChelseaBoots1.jpg",

        "/images/ClothesAndShoes/ChelseaBoots2.jpg",

        "/images/ClothesAndShoes/ChelseaBoots3.jpg",

        "/images/ClothesAndShoes/ChelseaBoots4.jpg",

        "/images/ClothesAndShoes/ChelseaBoots5.jpg",
      ],
    },
    {
      id: "41",
      title: "Chukka Boots",
      description: "High quality chukka boots",
      price: 205.79,
      section: "ClothesAndShoes",
      qty: 0,
      img: [
        "/images/ClothesAndShoes/ChukkaBoots1.jpg",

        "/images/ClothesAndShoes/ChukkaBoots2.jpg",

        "/images/ClothesAndShoes/ChukkaBoots3.jpg",

        "/images/ClothesAndShoes/ChukkaBoots4.jpg",

        "/images/ClothesAndShoes/ChukkaBoots5.jpg",
      ],
    },
    {
      id: "42",
      title: "Uggs",
      description: "Uggs boots",
      price: 45.99,
      section: "ClothesAndShoes",
      qty: 0,
      img: [
        "/images/ClothesAndShoes/UggsBoots1.jpg",

        "/images/ClothesAndShoes/UggsBoots2.jpg",

        "/images/ClothesAndShoes/UggsBoots3.jpg",

        "/images/ClothesAndShoes/UggsBoots4.jpg",

        "/images/ClothesAndShoes/UggsBoots5.jpg",
      ],
    },
    {
      id: "43",
      title: "Cowboy Boots",
      description: "Leather cowboy boots",
      price: 135.99,
      section: "ClothesAndShoes",
      qty: 0,
      img: [
        "/images/ClothesAndShoes/CowboyBoots1.jpg",

        "/images/ClothesAndShoes/CowboyBoots2.jpg",

        "/images/ClothesAndShoes/CowboyBoots3.jpg",

        "/images/ClothesAndShoes/CowboyBoots4.jpg",

        "/images/ClothesAndShoes/CowboyBoots5.jpg",
      ],
    },
    {
      id: "44",
      title: "Timberland Boots",
      description: "High quality Timberland boots",
      price: 249.49,
      section: "ClothesAndShoes",
      qty: 0,
      img: [
        "/images/ClothesAndShoes/TimberlandBoots1.jpg",

        "/images/ClothesAndShoes/TimberlandBoots2.jpg",

        "/images/ClothesAndShoes/TimberlandBoots3.jpg",

        "/images/ClothesAndShoes/TimberlandBoots4.jpg",

        "/images/ClothesAndShoes/TimberlandBoots5.jpg",
      ],
    },
    {
      id: "45",
      title: "Desert Boots",
      description: "High quality desert boots",
      price: 259.99,
      section: "ClothesAndShoes",
      qty: 0,
      img: [
        "/images/ClothesAndShoes/DesertBoots1.jpg",

        "/images/ClothesAndShoes/DesertBoots2.jpg",

        "/images/ClothesAndShoes/DesertBoots3.jpg",

        "/images/ClothesAndShoes/DesertBoots4.jpg",

        "/images/ClothesAndShoes/DesertBoots5.jpg",
      ],
    },
    {
      id: "46",
      title: "Men's Dress Shoes",
      description: "Leather men's dress shoes",
      price: 99.95,
      section: "ClothesAndShoes",
      qty: 0,
      img: [
        "/images/ClothesAndShoes/DressShoes1.jpg",

        "/images/ClothesAndShoes/DressShoes2.jpg",

        "/images/ClothesAndShoes/DressShoes3.jpg",

        "/images/ClothesAndShoes/DressShoes4.jpg",

        "/images/ClothesAndShoes/DressShoes5.jpg",
      ],
    },
    {
      id: "47",
      title: "Adidas Shoes",
      description: "High quality Adidas shoes",
      price: 79.99,
      section: "ClothesAndShoes",
      qty: 0,
      img: [
        "/images/ClothesAndShoes/AdidasShoes1.jpg",

        "/images/ClothesAndShoes/AdidasShoes2.jpg",

        "/images/ClothesAndShoes/AdidasShoes3.jpg",

        "/images/ClothesAndShoes/AdidasShoes4.jpg",

        "/images/ClothesAndShoes/AdidasShoes5.jpg",
      ],
    },
    {
      id: "48",
      title: "Nike Shoes",
      description: "High quality Nike shoes",
      price: 79.99,
      section: "ClothesAndShoes",
      qty: 0,
      img: [
        "/images/ClothesAndShoes/NikeShoes1.jpg",

        "/images/ClothesAndShoes/NikeShoes2.jpg",

        "/images/ClothesAndShoes/NikeShoes3.jpg",

        "/images/ClothesAndShoes/NikeShoes4.jpg",

        "/images/ClothesAndShoes/NikeShoes5.jpg",
      ],
    },
    {
      id: "49",
      title: "Desk",
      description: "Wooden desk",
      price: 29.95,
      section: "Furniture",
      qty: 0,
      img: [
        "/images/Furniture/Desk1.jpg",

        "/images/Furniture/Desk2.jpg",

        "/images/Furniture/Desk3.jpg",

        "/images/Furniture/Desk4.jpg",

        "/images/Furniture/Desk5.jpg",
      ],
    },
    {
      id: "50",
      title: "Picture Frame",
      description: "Wooden picture frame",
      price: 19.99,
      section: "Furniture",
      qty: 0,
      img: [
        "/images/Furniture/PictureFrame1.jpg",

        "/images/Furniture/PictureFrame2.jpg",

        "/images/Furniture/PictureFrame3.jpg",

        "/images/Furniture/PictureFrame4.jpg",

        "/images/Furniture/PictureFrame5.jpg",
      ],
    },
    {
      id: "51",
      title: "Pillow",
      description: "A comfortable pillow",
      price: 24.99,
      section: "Furniture",
      qty: 0,
      img: [
        "/images/Furniture/Pillow1.jpg",

        "/images/Furniture/Pillow2.jpg",

        "/images/Furniture/Pillow3.jpg",

        "/images/Furniture/Pillow4.jpg",

        "/images/Furniture/Pillow5.jpg",
      ],
    },
    {
      id: "52",
      title: "Wooden door",
      description: "A wooden door",
      price: 64.95,
      section: "Furniture",
      qty: 0,
      img: [
        "/images/Furniture/WoodenDoor1.jpg",

        "/images/Furniture/WoodenDoor2.jpg",

        "/images/Furniture/WoodenDoor3.jpg",

        "/images/Furniture/WoodenDoor4.jpg",

        "/images/Furniture/WoodenDoor5.jpg",
      ],
    },
    {
      id: "53",
      title: "Vase",
      description: "High quality vase",
      price: 19.99,
      section: "Furniture",
      qty: 0,
      img: [
        "/images/Furniture/Vase1.jpg",

        "/images/Furniture/Vase2.jpg",

        "/images/Furniture/Vase3.jpg",

        "/images/Furniture/Vase4.jpg",

        "/images/Furniture/Vase5.jpg",
      ],
    },
    {
      id: "54",
      title: "Flowers",
      description: "Colorful flowers",
      price: 14.99,
      section: "Furniture",
      qty: 0,
      img: [
        "/images/Furniture/Flowers1.jpg",

        "/images/Furniture/Flowers2.jpg",

        "/images/Furniture/Flowers3.jpg",

        "/images/Furniture/Flowers4.jpg",

        "/images/Furniture/Flowers5.jpg",
      ],
    },
    {
      id: "55",
      title: "Fridge",
      description: "Energy efficient fridge",
      price: 359.95,
      section: "Furniture",
      qty: 0,
      img: [
        "/images/Furniture/Fridge1.jpg",

        "/images/Furniture/Fridge2.jpg",

        "/images/Furniture/Fridge3.jpg",

        "/images/Furniture/Fridge4.jpg",

        "/images/Furniture/Fridge5.jpg",
      ],
    },
    {
      id: "56",
      title: "Flat TV",
      description: "Energy efficient flat TV",
      price: 239.99,
      section: "Furniture",
      qty: 0,
      img: [
        "/images/Furniture/FlatTV1.jpg",

        "/images/Furniture/FlatTV2.jpg",

        "/images/Furniture/FlatTV3.jpg",

        "/images/Furniture/FlatTV4.jpg",

        "/images/Furniture/FlatTV5.jpg",
      ],
    },
    {
      id: "57",
      title: "Radio Player",
      description: "Radio player with high quality sound",
      price: 55.99,
      section: "Furniture",
      qty: 0,
      img: [
        "/images/Furniture/RadioPlayer1.jpg",

        "/images/Furniture/RadioPlayer2.jpg",

        "/images/Furniture/RadioPlayer3.jpg",

        "/images/Furniture/RadioPlayer4.jpg",

        "/images/Furniture/RadioPlayer5.jpg",
      ],
    },
    {
      id: "58",
      title: "Earrings",
      description: "High quality earrings",
      price: 29.95,
      section: "Jewellery",
      qty: 0,
      img: [
        "/images/Jewellery/Earrings1.jpg",

        "/images/Jewellery/Earrings2.jpg",

        "/images/Jewellery/Earrings3.jpg",

        "/images/Jewellery/Earrings4.jpg",

        "/images/Jewellery/Earrings5.jpg",
      ],
    },
    {
      id: "59",
      title: "Tie",
      description: "High quality tie",
      price: 34.75,
      section: "Jewellery",
      qty: 0,
      img: [
        "/images/Jewellery/Tie1.jpg",

        "/images/Jewellery/Tie2.jpg",

        "/images/Jewellery/Tie3.jpg",

        "/images/Jewellery/Tie4.jpg",

        "/images/Jewellery/Tie5.jpg",
      ],
    },
    {
      id: "60",
      title: "Watch",
      description: "Stylish watch",
      price: 24.95,
      section: "Jewellery",
      qty: 0,
      img: [
        "/images/Jewellery/Watch1.jpg",

        "/images/Jewellery/Watch2.jpg",

        "/images/Jewellery/Watch3.jpg",

        "/images/Jewellery/Watch4.jpg",

        "/images/Jewellery/Watch5.jpg",
      ],
    },
    {
      id: "61",
      title: "Brooch",
      description: "High quality brooch",
      price: 29.99,
      section: "Jewellery",
      qty: 0,
      img: [
        "/images/Jewellery/Brooch1.jpg",

        "/images/Jewellery/Brooch2.jpg",

        "/images/Jewellery/Brooch3.jpg",

        "/images/Jewellery/Brooch4.jpg",

        "/images/Jewellery/Brooch5.jpg",
      ],
    },
    {
      id: "62",
      title: "Tiara",
      description: "High quality tiara",
      price: 44.99,
      section: "Jewellery",
      qty: 0,
      img: [
        "/images/Jewellery/Tiara1.jpg",

        "/images/Jewellery/Tiara2.jpg",

        "/images/Jewellery/Tiara3.jpg",

        "/images/Jewellery/Tiara4.jpg",

        "/images/Jewellery/Tiara5.jpg",
      ],
    },
    {
      id: "63",
      title: "Hairpin",
      description: "High quality hairpin",
      price: 24.99,
      section: "Jewellery",
      qty: 0,
      img: [
        "/images/Jewellery/Hairpin1.jpg",

        "/images/Jewellery/Hairpin2.jpg",

        "/images/Jewellery/Hairpin3.jpg",

        "/images/Jewellery/Hairpin4.jpg",

        "/images/Jewellery/Hairpin5.jpg",
      ],
    },
    {
      id: "64",
      title: "Cufflink",
      description: "High quality cufflink",
      price: 19.99,
      section: "Jewellery",
      qty: 0,
      img: [
        "/images/Jewellery/Cufflink1.jpg",

        "/images/Jewellery/Cufflink2.jpg",

        "/images/Jewellery/Cufflink3.jpg",

        "/images/Jewellery/Cufflink4.jpg",

        "/images/Jewellery/Cufflink5.jpg",
      ],
    },
    {
      id: "65",
      title: "Teddy bear",
      description: "Fluffy teddy bear",
      price: 24.99,
      section: "Toys",
      qty: 0,
      img: [
        "/images/Toys/TeddyBear1.jpg",

        "/images/Toys/TeddyBear2.jpg",

        "/images/Toys/TeddyBear3.jpg",

        "/images/Toys/TeddyBear4.jpg",

        "/images/Toys/TeddyBear5.jpg",
      ],
    },
    {
      id: "66",
      title: "Toy Castle",
      description: "High quality toy castle",
      price: 99.95,
      section: "Toys",
      qty: 0,
      img: [
        "/images/Toys/ToyCastle1.jpg",

        "/images/Toys/ToyCastle2.jpg",

        "/images/Toys/ToyCastle3.jpg",

        "/images/Toys/ToyCastle4.jpg",

        "/images/Toys/ToyCastle5.jpg",
      ],
    },
    {
      id: "67",
      title: "Hot Wheels Car",
      description: "High quality Hot Wheels car",
      price: 24.99,
      section: "Toys",
      qty: 0,
      img: [
        "/images/Toys/ToyCar1.jpg",

        "/images/Toys/ToyCar2.jpg",

        "/images/Toys/ToyCar3.jpg",

        "/images/Toys/ToyCar4.jpg",

        "/images/Toys/ToyCar5.jpg",
      ],
    },
    {
      id: "68",
      title: "Pokeball",
      description: "High quality pokeball",
      price: 24.99,
      section: "Toys",
      qty: 0,
      img: [
        "/images/Toys/Pokeball1.jpg",

        "/images/Toys/Pokeball2.jpg",

        "/images/Toys/Pokeball3.jpg",

        "/images/Toys/Pokeball4.jpg",

        "/images/Toys/Pokeball5.jpg",
      ],
    },
    {
      id: "69",
      title: "Yu-Gi-Oh Duel Disk",
      description: "High quality Yu-Gi-Oh duel disk",
      price: 64.99,
      section: "Toys",
      qty: 0,
      img: [
        "/images/Toys/YugiohDuelDisk1.jpg",

        "/images/Toys/YugiohDuelDisk2.jpg",

        "/images/Toys/YugiohDuelDisk3.jpg",

        "/images/Toys/YugiohDuelDisk4.jpg",

        "/images/Toys/YugiohDuelDisk5.jpg",
      ],
    },
    {
      id: "70",
      title: "Goku Action Figure",
      description: "High quality Goku action figure",
      price: 54.99,
      section: "Toys",
      qty: 0,
      img: [
        "/images/Toys/Goku1.jpg",

        "/images/Toys/Goku2.jpg",

        "/images/Toys/Goku3.jpg",

        "/images/Toys/Goku4.jpg",

        "/images/Toys/Goku5.jpg",
      ],
    },
  ],
};

export const itemReducer = (state: itemReducerState = initialState) => {
  return state;
};
