
    // Tab functionality
    const tabs = document.querySelectorAll('[role="tab"]');
    const tabPanels = document.querySelectorAll('[role="tabpanel"]');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Deactivate all tabs and panels
        tabs.forEach(t => {
          t.setAttribute('aria-selected', 'false');
          t.tabIndex = -1;
          t.style.borderBottom = 'none';
          t.style.color = '#555';
          t.style.fontWeight = 'normal';
        });
        tabPanels.forEach(panel => panel.hidden = true);

        // Activate clicked tab and panel
        tab.setAttribute('aria-selected', 'true');
        tab.tabIndex = 0;
        tab.style.borderBottom = '3px solid #1e90ff';
        tab.style.color = '#1e90ff';
        tab.style.fontWeight = 'bold';
        const panel = document.getElementById(tab.getAttribute('aria-controls'));
        panel.hidden = false;
        panel.focus();
      });
    });

    // Keyboard navigation for tabs (left/right arrows)
    let tabFocus = 0;
    tabs.forEach(tab => {
      tab.addEventListener('keydown', e => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
          tabs[tabFocus].setAttribute('tabindex', -1);
          if (e.key === 'ArrowRight') {
            tabFocus = (tabFocus + 1) % tabs.length;
          } else if (e.key === 'ArrowLeft') {
            tabFocus = (tabFocus - 1 + tabs.length) % tabs.length;
          }
          tabs[tabFocus].setAttribute('tabindex', 0);
          tabs[tabFocus].focus();
        }
      });
    });
 