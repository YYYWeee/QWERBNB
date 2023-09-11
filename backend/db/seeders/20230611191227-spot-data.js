'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    options.tableName = 'Spots';
    return queryInterface.bulkInsert(options, [
      {
        ownerId: 1,
        address: '4961 Newport Ave',
        city: 'San Diego',
        state: 'California',
        country: 'United States of America',
        lat: 32.746201,
        lng: -117.250610,
        name: 'Dream Retreat w/Guest House, Game Room, Pool & Spa',
        description: 'Memorable vacations start with unforgettable stays! Expertly designed for an elite experience, this dream retreat is perfect for large groups. Two homes + a separate game room offer a combined 7 beds & 4 baths that spoil 18 guests with amenities. Play in paradise with a huge pool, soothing spa, firepit area, games, BBQ & more! Carry the vacay vibe inside where both residences are richly remodeled with high-end, modern finishes. A central location near San Diegos top attractions seals the deal!',
        price: 250
      },
      {
        ownerId: 1,
        address: '5694, Lindley Avenue',
        city: 'Los Angeles',
        state: 'California',
        country: 'United States of America',
        lat: 34.174900,
        lng: -118.527240,
        name: 'Sandy Beach Estate: Estate with Pool and Hot Tub!',
        description: 'Diamond Gulf Rentals is dedicated to delivering a top class luxury experience to each and every guest. With such focus on excellence, its no wonder our properties are the ideal location for reunions, wedding parties and family vacations. Expect quality service with such added comforts as striped sheets / towels and spa-like bath soaps. You will even receive a welcome gift waiting for you upon your arrival!',
        price: 200
      },
      {
        ownerId: 2,
        address: '3266, Foxfield Trail',
        city: 'McKinney',
        state: 'Texas',
        country: 'United States of America',
        lat: 33.234830,
        lng: -96.648900,
        name: 'Quaint Cottage Six Blocks to the Ocean',
        description: 'Escape and explore all that Phoenix has to offer while nestling in your upscale desert oasis. ',
        price: 40
      },
      {
        ownerId: 2,
        address: '4224, Frehner Road',
        city: 'North Las Vegas',
        state: 'Nevada',
        country: 'United States of America',
        lat: 36.240650,
        lng: -115.108990,
        name: 'Urban Greenhouse',
        description: 'Enjoy the comfort of this spacious open floor plan. Just a quick stroll to the bluff to fish or bask in the sunset views.',
        price: 95
      },
      {
        ownerId: 2,
        address: '23221, Red Rock Road',
        city: 'Los Angeles',
        state: 'California',
        country: 'United States of America',
        lat: 34.103630,
        lng: -118.631120,
        name: 'Container Suite - Suspended between land and sea',
        description: 'Explore a mid-century architectural gem featuring a spacious great room ',
        price: 690
      },
      {
        ownerId: 3,
        address: '5142 W Point Loma Blvd',
        city: 'San Diego',
        state: 'california',
        country: 'United States of America',
        lat: 32.77342,
        lng: -117.23,
        name: 'Greywolf Lodge',
        description: 'Relax in your peaceful family oasis. Our fully remodeled 2 bedroom condo is perfect for families looking to spend time at the lake.',
        price: 134
      },
      {
        ownerId: 3,
        address: '5469 Casino Way',
        city: 'El Cajon',
        state: 'california',
        country: 'United States of America',
        lat: 32.80349,
        lng: -116.834978,
        name: 'Serene San Diego Canyon Getaway',
        description: 'Our cozy studio-style guest house perched above a tree-filled canyon is a serene getaway in the center of San Diego',
        price: 95
      },
      { //8
        ownerId: 3,
        address: '3737 Sports Arena Blvd',
        city: 'San Diego',
        state: 'california',
        country: 'United States of America',
        lat: 32.77446759,
        lng:  -117.21813,
        name: 'Good Vibes Hidden Oasis',
        description: 'Merely a one-block walk to Mission Bay and two blocks from the Pacific Ocean, this space is the perfect hidden oasis! ',
        price: 134
      },
      { //9
        ownerId: 1,
        address: '8300 Camino Del Oro',
        city: 'La Jolla',
        state: 'california',
        country: 'United States of America',
        lat: 32.86397262976164,
        lng: -117.25511307541015,
        name: 'Vista Del Mar by AvantStay | 0.5mi to Beach',
        description: 'There arent many places as stylish and inviting as this modern, Spanish-style home just minutes from the beach. Here, youll find light and airy spaces with soft furnishings, hardwood floors, and black iron windows. The ambiance is cozy yet roomy and elevated yet relaxed. It’s perfect for large groups to spend their days enjoying the home’s many unique features, including a fun rooftop balcony thats great for admiring La Jollas epic sunsets from basket chairs, drink in hand. A full kitchen and dining room open out to yet another dreamy outdoor space on the lower level. With a sleek fire pit, lounge seating, grill, al fresco dining table, pool, and hot tub, this home has everything you need and everything you didnt know you need. Enjoy!',
        price: 94
      },
      { //10
        ownerId: 1,
        address: '9700 N Torrey Pines Rd',
        city: 'La Jolla',
        state: 'california',
        country: 'United States of America',
        lat: 32.8900560727248,
        lng: -117.24683876175511,
        name: 'Heated Pool|Jacuzzi|King Bed|City Views|Chic Decor',
        description: 'Discover this exceptional 4-bedroom, 4.5-bath hillside villa boasting panoramic city views, sophisticated modern decor, and a heated pool w/ jacuzzi. Designed to perfection, this residence offers generously sized interior and exterior spaces, making it an ideal setting for entertaining your closest friends and loved ones or relishing in your own personal serenity. Nestled in the heart of the historic Mission Hills neighborhood ensures youre always conveniently prepared to experience San Diego.',
        price: 192
      },
      { //11
        ownerId: 1,
        address: '1380 Harbor Island Dr',
        city: 'San Diego',
        state: 'california',
        country: 'United States of America',
        lat: 32.73318441042363,
        lng: -117.19577024756114,
        name: 'La Jolla Beach House-Family Friendly-5min to Beach',
        description: 'Welcome to the Bird Rock Beach House! This delightful boho beach-inspired house is the perfect home for your San Diego/ La Jolla family getaway. Youre minutes from La Jolla Cove, Windansea Beach, Mission Bay, and Mission Beach. You can explore downtown La Jolla & Garnet Avenue, which both offer a variety of restaurants, nightlife, and shops. Or you can head 5 minutes north to the world-renowned beaches of La Jolla and check out the playful seals who also call this place home.',
        price: 234
      },
      { //12
        ownerId: 1,
        address: '1132 Prospect St',
        city: 'La Jolla',
        state: 'california',
        country: 'United States of America',
        lat: 32.85676893290443,
        lng:-117.27537861402892  ,
        name: 'Stunning Beach Hideaway with Luxury Outdoor Living',
        description: 'Our home is not a party house, if you intend to make excessive noise, and are not able to respect our quiet hours of 10pm, this is not the right property for you. Our home is a thoughtfully curated space for families, friends and loved ones. Our place is accommodating and modern, with gorgeous views of the Pacific Ocean from our front porch and living room. Hotel style linens, new Slumber Solutions mattresses, blankets and pillows, a fully equipped chef\'s kitchen and a large 8-person custom dining room table for family style dinners, give our guests the space to be together again with the luxury of comfort.',
        price: 294
      },
      { //13
        ownerId: 1,
        address: '15575 Jimmy Durante Blvd',
        city: 'Del Mar',
        state: 'california',
        country: 'United States of America',
        lat: 32.984073971946245,
        lng:  -117.2505948797314,
        name: 'Peaceful 2 BR | Stunning Farm | Near Round Top',
        description: 'Milk & Honey Ranch combines the peaceful atmosphere of farm life with the entertainment and excitement of luxurious, resort-style accommodations and amenities. Relax or play, basking in all that’s offered from animal encounters to five-star amenities & activities. It truly is an unparalleled experience! Located 15min from Round Top/Brenham/Burton & just over 1hr from Houston & Austin, it’s the perfect place to make routine to escape the chaos of city life and reimagine what life is all about.',
        price: 84
      },
      { //14
        ownerId: 1,
        address: '11480 N Torrey Pines Rd',
        city: 'La Jolla',
        state: 'california',
        country: 'United States of America',
        lat: 32.90969175072458,
        lng: -117.24317113095094 ,
        name: 'Elegant Elysium: A Lavish Getaway in Vista',
        description: 'This property boasts breathtaking panoramic views of the surrounding countryside. Step inside, and you\'ll find an impeccably designed interior, featuring open-concept living spaces adorned with top-of-the-line finishes, designer furnishings, and state-of-the-art amenities. The gourmet kitchen is a chef\'s dream, complete with premium appliances and an oversized island for culinary enthusiasts. With multiple bedrooms and luxurious bathrooms, this farmhouse provides ample space for relaxation and entertainment. Whether you\'re sipping wine on the veranda or unwinding by the fireplace, this Vista gem promises an unparalleled experience of elegance and tranquility for your short-term stay.',
        price: 54
      },
      { //15
        ownerId: 1,
        address: '1003 Coast Blvd',
        city: 'La Jolla',
        state: 'california',
        country: 'United States of America',
        lat:32.85384540857640 ,
        lng:  -117.27756129757474 ,
        name: 'Hot tub | Disney train track - in Julian',
        description: 'Komorebi (pronounced Koh-mo-reh-bee) meaning the play of light through the trees, is nestled in an oak grove. Featuring a cedar hot tub, mountain views and a railroad trestle with Disney history. Julian Historic Townsite and hiking trails are just minutes away.',
        price: 320
      },
      {  //16
        ownerId: 1,
        address: '11480 N Torrey Pines Rd',
        city: 'La Jolla',
        state: 'california',
        country: 'United States of America',
        lat: 32.91049702474148,
        lng:  -117.23973806507911,
        name: 'Luxury Oceanfront Condo with Unbelievable Views',
        description: 'Welcome to your Oasis! You will be completely in awe of the breathtaking views that Sunset Pacifica has to offer. This fully renovated condo features two ensuite bedrooms decorated with the beachy SoCal vibe you are looking for. Centrally located on the boardwalk and just minutes to La Jolla, Downtown, the famous SD Zoo, Embarcadero, restaurants, bars and entertainment. There is so much to do here or just lounge around poolside or on the sandy shores of the beautiful Pacific Ocean.',
        price: 204
      },
      { //17
        ownerId: 1,
        address: '1250 Prospect St',
        city: 'La Jolla',
        state: 'california',
        country: 'United States of America',
        lat: 32.851228541968126,
        lng:-117.27151773350104 ,
        name: 'Bright Designer Oasis ~ Block from Bay ~ Roof Deck',
        description: 'Please take a tour through this modern three-floor oasis to familiarize yourself with all the comforts and amenities it offers. The best place to start is the relaxing open-concept design living area. The home\'s heartbeat features an entertaining living room with a fully equipped kitchen and an inviting dining area. Natural sunlight accents the tastefully picked furniture, reinforcing the pleasant style.',
        price: 904
      },
      { //18
        ownerId: 1,
        address: '1026 Wall St',
        city: 'La Jolla',
        state: 'california',
        country: 'United States of America',
        lat: 32.848117310053524,
        lng: -117.2734126136019,
        name: 'New! Stunning Retreat Steps from Sunset Cliffs',
        description: 'Experience the epitome of relaxation & luxury at our splendid seaside retreat, The Carter Cottage in beautiful San Diego. Indulge in the finer things as you step into our immaculate, brand new home, meticulously crafted with a keen eye for detail. Sip coffee on our sunset deck looking towards the pacific and wind down in the evening around the natural gas fire pit. Our Cottage is equipped with luxury bedding, chefs kitchen and plenty of indoor and outdoor living spaces, you won\'t want to leave!',
        price: 674
      },
      { //19
        ownerId: 1,
        address: '910 Prospect St, CA 92037',
        city: 'La Jolla',
        state: 'california',
        country: 'United States of America',
        lat:32.84869615924312 ,
        lng:-117.27513512668155  ,
        name: 'Succulent House - Near La Jolla & UCSD w/ AC & EV',
        description: 'Lovely 4 BR home centrally located in the UTC area, a safe and family-friendly neighborhood. Vaulted ceiling, home office, spacious backyard, fruit trees, and water conservation landscape. Comfy bed in every room. Fully loaded kitchen, AC, laundry, parking, EV charger, 200M wifi, HBO, Disney+, Prime Video, smart lighting. Close to UCSD, the UTC mall and restaurants. Easy freeway access. Short walk to park, playground and nature trails. Perfect place for your next family vacation or staycation.',
        price: 723
      },
      { //20
        ownerId: 1,
        address: '2171 Avenida De La Playa',
        city: 'La Jolla',
        state: 'california',
        country: 'United States of America',
        lat: 32.85520666702697,
        lng: -117.25558292134383,
        name: '4BR Oceanview | Balcony | Washer/Dryer',
        description: 'Sea Lane Sand Dollar is a three level home located in the Beach Barber Tract just two short blocks from the famous Marine Street beach in La Jolla. The spacious 2,330 square foot house has 4 bedrooms and 3 1/2 baths and is in a prime location for guests to enjoy all that La Jolla has to offer',
        price: 93
      },
      { //21
        ownerId: 1,
        address: '7863 Girard Avenue #301',
        city: 'La Jolla',
        state: 'california',
        country: 'United States of America',
        lat: 32.847900252532234,
        lng:  -117.27444612150758,
        name: 'The Blue Grotto: 11th fl. ocean view+parking+pool!',
        description: 'The Blue Grotto is a corner unit located on the 11th floor of the oceanfront Capri by the Sea in Pacific Beach. It features stunning ocean views from every room. This 2bd/2ba unit is spacious and perfect for the reunion of family and friends!',
        price: 490
      },
      { //22
        ownerId: 1,
        address: '350 W 40th St',
        city: 'New York',
        state: 'New York',
        country: 'United States of America',
        lat:40.768081167274275 ,
        lng: -73.99600409730438 ,
        name: 'Stunning Brooklyn Duplex an Oasis w all the extras',
        description: 'Beautifully renovated private unit. You\'ll be super comfortable in this gorgeous duplex. Huge living space leads into a designated dining space. Unit has a fully equipped brand new kitchen with a dishwasher! Up the stairs, you\'ll find 4 separate bedrooms and a nice size updated bathroom. Unit has a washer/dryer and a yard! This is the perfect way to experience Brooklyn!',
        price: 210
      },
      { //23
        ownerId: 1,
        address: '102 North End Ave',
        city: 'New York',
        state: 'New York',
        country: 'United States of America',
        lat: 40.72489654703363,
        lng: -74.02014898147834,
        name: 'Stunning New York (New Listing)',
        description: 'One of a kind Airstream overlooking a stunning beach, Pacific Ocean and California Coastline, perched high on a cliff to create an unforgettable magical experience of a lifetime.',
        price: 110
      },
      {//24
        ownerId: 1,
        address: '1199 Atlantic Ave',
        city: 'Brooklyn',
        state: 'New York',
        country: 'United States of America',
        lat:40.69200622115586 ,
        lng: -73.95291249141691,
        name: 'Remote Home | Shroom Room ~ Hot Tub ~ Pool ~ Brooklyn',
        description: 'Relax, Unwind, and Escape. The adventure begins by traveling through the desert landscape for 3 miles on a dirt road. Open the gate to your fully fenced oasis with neighbors that are miles away. Enjoy the carefully crafted space with the highest-end furnishing from an award-winning designer.',
        price: 110
      },
      {//25
        ownerId: 1,
        address: '120 S Wood Ave, Iselin',
        city: 'Iselin',
        state: 'New Jersey',
        country: 'United States of America',
        lat:40.56821701330633 ,
        lng: -74.32304350089963,
        name: 'TOP RATED Modern Pet-Friendly Mountain Retreat',
        description: 'Welcome to our bohemian vintage-inspired cabin in the mountains of Big Bear, Ca. Our cabins decor was inspired by its 1979 charm and my eclectic mix of style from my Orange County boutique House of Butterfield. The streets are lined with pine trees and stars blanket the sky. A truly beautiful mountain getaway awaits you!',
        price: 110
      },
      {//26
        ownerId: 1,
        address: '100 International Blvd',
        city: 'Elizabeth',
        state: 'New Jersey',
        country: 'United States of America',
        lat:40.669132444221475 ,
        lng: -74.17519382904332,
        name: 'Spacious, Private, Modern 4 BR House + Game Room',
        description: 'The home\'s modern design has been fully refinished and furnished throughout with luxe, high-end stylish modern decor for an elevated guest experience. The House is in the most desirable location near Universal Studios, Warner Bros. Studio Tour Hollywood, LA Horse Rentals, Hollywood Sign, and much more! Bonus Game Room designed for children 3+ years or older with many game choices to play with and relax simultaneously. In the evenings, stream your favorite shows or movies with a smart 55-inch TV',
        price: 110
      },
      {//27
        ownerId: 1,
        address: '2055 Lincoln Hwy',
        city: 'Edison',
        state: 'New Jersey',
        country: 'United States of America',
        lat: 40.536540970141125,
        lng:  -74.38907746064996,
        name: 'Boho Chic house w panoramic view',
        description: 'Get away from the crowds and the chaos and unwind in a luxurious home with spectacular ocean views situated in the Malibu Hills. If you enjoy inside-out living in a calm setting with breathtaking views, this is the place for you. A wonderful quiet home minutes  away from PCH and the famous Getty Villa. An incredibly bright open-plan home. Ideal for families who enjoy nature and a peaceful sanctuary.',
        price: 110
      },
    ], { validate: true });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    //pending
    options.tableName = 'Spots';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      address: {
        [Op.in]:
        [
          '4961 Newport Ave',
          '5694, Lindley Avenue',
          '3266, Foxfield Trail',
          '4224, Frehner Road',
          '23221, Red Rock Road',
          '5142 W Point Loma Blvd',
          '5469 Casino Way',
          '3737 Sports Arena Blvd',
          '8300 Camino Del Oro',
          '9700 N Torrey Pines Rd',
          '1380 Harbor Island Dr',
          '1132 Prospect St',
          '15575 Jimmy Durante Blvd',
          '11480 N Torrey Pines Rd',
          '1003 Coast Blvd',
          '11480 N Torrey Pines Rd',
          '1250 Prospect St',
          '1026 Wall St',
          '910 Prospect St, CA 92037',
          '2171 Avenida De La Playa',
          '7863 Girard Avenue #301',
          '350 W 40th St',
          '102 North End Ave',
          '1199 Atlantic Ave',
          '120 S Wood Ave, Iselin',
          '100 International Blvd',
          '2055 Lincoln Hwy',
        ]
      }
    }, {});
  }
};
