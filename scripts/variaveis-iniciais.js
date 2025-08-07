
// Data de hoje
const hoje = new Date();

// 1. Criando a variável 'ontemFormatado' no formato aaaammdd
const ontem = new Date(hoje.getTime() - 24 * 60 * 60 * 1000);
const anoOntem = ontem.getFullYear();
const mesOntem = String(ontem.getMonth() + 1).padStart(2, '0');
const diaOntem = String(ontem.getDate()).padStart(2, '0');
const ontemFormatado = `${anoOntem}${mesOntem}${diaOntem}`;

// 2. Variável 'pagina' com valor 1
const numeroPagina = 1;

// 3. Criação da modalidade
const modalidade = 4;

// Saída no n8n
return [
  {
    json: {
      ontem: ontemFormatado,
      numeroPagina: numeroPagina,
      modalidade: modalidade
    }
  }
];
