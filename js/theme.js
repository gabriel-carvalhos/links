const themes = document.querySelectorAll('.dropdown-item')
const icon = document.querySelector('[data-bs-toggle="dropdown"] > i')

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.theme == 'light') {
        changeTheme(document.querySelector('[data-theme="light"]'))
        return
    }
    changeTheme(document.querySelector('[data-theme="dark"]'))
})

themes.forEach(theme => {
    theme.addEventListener('click', () => {
        changeTheme(theme)
        localStorage.theme = theme.dataset.theme
    })
})

const changeTheme = (theme) => {
    document.querySelector('.dropdown-item.active').classList.remove('active')
    theme.classList.add('active')
    icon.classList.remove(icon.classList[1])
    icon.classList.add(`bi-${theme.dataset.themeIcon}-fill`)
    document.documentElement.dataset.bsTheme = theme.dataset.theme
}