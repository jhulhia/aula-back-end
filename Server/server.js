import { createServer } from 'node:http';


const server = createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('Servidor Node.js funcionando!');
 let nome = " Julia";
 let age =38
app.get('/', (req, res) => 
    res.json({status: 'servidor rdts ns url soma'}));
});
let frutas =["Maça"," Banana","caju", "Mangaba","Melancia"];
console.log(frutas[3]);

for(let i = 0; i <5; i++){
    console.log(frutas[i]);
};
//objeto
let pessoa = { nome: "Julia", idade : "38"};
console.log(pessoa.nome);
for (let chave in pessoa){
    console.log(chave + ':' + pessoa[chave]);
}
server.listen(3000, ()=> console.log('Servidor rodando na porta 3000'));
