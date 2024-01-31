const express = require('express');
const { PrismaClient } = require('@prisma/client');


const path = require('path');
const app = express();
const prisma = new PrismaClient();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, './views'));

app.get('/', async (req,res) => {
    await prisma.nodejs.create();
    const days = await prisma.nodejs.findMany();
    res.render('index', {days: days});
});

app.listen(3000,()=>{console.log('server running on port 3000!')});