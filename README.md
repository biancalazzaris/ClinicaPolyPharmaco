# ClinicaPolyPharmaco
### Praticing Node.JS, API w/ CRUD 

Para rodar o projeto você vai precisar instalar alguns pacotes npm: 
Use o seguinte comando em seu terminal
> npm i express body-parser cors

E para executar o projeto chame o nodemon:
> npx nodemon


### No projeto foram feitos os seguintes ENDPOINTS:


1. Endpoint para Médicos:
```
get:   	/api/medicos  				-- retorna todos os médicos
get: 	/api/medicos/id-medico 			-- retorna um médico com ID
post: 	/api/medico 				 	-- salva um registro de um médico
delete: /api/medico/id-medico			-- remove um registro de um médico
```

2. Endpoint para Pacientes:
```
get:   	/api/pacientes  				-- retorna todos os pacientes
get: 	/api/paciente/id-paciente 			-- retorna um paciente com ID
post: 	/api/paciente 				-- salva um registro de um paciente
delete: /api/paciente/id-paciente			-- remove um registro de um paciente
```

3. Endpoint para Medicamentos:
```
get:   	/api/medicamentos  		                  -- retorna todos os medicamentos
get: 	/api/medicamento/id-medicamento    -- retorna um medicamento com ID
post: 	/api/medicamento 			-- salva um medicamento de um paciente
delete: /api/medicamento/id-medicamento   -- remove um registro de um medicamento
```

4. Endpoint para Farmácia:
```
get:   	/api/farmacia  			-- retorna todos as farmacias
get: 	/api/farmacia/id-farmacia 		-- retorna um farmacia por ID
post: 	/api/farmacia 			-- salva um registro de uma  farmacia
delete: /api/farmacia/id-farmacia		-- remove um registro de uma farmacia
```
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
