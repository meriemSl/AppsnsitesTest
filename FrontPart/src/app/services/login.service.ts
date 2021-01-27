import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/User';
import { BehaviorSubject, Observable } from 'rxjs';

import * as firebase from 'firebase/app';

import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

//  constructor( private http: HttpClient , public jwtHelper : JwtHelperService) { }
  userState: any;

  private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient ,
        public afs: AngularFirestore,
        public afAuth: AngularFireAuth,
        public router: Router,
        public ngZone: NgZone) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.afAuth.authState.subscribe(user => {
            if (user) {
              this.userState = user;
              localStorage.setItem('user', JSON.stringify(this.userState));
              JSON.parse(localStorage.getItem('user'));
            } else {
              localStorage.setItem('user', null);
              JSON.parse(localStorage.getItem('user'));
            }
          })

    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }
    

      
        SignIn(email, password) {
          return this.afAuth.signInWithEmailAndPassword(email, password)
            .then((result) => {
              this.ngZone.run(() => {
                this.router.navigate(['users']);
              });
              localStorage.setItem('user', 'true');
              //this.SetUserData(result.user);
            }).catch((error) => {
              window.alert(error.message)
            })
        }
      
        SignUp(email, password) {
          return this.afAuth.createUserWithEmailAndPassword(email, password)
            .then((result) => {
              this.SendVerificationMail();
              this.SetUserData(result.user);
            }).catch((error) => {
              window.alert(error.message)
            })
        }
    
        SendVerificationMail() {
            return this.afAuth.currentUser.then(u => u.sendEmailVerification())
            .then(() => {
              this.router.navigate(['email-verification']);
            })
        }    
      
        ForgotPassword(passwordResetEmail) {
          return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
          .then(() => {
            window.alert('Password reset email sent, check your inbox.');
          }).catch((error) => {
            window.alert(error)
          })
        }
      
        get isLoggedIn(): boolean {
          const user = JSON.parse(localStorage.getItem('user'));
          return (user !== null ) ? true : false;
        }
      
        GoogleAuth() {
            //return firebase.auth().signInWithPopup((new firebase.auth.GoogleAuthProvider()));
        }
      
        AuthLogin(provider) {
          return this.afAuth.signInWithPopup(provider)
          .then((result) => {
             this.ngZone.run(() => {
                this.router.navigate(['form']);
              })
            this.SetUserData(result.user);
          }).catch((error) => {
            window.alert(error)
          })
        }
      
        SetUserData(user) {
          const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
          console.log(this.afs.doc(`users/${user.uid}`));
          const userState: User = {
            uid: user.uid,
            email: user.email,
            userName:user.userName,
            firstName:user.firstName,
            lastName:user.lastName,
            password:user.password,
            gender:user.gender,
            phone:user.phone,
            emailVerified: user.emailVerified
          }
          return userRef.set(userState, {
            merge: true
          })
        }
       
        SignOut() {
          return this.afAuth.signOut().then(() => {
            localStorage.removeItem('user');
            this.router.navigate(['login']);
          })
        }  
    }
  





