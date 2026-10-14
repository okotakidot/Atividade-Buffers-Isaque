
import fs from "node:fs";
import { createGzip } from "node:zlib";
import { pipeline } from "node:stream/promises";

async function compactarArquivo() {
    try {
        await pipeline(
            fs.createReadStream("arquivo_500mb.log"),
            createGzip(),
            fs.createWriteStream("arquivo_500mb.log.gz")
        );

        console.log("Arquivo compactado com sucesso!");
        console.log("Arquivo gerado: arquivo_500mb.log.gz");

    } catch (erro) {
        console.error("Falha no pipeline:", erro.message);
    }
}

compactarArquivo();
