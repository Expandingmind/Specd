import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting seed...');

  // Clean up existing data
  await prisma.like.deleteMany({});
  await prisma.comment.deleteMany({});
  await prisma.tag.deleteMany({});
  await prisma.post.deleteMany({});
  await prisma.modImage.deleteMany({});
  await prisma.mod.deleteMany({});
  await prisma.car.deleteMany({});
  await prisma.follow.deleteMany({});
  await prisma.user.deleteMany({});

  // Create users
  console.log('Creating users...');
  const password = await bcrypt.hash('password123', 10);

  const john = await prisma.user.create({
    data: {
      email: 'john@example.com',
      username: 'john_doe',
      password,
      name: 'John Doe',
      bio: 'Car enthusiast with a passion for JDM imports',
      location: 'Los Angeles, CA',
      avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
  });

  const jane = await prisma.user.create({
    data: {
      email: 'jane@example.com',
      username: 'jane_smith',
      password,
      name: 'Jane Smith',
      bio: 'Drift queen and automotive photographer',
      location: 'Miami, FL',
      avatarUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
  });

  const mike = await prisma.user.create({
    data: {
      email: 'mike@example.com',
      username: 'mike_wilson',
      password,
      name: 'Mike Wilson',
      bio: 'German car specialist and weekend track day warrior',
      location: 'Chicago, IL',
      avatarUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
  });

  // Create follows
  console.log('Creating follows...');
  await prisma.follow.create({
    data: {
      followerId: john.id,
      followingId: jane.id,
    },
  });

  await prisma.follow.create({
    data: {
      followerId: john.id,
      followingId: mike.id,
    },
  });

  await prisma.follow.create({
    data: {
      followerId: jane.id,
      followingId: john.id,
    },
  });

  await prisma.follow.create({
    data: {
      followerId: mike.id,
      followingId: jane.id,
    },
  });

  // Create cars
  console.log('Creating cars...');
  const johnCar = await prisma.car.create({
    data: {
      userId: john.id,
      make: 'Nissan',
      model: '240SX',
      year: 1995,
      trim: 'SE',
      color: 'Midnight Purple',
      horsepower: 380,
      torque: 350,
      topSpeed: 155,
      mpg: 22.5,
      description: 'My SR20DET swapped 240SX project. Built for drift and show.',
      imageUrl: 'https://www.motortrend.com/uploads/sites/21/2020/10/Nissan-240SX-Lead.jpg',
    },
  });

  const janeCar = await prisma.car.create({
    data: {
      userId: jane.id,
      make: 'Toyota',
      model: 'Supra',
      year: 1994,
      trim: 'Turbo',
      color: 'White',
      horsepower: 550,
      torque: 500,
      topSpeed: 180,
      mpg: 18.0,
      description: 'Fully built 2JZ with single turbo conversion and performance upgrades.',
      imageUrl: 'https://cdn.carbuzz.com/gallery-images/1600/580000/500/580547.jpg',
    },
  });

  const mikeCar = await prisma.car.create({
    data: {
      userId: mike.id,
      make: 'BMW',
      model: 'M3',
      year: 2015,
      trim: 'Competition',
      color: 'Alpine White',
      horsepower: 425,
      torque: 406,
      topSpeed: 174,
      mpg: 17.0,
      description: 'F80 M3 with carbon fiber exterior mods and upgraded suspension.',
      imageUrl: 'https://cdn.bmwblog.com/wp-content/uploads/2015/05/Alpine-White-BMW-M3-Image-1.jpg',
    },
  });

  // Create mods
  console.log('Creating mods...');
  const johnMod1 = await prisma.mod.create({
    data: {
      carId: johnCar.id,
      title: 'SR20DET Engine Swap',
      type: 'Performance',
      description: 'Complete engine swap with Garrett GT28 turbo and supporting mods',
      vendor: 'Local import shop',
      price: 8500,
      installDate: new Date('2020-05-15'),
      installNotes: 'Full custom harness and engine management system. Upgraded radiator and intercooler.',
    },
  });

  const johnMod2 = await prisma.mod.create({
    data: {
      carId: johnCar.id,
      title: 'Origin Lab Body Kit',
      type: 'Exterior',
      description: 'Complete body kit for aggressive street look',
      vendor: 'Origin Lab',
      price: 2200,
      installDate: new Date('2020-07-20'),
      installNotes: 'Professional installation and paint matching required.',
    },
  });

  const janeMod1 = await prisma.mod.create({
    data: {
      carId: janeCar.id,
      title: 'Single Turbo Conversion',
      type: 'Performance',
      description: 'Precision 6766 turbo with custom manifold',
      vendor: 'Titan Motorsports',
      price: 5500,
      installDate: new Date('2019-12-10'),
      installNotes: 'Custom fabricated downpipe and wastegate dump. Upgraded fuel system required.',
    },
  });

  const mikeMod1 = await prisma.mod.create({
    data: {
      carId: mikeCar.id,
      title: 'KW Clubsport Coilovers',
      type: 'Suspension',
      description: 'Height and damping adjustable coilover system',
      vendor: 'KW Suspension',
      price: 3200,
      installDate: new Date('2021-03-05'),
      installNotes: 'Professional alignment required after installation.',
    },
  });

  // Create mod images
  console.log('Creating mod images...');
  await prisma.modImage.create({
    data: {
      modId: johnMod1.id,
      url: 'https://www.rawmotorsport.com/storage/app/uploads/public/5e5/3a5/a36/5e53a5a36e9df217374640.jpg',
      caption: 'Engine bay completed',
    },
  });

  await prisma.modImage.create({
    data: {
      modId: johnMod2.id,
      url: 'https://i.ytimg.com/vi/1AORXNeG4bE/maxresdefault.jpg',
      caption: 'Body kit installed but before paint',
    },
  });

  await prisma.modImage.create({
    data: {
      modId: janeMod1.id,
      url: 'https://www.supraforums.com/attachments/37dd1f5b-6a1b-4d00-891f-b5de86f9ad7c-jpeg.107740/',
      caption: 'Single turbo setup installed',
    },
  });

  // Create tags
  console.log('Creating tags...');
  const tag1 = await prisma.tag.create({
    data: {
      name: 'JDM',
    },
  });

  const tag2 = await prisma.tag.create({
    data: {
      name: 'EngineSwap',
    },
  });

  const tag3 = await prisma.tag.create({
    data: {
      name: 'Drift',
    },
  });

  const tag4 = await prisma.tag.create({
    data: {
      name: 'BodyKit',
    },
  });

  const tag5 = await prisma.tag.create({
    data: {
      name: 'Turbo',
    },
  });

  const tag6 = await prisma.tag.create({
    data: {
      name: 'TrackDay',
    },
  });

  const tag7 = await prisma.tag.create({
    data: {
      name: 'GermanEngineering',
    },
  });

  // Create posts
  console.log('Creating posts...');
  const johnPost1 = await prisma.post.create({
    data: {
      userId: john.id,
      carId: johnCar.id,
      modId: johnMod1.id,
      content: 'Finally got my SR20DET swap completed! This thing absolutely rips now.',
      imageUrl: 'https://www.rawmotorsport.com/storage/app/uploads/public/5e5/3a5/a36/5e53a5a36e9df217374640.jpg',
      tags: {
        connect: [
          { id: tag1.id },
          { id: tag2.id },
          { id: tag3.id },
        ],
      },
    },
  });

  const johnPost2 = await prisma.post.create({
    data: {
      userId: john.id,
      carId: johnCar.id,
      modId: johnMod2.id,
      content: 'Origin Lab body kit installed. Still needs paint matching but I love the aggressive look!',
      imageUrl: 'https://i.ytimg.com/vi/1AORXNeG4bE/maxresdefault.jpg',
      tags: {
        connect: [
          { id: tag1.id },
          { id: tag4.id },
        ],
      },
    },
  });

  const janePost1 = await prisma.post.create({
    data: {
      userId: jane.id,
      carId: janeCar.id,
      modId: janeMod1.id,
      content: 'Single turbo conversion finished on the Supra. This thing absolutely screams now!',
      imageUrl: 'https://www.supraforums.com/attachments/37dd1f5b-6a1b-4d00-891f-b5de86f9ad7c-jpeg.107740/',
      tags: {
        connect: [
          { id: tag1.id },
          { id: tag5.id },
        ],
      },
    },
  });

  const mikePost1 = await prisma.post.create({
    data: {
      userId: mike.id,
      carId: mikeCar.id,
      modId: mikeMod1.id,
      content: 'Track day with the new KW Clubsports. Absolutely transformed the handling!',
      imageUrl: 'https://www.m3post.com/forums/attachment.php?attachmentid=1598122&d=1451997180',
      tags: {
        connect: [
          { id: tag6.id },
          { id: tag7.id },
        ],
      },
    },
  });

  // Create comments
  console.log('Creating comments...');
  await prisma.comment.create({
    data: {
      userId: jane.id,
      postId: johnPost1.id,
      content: 'Looks amazing! What management system are you running?',
    },
  });

  await prisma.comment.create({
    data: {
      userId: john.id,
      postId: johnPost1.id,
      content: 'Thanks! Using AEM Infinity with a complete custom harness.',
    },
  });

  await prisma.comment.create({
    data: {
      userId: mike.id,
      postId: johnPost2.id,
      content: 'That body kit is fire! Getting it painted to match?',
    },
  });

  await prisma.comment.create({
    data: {
      userId: john.id,
      postId: janePost1.id,
      content: 'Beast mode activated! What size turbo did you go with?',
    },
  });

  await prisma.comment.create({
    data: {
      userId: jane.id,
      postId: mikePost1.id,
      content: 'Love those coilovers! How do they compare to the stock suspension?',
    },
  });

  // Create likes
  console.log('Creating likes...');
  await prisma.like.create({
    data: {
      userId: jane.id,
      postId: johnPost1.id,
    },
  });

  await prisma.like.create({
    data: {
      userId: mike.id,
      postId: johnPost1.id,
    },
  });

  await prisma.like.create({
    data: {
      userId: mike.id,
      postId: johnPost2.id,
    },
  });

  await prisma.like.create({
    data: {
      userId: john.id,
      postId: janePost1.id,
    },
  });

  await prisma.like.create({
    data: {
      userId: mike.id,
      postId: janePost1.id,
    },
  });

  await prisma.like.create({
    data: {
      userId: john.id,
      postId: mikePost1.id,
    },
  });

  await prisma.like.create({
    data: {
      userId: jane.id,
      postId: mikePost1.id,
    },
  });

  console.log('Seed completed successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 