import random
import string
import os

def gerar_arquivo_grande(nome_arquivo, tamanho_mb):
    # Converte MB para bytes
    tamanho_bytes = tamanho_mb * 1024 * 1024
    tamanho_atual = 0
    
    # Define caracteres para texto aleatório (letras e números)
    caracteres = string.ascii_letters + string.digits + " "
    
    print(f"Iniciando a criação do arquivo {nome_arquivo} ({tamanho_mb}MB)...")
    
    with open(nome_arquivo, 'w', encoding='utf-8') as f:
        while tamanho_atual < tamanho_bytes:
            # Gera uma linha aleatória entre 50 e 100 caracteres
            tamanho_linha = random.randint(50, 100)
            linha = ''.join(random.choice(caracteres) for _ in range(tamanho_linha))
            
            # Insere "ERROR" em aproximadamente 5% das linhas
            if random.random() < 0.05:
                linha = f"[ERROR] {linha}"
            
            linha = linha + '\n'
            
            # Escreve a linha e atualiza o tamanho
            f.write(linha)
            tamanho_atual += len(linha.encode('utf-8'))
            
    print(f"Arquivo '{nome_arquivo}' gerado com sucesso!")
    print(f"Tamanho final: {os.path.getsize(nome_arquivo) / (1024*1024):.2f} MB")

# Executar a função
if __name__ == "__main__":
    gerar_arquivo_grande("arquivo_500mb.log", 500)