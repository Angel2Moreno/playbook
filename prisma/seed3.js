const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


(async function main() {
    try {
      const user1 = await prisma.fullStack.create({
       
        data:{
        name: 'Angel',
        username: 'angel2dm',
        main: 'launchx',
        
        }        
      },
    );
  
    const user2 = await prisma.fullStack.create({
      data:{
        name: 'Jesus',
        username: 'ChuchoM',
        main: 'launchx',
      }
      
      });
  
      const user3 = await prisma.fullStack.create({
          data:{
            name: 'BenitoLepug',
            username: 'chato1',
            main: 'launchx',
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