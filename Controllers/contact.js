exports.getContact = (req,res,next) => {
    res.render('contact', {
        pageTitle: 'Contact US!',
        path: '/contact',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
      });
   
}

exports.getSuccess = (req,res,next) => {
    
   
    res.render('success', { pageTitle: 'Success',
     path: '/contact' ,
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true });
    
   
}