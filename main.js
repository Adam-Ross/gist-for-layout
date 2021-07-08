createPage()

function createPage() {
    const body = document.querySelector('body')
    

    const container = document.createElement('div')
    container.id = 'container'

    body.appendChild(container)

    const h1 = document.createElement('h1')
    h1.id = 'logo'
    h1.textContent = 'Title of page'

    container.appendChild(h1)
    

    const ul = document.createElement('ul')
    ul.id = 'list'

    for(let i = 0; i < 100; i++) {
        const li = document.createElement('li')
        const liH1 = document.createElement('h1')
        liH1.textContent = 'Card title'
        const p = document.createElement('p')
        p.textContent = 'Subheading for card.'

        li.appendChild(liH1)
        li.appendChild(p)
        li.className = 'listItem'
        ul.appendChild(li)
    }

    container.appendChild(ul)
}