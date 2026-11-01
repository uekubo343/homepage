// 言語切り替え（デフォルトは英語）
// <head> で読み込むことで、表示前に言語を確定させてチラつきを防ぐ
(function () {
  var lang = 'en';
  try { lang = localStorage.getItem('lang') || 'en'; } catch (e) {}
  document.documentElement.lang = lang;
})();

function setLang(lang) {
  document.documentElement.lang = lang;
  try { localStorage.setItem('lang', lang); } catch (e) {}
}
