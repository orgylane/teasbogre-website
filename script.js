// Optional: Add hover effect for house
const house = document.querySelector('.house');
if (house) {
    house.addEventListener('mouseenter', () => {
        house.style.transform = 'scale(1.1)';
    });
    house.addEventListener('mouseleave', () => {
        house.style.transform = 'scale(1)';
    });
}