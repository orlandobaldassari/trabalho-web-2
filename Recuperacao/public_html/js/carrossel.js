$(function(){
   $("#carrossel").jCarouselLite({
      btnPrev : '.prev',   // Navegação: voltar imagem  
      btnNext : '.next',   // Navegação: Próxima imagem
      auto    : 4000,      // Auto-scroll do carrossel. Tempo em milisegundos.
      speed   : 2000,      // Velocidade de "sliding". 0 irá remover o efeito de slide.
      visible : 6          // Número de itens (fotos) visíveis no carrossel de imagens.
   })
})
