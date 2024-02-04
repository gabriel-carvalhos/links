const themes = document.querySelectorAll('.dropdown-item')
const icon = document.querySelector('[data-bs-toggle="dropdown"] > i')

themes.forEach(theme => {
    theme.addEventListener('click', () => {
        document.querySelector('.dropdown-item.active').classList.remove('active')
        theme.classList.add('active')
        icon.classList.remove(icon.classList[1])
        icon.classList.add(`bi-${theme.dataset.themeIcon}-fill`)
        document.documentElement.dataset.bsTheme = theme.dataset.theme
    })
})