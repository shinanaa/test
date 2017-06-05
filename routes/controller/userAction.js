/**
 * Created by asus on 2017/6/2.
 */
var userModel=require('../model/userModel');
var userAction=function () {
    this.userPage=function (req,res) {
        console.info("balala");
        res.render("userList",{});
    }
    this.selectUser=function(req,res){
        userModel.selectUser(function(result){
            console.info(result);
            res.json({users:result});
        })
    }
    this.addUser=function (req,res) {
        res.render('addPage',{});
    }
    this.insertUser=function (req,res) {
        userModel.insertUser(req,res,function (result) {
                if(result==1){
                    res.redirect("/userAction/userPage");
                }else{
                    res.render("error");
                }
        })
    }
    this.deleteUser=function (req,res) {
        userModel.deleteUser(req,res,function (result) {
            if(result==1){
                res.redirect("/userAction/userPage");
            }else{
                res.render("error");
            }
        })
    }
    this.editPage=function (req,res) {
        userModel.selectUserById(req,res,function(result){
            res.render("editPage",{user:result[0]});
        })
    }
    this.editUser=function (req,res) {
        userModel.editUser(req,res,function (result) {
            if(result==1){
                res.redirect("/userAction/userPage");
            }else{
                res.render("error");
            }
        })
    }
    this.deleteAll=function (req,res) {
        userModel.deleteAll(req,res,function (result) {
            var userIdsStr=req.body.userIdsStr;
            var userIds=userIdsStr.split(",");
            if(result==userIds.length){
                return res.json({resultCode:1});
            }else{
                return res.json({resultCode:0});
            }
        })
    }
}

module.exports=new userAction();