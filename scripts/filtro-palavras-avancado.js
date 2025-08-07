
const rawKeywords = [
  $('Tratamento de dados4').first().json.body.Palavrachave1,
  $('Tratamento de dados4').first().json.body.Palavrachave2,
  $('Tratamento de dados4').first().json.body.Palavrachave3,
  $('Tratamento de dados4').first().json.body.Palavrachave4,
  $('Tratamento de dados4').first().json.body.Palavrachave5,
];

const keywords = rawKeywords.filter(keyword =>
  keyword !== null && keyword !== undefined && keyword.toString().trim() !== ''
);

function normalizeText(text) {
  if (!text) return '';
  return text.toString().normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/\s+/g, ' ');
}

try {
  let filteredItems = [];
  if (keywords.length === 0) {
    return items.map(item => ({ json: item.json, pairedItem: item.pairedItem }));
  }
  if (items && items.length > 0) {
    filteredItems = items.filter(item => {
      if (!item.json || !item.json.objeto) return false;
      const normalizedSearch = normalizeText(item.json.objeto);
      return keywords.some(keyword => {
        const normalizedKeyword = normalizeText(keyword);
        return normalizedKeyword && normalizedSearch.includes(normalizedKeyword);
      });
    });
  }
  return filteredItems.map(item => ({ json: item.json, pairedItem: item.pairedItem }));
} catch (error) {
  console.error('Erro no processamento:', error);
  return [];
}
