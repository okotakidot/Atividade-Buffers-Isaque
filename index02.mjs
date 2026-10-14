
import fs from "node:fs";

const origem = "amostra_10mb.log";
const destino = "amostra_backup.log";
const leitura = fs.createReadStream(origem);
const escrita = fs.createWriteStream(destino);

leitura.on("error", (erro) => {
    console.error("Erro na leitura:", erro.message);
});
escrita.on("error", (erro) => {
    console.error("Erro na escrita:", erro.message);
});
escrita.on("finish", () => {
    console.log("Cópia concluída com sucesso!");
    console.log(`Arquivo criado: ${destino}`);
});

leitura.pipe(escrita);
