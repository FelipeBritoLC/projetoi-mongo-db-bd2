//Chamando nosso banco de dados de BibliotecaInterdimensional
 use BibliotecaInterdimensional;

 //Criando nossas coleções:
db.createCollection("classe");
db.createCollection("criatura");
db.createCollection("magizoologista");
db.createCollection("registro");
db.createCollection("guardiao");
db.createCollection("cacador");
db.createCollection("protege");
db.createCollection("captura");


//---Criando índices necessários---
// índice 1
db.criatura.createIndex({ "nome": 1 });

// índice 2
db.magizoologista.createIndex({ "nome": 1 });

// I. Realizando pelo menos 5 comandos de inserções para cada coleção 


//Inserções na coleção classe
db.classe.insertMany([
    {
        idclasse: 1,
        nome: "Animais Místicos",
        descricao: "Animais com poderes extraordinários, habilidades mágicas, ou que têm significados simbólicos.",
        caracteristicas: ["Criaturas com habilidades especiais relacionadas ao ambiente natural ou mágico.", "Seres frequentemente associados a forças naturais ou divinas.", "Criaturas que possuem características visivelmente místicas ou encantadoras."]
    },
    {
        idclasse: 2,
        nome: "Seres Híbridos",
        descricao: "Criaturas que combinam traços de diferentes espécies, geralmente metade humano e metade animal.",
        caracteristicas: ["Criaturas que combinam características de diferentes espécies.", "Seres que frequentemente têm a capacidade de se adaptar a múltiplos ambientes."]
    },
    {
        idclasse: 3,
        nome: "Seres Míticos",
        descricao: "Seres extraordinários de mitologias que possuem habilidades especiais, poderosos e muitas vezes ligados a divindades.",
        caracteristicas: ["Criaturas frequentemente associadas a antigas religiões e mitologias."]
    },
    {
        idclasse: 4,
        nome: "Seres Sobrenaturais",
        descricao: "Entidades com habilidades mágicas, poderes místicos ou relacionadas à morte e aos elementos sobrenaturais.",
        caracteristicas: ["Seres com poderes ou habilidades que desafiam as leis naturais.", "Criaturas que possuem uma conexão direta com o mundo espiritual ou etéreo.", "Seres que frequentemente têm uma presença impactante ou um efeito emocional sobre os vivos.", "Seres geralmente conectados a morte."]
    },
    {
        idclasse: 5,
        nome: "Seres Magos e Bruxos",
        descricao: "Indivíduos que possuem habilidades de manipular e controlar a magia.",
        caracteristicas: ["Criaturas ou indivíduos com profundo conhecimento em feitiçaria e encantamentos.", "Seres que frequentemente têm habilidades excepcionais em rituais e magia.", "Seres que possuem a capacidade de manipular e controlar a magia."]
    }
]);




//Inserções na coleção criatura
db.criatura.insertMany([
    { idcriatura: 1, nome: 'Dragão', descricao: 'Criatura alada que cospe fogo.', idclasse: 1 },
    { idcriatura: 2, nome: 'Sátiro', descricao: 'Metade homem, metade bode.', idclasse: 2 },
    { idcriatura: 3, nome: 'Pegasus', descricao: 'Cavalo Alado', idclasse: 3 },
    { idcriatura: 4, nome: 'Dementador', descricao: 'Criatura sombria que suga a felicidade.', idclasse: 4},
    { idcriatura: 5, nome: 'Bruxo', descricao: 'Indivíduos que possuem habilidades de manipular e controlar a magia.', idclasse: 5 }
]);



//Inserções na coleção magizoologista
db.magizoologista.insertMany([
    { cum: '0987654321EFGH2', nome: 'Luna Lovegood', data_nasc: '1981-02-13' },
    { cum: '1122334455IJKL3', nome: 'Rubeus Hagrid', data_nasc: '1928-12-06' },
    { cum: '7766554433UVWX6', nome: 'Oliver Woodhart', data_nasc: '1970-11-22' },
    { cum: '8877665544GHIJ9', nome: 'Ariana Willowshade', data_nasc: '1979-04-15' },
    { cum: '9988776655CDEF8', nome: 'Tobias Swiftfoot', data_nasc: '1990-01-17' },
    { cum: '1234567890ABCD1', nome: 'Newt Scamander', data_nasc: '1990-06-11' },
    { cum: '5566778899MNOP4', nome: 'Bruno Wildfang', data_nasc: '1975-08-14' },
    { cum: '6677889900QRST5', nome: 'Fiona Moonbreeze', data_nasc: '1985-11-24' },
    { cum: '3344556677YZAB7', nome: 'Elara Starwind', data_nasc: '1987-07-05' },
    { cum: '2233445566KLMN0', nome: 'Cedric Thundereye', data_nasc: '1986-08-28' }
]);


