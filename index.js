const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


const DB = {
    medico: [
        { id: 1, name: 'Newton R. Salerno', especialidade: 'Catarata, Ceratocone' },
        { id: 3, name: 'Veralúcia Ferreira Oliveira', especialidade: 'Estética, Plástica Ocular' },
        { id: 6, name: 'Rodrigo Marzagão', especialidade: 'Oftalmologista' }
    ],
    paciente: [
        { id: 20, name: 'Zé Silveira', exames: {}, receita: {} }, 
        { id: 30, name: 'Xioti Cautuo', exames: {}, receita: {} }, 
        { id: 40, name: 'Duruva Silva', exames: {}, receita: {} }, 
    ],
    medicamento: [
        { id: 33, name: 'BuscoPan', generico: 'Ibuprofeno', dosagem: '500mg', posologia: '3x ao dia, de 8h em 8h', indicacaoMedicamentosa: '3 comp dia'},
        { id: 53, name: "Nefrolagen", generico: "doril", dosagem: "300mg", posologia: "8h em 8h", indicacaoMedicamentosa: "3 capsulas por dia"
        }
    ], 
    farmacia: [
        { id: 10, name: 'USB Sul', medico: 'José Alfredo', paciente:'Maria da Silva'}, 
        { id: 45, name: 'Preço Popular', medico: 'Paulo Sérgio', paciente: 'João da Silva'}
    ]
}

app.get('/', (req, res) => {
    res.json({ message: 'Não tem nada aqui' })
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
        id: Math.floor(Math.random() * (100 - 10)) + 3,
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

// retorna um paciente com ID
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

//salva um registro de um paciente
app.post('/api/paciente', (req, res) => {
    const { name, exames, receita } = req.body;
    DB.paciente.push({
        id: Math.floor(Math.random() * (100 - 10)) + 3,
        name,
        exames,
        receita
    });
    res.send('Novo cadastro de paciente salvo com sucesso.');
});

// remove um registro de um paciente
app.delete('/api/paciente/:id', (req, res) => {
    const id = req.params.id;
    if (isNaN(id)) {
        res.sendStatus(400)
        res.json('Ops, ID não encontrado');
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

//Medicamentos 
// retorna todos os medicamentos
app.get('/api/medicamentos', (req, res) => {
    res.statusCode = 200;
    res.json(DB.medicamento)
});

// retorna um medicamento com ID
app.get('/api/medicamento/:id', (req, res) => {
    const id = req.params.id;
    if (isNaN(id)) {
        res.send('O ID informado não é número, repita com um id número inteiro');
    } else {
        const idmedicamento = parseInt(req.params.id);
        const medicamento = DB.medicamento.find(index => index.id === idmedicamento);
        if (medicamento !== undefined) {
            res.statusCode = 200;
            res.json(medicamento);
        } else {
            res.sendStatus(404);
        }
    }
});

//salva um registro de um medicamento
app.post('/api/medicamento', (req, res) => {
    const { name, generico, dosagem, posologia, indicacaoMedicamentosa } = req.body;
    DB.medicamento.push({
        id: Math.floor(Math.random() * (100 - 10)) + 3,
        name,
        generico,
        dosagem,
        posologia,
        indicacaoMedicamentosa
    });
    res.send('Novo cadastro de paciente salvo com sucesso.');
});

// remove um registro de um medicamento
app.delete('/api/medicamento/:id', (req, res) => {
    const id = req.params.id;
    if (isNaN(id)) {
        res.sendStatus(400)
        res.json('Ops, ID precisa ser um número inteiro');
    } else {
        const medicamento = DB.medicamento.findIndex(index => index.id === parseInt(id));
        if (medicamento === -1) {
            res.sendStatus(404);
        } else {
            DB.medicamento.splice(medicamento, 1);
            res.sendStatus(200);
            res.json({ message: 'Cadastro de paciente deletado!' })
        }
    }
});

//Farmácias 

// retorna todos as farmacias
app.get('/api/farmacias', (req, res) => {
    res.statusCode = 200;
    res.json(DB.farmacia)
});

// retorna um medicamento com ID
app.get('/api/farmacia/:id', (req, res) => {
    const id = req.params.id;
    if (isNaN(id)) {
        res.send('O ID informado não é número, repita com um id número inteiro');
    } else {
        const idFarmacia = parseInt(req.params.id);
        const farmacia = DB.farmacia.find(index => index.id === idFarmacia);
        if (farmacia !== undefined) {
            res.statusCode = 200;
            res.json(farmacia);
        } else {
            res.sendStatus(404);
        }
    }
});

//salva um registro de um medicamento
app.post('/api/farmacia', (req, res) => {
    const { name, medico, paciente } = req.body;
    DB.farmacia.push({
        id: Math.floor(Math.random() * (100 - 10)) + 3,
        name,
        medico, 
        paciente
    });
    res.send('Novo cadastro de farmacia salvo com sucesso.');
});

// remove um registro de um medicamento
app.delete('/api/farmacia/:id', (req, res) => {
    const id = req.params.id;
    if (isNaN(id)) {
        res.sendStatus(400)
        res.json('Ops, ID precisa ser um número inteiro');
    } else {
        const farmacia = DB.farmacia.findIndex(index => index.id === parseInt(id));
        if (farmacia === -1) {
            res.sendStatus(404);
        } else {
            DB.farmacia.splice(farmacia, 1);
            res.sendStatus(200);
            res.json({ message: 'Cadastro de farmacia deletado!' })
        }
    }
});


//------------------------------------------------------------------
// porta para o app
app.listen(5000, () => {
    console.log('app running in http://localhost:5000');
});