document.addEventListener('DOMContentLoaded', function () {
    const projectModal = document.getElementById('project-modal');
    const modalTitle = projectModal.querySelector('.modal-title');
    const modalImage = projectModal.querySelector('#modal-image');
    const modalDescription = projectModal.querySelector('#modal-description');
    const modalMeta = projectModal.querySelector('#modal-meta');
    const modalTags = projectModal.querySelector('#modal-tags');

    document.querySelectorAll('.more-info').forEach(button => {
        button.addEventListener('click', function () {
            const title = this.getAttribute('data-project-title');
            const image = this.getAttribute('data-project-image');
            const descriptionSelector = this.getAttribute('data-project-description');
            const meta = JSON.parse(this.getAttribute('data-project-meta'));
            const tags = this.getAttribute('data-tags');

            modalTitle.textContent = title;
            modalImage.src = image;
            modalImage.alt = title;
            modalDescription.innerHTML = document.querySelector(descriptionSelector).innerHTML;
            modalTags.textContent = tags;

            // Render blog meta
            modalMeta.innerHTML = meta.map(item => `
                <li class="mr-15 d-flex">
                    <span class="theme-color d-flex align-items-center mr-1">
                        <img class="w-1 mr-5" src="./Thames - Software Engineer Personal Portfolio HTML template 2_files/${item.icon}" alt="">
                    </span>
                    <span class="text-white jost d-inline-block">${item.name}
                        ${item.percentage ? `<span class="text-ssm text-persen-icon-project"> ${item.percentage}</span>` : ''}
                    </span>
                </li>
            `).join('');
        });
    });
}); 