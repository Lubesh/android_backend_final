const User = require('../modules/User');
const mongoose = require('mongoose');
// use the new name of the database
const url = 'mongodb://localhost:27017/VegStore';
beforeAll(async () => {
 await mongoose.connect(url, {
 useNewUrlParser: true,
 useCreateIndex: true
 });
});
afterAll(async () => {
 await mongoose.connection.close();
});


describe('Product Schema test anything', () => {
// the code below is for insert testing
 it('Add product testing anything', () => {
 const product = {
 'Name': 'a',

 'Username':'asdasdasd',
 "Password":"asdasda"
 };
 
 return User.create(product)
 .then((pro_ret) => {
 expect(pro_ret.Name).toEqual('a');
 });
 });

//  it('to test the delete product is working or not', async () => {
//  const status = await Product.findByIdAndDelete({_id:"607dbca464b91a4698c08c01"});
//  console.log(status)
//  expect(status.Name).toEqual("Burg");
//  })


it('to test the update', async () => {
    return User.findOneAndUpdate({_id :Object('607e620524b3da66c0dbd4ad')}, 
   {$set : {Name:'444'}})
    .then((pp)=>{
    console.log(pp)
    expect(pp.Name).toBe('444')
    })
    
   });
    
   })