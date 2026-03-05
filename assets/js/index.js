// Funcionalidad para la barra de búsqueda
document.addEventListener('DOMContentLoaded', function() {
    // Configurar funcionalidad de búsqueda
    const searchBox = document.querySelector('.search-box');
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchBox && searchBtn) {
        searchBtn.addEventListener('click', function() {
            performSearch();
        });
        
        searchBox.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    function performSearch() {
        const query = searchBox.value.trim();
        if (query) {
            alert(`Búsqueda realizada: "${query}"\n\nEn un sitio real, esto mostraría resultados para tu búsqueda.`);
            // En una implementación real, aquí iría la lógica de búsqueda
        } else {
            alert('Por favor, escribe algo para buscar.');
        }
    }
    
    // Los enlaces de páginas se configuran en script.js
    
    // Configurar controles de personalización de color
    const bgColorPicker = document.getElementById('bgColor');
    const textColorPicker = document.getElementById('textColor');
    const applyColorsBtn = document.getElementById('applyColors');
    
    if (applyColorsBtn) {
        applyColorsBtn.addEventListener('click', function() {
            if (bgColorPicker && textColorPicker) {
                // Aplicar colores al área del párrafo
                const paragraphArea = document.querySelector('.paragraph-area');
                if (paragraphArea) {
                    paragraphArea.style.backgroundColor = bgColorPicker.value;
                    paragraphArea.style.color = textColorPicker.value;
                    
                    // Guardar en localStorage para persistencia
                    localStorage.setItem('paragraphBgColor', bgColorPicker.value);
                    localStorage.setItem('paragraphTextColor', textColorPicker.value);
                    
                    alert('Colores aplicados correctamente. Se han guardado para futuras visitas.');
                }
            }
        });
        
        // Cargar colores guardados
        const savedBgColor = localStorage.getItem('paragraphBgColor');
        const savedTextColor = localStorage.getItem('paragraphTextColor');
        
        if (savedBgColor && savedTextColor) {
            const paragraphArea = document.querySelector('.paragraph-area');
            if (paragraphArea) {
                paragraphArea.style.backgroundColor = savedBgColor;
                paragraphArea.style.color = savedTextColor;
                
                // Actualizar los selectores de color
                if (bgColorPicker) bgColorPicker.value = savedBgColor;
                if (textColorPicker) textColorPicker.value = savedTextColor;
            }
        }
    }
});