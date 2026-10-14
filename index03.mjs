
// tudo isso pra picotar o arquivo de 500mb e mascarar os logs de erro, substituindo [ERROR] por [ALERT_CRITICO] ;-;
import fs from "node:fs";
import { Transform } from "node:stream";

class MascaraLogStream extends Transform {
    _transform(chunk, encoding, callback) {

        const texto = chunk.toString("utf8");

        const textoMascarado = texto.replace(/\[ERROR\]/g, "[ALERT_CRITICO]");

        callback(null, textoMascarado);
    }
}

const origem = "arquivo_500mb.log";
const destino = "logs_mascarados.log";
const leitura = fs.createReadStream(origem);
const mascara = new MascaraLogStream();
const escrita = fs.createWriteStream(destino);

leitura.on("error", (erro) => {
    console.error("Erro na leitura:", erro.message);
});
mascara.on("error", (erro) => {
    console.error("Erro na transformação:", erro.message);
});
escrita.on("error", (erro) => {
    console.error("Erro na escrita:", erro.message);
});
escrita.on("finish", () => {
    console.log("Transformação concluída com sucesso!");
    console.log(`Arquivo gerado: ${destino}`);
});
leitura.pipe(mascara).pipe(escrita);
