const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//cors
const cors = require("cors");
const corsOptions = {
    origin: "https://localhost:8081",
    optionsSuccessStatus: 200,

};

app.use(cors());
app.options('*',cors());


app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});
app.get('/explorers', async (req, res) => {
    const allExplorers =  await prisma.explorer.findMany({});
    res.json(allExplorers);
  });
  app.get('/explorers/:id', async (req, res) => {
    const id = req.params.id;
    const explorer = await prisma.explorer.findUnique({where: {id: parseInt(id)}});
    res.json(explorer);
  });
  app.post('/explorers', async (req, res) => {
    const explorer = {
      name: req.body.name,
      username: req.body.username,
      mission: req.body.mission
     };
    const message = 'Explorer creado.';
    await prisma.explorer.create({data: explorer});
    return res.json({message});
  });
  app.put('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.explorer.update({
		where: {
			id: id
		},
		data: {
			mission: req.body.mission
		}
	})

	return res.json({message: "Actualizado correctamente"});
});
app.delete('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.explorer.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});

//mi tabla explorer2
app.get('/explorers2', async (req, res) => {
  const allExplorers2 =  await prisma.explorer2.findMany({});
  res.json(allExplorers2);
});
app.get('/explorers2/:id', async (req, res) => {
  const id = req.params.id;
  const explorer = await prisma.explorer2.findUnique({where: {id: parseInt(id)}});
  res.json(explorer);
});
app.post('/explorers2', async (req, res) => {
  const explorer = {
    name: req.body.name,
    lang: req.body.lang,
    enrollments: req.body.enrollments,
    missionCommander: req.body.missionCommander
   };
  const message = 'Explorer creado.';
  await prisma.explorer2.create({data: explorer});
  return res.json({message});
});
app.put('/explorers2/:id', async (req, res) => {
const id = parseInt(req.params.id);

await prisma.explorer2.update({
  where: {
    id: id
  },
  data: {
    mission: req.body.mission
  }
})

return res.json({message: "Actualizado correctamente"});
});
app.delete('/explorers2/:id', async (req, res) => {
const id = parseInt(req.params.id);
await prisma.explorer2.delete({where: {id: id}});
return res.json({message: "Eliminado correctamente"});
});
// fullstack
app.get('/fullStack', async (req, res) => {
  const allExplorers =  await prisma.fullStack.findMany({});
  res.json(allExplorers);
});
app.get('/fullStack/:id', async (req, res) => {
  const id = req.params.id;
  const explorer = await prisma.efullStack.findUnique({where: {id: parseInt(id)}});
  res.json(explorer);
});
app.post('/fullStack', async (req, res) => {
  const explorer = {
    name: req.body.name,
    username: req.body.username,
    main: req.body.main
   };
  const message = 'fullStack creado.';
  await prisma.fullStack.create({data: explorer});
  return res.json({message});
});
app.put('/fullStack/:id', async (req, res) => {
const id = parseInt(req.params.id);

await prisma.fullStack.update({
  where: {
    id: id
  },
  data: {
    main: req.body.main
  }
})

return res.json({message: "Actualizado correctamente"});
});
app.delete('/fullStack/:id', async (req, res) => {
const id = parseInt(req.params.id);
await prisma.fullStack.delete({where: {id: id}});
return res.json({message: "Eliminado correctamente"});
});