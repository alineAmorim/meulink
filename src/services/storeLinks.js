
// buscar links salvos
async function getLinkSave(key) {
    const myLinks = await localStorage.getItem(key)

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;
}

// salvar link no localStorage
async function saveLink(key, newLink){
    let linkStorage = await getLinkSave(key);

    // verificar se já existe para armazenar
    const hasLink = linkStorage.some(link => link.id === newLink.id)

    if(hasLink){
        console.log('existente')
        return;
    }

    // adicionar na lista
    linkStorage.push(newLink)

    await localStorage.setItem(key, JSON.stringify(linkStorage))
}   

// deletar link

async function deleteLink(links, id){
    let myLinks = links.filter(item => {
        return (item.id !== id)
    })

    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks))

    console.log('deletado')

    return myLinks;
}



// exportando funçoes
export { getLinkSave, saveLink, deleteLink };
