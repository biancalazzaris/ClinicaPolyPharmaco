const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


const DB = {
    medico: [
        { id: 1, name: 'Newton R. Salerno', especialidade: 'Catarata, Ceratocone'},
        { id: 3, name: 'Veralúcia Ferreira Oliveira', especialidade: 'Estética, Plástica Ocular' },
        { id: 6, name: 'Rodrigo Marzagão', especialidade: 'Oftalmologista'}
    ],
    paciente: [
        { id: 20, name: 'Zé Silveira', exames:' ultrassom, sangue, urina', receita: ' Dipirona de 8 em 8hrs' }
    ],
    medicamento: [
        { id: 33, nome: 'BuscoPan', generico: 'Ibuprofeno', dosagem: '500mg', posologia: '3x ao dia, de 8h em 8h' }
    ]
}

app.get('/', (req, res) => {
    res.render('/Front/index.html')
});

//Endopoint de médicos:

// retorna todos os médicos
app.get('/api/medicos', (req, res) => {
    res.statusCode = 200;
    res.json(DB.medico)
});

// retorna um médico com ID
app.get('/api/medicos/:id', (req, res) => {
    const id = req.params.id;
    if (isNaN(id)) {
        res.send('Opsss, id informado não é number');
    } else {
        const idMedico = parseInt(req.params.id);
        const medico = DB.medico.find(index => index.id === idMedico);
        if (medico !== undefined) {
            res.statusCode = 200;
            res.json(medico);
        } else {
            res.sendStatus(404);
        }
    }
});

//salva um registro de um médico
app.post('/api/medico', (req, res) => {
    const { name, especialidade } = req.body;
    DB.medico.push({
        id: Math.floor(Math.random()* (100 - 10)) + 3,
        name,
        especialidade
    });
    res.send('Novo cadastro de médico salvo com sucesso.');
});

// remove um registro de um médico
app.delete('/api/medico/:id', (req, res) => {
    const id = req.params.id;
    if (isNaN(id)) {
        res.sendStatus(400)
        res.json('Ops, não foi informado um número válido');
    } else {
        const medico = DB.medico.findIndex(index => index.id === parseInt(id));
        if (medico === -1) {
            res.sendStatus(404);
        } else {
            DB.medico.splice(medico, 1);
            res.sendStatus(200);
            res.json({ message: 'Cadastro médico deletado!' })
        }
    }
});


// Pacientes 
// retorna todos os pacientes
app.get('/api/pacientes', (req, res) => {
    res.statusCode = 200;
    res.json(DB.paciente)
});

// retorna um médico com ID
app.get('/api/pacientes/:id', (req, res) => {
    const id = req.params.id;
    if (isNaN(id)) {
        res.send('Opsss, id informado não é number');
    } else {
        const idpaciente = parseInt(req.params.id);
        const paciente = DB.paciente.find(index => index.id === idpaciente);
        if (paciente !== undefined) {
            res.statusCode = 200;
            res.json(paciente);
        } else {
            res.sendStatus(404);
        }
    }
});

//salva um registro de um médico
app.post('/api/paciente', (req, res) => {
    const { name, exames, receita } = req.body;
    DB.paciente.push({
        id: Math.floor(Math.random()* (100 - 10)) + 3,
        name,
        exames, 
        receita
    });
    res.send('Novo cadastro de paciente salvo com sucesso.');
});

// remove um registro de um médico
app.delete('/api/paciente/:id', (req, res) => {
    const id = req.params.id;
    if (isNaN(id)) {
        res.sendStatus(400)
        res.json('Ops, não foi informado um número válido');
    } else {
        const paciente = DB.paciente.findIndex(index => index.id === parseInt(id));
        if (paciente === -1) {
            res.sendStatus(404);
        } else {
            DB.paciente.splice(paciente, 1);
            res.sendStatus(200);
            res.json({ message: 'Cadastro de paciente deletado!' })
        }
    }
});

//Farmácia
// retorna todos os pacientes
app.get('/api/pacientes', (req, res) => {
    res.statusCode = 200;
    res.json(DB.paciente)
});

// retorna um médico com ID
app.get('/api/pacientes/:id', (req, res) => {
    const id = req.params.id;
    if (isNaN(id)) {
        res.send('Opsss, id informado não é number');
    } else {
        const idpaciente = parseInt(req.params.id);
        const paciente = DB.paciente.find(index => index.id === idpaciente);
        if (paciente !== undefined) {
            res.statusCode = 200;
            res.json(paciente);
        } else {
            res.sendStatus(404);
        }
    }
});

//salva um registro de um médico
app.post('/api/paciente', (req, res) => {
    const { name, exames, receita } = req.body;
    DB.paciente.push({
        id: Math.floor(Math.random()* (100 - 10)) + 3,
        name,
        exames, 
        receita
    });
    res.send('Novo cadastro de paciente salvo com sucesso.');
});

// remove um registro de um médico
app.delete('/api/paciente/:id', (req, res) => {
    const id = req.params.id;
    if (isNaN(id)) {
        res.sendStatus(400)
        res.json('Ops, não foi informado um número válido');
    } else {
        const paciente = DB.paciente.findIndex(index => index.id === parseInt(id));
        if (paciente === -1) {
            res.sendStatus(404);
        } else {
            DB.paciente.splice(paciente, 1);
            res.sendStatus(200);
            res.json({ message: 'Cadastro de paciente deletado!' })
        }
    }
});



//------------------------------------------------------------------
// porta para o app
app.listen(5000, () => {
    console.log('app running in http://localhost:5000');
});