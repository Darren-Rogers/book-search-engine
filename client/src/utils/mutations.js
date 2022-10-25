import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  query LOGIN_USER($Book:String!, !User:String) {
    LOGIN_USER($Book:String!, !User:String){
      _id
      username
      password
      email
    }
  }`;

export const ADD_USER = gql`
query ADD_USER($Book:String!, !User:String) {
  LOGIN_USER($Book:String!, !User:String){
    _id
    username
    password
    email
  }
}`;
export const SAVE_BOOK = gql`
query SAVE_BOOK($Book:String!, !User:String) {
  LOGIN_USER($Book:String!, !User:String){
    _id
    bookId
  }
}`;
export const REMOVE_BOOK = gql`
query REMOVE_BOOK($Book:String!, !User:String) {
  LOGIN_USER($Book:String!, !User:String){
    _id
    bookId
  }
}`;