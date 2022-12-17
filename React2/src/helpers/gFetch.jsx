let products=[
    {id:'1',name:'Producto 1' ,categoria:'monitores de estudio' ,stock:'10' ,price:'£ 250' ,foto:'https://http2.mlstatic.com/D_NQ_NP_792839-MLA42442286923_072020-O.jpg'},
    {id:'2',name:'Producto 2' ,categoria:'monitores de estudio' ,stock:'10' ,price:'£ 300' ,foto:'https://www.heavenimagenes.com/heavencommerce/5765a4f8-445b-48f8-889e-9378aee05156/images/v2/MACKIE/2010221505592503_01_small.jpg'},
    {id:'3',name:'Producto 3' ,categoria:'monitores de estudio' ,stock:'10' ,price:'£ 400' ,foto:'https://http2.mlstatic.com/D_NQ_NP_2X_838651-MLA48647112642_122021-F.webp'},
    {id:'4',name:'Producto 4' ,categoria:'Subwoofer' ,stock:'10' ,price:'£ 200' ,foto:'http://mariogomez.com.ar/wordpress/wp-content/uploads/2021/08/krk-8s2-principal.jpg'},
    {id:'5',name:'Producto 5' ,categoria:'Subwoofer' ,stock:'10' ,price:'£ 250' ,foto:'https://http2.mlstatic.com/D_NQ_NP_2X_813181-MLA42582958750_072020-F.webp'},
    {id:'6',name:'Producto 6' ,categoria:'Home Theater' ,stock:'10' ,price:'£ 300' ,foto:'https://http2.mlstatic.com/D_NQ_NP_2X_793519-MLA41462260049_042020-F.webp'},
    {id:'7',name:'Producto 7' ,categoria:'Home Theater' ,stock:'10' ,price:'£ 320' ,foto:'https://http2.mlstatic.com/D_NQ_NP_2X_847784-MLA49533160806_032022-F.webp'}
]
export const gFetch =  (nro) => {
    return new Promise( (resolve,reject)=>{
    const condition = true
    if (condition) {
        setTimeout(()=>{
            resolve (products)
        },3000)
    } else {
        reject ('olvidate')
    }
    } )
}