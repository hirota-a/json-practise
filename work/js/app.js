document.addEventListener('DOMContentLoaded', function() {
    fetch('data/product.json')
    .then(response => response.json())
    .then(datas => {
        const productTable = document.getElementById('productTable');
        for (let i = 0; i < datas.length; i++) {
            const data = datas[i];
            const table = document.createElement('tr');//表の行
            productTable.appendChild(table); // 表の中に４個の「tr」（行）ができる

            const tableid = document.createElement('td');//表のIDID列データ(情報）
            tableid.textContent = data.id ;
            productTable.appendChild( tableid );

            const tablename = document.createElement('td');//表の商品名列データ(情報）
            tablename.textContent = data.name ;
            productTable.appendChild( tablename );

            const tableprice = document.createElement('td');//表の価格列データ(情報）
            tableprice.textContent = data.price ;
            productTable.appendChild( tableprice );

            const tabledescription = document.createElement('td');//表の説明列データ(情報）
            tabledescription.textContent = data.description ;
            productTable.appendChild( tabledescription );
        }
    })
    .catch(error => console.error('エラー:', error));
});
