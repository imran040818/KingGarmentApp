import React from 'react'
import ValidationErrorModel from '../models/ValidationErrorModel';
import ValidationExpModel from '../models/ValidationExpModel';

const expressionConfig = {
    EMAIL : { expression: RegExp(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/), message: "Please enter valid email id." },
    EXPRESSION : { expression: RegExp(/^[A-Za-z ]*$/), message: "It should match the expression" },
    MIN_LEN : { expression: RegExp(/^.{3,}/), message: "Minimum 3 character." },
    MAX_LEN : { expression: RegExp(/^.{0,200}/), message: "Maximum 200 character." },
    REQUIRED : { expression: RegExp(/^.{1,}/), message: "This field is required."},
    MOB_NUMBERS : {expression: RegExp(/^[1-9]{1}[0-9]{9}/), message: "Please enter only number and should not starts with zero."},
    COMPARE: {expression: null, message: "Please enter the same value as above."}
}
const fieldConfig = {
    EMAIL : "EMAIL",
    EXPRESSION : "EXPRESSION",
    MIN_LEN : "MIN_LEN",
    MAX_LEN : "MAX_LEN",
    REQUIRED: "REQUIRED",
    MOB_NUMBERS: "MOB_NUMBERS",
    COMPARE: "COMPARE"
}

        
export  default class ValidationService {
   constructor(){
    this.expression = null;
    this.error = [];
    this.defaultMessage = "";
   }
    validate(field, data, form) {
        this.error = [];
        if(field == null) {
            return null;
        }
        for(var i=0; i< field.length;i++) {
            this.defaultMessage = "";

            //console.log(field[i])
            switch (field[i].key) {
                case fieldConfig.EMAIL:
                    if(field[i].expression != null) {
                        this.expression = field[i].expression;
                    } else {
                        this.expression = expressionConfig.EMAIL.expression;
                        this.defaultMessage = expressionConfig.EMAIL.message;
                    }
                    break;
                case fieldConfig.EXPRESSION:
                    if(field[i].expression != null) {
                        this.expression = field[i].expression;
                    } else {
                        this.expression = expressionConfig.ONLY_ALPHABET_AND_SPACE.expression;
                        this.defaultMessage = expressionConfig.ONLY_ALPHABET_AND_SPACE.message;
                    }
                    break;
                case fieldConfig.MIN_LEN:
                    if(field[i].expression != null) {
                        this.expression = field[i].expression;
                    } else {
                        this.expression = expressionConfig.MIN_LEN.expression;
                        this.defaultMessage = expressionConfig.MIN_LEN.message;
                    }
                    break;
                case fieldConfig.MAX_LEN:
                    if(field[i].expression != null) {
                        this.expression = field[i].expression;
                    } else {
                        this.expression = expressionConfig.MAX_LEN.expression;
                        this.defaultMessage = expressionConfig.MAX_LEN.message;
                    }
                break;
                case fieldConfig.REQUIRED:
                    if(field[i].expression != null) {
                        this.expression = field[i].expression;
                    } else {
                        this.expression = expressionConfig.REQUIRED.expression;
                        this.defaultMessage = expressionConfig.REQUIRED.message;
                    }
                break;
                case fieldConfig.MOB_NUMBERS:
                    if(field[i].expression != null) {
                        this.expression = field[i].expression;
                    } else {
                        this.expression = expressionConfig.MOB_NUMBERS.expression;
                        this.defaultMessage = expressionConfig.MOB_NUMBERS.message;
                    }
                break;
                case fieldConfig.COMPARE:
                   var formObj = Object(form)
                    if(field[i].compareWith != null) {
                        this.defaultMessage = expressionConfig.COMPARE.message;
                        if(formObj[field[i].compareWith] != data) {
                            this.error.push(new ValidationErrorModel(field[i].fieldName,(field[i].message == null ? this.defaultMessage : field[i].message)))
                        }
                    } 
                    return this.error;
                default:
                    break;
            }
            //console.log(this.expression)
            if(this.expression != null) {
                var isMatch = this.expression.test(data)
                //console.log(isMatch);
                if(!isMatch)
                {
                    const message = (field[i].message == null ? this.defaultMessage : field[i].message);
                    //console.log(message)
                    this.error.push(new ValidationErrorModel(field[i].fieldName, message))     
                    break;
                } 
            }
        }
        //console.log(this.error)
        return  this.error
    }
}
