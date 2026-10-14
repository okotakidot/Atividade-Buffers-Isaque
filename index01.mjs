
const frase = "Processamento de logs com 500MB de dados";
const tamanho = 500 * 1024 * 1024;
const buffer = Buffer.alloc(tamanho);


buffer.write(frase, 0, "utf8");


console.log("String original:", frase);
console.log("Primeiros bytes em hexadecimal:", buffer.subarray(0, frase.length).toString("hex"));
console.log("Primeiros bytes do array:", [...buffer.subarray(0, 20)]);
console.log("Tamanho em bytes:", buffer.length);
console.log("Tamanho em MiB:", buffer.length / (1024 * 1024));

const base64 = buffer.toString("base64");

console.log("Tamanho da string Base64:", base64.length, "caracteres");
console.log("Início da Base64:", base64.substring(0, 100));
