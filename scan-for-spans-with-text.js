for (const n of document.getElementsByTagName('span')) {
    if (n.innerText === 'Premier League') {
        n.parentElement.parentElement.parentElement.remove();
        console.log('removed 💩')
    }
}

