const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


(async function main() {
    try {
      const user1 = await prisma.explorer2.create({
       
        data:{
        name: 'Angel',
        lang: 'spa',
        enrollments: 4,
        missionCommander: 'carlo'
        }        
      },
    );
  
    const user2 = await prisma.explorer2.create({
      data:{
      name: 'fernando',
      lang: 'spa',
      enrollments: 3,
      missionCommander: 'carlo'
      }
      
      });
  
      const user3 = await prisma.explorer2.create({
          data:{
          name: 'juan',
          lang: 'spa',
          enrollments: 3,
          missionCommander: 'carlo'
          }
          
        
      });
  
      console.log('Create 3 explorers - table 2 ');
    } catch(e) {
      console.error(e);
      process.exit(1);
    } finally {
      await prisma.$disconnect();
    }
  })();