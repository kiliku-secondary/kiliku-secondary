if (window.innerWidth <= 768) {
    const dropdownButtons = document.querySelectorAll('.dropdown-button');
  
    dropdownButtons.forEach(button => {
      button.addEventListener('click', function (e) {
        e.preventDefault();
  
        const dropdownContent = this.nextElementSibling;
  
        dropdownContent.style.display =
          dropdownContent.style.display === 'block' ? 'none' : 'block';
      });
    });
  }
  