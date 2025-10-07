// Hintayin munang mag-load ang buong HTML bago patakbuhin ang script
document.addEventListener('DOMContentLoaded', function() {

    // 1. Kunin lahat ng navigation links at content sections
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');

    // 2. Maglagay ng 'event listener' sa bawat navigation link
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Pigilan ang default na pag-aksyon ng link (para hindi mag-refresh ang page)
            event.preventDefault();

            // Kunin ang target ID mula sa 'data-target' attribute ng link
            const targetId = link.getAttribute('data-target');

            // 3. Itago ang LAHAT ng sections
            sections.forEach(function(section) {
                section.classList.add('hidden');
            });

            // 4. Ipakita lamang ang section na tinarget ng na-click na link
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.remove('hidden');
            }
        });
    });

});