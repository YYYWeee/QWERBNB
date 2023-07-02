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
    options.tableName = 'SpotImages';
    return queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-888432056362899473/original/f039e7f7-0680-414f-9635-c3984ba21767.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-888432056362899473/original/50aff0ea-6edc-4121-8d96-5ce53834ecc9.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 1,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-888432056362899473/original/9a9237d7-1797-4b75-928c-692b9eeaf80f.jpeg?im_w=1200",
        preview: true
      },
      {
        spotId: 1,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-888432056362899473/original/dee03a07-5f9d-47d3-8fea-28107f42d287.png?im_w=1200",
        preview: true
      },
      {
        spotId: 1,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-888432056362899473/original/1df78474-dc89-438f-b890-3a201103e872.jpeg?im_w=1200",
        preview: true
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/monet/Select-20306212/original/eaf39ad9-362c-4c53-8bdf-858115c07ec9?im_w=1200',
        preview: true
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/monet/Select-20306212/original/29673f30-dc52-4383-8eb3-8155aa9d8b4d?im_w=720',
        preview: true
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/monet/Select-20306212/original/673b0d06-3ff6-403a-ad48-899a55c239fa?im_w=1440',
        preview: true
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/monet/Select-20306212/original/c82511e4-1c2b-4cc2-9573-35dc8a4b49cf?im_w=720',
        preview: true
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/monet/Select-20306212/original/9b758b4d-5084-46f3-b1cd-646e42a6d232?im_w=1440',
        preview: true
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/ff534eaa-a383-478e-95cf-68f640cec1d1.jpg?im_w=1200',
        preview: true
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/00d2a46a-ad32-4f52-9c45-aca09f8d425e.jpg?im_w=720',
        preview: true
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/36e6e346-9993-4af4-9a4a-2cc455a57eff.jpg?im_w=720',
        preview: true
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/882d9594-595b-4a10-89af-d21c2ee8875c.jpg?im_w=1200',
        preview: true
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/2f603e70-297d-48ce-b911-a408a05dafb7.jpg?im_w=1200',
        preview: true
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-47099828/original/08169a27-4641-441c-b587-506f45f3a335.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-47099828/original/e69dc29b-4efd-4bd2-b57d-67fa44349ef3.jpeg?im_w=720',
        preview: true
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-47099828/original/c96731e4-b7e2-450e-84b3-912ff97827ba.jpeg?im_w=720',
        preview: true
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-47099828/original/49c01637-a6f9-4178-8d72-6a05c4f5fc30.jpeg?im_w=720',
        preview: true
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-47099828/original/8cd95244-e86d-44f4-abe7-27d7ac6a207f.jpeg?im_w=720',
        preview: true
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-744104995413838746/original/2898c6e6-d7ee-4608-8fab-1da9be9b712b.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-744104995413838746/original/8a95ffca-7d2d-42eb-b263-01169923e6b9.jpeg?im_w=720',
        preview: true
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-744104995413838746/original/316df80e-c4cd-4542-b2cb-32fe0e3aebf9.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-744104995413838746/original/002914ea-b15c-43bf-8684-beadef347a8b.jpeg?im_w=720',
        preview: true
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-744104995413838746/original/77688185-5672-4eb6-b3bb-28736135c829.jpeg?im_w=720',
        preview: true
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-43267467/original/d82e7087-3e6e-4793-bfc6-1ce45293f2aa.jpeg?im_w=720',
        preview: true
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-43267467/original/7443b5d4-be9a-4e88-bf42-25392e4122a2.jpeg?im_w=720',
        preview: true
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-43267467/original/8e836930-2f09-4b4e-b286-76c792705577.jpeg?im_w=720',
        preview: true
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/56795d16-66bd-49aa-a4ca-4c5b91e47508.jpg?im_w=720',
        preview: true
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/3bfdd2e9-b024-48d4-992d-0a95933767fe.jpg?im_w=720',
        preview: true
      },
      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-749503446751290644/original/5a703897-bfea-4d09-aaec-3975dc3fa1b6.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-749503446751290644/original/06c4f550-df54-4824-bcf4-3bd9ad4c8404.jpeg?im_w=720',
        preview: true
      },
      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-749503446751290644/original/61e69192-336b-407b-b31a-e8ec3f7086e9.jpeg?im_w=720',
        preview: true
      },
      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-749503446751290644/original/6e29d5f7-1b1f-4856-9b50-50b5f164acbf.jpeg?im_w=720',
        preview: true
      },
      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-749503446751290644/original/502df07a-4865-4eed-bfa8-52b8851412c6.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/974d5d84-b58e-4ca4-aa77-4159b2bb7beb.jpg?im_w=1200',
        preview: true
      },
      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/b64c232d-e256-43ac-b3f6-fc7b5d8d096a.jpg?im_w=720',
        preview: true
      },
      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/8cf51f64-63f4-45a1-8a54-57dfb90bacd5.jpg?im_w=720',
        preview: true
      },
      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/337485c9-d263-40a8-8788-129e09f1eed1.jpg?im_w=720',
        preview: true
      },
      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/9435525a-a3bc-4705-96de-e54e11ddc70e.jpg?im_w=1200',
        preview: true
      }

    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'SpotImages';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      url: {
        [Sequelize.Op.startsWith]: "https://a0.muscache.com/im/pictures/",
      }
    }, {});
  }
};
