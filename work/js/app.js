document.addEventListener('DOMContentLoaded', () => 
    fetch('data/product.json')
    .then(response => response.json())
    .then(data =>
        data.forEach(product =>
            document.getElementById('productTable')
            .appendChild(Object.assign(document.createElement('tr'), {
                innerHTML: `<td>${product.id}</td><td>${product.name}</td><td>${product.price}</td><td>${product.description}</td>`
            }))
        )
    )
    .catch(error => console.error('エラー:', error))
);