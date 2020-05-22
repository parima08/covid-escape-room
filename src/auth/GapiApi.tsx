import emailList from "../emailList";

declare var gapi : any;

export default class GapiApi {
  private _clientId; 

  constructor(clientId) {
    this._clientId = clientId;
  }
  
  public static readonly shared = new GapiApi('213328197517-079p7u328erbifqllrsimnhi3phsdos9');

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

  signOut(cb){
    gapi.load('auth2', () => {
      let auth2 = gapi.auth2.getAuthInstance();
      if(!auth2){
        auth2 = gapi.auth2.init({client_id: this._clientId});
      }
      cb();
      return auth2.signOut().then( () => {
        console.log('disconnecting');
        auth2.disconnect();
        auth2 = null;
      });
    });
  }
}