//Inserções na coleção registro
db.registro.insertMany([
    {idregistro: 1, cummagizoologista: '0987654321EFGH2', idcriatura: 2, data:'1926-12-25', localizacao: 'New York' },
    {idregistro: 2, cummagizoologista:'7766554433UVWX6', idcriatura: 4, data: '1990-05-18', localizacao: 'Hogwarts' },
    {idregistro: 3, cummagizoologista: '9988776655CDEF8', idcriatura: 1, data: '1996-11-05', localizacao: 'Salamandra'},
    {idregistro: 4, cummagizoologista: '5566778899MNOP4', idcriatura: 3, data:'2000-09-15'},
    {idregistro: 5, cummagizoologista: '3344556677YZAB7', idcriatura: 5, data:'2002-03-20', localizacao: 'Campo de Quadribol' }
]);


//Inserções na coleção guardiao
db.guardiao.insertMany([
    { cummagizoologista: '0987654321EFGH2', nivel: 5, data_formacao:'1978-05-15' },
    { cummagizoologista: '1122334455IJKL3', nivel: 7 , data_formacao: '1956-07-01' },
    { cummagizoologista: '7766554433UVWX6', nivel: 4, data_formacao: '1975-09-10' },
    { cummagizoologista: '8877665544GHIJ9', nivel: 3,  data_formacao: '1975-06-20' },
    { cummagizoologista: '9988776655CDEF8', nivel: 9, data_formacao: '1980-01-01' }
]);


//inserções na coleção cacador
db.cacador.insertMany([
    {
        cummagizoologista: "1234567890ABCD1",
        habilidade: {
            especialidade: "Dementadores",
            equipamento: "Varinha e Capa de invisibidade"
        }
    },
    {
        cummagizoologista: "5566778899MNOP4",
        habilidade: {
            especialidade: "Dragão",
            equipamento: "Rede de captura"
        }
    },
    {
        cummagizoologista: "6677889900QRST5",
        habilidade: {
            especialidade: "Ciclope",
            equipamento: "Encantamentos de atração"
        }
    },
    {
        cummagizoologista: "3344556677YZAB7",
        habilidade: {
            especialidade: "Sátiros",
            equipamento: "Armadilhas florestais"
        }
    },
    {
        cummagizoologista: "2233445566KLMN0",
        habilidade: {
            especialidade: "Pegasus",
            equipamento: "Espada e redes de contenção"
        }
    }
]);


//Inserções na coleção protege
db.protege.insertMany([
    {
        cumguardiao: "0987654321EFGH2",
        idcriatura: 1,
        nivel_protecao: 3
    },
    {
        cumguardiao: "1122334455IJKL3",
        idcriatura: 2,
        nivel_protecao: 2
    },
    {
        cumguardiao: "7766554433UVWX6",
        idcriatura: 1,
        nivel_protecao: 5
    },
    {
        cumguardiao: "8877665544GHIJ9",
        idcriatura: 1,
        nivel_protecao: 1
    },
    {
        cumguardiao: "9988776655CDEF8",
        idcriatura: 3,
        nivel_protecao: 4
    }
]);



//Inserções na coleção captura
db.captura.insertMany([
    {
        cumcacador: "1234567890ABCD1",
        idcriatura: 4,
        quantidade_capturada: 1
    },
    {
        cumcacador: "5566778899MNOP4",
        idcriatura: 4,
        quantidade_capturada: 3
    },
    {
        cumcacador: "6677889900QRST5",
        idcriatura: 5,
        quantidade_capturada: 1
    },
    {
        cumcacador: "3344556677YZAB7",
        idcriatura: 2,
        quantidade_capturada: 3
    },
    {
        cumcacador: "2233445566KLMN0",
        idcriatura: 1,
        quantidade_capturada: 6
    }
]);
 




//**** 2 consultas com pelo menos filtros diversos (IN, GT, etc), sem projeção; ****//

