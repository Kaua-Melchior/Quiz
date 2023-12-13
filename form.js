document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const options = document.querySelectorAll('.question input[type="radio"]');
    const result = document.querySelector('.result');
    const continueBtn = document.getElementById('continueBtn');

    function checkAllResponded() {
        let allResponded = true;

        options.forEach(option => {
            const groupName = option.getAttribute('name');
            const groupOptions = document.querySelectorAll(`input[name="${groupName}"]`);

            let groupResponded = false;

            groupOptions.forEach(groupOption => {
                if (groupOption.checked) {
                    groupResponded = true;
                }
            });

            if (!groupResponded) {
                allResponded = false;
            }
        });

        if (allResponded) {
            result.style.display = 'block';
            continueBtn.disabled = false;
        } else {
            result.style.display = 'none';
            continueBtn.disabled = true;
        }
    }

    options.forEach(option => {
        option.addEventListener('change', checkAllResponded);
    });

    checkAllResponded();

    continueBtn.addEventListener('click', function() {
        
        // Substitua "URL DO PRÓXIMO PASSO" pela URL real do próximo passo
        window.location.href = "URL DO PRÓXIMO PASSO";
    });
});
