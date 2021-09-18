console.log('opa')

console.log('TESTE - the difference between informed arrays is', _.difference([1,2,3], [1,4,5]))

$('body').css('background-color','blue')
$('body').css('color','white')
$('body').append('<p>Adicionado pelo teste</p>')

const btn = $('<button/>')
    .text('Clique aqui novos')
    .click(e => import('./lazy').then(module => {
        const lazy = module.default
        lazy();
    }))
    
$('body').append(btn)