import emailList from "../emailList";

declare var gapi : any;

export default class GapiApi {
  private _clientId; 

  constructor(clientId) {
    this._clientId = clientId;
  }

  //213328197517-9ufecuearqg6f1tve7q5s18undbutsg0.apps.googleusercontent.com
  //'213328197517-079p7u328erbifqllrsimnhi3phsdos9'
  public static readonly shared = new GapiApi('213328197517-9ufecuearqg6f1tve7q5s18undbutsg0');

  async signIn(cb, removeCookie, removeGoogleAuthCookie){
    await gapi.load('auth2', async () => {
      const auth2 = gapi.auth2.init({client_id: this._clientId});
      let email;
      await auth2.signIn();
      if (auth2.isSignedIn) {
        var profile = auth2.currentUser.get().getBasicProfile();
        email = profile.getEmail();
      }
      if(this.validateEmail(email)){
        cb();
      }
      else{
        removeCookie();
        removeGoogleAuthCookie();
        this.signOut(removeCookie);
      }
    });
  }

  validateEmail(email){
    if(!emailList.includes(email)){
      alert('Sorry! Not a valid email address!');
      return false;
    }
    return true;
  }

  async signOut(cb){
    let auth2;
    cb();
    await gapi.load('auth2', async () => {
      auth2 = await gapi.auth2.init({client_id: this._clientId})
      auth2.signOut().then( () => {
        cb();
      });
      console.log('outside disconnect');
      auth2.disconnect();
    });
    
    // await gapi.load('auth2', async () => {
    //   let auth2 = gapi.auth2.getAuthInstance();
    //   console.log('auth2', auth2);
    //   if(!auth2){
    //     auth2 = await gapi.auth2.init({client_id: this._clientId});
    //   }
    //   cb();
    //   auth2.signOut().then( () => {
    //     console.log('disconnecting');
    //     auth2.disconnect();
    //     auth2 = null;
    //     cb();
    //   });
    // });
  }
}