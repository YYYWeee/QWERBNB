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
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-927899552287628317/original/cefc8338-f103-4ad0-b07e-095e8f7c2b38.jpeg',
        preview: true
      },
      {
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-927899552287628317/original/0a36a2fa-2411-4e91-9fcc-2a30ac54a2e0.jpeg',
        preview: true
      },
      {
        spotId: 1,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-927899552287628317/original/2038f1a0-3c87-4ecf-88c9-cc624ad8e45c.jpeg?im_w=1440",
        preview: true
      },
      {
        spotId: 1,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-927899552287628317/original/e5aeedfe-6b9c-4deb-b999-7c5b1736be22.jpeg?im_w=1440",
        preview: true
      },
      {
        spotId: 1,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-927899552287628317/original/f25142e0-57ee-4e01-b6e3-4762fa335878.jpeg?im_w=1440",
        preview: true
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-46392684/original/3cf8b1b6-e7ea-4b4a-982a-d5c1b7c1d4b8.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-46392684/original/1c3dc634-3b3f-4fc6-8324-c747ad822e3f.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-46392684/original/e582c627-1a02-4c56-8fd4-40910e03dbd1.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-46392684/original/a056ffb2-a4aa-483e-bc80-ca944163d879.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-46392684/original/71c8b285-4f9f-4273-baa9-76526fcbfa34.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/df80adea-fe42-46bb-a7d2-77173cee3746.jpg?im_w=1440',
        preview: true
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/fa972943-c83e-48f6-a294-bd9bd072d3cb.jpg?im_w=1440',
        preview: true
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/ed852836-1b27-44cc-b7a0-f31df1e4103a.jpg?im_w=1440',
        preview: true
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/1062a8b1-3b43-46da-a32f-158699fe7500.jpg?im_w=1440',
        preview: true
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/981f954a-ec96-4f2d-aa72-13fd994d1bee.jpg?im_w=1440',
        preview: true
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-49840035/original/5899be8a-bb5e-4c1b-9c48-910b7d5a443f.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-49840035/original/919e980d-e382-413e-8e82-f3e8410cae07.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-49840035/original/fdfffe30-5f50-41a4-9b17-2450f028b792.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-49840035/original/fe71038f-ec2e-4572-83c8-77bf70afbb74.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-49840035/original/0f5ebd49-a581-45b7-9bb2-31196e2c243d.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/3d966c94-4c87-479b-8eeb-4889e9fb6ac9.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/08376782-a69b-4f94-9ea2-6d31a42fe105.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/0063b23e-e251-4bca-b4e4-c9e7df8823c1.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/3c44f9fd-0a88-41dd-acb5-ebf58bde739f.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/c03ffc78-1072-4d8b-ab6e-7acf36575b8b.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/07879aa7-030f-4b23-8861-136d43666aa7.jpg?im_w=1440',
        preview: true
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/da9638c0-02f4-4e5c-ae2e-4e6c28e6e1a2.jpg?im_w=1440',
        preview: true
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/3b81c6e1-cbde-42e2-b38c-9fa2aadf02a3.jpg?im_w=1440',
        preview: true
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-20166046/original/b732b0e2-e303-42f0-a24e-f408f4ec933f.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/cb9408df-fabc-4909-9495-dcdf7096b708.jpg?im_w=1440',
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
      },
      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-52758916/original/b2cafcd4-af46-4929-b450-247b53689bb0.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-52758916/original/7b774290-98ac-40a5-a5b3-540e28f02212.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-52758916/original/4cb605a0-8b03-4324-988d-6c4de3eef3c5.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-52758916/original/0e52fe37-fc12-4b08-afe8-ace4de845a8f.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-52758916/original/3248345e-1201-40fe-a5a0-e88fc570b650.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 10,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-933543466600413450/original/f103108d-eea7-4eac-99ca-36e2a5527960.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 10,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-933543466600413450/original/7d7d3417-42a8-40d8-bb92-1c5db5ee2911.png?im_w=1440',
        preview: true
      },
      {
        spotId: 10,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-933543466600413450/original/5042af4d-51d3-4c81-9587-8143ede17193.png?im_w=1440',
        preview: true
      },
      {
        spotId: 10,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-933543466600413450/original/96dcc865-a6e2-4120-bf0e-6d28e6c378a0.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 10,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-933543466600413450/original/40481365-d5fd-4da8-979b-ea8cd576e146.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 11,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-823280632948499949/original/e2ce91e9-b503-4ea2-bc20-c6a1ce17498c.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 11,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-823280632948499949/original/f69b752d-71ef-48fb-ad2a-1a3c8c41f576.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 11,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-823280632948499949/original/3b3c8d41-57b4-42fb-bc94-bc2fea410f04.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 11,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-823280632948499949/original/32e10e4f-ed1f-43ae-beb7-398293acd8e1.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 11,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-823280632948499949/original/4bf15a4c-13e5-4d9c-a18a-33989ecf12b0.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 12,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-48299974/original/415cf1f9-21cb-4001-bf62-9b0ce7fa872d.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 12,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-48299974/original/676efcf8-036d-4c8c-897c-3c3c93d53fbe.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 12,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-48299974/original/c60a0edb-a934-4ba1-a5cf-ec0a6a789bd5.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 12,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-48299974/original/780d9853-66c2-47e6-a550-1eaf1943bbb5.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 12,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-48299974/original/48ab6cd1-5c88-4559-96bc-5c0c092b5a2a.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 13,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-931425214430340576/original/3eb6b718-1ca5-4f69-a616-b55cf22f152c.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 13,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-931425214430340576/original/fdde7354-a5f3-460c-905f-1256c73c604e.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 13,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-652101302741909560/original/870ffc78-3787-40eb-bffd-c31ac24bef6f.png?im_w=1440',
        preview: true
      },
      {
        spotId: 13,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-931425214430340576/original/65eac7bd-b375-422a-b27f-e3eb96942395.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 13,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-652101302741909560/original/4c70244b-d116-454c-876f-fd7e58f40661.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 14,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-972536798972799748/original/fb6790be-3990-4210-a1a2-52ef108bbd76.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 14,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-972536798972799748/original/27967f58-7fac-4a30-a076-c06f8ad6c340.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 14,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-972536798972799748/original/3936e8c1-beda-4207-8fb7-70e0be5dd85d.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 14,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-972536798972799748/original/1517d64d-99ae-4eb0-9edf-23f15292b22f.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 14,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-972536798972799748/original/76f93a03-1bb7-48ed-80e3-f1c292f76f2b.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 15,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-23881870/original/f1db6328-9a9e-4334-81ab-d98f31b1f943.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 15,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-23881870/original/4648ddd8-199e-42e3-84e9-6cfcfd864d6f.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 15,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-23881870/original/824135ef-ad9b-4d95-bac1-9dba18155f30.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 15,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-23881870/original/b2865e4e-7941-4980-817f-f74345f324cf.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 15,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-23881870/original/55169956-5ebb-45f7-a915-e7d1382b1d1b.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 16,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-502159881341476167/original/69af1f5b-26dd-4904-85d5-2b864913ad34.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 16,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-502159881341476167/original/bc988285-a83d-458f-aa62-ab43418fd26b.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 16,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-502159881341476167/original/5c154ba1-c80a-4abf-a19e-a2519e9634b1.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 16,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-502159881341476167/original/273e50be-0555-46cf-a6c2-7bceceba9f90.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 16,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-502159881341476167/original/273e50be-0555-46cf-a6c2-7bceceba9f90.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 17,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-39392812/original/74f9bb8b-80e0-4d42-bc4d-3fb8b47be380.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 17,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-39392812/original/70023123-1cbb-43dc-a3c4-d44df54b5318.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 17,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-39392812/original/e01d6584-b80c-4616-ab9d-7147673b4a4b.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 17,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-39392812/original/1a7fc393-2919-4c71-8bae-5469ff17360f.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 17,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-39392812/original/3596ca65-034f-46f4-aeaa-9291c1d4865b.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 18,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-887550659601361017/original/3f45f97a-df18-4bbb-835d-57861d3792c8.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 18,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-887550659601361017/original/f682ca9c-a1d9-49a9-855b-0152e32a1269.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 18,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-887550659601361017/original/ff4ad763-0098-4d30-9dbb-28aa383cda84.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 18,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-887550659601361017/original/6316c99f-6a67-41f6-b7bc-9f2df63cce17.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 18,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-887550659601361017/original/6903645f-d1d2-4ba0-a519-3565860471ad.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 19,
        url: 'https://a0.muscache.com/im/pictures/pro_photo_tool/Hosting-6325180-unapproved/original/74a0e79c-5eaf-4730-b8a2-5892117f0132.JPEG?im_w=1200',
        preview: true
      },
      {
        spotId: 19,
        url: 'https://a0.muscache.com/im/pictures/pro_photo_tool/Hosting-6325180-unapproved/original/34bd5a8d-5563-4f0c-acc3-2c636ca5952a.JPEG?im_w=1440',
        preview: true
      },
      {
        spotId: 19,
        url: 'https://a0.muscache.com/im/pictures/pro_photo_tool/Hosting-6325180-unapproved/original/2dce35ec-023f-4fe6-8d78-20419a252555.JPEG?im_w=1440',
        preview: true
      },
      {
        spotId: 19,
        url: 'https://a0.muscache.com/im/pictures/pro_photo_tool/Hosting-6325180-unapproved/original/b4d2869f-eb58-4dd5-babd-153a576ec67a.JPEG?im_w=1440',
        preview: true
      },
      {
        spotId: 19,
        url: 'https://a0.muscache.com/im/pictures/pro_photo_tool/Hosting-6325180-unapproved/original/85d505ba-3016-44bb-a30c-1926bcbc3ce2.JPEG?im_w=1440',
        preview: true
      },
      {
        spotId: 20,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53191829/original/6e594fba-bc1b-49a5-8dee-db5d236ef3a6.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 20,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53191829/original/aaaabdf3-8ebc-4ba7-bbc4-b2d07875e711.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 20,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53191829/original/86798727-4255-438b-b8ab-564fd664f941.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 20,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53191829/original/b15eae36-2d3f-447a-ac77-184d370ad4a3.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 20,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53191829/original/50d3ca8b-7b32-4bd7-a2cd-752b17d24598.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 21,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53193753/original/3139f1be-440f-426e-bc5d-919c2ce45d57.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 21,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53193753/original/7e8e89f0-373a-45e2-a8fd-3a1f71ec6429.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 21,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53193753/original/ab02ffca-77a7-4360-b60b-ecd285c26d9d.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 21,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53193753/original/90cf898d-0390-4ab7-8750-adb08de91928.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 21,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53193753/original/6af141ee-3e1a-4121-8277-1c80191a8639.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 22,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-973234202978760516/original/38adb43d-322f-4ffa-a90c-7732d7b319db.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 22,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-973234202978760516/original/21655d8a-c322-42a0-9826-cef052a9c741.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 22,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-973234202978760516/original/9b1e4f4a-4da4-49a0-99a7-c561bb386b83.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 22,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-973234202978760516/original/a27c7583-175a-4f4b-a7e4-c3e6a7a79d26.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 22,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-973234202978760516/original/599acd00-e1c2-4dff-a8b4-5f9d17e74c9d.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 23,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-731059780954437660/original/3ce55557-09f2-45e5-bcfb-eccc1b504c83.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 23,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-731059780954437660/original/cb7d52ef-f8a6-4120-bfb7-ba63732f5cab.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 23,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-731059780954437660/original/aa6cc8f6-8c70-4c0b-9cc6-459691e3e8cb.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 23,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-731059780954437660/original/7c27cf15-de2b-4855-8d94-aa83be874c12.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 23,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-731059780954437660/original/5328a2df-0f8f-4d4c-aa6b-8e3e3c45c8d4.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 24,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-710751646295200605/original/8f07ea7b-df33-44d9-8c13-8f53549285b1.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 24,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-710751646295200605/original/b9e7064a-c7f5-45c3-afe8-8478b5e95626.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 24,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-710751646295200605/original/61cf0798-0248-46fd-8e5a-543144d1f0d1.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 24,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-710751646295200605/original/d4f2649f-7e77-4304-92e4-bf556f403a68.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 24,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-710751646295200605/original/64e414c2-7237-4c57-bd2b-4b7c7fbbbc43.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 25,
        url: 'https://a0.muscache.com/im/pictures/524de514-0803-4fd7-b6b4-5f5a380440dd.jpg?im_w=1440',
        preview: true
      },
      {
        spotId: 25,
        url: 'https://a0.muscache.com/im/pictures/9218184f-020c-4ab5-b348-860a4f2e2fe9.jpg?im_w=1440',
        preview: true
      },
      {
        spotId: 25,
        url: 'https://a0.muscache.com/im/pictures/5b899afc-8fd7-43b6-9641-1fb931c7bbd7.jpg?im_w=1440',
        preview: true
      },
      {
        spotId: 25,
        url: 'https://a0.muscache.com/im/pictures/aa896a53-13f8-4de0-8d3e-a02cce2cd32a.jpg?im_w=1440',
        preview: true
      },
      {
        spotId: 25,
        url: 'https://a0.muscache.com/im/pictures/662be97a-f918-4d63-be7d-c2cf39a14521.jpg?im_w=1440',
        preview: true
      },
      {
        spotId: 26,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-734834964378023593/original/5dbe4194-e8a1-4d6a-a903-4deeefefbc46.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 26,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-734834964378023593/original/56c38e4e-69ed-4cfb-951f-4492302c50d3.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 26,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-734834964378023593/original/c54094e2-e7e1-428f-89e6-b9d71e90a3db.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 26,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-734834964378023593/original/d2b0b9dc-2d4a-4c01-ad89-7283024d4dcc.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 26,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-734834964378023593/original/addd78a2-ee11-443f-aa49-2b424beddec3.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 27,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-851715534560458873/original/979809cf-635d-40a3-9bac-e7d0b71393fe.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 27,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-851715534560458873/original/498e1cfb-bfb8-4f79-bcd0-96f14dc506b1.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 27,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-851715534560458873/original/38f6489c-c728-43eb-8dbf-4ef55f9c00a5.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 27,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-851715534560458873/original/0ce7de8f-a7bf-4640-9a54-e2e43a7a3451.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 27,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-851715534560458873/original/31447241-83a5-4f83-b57f-e7365beb1fb9.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 28,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-757792186383658196/original/765d1da7-4eef-4f08-a8a0-0c11e65a323e.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 28,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-757792186383658196/original/0d2b5e08-8e56-43df-b05e-a2015cac3aa6.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 28,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-757792186383658196/original/dd114f8d-7cb4-4f6c-bf66-d3309a8823b9.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 28,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-757792186383658196/original/314beb5a-e172-4209-b474-68ec2457ee7c.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 28,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-757792186383658196/original/b7be6571-6712-41f4-ae24-0cafdecb42b3.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 29,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-778341186822218671/original/2be56619-abd7-4310-adfd-c8e48012cb2f.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 29,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-778341186822218671/original/b3790886-7a17-4c71-b7f8-14c8c9c8671e.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 29,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-778341186822218671/original/26013bf7-1756-4a0f-afcd-76ee6739cba9.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 29,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-778341186822218671/original/5ef903da-6136-44d4-9dcc-111838b01386.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 29,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-778341186822218671/original/b307bd8b-dd0c-4cc4-9f28-95550aaa6823.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 30,
        url: 'https://a0.muscache.com/im/pictures/8daeb070-e9f1-40f1-a0c2-fb90682483d3.jpg?im_w=1200',
        preview: true
      },
      {
        spotId: 30,
        url: 'https://a0.muscache.com/im/pictures/dce5ca6c-4f47-430d-a8fc-22911aa0c027.jpg?im_w=1440',
        preview: true
      },
      {
        spotId: 30,
        url: 'https://a0.muscache.com/im/pictures/b8d44863-b616-4c70-82f8-7203362edcd9.jpg?im_w=1440',
        preview: true
      },
      {
        spotId: 30,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-45016629/original/1d9a6c99-3971-4246-a51f-1cde98d03178.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 30,
        url: 'https://a0.muscache.com/im/pictures/841dc27e-addf-4b71-b8af-0895dcf74d2a.jpg?im_w=1440',
        preview: true
      },
      {
        spotId: 31,
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-53719772/original/81d3f240-67c7-439e-ad74-865730d24ef8?im_w=1440',
        preview: true
      },
      {
        spotId: 31,
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-53719772/original/0055a858-8c25-4d43-8d4f-30566c5ab8ab?im_w=1440',
        preview: true
      },
      {
        spotId: 31,
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-53719772/original/c3420f8b-5adc-418e-9ca0-f351c6c8fcde?im_w=1440',
        preview: true
      },
      {
        spotId: 31,
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-53719772/original/a89dc092-9db5-4b9c-be4e-9372c9a9762f?im_w=1440',
        preview: true
      },
      {
        spotId: 31,
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-53719772/original/a89dc092-9db5-4b9c-be4e-9372c9a9762f?im_w=1440',
        preview: true
      },
      {
        spotId: 32,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-52508260/original/1ce1649d-19ea-4d5c-849d-9a99ed73d60d.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 32,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-52508260/original/ec84baff-ea60-4fe8-be45-e0f38049d026.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 32,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-52508260/original/9f035300-8756-46ac-9a6e-20f25d90c485.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 32,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-52508260/original/c07cfe5d-6e3b-4b8e-91e8-4f92a5e89d50.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 32,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-52508260/original/83229aa5-8b72-4aec-802d-3c5a22d2f538.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 33,
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-706458494372301490/original/fcdbebdd-4ebc-4748-b3a2-e629d768689a?im_w=1200',
        preview: true
      },
      {
        spotId: 33,
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-706458494372301490/original/4594a65c-fbbd-450f-a1ed-a837c5177232?im_w=1440',
        preview: true
      },
      {
        spotId: 33,
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-706458494372301490/original/54f91a3f-31fa-40e8-b83f-6163cf52cf8f?im_w=1440',
        preview: true
      },
      {
        spotId: 33,
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-706458494372301490/original/506f7443-333c-4294-8330-0e502f75e428?im_w=1440',
        preview: true
      },
      {
        spotId: 33,
        url: 'https://a0.muscache.com/im/pictures/monet/Luxury-706458494372301490/original/799a8a97-d432-4cd6-b15d-1766c45d3a49?im_w=1440',
        preview: true
      },
      {
        spotId: 34,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-966614456439715770/original/d4051ecc-9664-49e9-b2b7-7669003f8180.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 34,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-966614456439715770/original/7cf64ade-b0d6-4158-9f1b-18377eac1334.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 34,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-966614456439715770/original/6d2964f5-8715-412b-a228-11a742f6be56.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 34,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-966614456439715770/original/b334cbaa-7cf1-45c3-87cc-66200775787a.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 34,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-966614456439715770/original/b9742637-8736-42e7-ad08-b570542269d9.jpeg?im_w=1440',
        preview: true
      },
      {
        spotId: 35,
        url: 'https://a0.muscache.com/im/pictures/airflow/Hosting-687000469990823238/original/b2c8fd95-b14f-4adf-91de-531b32f1e0b2.jpg?im_w=1200',
        preview: true
      },
      {
        spotId: 35,
        url: 'https://a0.muscache.com/im/pictures/airflow/Hosting-687000469990823238/original/532718d0-d848-48d8-b75f-1dcd8894ba1f.jpg?im_w=1200',
        preview: true
      },
      {
        spotId: 35,
        url: 'https://a0.muscache.com/im/pictures/airflow/Hosting-687000469990823238/original/a8784a10-518e-4062-a549-2437402526b2.jpg?im_w=1200',
        preview: true
      },
      {
        spotId: 35,
        url: 'https://a0.muscache.com/im/pictures/airflow/Hosting-687000469990823238/original/455a136d-88ea-4484-a88e-ba9d14d176c4.jpg?im_w=1200',
        preview: true
      },
      {
        spotId: 35,
        url: 'https://a0.muscache.com/im/pictures/airflow/Hosting-687000469990823238/original/1f66ace1-255d-4c26-830d-1c114272e6a0.jpg?im_w=1440',
        preview: true
      },

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