//---Retorna todos os registros da coleção protege onde o nível de proteção é maior que 4. 
db.protege.find({
    nivel_protecao: { $gt: 4 }
  });
  
//---Retorna todos os registros da coleção registro onde os magizoologistas com CUMs 0987654321EFGH2 (Luna Lovegood) ou 5566778899MNOP4 (Bruno Wildfang) registraram criaturas.
db.registro.find({
    cummagizoologista: { $in: ["0987654321EFGH2", "5566778899MNOP4"] }
  });
  




  //**** 2 consultas com pelo menos filtros diversos e com projeção; ****//

//---Filtra as capturas onde a quantidade de criaturas capturadas é maior que 2, e projeta o idcriatura e a quantidade_capturada, excluindo o campo _id.
db.captura.find(
    { quantidade_capturada: { $gt: 2 } },  
    { idcriatura: 1, quantidade_capturada: 1, _id: 0 }  
  );
  
//---Busca magizoologistas cujo nome está na lista especificada e que nasceram após 1980, projetando apenas o campo nome e data_nasc, sem o campo _id.
db.magizoologista.find(
    { nome: { $in: ["Luna Lovegood", "Tobias Swiftfoot", "Ariana Willowshade"] }, data_nasc: { $gt: "1980-01-01" } },  
    { nome: 1, data_nasc: 1, _id: 0 } 
  );
  


//**** 1 consulta com apenas projeção (sem filtro); ****//

//---Retorna todas as criaturas, projetando apenas os campos nome e descricao.
db.criatura.find(
    {},  
    { nome: 1, descricao: 1, _id: 0 }  
    );
    

//**** 1 consulta com pelo menos acesso a elemento de array ****//

//---Consulta que retorna o nome das classes que dentre suas características, está a característica passada na consulta.
db.classe.find(
    { caracteristicas: "Criaturas que combinam características de diferentes espécies." },  
    { nome: 1, _id: 0 }  
  );
  


//**** 1 consulta com pelo menos acesso a estrutura/objeto embutido ****//

//---A consulta retornará apenas os caçadores que utilizam "Rede de captura" como equipamento, permitindo ver seu cum, equipamento e especialidade.
db.cacador.find(
    { "habilidade.equipamento": "Rede de captura" },  
    {
      cummagizoologista: 1,  
      "habilidade.equipamento": 1,  
      "habilidade.especialidade": 1,  
      _id: 0  
    }
  );



//**** 1 consulta com pelo menos sort e limit e filtros e projeções; ****//

//---A consulta retorna os 3 casos mais recentes de registros de criaturas que ocorreram após 1990, do mais recente pro menos recente.
db.registro.find(
    { data: { $gt: '1990-01-01' } },  
    {
      idregistro: 1,                   
      cummagizoologista: 1,         
      idcriatura: 1,                  
      data: 1,                        
      localizacao: 1,                 
      _id: 0                           
    }
  ).sort({ data: -1 })               
  .limit(3);                            
  
  

//****  1 consulta com pelo menos aggregate e lookup; ****//

//---Retorna uma lista de magizoologistas com seus respectivos nomes e a quantidade de criaturas que cada um registrou, do magizoologista com maior número de criaturas registradas pro menor. 
db.registro.aggregate([
    {
      $lookup: {
        from: "magizoologista",           
        localField: "cummagizoologista",  
        foreignField: "cum",               
        as: "detalhes_magizoologista"      
      }
    },
    {
      $unwind: "$detalhes_magizoologista"  
    },
    {
      $group: {
        _id: "$detalhes_magizoologista.nome",  
        total_criaturas: { $sum: 1 }           
      }
    },
    {
      $sort: { total_criaturas: -1 }           
    }
  ]);
  
//**** 1 outra consulta a seu critério, dentro do contexto da aplicação. ****//

//---O resultado é uma lista de criaturas que pertencem à classe "Seres Sobrenaturais", mostrando seu nome e descrição.
db.criatura.aggregate([
    {
        $lookup: {
            from: "classe",
            localField: "idclasse",
            foreignField: "idclasse",
            as: "classe_info"
        }
    },
    {
        $unwind: "$classe_info"
    },
    {
        $match: {
            "classe_info.nome": "Seres Sobrenaturais"
        }
    },
    {
        $project: {
            _id: 0,
            nome: 1,
            descricao: 1,
        }
    }
]);

// FIM DO SCRIPT.