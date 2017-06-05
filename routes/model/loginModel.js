/**
 * Created by asus on 2017/6/2.
 */
var mysql=require('dao/dbConnect');
var loginModel=function(){
    this.login=function(user,callback){
        console.info(user);
        var client=mysql.createServer();
        mysql.dengLu(client,user,function(result){
            console.info(result);
            callback(result);
        })
    }
}
module.exports=new loginModel();