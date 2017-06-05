/**
 * Created by asus on 2017/6/2.
 */
var userModel=require('../model/loginModel');
var loginAction=function () {
    this.loginPage=function (req,res) {
        console.info("balala");
        res.render("dengLu",{});
    }
    this.login=function(req,res){
        var user=req.body;
        console.info(user);
        userModel.login(user,function(result){
            console.info(result);
            if(result==1){
                res.render("success");
            }else{
                res.render("error");
            }
        })
    }
}
module.exports=new loginAction();