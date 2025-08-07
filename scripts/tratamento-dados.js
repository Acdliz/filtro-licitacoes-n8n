
// No n8n, os dados de entrada estão disponíveis no objeto $input
const dadosOriginais = $input.all();

function formatarData(dataString) {
  if (!dataString) return null;
  try {
    const data = new Date(dataString);
    if (isNaN(data.getTime())) return null;
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    const horas = String(data.getHours()).padStart(2, '0');
    const minutos = String(data.getMinutes()).padStart(2, '0');
    const segundos = String(data.getSeconds()).padStart(2, '0');
    return `${dia}-${mes}-${ano} ${horas}:${minutos}:${segundos}`;
  } catch (e) {
    return null;
  }
}

function transformarDados(dados) {
  if (!dados || !Array.isArray(dados)) return [];
  const dadosTransformados = [];
  for (const entrada of dados) {
    if (!entrada || !entrada.json || !entrada.json.data) continue;
    const itens = entrada.json.data || [];
    for (const item of itens) {
      const novoItem = {
        orgao: item.unidadeOrgao?.nomeUnidade || null,
        portal: item.linkSistemaOrigem || null,
        estado: item.unidadeOrgao?.ufNome || null,
        municipio: item.unidadeOrgao?.municipioNome || null,
        pregao: item.processo || null,
        numeroPNCP: item.numeroControlePNCP || null,
        dataInicial: formatarData(item.dataInclusao),
        dataFinal: formatarData(item.dataAberturaProposta),
        dataPublicacao: formatarData(item.dataPublicacaoPncp),
        modalidade: item.modalidadeNome || null,
        IdModalidade: item.modalidadeId || null,
        esfera: item.orgaoEntidade?.esferaId || null,
        objeto: item.objetoCompra || null,
        valorTotal: item.valorTotalEstimado || null,
        cnpj: item.orgaoEntidade?.cnpj || null,
        razaoSocial: item.orgaoEntidade?.razaoSocial || null,
        valorHomologado: item.valorTotalHomologado || null,
        situacao: item.situacaoCompraNome || null
      };
      dadosTransformados.push(novoItem);
    }
  }
  return dadosTransformados;
}

const resultado = transformarDados(dadosOriginais);
return resultado.map(item => ({ json: item }));
