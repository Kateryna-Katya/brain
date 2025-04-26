
document.querySelectorAll('.faq-acc-el-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
        const parentElement = trigger.closest('.faq-acc-el');
        const panel = parentElement.querySelector('.faq-acc-el-descr-frame');
        const arrow = parentElement.querySelector('.faq-img');
        const isOpen = parentElement.classList.contains('open');

        document.querySelectorAll('.faq-acc-el.open').forEach(el => {
            el.classList.remove('open');
            el.querySelector('.faq-img')?.classList.remove('rotated');
            const elPanel = el.querySelector('.faq-acc-el-descr-frame');
            if (elPanel) {
                elPanel.style.maxHeight = '0';
            }
        });

    
        if (!isOpen) {
            parentElement.classList.add('open');
            arrow?.classList.add('rotated');
            if (panel) {
                panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        }
    });
});